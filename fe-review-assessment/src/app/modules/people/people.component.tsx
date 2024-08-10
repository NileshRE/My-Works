import { Person } from "./model";
import { usePeopleQuery } from "./query";
import "./people.css";
import { useState } from "react";

export function People() {
  const { data: people, loading, error } = usePeopleQuery();
  // Variable for dynamically setting pages according to page number.
  const [page,setPage] = useState(1);
  // Variable for dynamically sorting Ascending or Descending.
  const [sortOrder, setSortOrder] = useState("Ascending");

  const [searchInput, setSearchInput] = useState("");
  // Variable for dynamically showing No. of persons in a page
  const [personsPerPage, setPersonsPerPage] = useState(10);

  // Page Handler function for Pagination to navigate to different pages and move to first & last page. 
  const pageHandler=(selectedPage:number)=>{
    if(people && selectedPage >=1 && selectedPage <= people.length/10 && selectedPage != page)
    setPage(selectedPage);
  }

// Function that handles sorting ascending/descending order after Name(table heading) is clicked.

  const sortHandler = () => {
    setSortOrder((prevSortOrder) =>
    prevSortOrder === "Ascending" ? "Descending" : "Ascending"
  );
  };

  const searchHandler=(event:any)=>{
    setSearchInput(event.target.value);
  }


 const renderCells = ({ name, show, actor, movies, dob }: Person) => (
    <>
      <td>{name}</td>
      <td>{show}</td>
      <td>{actor}</td>
      <td>{dob}</td>
      <td
        dangerouslySetInnerHTML={{
          __html: movies.map(({ title }) => title).join(", "),
        }}
      ></td>
    </>
  );

  if (loading) {
    return <p>Fetching People...</p>;
  }

  if (people === undefined || error) {
    return <h2>Oops! looks like something went wrong!</h2>;
  }

  // Logic for handling case when people array is empty.
  if (people.length===0){
    return <h2>No People Available.</h2>
  }

  // Function to sort people array in ascending or descending order. 
  // Sort function takes localeCompare to compare between two names in alphabetical order.
  const sortedPeople = [...people].sort((a, b) => {
    if (sortOrder === "Ascending") {
      return a.name.localeCompare(b.name);
    } else{
      return b.name.localeCompare(a.name);
    } 
  });

  // Filter function to filter out search input text from table using ternary operator
  // If searchInput is present filter works otherwise Original list will be displayed.
  const filteredPeople=searchInput ? sortedPeople.filter((sp) =>
  sp.name.toLowerCase().includes(searchInput.toLowerCase())
) : sortedPeople ;
  
  const personsPerPageHandler=(e:any)=>{
      setPersonsPerPage(e.target.value)
      setPage(1)
  }

  return (
    <>
    <form>
    <div className="search-box">
      <label htmlFor="search">Search</label>
    <input id="search" type="text" placeholder="Search people..." value={searchInput} onChange={searchHandler} />
    </div>
    <div>
    <label htmlFor="persons">Persons per page</label>
    <select id="persons" value={personsPerPage} onChange={personsPerPageHandler}>
      <option value={10}>10</option>
      <option value={15}>15</option>
      <option value={20}>20</option>
    </select>
    </div>
   </form>
    <table>
      <thead>
        <tr>
          <th aria-sort={sortOrder==="Ascending" ? "ascending" : "descending"} onClick={sortHandler} className="sorter">Name</th>
          <th>Show</th>
          <th>Actor/Actress</th>
          <th>Date of birth</th>
          <th>Movies</th>
        </tr>
      </thead>
      {/* Slice method to show a limited number of items for pagination implementation  */}
      <tbody>
      {filteredPeople.slice(personsPerPage * page - personsPerPage, personsPerPage*page).map((person, index) => (
            <tr key={index}>{renderCells(person)}</tr>
          ))}
      </tbody>
    </table>
    {/* Pagination works when people array length is more than 0 and next, first, last and previous buttons are diabled conditionally.  */}
    {people.length>0 && <div className="pagination">
    <button className="pagination-elements" disabled={page==1 ? true : false} onClick={()=>{pageHandler(1)}}>First</button>
    <button className="pagination-elements" disabled={page==1 ? true : false} onClick={()=>pageHandler(page-1)}>Previous</button>
    {[...Array(people.length/10)].map((_,i)=>{
    return <span key={i} onClick={()=>pageHandler(i+1)} className={`pagination-elements ${page===i+1 ? "pagination-selected" : ""}`}>{i+1}</span>
})}
      <button className="pagination-elements" disabled={page==people.length/10 ? true : false} onClick={()=>pageHandler(page+1)}>Next</button>
      <button className="pagination-elements" disabled={page==people.length/10 ? true : false} onClick={()=>{pageHandler(people.length/10)}}>Last</button>
      <div className="list-item-count">Showing {page*personsPerPage-personsPerPage+1}-{personsPerPage*page} of {people.length}</div>
      </div>
      }
</>
  );
}

