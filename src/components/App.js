import React from "react";
import Modal from "./Modal";
import './../styles/App.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* <h1>Modal Example</h1> */}
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <Modal show={showModal} onClose={handleModalClose}>
        {/* <h2>Modal Content</h2> */}
        <p>This is the content inside the modal.</p>
      </Modal>
    </div>
  );
};


export default App