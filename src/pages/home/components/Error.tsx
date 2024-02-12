import { UseQueryResult } from "@tanstack/react-query";
const Error = ({
    refetch,
  }:
  {
    refetch:(options?: { throwOnError: boolean, cancelRefetch: boolean }) => Promise<UseQueryResult>;
  }) => {
  return (
    <div className=' text-red-600 font-semibold w-max m-auto'>
        Error: Some error occured
        <button onClick={() => {
        refetch();
        }} className=' m-2 px-4 py-2 bg-red-600 text-white rounded-md'>Retry</button>
    </div>
  )
}

export default Error