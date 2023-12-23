export default function UserInput({ dataEnteries, onChangeHandler }) {
    return (
        <div id='user-input'>
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type='number' value={dataEnteries.initialInvestment} id='initialInvestment' onChange={onChangeHandler} required></input>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type='number' value={dataEnteries.annualInvestment} id='annualInvestment' onChange={onChangeHandler}></input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expexted Return</label>
                    <input type='number' value={dataEnteries.expectedReturn} id='expectedReturn' onChange={onChangeHandler}></input>
                </p>
                <p>
                    <label>Duration</label>
                    <input type='number' value={dataEnteries.duration} id='duration' onChange={onChangeHandler}></input>
                </p>
            </div>
        </div>
    )
}