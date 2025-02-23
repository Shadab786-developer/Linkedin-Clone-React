import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h2>React concept of context api</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
