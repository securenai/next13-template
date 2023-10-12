import Link from 'next/link'
// import DataList from './DataList'
import DataList from 'app/concepts/suspense/DataList'
import { useCallback } from 'react'

export default function Suspense() {
  return (
    <div>
      <button className="bg-orange-400 w-20 h-10">
        <Link href="/">Back</Link>
      </button>
      <div className="px-20 pt-10">
        <DataList />
      </div>
    </div>
  )
}
