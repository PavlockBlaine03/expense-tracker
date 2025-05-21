
function Header({toggleTheme}) {
    return(
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h2>Expense Tracker</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default Header;