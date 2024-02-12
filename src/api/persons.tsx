export const fetchPersons = async (page:number, search: string) => {
    const res = await fetch(`https://swapi.dev/api/people/?page=${page}&search=${search}`);
    return res.json();
  }
  