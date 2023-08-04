import { useState } from "react";
import "./index.css"
import Effect1 from "./components/Effect1";

function App() {

  const [show, setShow] = useState(false)




  return (
    <div className="App">



      <button className="bg-orange-400" onClick={() => setShow(!show)}   >{show ? "gizlet" : "goster"}</button>


      {show && <Effect1 />}





    </div>
  );
}

export default App;
