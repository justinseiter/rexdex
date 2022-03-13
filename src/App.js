import logo from "./logo-rexdex.png";
import { Link, Outlet } from "react-router-dom";
const date = new Date();
function App() {
    return (
        <div className="App">
            <header className="App__header">
                <div className="App__header__content">
                    <img
                        className="App__header__logo"
                        src={logo}
                        alt="Rexdex, a crypto exchange index"
                    />
                </div>
            </header>
            <header className="App__subheader">
                <div className="App__subheader__content">
                    <h1 className="App__subheader__heading">Exchanges</h1>
                    <div>
                        <b>Last updated:</b> <span >{ date.toLocaleString('en-US')}</span>
                    </div>
                </div>
            </header>
            <main className="App__main">
                <Outlet />
            </main>
        </div>
    );
}

export default App;
