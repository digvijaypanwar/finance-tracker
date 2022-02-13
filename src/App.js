import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
    const { authIsReady, user } = useAuthContext();
    return (
        <div className="App">
            {authIsReady && (
                <>
                    <BrowserRouter>
                        <Navbar />
                        <Switch>
                            <Route exact path="/">
                                {!user && <Redirect to="/login" />}
                                {user && <Home />}
                            </Route>
                            <Route path="/login">
                                {user && <Redirect to="/" />}
                                {!user && <Login />}
                            </Route>
                            <Route path="/signup">
                                {user && <Redirect to="/" />}
                                {!user && <Signup />}
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </>
            )}
        </div>
    );
}

export default App;
