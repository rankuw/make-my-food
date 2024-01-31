import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react"
import { Outlet } from "react-router-dom";
import UserContext from "./utils/userContext";

function App() {
  const [userName, setUserName] = useState({
    name: "Ranvijay"
  })
  return (
    <>
    <UserContext.Provider value={{userName, setUserName}} >
      <Header/>
      <Outlet/>
      <Footer/>
    </UserContext.Provider> 
    </> 
  );
}

export default App;
