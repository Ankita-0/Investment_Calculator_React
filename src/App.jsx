import { useState } from "react";
import Header from "./Components/Header"
import ResultsTable from "./Components/ResultsTable"
import UserInput from "./Components/UserInput"
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [enteries, setEnteries] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn:6,
    duration: 2
  });
  const ResultTabledata = calculateInvestmentResults({...enteries})

  function handleEnteriesInput(e){
    setEnteries((previousEnteries) => {
        return {
            ...previousEnteries,
            [e.target.id] : +e.target.value
        }
    })
}

return (
    <>
    <Header />
    <UserInput dataEnteries={enteries} onChangeHandler={handleEnteriesInput}/>
    <ResultsTable resultTabledata={ResultTabledata}/>
    </>
  )
}

export default App
