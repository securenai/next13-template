import Link from 'next/link'
import { useCallback } from 'react'

export default function Layout() {
  return (
    <div>
      <button className="bg-orange-400 w-20 h-10">
        <Link href="/">Back</Link>
      </button>

      <div className="px-20 pt-10">
        <Link
          href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts"
          target="_blank"
        >
          Layout
        </Link>
      </div>
    </div>
  )
}
