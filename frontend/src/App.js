import MainPage from "./components/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
    </BrowserRouter>
  );
}

export default App;
