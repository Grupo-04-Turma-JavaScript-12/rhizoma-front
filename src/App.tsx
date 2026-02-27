import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SobreoProduto from "./sobreoproduto/SobreProduto";


function App() {
  return (
    <>
    <SobreoProduto/>
    {/* <BrowserRouter> */}
      <div>
          {/* <Routes> */}
        {/* <Route path="/sobreoproduto" element={<SobreoProduto/>} /> */}
        {/* </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
