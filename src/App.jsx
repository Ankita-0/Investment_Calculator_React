import { useState } from "react";
import Header from "./Components/Header"
import ResultsTable from "./Components/ResultsTable"
import UserInput from "./Components/UserInput"
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [enteries, setEnteries] = useState({});
  const ResultTabledata = calculateInvestmentResults({...enteries})

  function handleEnteriesInput(e){
    setEnteries((previousEnteries) => {
        return {
            ...previousEnteries,
            [e.target.id] : e.target.value
        }
    })
}
console.log(ResultTabledata)
return (
    <>
    <Header />
    <UserInput onChangeHandler={handleEnteriesInput}/>
    <ResultsTable />
    </>
  )
}

export default App
