import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { getHomepageContent, setHomepageContent } from '@/lib/content'
import type { HomepageContent } from '@/types/content'

export async function GET() {
  try {
    const content = getHomepageContent()
    return NextResponse.json(content)
  } catch {
    return NextResponse.json({ error: 'Failed to read content' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as HomepageContent
    setHomepageContent(data)
    revalidatePath('/')
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to save content' }, { status: 500 })
  }
}
