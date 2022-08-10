import React from 'react'
import axios from 'axios'
import './App.css';

const App = () => {
  const [currency, setCurrency] = React.useState([])
  const [keys, setKeys] = React.useState([])
  const [value, setValue] = React.useState([])
  const [selectedOption, setSelectedOption] = React.useState()
  const [selectedOption2, setSelectedOption2] = React.useState()  
  const [quantmoney, setquantmoney] = React.useState()
  

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

 // 1 / preço moeda = preço da moeda selecionada
 // preço da moeda selecionada * preço da moeda comparada 1 euro = 1
 // para comparar duas moedas →→→  ?????? ao AED e BRL tem que dar +- 1,39
 // AED, AED / 1 → 3,737438 , 0,26756296693082265  BRL , BRL / 1 → 5,256675 , 0,19023432112504576
 // para comparar duas moedas →→→ 1 / preço ao euro * preço ao euro.
  return (
    <div className="App-body">
      <div>
        <div className='firstselect'>       
          <select className='App-select' name="" id="din1" onChange={(e) =>  setSelectedOption(1 / e.target.value)}>
            {keys.map((key, index) => (
              <option key={key} value={value[index]}>{key}</option>
            ))}
          </select>  
          <input className='App' type="number" onChange={(e) => setquantmoney(e.target.value)} value={quantmoney} />
        </div>
        <div>
          <select className='App-select' name="" id="din2" onChange={(e) =>  setSelectedOption2(e.target.value)}>
            {keys.map((key, index) => (
              <option key={key} value={value[index]}>{key}</option>
            ))}
          </select>
          <input className='App' value={(quantmoney * selectedOption) * selectedOption2} readOnly />       
        </div>
      </div>
    </div>
  )
}

export default App