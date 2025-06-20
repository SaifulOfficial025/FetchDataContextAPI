import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext';

function Datashow2() {
  const { data, loading } = useContext(DataContext);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <div>
        <div>
      <h1>Fetched Data:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Datashow2