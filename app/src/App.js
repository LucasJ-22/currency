import React from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [currency,setCurrency] = React.useState([])

  const getCurrency = async ()=> {
   try{
    const response = await axios.get("http://localhost:8080/currency")
   const data = response.data
   setCurrency(Object.keys(data.rates))
   } catch (error) {
    console.error(error)
   }
  }

  React.useEffect(()=>{
    getCurrency()
  },[])

  return (
    <div className="App">
      {currency.map((value, index) => {
        return (
          <select>
            <option value={value}>{value}</option>
          </select>
        )
      })}
    </div>
  );
}

export default App;
