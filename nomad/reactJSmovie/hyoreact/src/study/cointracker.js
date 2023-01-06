import { useState, useEffect} from "react"

function  App() {

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [loding, setLoding] = useState([true]);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json)
      setLoding(false)
    });
   }, []);
  
  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }
  

  return (
    <div>
      <h1>하나둘({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="안녕" ></input>
        <button>Add to do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>

      <div>
        <h1>Coins({coins.length})</h1>
        {loding ? <strong>Loding...</strong> : null}
        <ul>
          {coins.map((coin) => (
          <li>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
            </li>
            ))}
        </ul>
      </div>
    </div>
  )
}


export default App