
function IncomeExpense({income, expense}) {
    return(
        <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '20px'}}>
            <div>
                <h4>Income</h4>
                <p style={{color: 'green'}}>+${income}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p style={{color: 'red'}}>-${expense}</p>
            </div>
        </div>
    );
}
export default IncomeExpense;