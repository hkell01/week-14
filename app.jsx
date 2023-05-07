import { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');
  // ...
}
function SearchBar() {
    const [query, setQuery] = useState('');
  
    function handleQueryChange(event) {
      setQuery(event.target.value);
    }
  
    return (
      <div>
        <input type="text" value={query} onChange={handleQueryChange} />
        // ...
      </div>
    );
  }
  function SearchBar({ data }) {
    const [query, setQuery] = useState('');
  
    function handleQueryChange(event) {
      setQuery(event.target.value);
    }
  
    const filteredData = data.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
  
    return (
      <div>
        <input type="text" value={query} onChange={handleQueryChange} />
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  