export default function UserInput({onChangeHandler }) {
    return (
        <div id='user-input'>
            <div className="input-group">
                <label>Initial Investment</label>
                <input id='initialInvestment' onChange={onChangeHandler}></input>
                <label>Annual Investment</label>
                <input id='annualInvestment' onChange={onChangeHandler}></input>
            </div>
            <div className="input-group">
                <label>Expexted Return</label>
                <input id='expectedReturn' onChange={onChangeHandler}></input>
                <label>Duration</label>
                <input id='duration' onChange={onChangeHandler}></input>
            </div>
        </div>
    )
}