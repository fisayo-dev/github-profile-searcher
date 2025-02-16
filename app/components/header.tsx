import React from 'react'

const header = () => {
  return (
      <div className='mx-auto container'>
        <div className="py-2">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Github Searcher</h2>
                <div className="flex items-center space-x-2">
                    <a href="#" className="hover:bg-zinc-300">Home</a>
                    <a href="#" className="hover:bg-zinc-300">Search</a>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default header