import { keepPreviousData, useQuery } from '@tanstack/react-query'
import {useState, useEffect} from 'react'
import { fetchPersons } from '../../api/persons';
import Card from './components/Card';
import { result } from './types';
import Error from './components/Error';
import Loading from './components/Loading';
import PaginateButton from './components/PaginateButton';

function Home() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const { isPending, isError, data, isFetching, isPlaceholderData,refetch } =
  useQuery({
    queryKey: ['peoples', page, search],
    queryFn: () => fetchPersons(page, search),
    staleTime: 4 * 60 * 100,
    gcTime: 5 * 60 * 100,
    placeholderData: keepPreviousData,
    retry: false
  })
  useEffect(() => {
    const timer = setTimeout(() => {
        setPage(1);
        setSearch(searchInput);
    }, 300);
    return () => {
        clearTimeout(timer);
    };
  }, [searchInput]);
  
  return (
    <div className=' bg-white max-w-[1350px] m-auto overflow-scroll h-full p-8 relative pt-24'>
      <input         
        onChange = {(e) => {
          setSearchInput(e.target.value);
        }}
        type = "text" 
        value = {searchInput}
        placeholder = "Search..." 
        className = "w-full max-w-96 resize-none focus:outline-0 bg-white border-b-2 border-violet-600 pb-1 mb-4" 
        />
      {(isPending) ? (
        <Loading />
      ) : 
      (isError || (!isFetching && !isPending && (!data || !data.results))) ? (
        
        <Error refetch={refetch} />
      ) :
      (data.count > 0) ?
      (
        <>
        {<div className=' pb-16 grid grid-cols-[repeat(auto-fit,minmax(400px,0.5fr))] md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6'>
          {data.results.map((element: result) => (
            <Card
              key = {element.name + element.birth_year}
              name = {element.name} 
              hair_color = {element.hair_color}
              skin_color = {element.skin_color}
              gender = {element.gender}
              vehicle_count = {element.vehicles.length}
            />
          ))}
          
        </div>}
        <PaginateButton 
        setPage = {setPage} 
        page = {page}
        isFetching = {isFetching}
        isPlaceholderData = {isPlaceholderData}
        data = {data} 
        />
      </>
      ):
      <div className=' text-red-600 font-semibold w-max m-auto'>
        No search results fonund
      </div>
      }
      
      
      
    </div>
  )
}
export default Home