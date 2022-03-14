import logo from "./logo-rexdex.png";
import { Link, Outlet } from "react-router-dom";
function App() {
    return (
        <div className="App">
            <header className="App__header">
                <div className="App__header__content">
                    <Link to="/" className="App__header__link">
                        <img
                            className="App__header__logo"
                            src={logo}
                            alt="Rexdex, a crypto exchange index"
                        />
                    </Link>
                </div>
            </header>
            <Outlet />
        </div>
    );
}

export default App;
