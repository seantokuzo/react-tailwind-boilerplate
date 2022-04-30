import React from "react"

export default function App() {
  return (
    <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
      <div className="sm:flex sm:items-center px-6 py-4">
        <div className="text-center sm:text-left sm:flex-grow">
          <div className="mb-4">
            <p className="text-xl leading-tight">John Doe</p>
            <p className="text-sm leading-tight text-grey-dark">
              Contributor at somerepo
            </p>
          </div>
          <div>
            <button className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
