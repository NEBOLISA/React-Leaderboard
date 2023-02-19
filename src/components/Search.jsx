import React, { useState } from 'react'
import SearchList from './SearchList'


function Search({ details }) {
    const [searchField, setSearchField] = useState("");

    const filteredPersons = details.filter(
      person => {
        return (
          person
          .name
          .toLowerCase()
          .includes(searchField.toLowerCase()) ||
          person
          .email
          .toLowerCase()
          .includes(searchField.toLowerCase())
        );
      }
    );
  
    const handleChange = e => {
      setSearchField(e.target.value);
      //{searchList()}
    };
  
    function searchList() {
      return (
        <div>
          <SearchList filteredPersons={filteredPersons}/>
        </div>
      );
    }
  
    return (
      <section>
        <div>
          <h2>Search Intern</h2>
        </div>
        <div>
          <input 
            type = "search" 
            placeholder = "Search Interns" 
            onChange = {handleChange}
          />
        </div>
       
       
      </section>
    );
}

export default Search