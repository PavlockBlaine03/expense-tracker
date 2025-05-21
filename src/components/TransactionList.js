
function TransactionList({transactions}) {
    return(
        <div className="history">
            <h3 id="header">History</h3>
            <ul className="list">
                {transactions.map((txn) => (
                    <li key={txn.id} className={txn.amount < 0 ? 'minus' : 'plus'}>
                        {txn.text} <span>{txn.amount < 0 ? '-' : '+'}${Math.abs(txn.amount)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TransactionList;