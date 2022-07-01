import { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// import Alert from "./components/Alert";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { userContext } from "./context/userContext";
import { check } from "./http/userApi";

function App() {
  const { setUserId } = useContext(userContext);

  useEffect(() => {
    check().then((data) => setUserId(data.id));
  }, []);
  return (
    <BrowserRouter>
      <NavBar />

      <AppRouter />
    </BrowserRouter>
  );
}
export default App;
