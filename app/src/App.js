import React from 'react'
import axios from 'axios'
import './App.css';

const App = () => {
  const [currency, setCurrency] = React.useState([])
  const [keys, setKeys] = React.useState([])
  const [value, setValue] = React.useState([])
  const [selectedOption, setSelectedOption] = React.useState()
  
  const getCurrency = async () => {
    const response = await axios.get("http://localhost:8080/currency")
    const { rates } = response.data
    setCurrency([rates])
    setKeys(Object.keys(rates))
    setValue(Object.values(rates))
  }

  React.useEffect(() => {
    getCurrency()
  }, [])

  return (
    <div className="App">
      <select name="" id="" onChange={(e) => setSelectedOption(e.target.value)}>
        {keys.map((key, index) => (
          <option key={key} value={value[index]}>{key}</option>
        ))}
      </select>
    </div>
  )
}

export default App