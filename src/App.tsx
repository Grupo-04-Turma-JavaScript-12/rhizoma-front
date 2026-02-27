import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SobreNos } from "./sobreNos/SobreNos";

function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/sobrenos" element={<SobreNos />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
