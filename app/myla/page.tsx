import type { Metadata } from 'next'
import myla from '../../site/content/myla.json'
import client from '../../tina/__generated__/client'
import MylaPageClient from './MylaPageClient'
import './myla.css'

export const metadata: Metadata = {
  title: myla.meta.title,
  description: myla.meta.description,
}

async function loadContent() {
  try {
    const { data, query, variables } = await client.queries.myla({ relativePath: 'myla.json' })
    return { data, query, variables }
  } catch (error) {
    // Tina saves by committing myla.json, so the file in the build is the same content.
    console.warn('Tina content query failed; using site/content/myla.json directly.', error)
    return { data: { myla }, query: '', variables: { relativePath: 'myla.json' } }
  }
}

export default async function MylaPage() {
  return <MylaPageClient {...await loadContent()} />
}
