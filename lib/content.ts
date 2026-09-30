import fs from 'fs'
import path from 'path'
import type { HomepageContent } from '@/types/content'

const contentDir = path.join(process.cwd(), 'content')

export function getHomepageContent(): HomepageContent {
  const filePath = path.join(contentDir, 'homepage.json')
  const raw = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(raw) as HomepageContent
}

export function setHomepageContent(data: HomepageContent): void {
  const filePath = path.join(contentDir, 'homepage.json')
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')
}
