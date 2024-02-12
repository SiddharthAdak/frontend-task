import React from 'react'
import { LoadingSvg } from '../../../assets/Svg';

const PaginateButton = ({
    setPage, 
    page,
    isFetching,
    isPlaceholderData,
    data,
}: {
    setPage:  React.Dispatch<React.SetStateAction<number>>;
    page: number;
    isFetching: boolean,
    isPlaceholderData: boolean,
    data: any
}) => {
  return (
    <div className='fixed  bottom-5 w-screen left-0'>

      <div className=' border-2 border-violet-600 m-auto w-max rounded-md bg-white flex items-center'>
        <button
        className=' px-4 py-2 bg-violet-600 text-white'
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 1}
        >
          Previous
        </button>
        {(!isFetching) ? 
        <span className=' px-4'>{page}</span> : 
        <div className=' px-4'>
          <LoadingSvg />
        </div>
        }
        <button
        className=' px-4 py-2 bg-violet-600 text-white'
          onClick={() => {
            if (!isPlaceholderData && data.next) {
              setPage((old) => old + 1)
            }
          }}
          disabled={isPlaceholderData || !data?.next}
        >
          Next Page
        </button>
      </div>
      </div>
  )
}

export default PaginateButton