export default function ResultsTable() {
    const columnHeaders = ['Year', 'Investment Value','Interest(Year)', 'Total Interest', 'Investment Capital']
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

                </tbody>
            </table>

        </div>
    )
}