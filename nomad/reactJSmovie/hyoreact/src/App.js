import { react, useEffect, useState} from "react"


function App() {
  
  const [coin, setcoin] = useState({})
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
    return () => {
      console.log("dd")
    };
  }, []);

  return (
    <div>
      <h1>adf</h1>
      <ul>
        <li>{coin}</li>
      </ul>
    </div>
  )
}


export default App