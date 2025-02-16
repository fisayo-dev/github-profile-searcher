import Link from 'next/link'
import React from 'react'

const header = () => {
  return (
      <div className='mx-auto container'>
        <div className="py-6 px-2">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Github Searcher</h2>
                <div className="flex items-center space-x-2">
                    <Link href="/" className="hover:text-zinc-300">Home</Link>
                    <Link href="/about" className="hover:text-zinc-300">Search</Link>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default header