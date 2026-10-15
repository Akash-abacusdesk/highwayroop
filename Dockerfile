# Multi-stage build for self-hosting on the AMC VPS (Next.js standalone).
# next.config.ts sets distDir 'out' + output 'standalone' when not on Vercel,
# so build output is out/standalone + out/static (not .next/).
ARG NODE_VERSION=24-slim

FROM node:${NODE_VERSION} AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund

FROM node:${NODE_VERSION} AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:${NODE_VERSION} AS runner
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 PORT=3000 HOSTNAME=0.0.0.0
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/out/standalone ./
COPY --from=builder --chown=node:node /app/out/static ./out/static
# lib/content.ts reads content/homepage.json at runtime via process.cwd().
# Owned by root so the app user can read but not overwrite it.
COPY --from=builder /app/content ./content
USER node
EXPOSE 3000
CMD ["node", "server.js"]
