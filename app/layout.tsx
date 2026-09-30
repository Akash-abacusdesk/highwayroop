import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Highway Roop | Integrated Precision Manufacturing',
  description:
    'Highway Roop Precision Technologies Limited integrates engineering, forging, machining, aluminium die casting, tooling and validation for global automotive programmes.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23156082'/%3E%3Cpath d='M15 16h9v12h16V16h9v32h-9V36H24v12h-9z' fill='white'/%3E%3Cpath d='M51 16h4v32h-4z' fill='%23d91018'/%3E%3C/svg%3E"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
