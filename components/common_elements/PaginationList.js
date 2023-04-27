import React from 'react'

function PaginationList() {
  return (
    <>
      <div className="flex items-center ">
        <button
          type="button"
          className="text-[14px] text-gray-400 p-1 hover:bg-gray-100 w-[30px] h-[30px] rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          type="button"
          className="text-[14px] text-gray-400 p-1 hover:bg-gray-100 w-[30px] h-[30px] rounded-md"
        >
          <span>1</span>
        </button>
        <button
          type="button"
          className="text-[14px] text-gray-400 p-1 hover:bg-gray-100 w-[30px] h-[30px] rounded-md"
        >
          <span>2</span>
        </button>
        <button
          type="button"
          className="text-[14px] text-gray-400 p-1 hover:bg-gray-100 w-[30px] h-[30px] rounded-md"
        >
          <span>3</span>
        </button>
        <button
          type="button"
          className="text-[14px] text-gray-400 p-1 hover:bg-gray-100 w-[30px] h-[30px] rounded-md"
        >
          <span>4</span>
        </button>
        <button
          type="button"
          className="text-[14px] text-gray-400 p-1 hover:bg-gray-100 w-[30px] h-[30px] rounded-md"
        >
          <span>.....</span>
        </button>

        <button
          type="button"
          className="text-[14px] text-gray-400 p-1 hover:bg-gray-100  h-[30px] rounded-md"
        >
          <span>1000</span>
        </button>
        <button
          type="button"
          className="text-[14px] text-gray-400 p-1 hover:bg-gray-100 w-[30px] h-[30px] rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </>
  )
}

export default PaginationList
