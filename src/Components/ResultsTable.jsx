import { formatter } from "../util/investment"

export default function ResultsTable({ resultTabledata }) {
    const columnHeaders = ['Year', 'Investment Value', 'Interest(Year)', 'Total Interest', 'Investment Capital']
    const initialInvestment = resultTabledata[0].valueEndOfYear - resultTabledata[0].interest - resultTabledata[0].annualInvestment;
    return (
        <div>
            <table id='result'>
                <thead>
                    <tr key='resultTableHead'>
                        {columnHeaders.map(header => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {resultTabledata && resultTabledata.map(row => {
                        const totalInterest = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
                        const totalAmountInvested = row.valueEndOfYear - totalInterest; 
                        return (<tr key={row.year}>
                            <th>{row.year}</th>
                            <th>{formatter.format(row.valueEndOfYear)}</th>
                            <th>{formatter.format(row.interest)}</th>
                            <th>{formatter.format(totalInterest)}</th>
                            <th>{formatter.format(totalAmountInvested)}</th>
                        </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}