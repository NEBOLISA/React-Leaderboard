import React from 'react'
import Profiles from './Profiles';
function SearchList({ filteredPersons }) {
    const filtered = filteredPersons.map(person =>  <Profiles key={person.id} person={person} />); 
    return (
      <div>
        
        {filtered}
      </div>
    );
}

export default SearchList