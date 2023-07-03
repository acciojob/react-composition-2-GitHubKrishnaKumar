
import React, { useState } from "react";
import './../styles/App.css';
import Modal from "./Modal";

const App = () => {
  const [show,setShow]=useState(false);
  const onClose=()=>{
    setShow(false);
  }
  return (
    <div className="App" onClick={()=>show && onClose()}>
        {/* Do not remove the main div */}
        <button onClick={()=>setShow(true)}>Show Modal</button>
        {
          show && <Modal onClose={onClose}>
          <p>This is the content of the modal.</p>
          </Modal>
        }
    </div>
  )
}

export default App