import fs from 'fs'
import path from 'path'
import type { HomepageContent } from '@/types/content'

const contentDir = path.join(process.cwd(), 'content')

export function getHomepageContent(): HomepageContent {
  const filePath = path.join(contentDir, 'homepage.json')
  const raw = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(raw) as HomepageContent
}
