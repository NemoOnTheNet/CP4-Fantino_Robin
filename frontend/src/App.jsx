import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { UserProvider } from "./components/userContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <NavBar />
        <Outlet />
      </div>
    </UserProvider>
  );
}

export default App;
