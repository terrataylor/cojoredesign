'use client'

import { createContext, useContext } from 'react'
import fallback from '../../site/content/myla.json'

export type MylaContent = typeof fallback

const MylaContentContext = createContext<MylaContent>(fallback)

export const MylaContentProvider = MylaContentContext.Provider

export function useMylaContent() {
  return useContext(MylaContentContext)
}
