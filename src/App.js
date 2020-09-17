import React, { useState } from "react";
import Title from "./components/Title.js";
import Modal from "./components/Modal.js";
import ImageGrid from "./components/ImageGrid.js";
import UploadForm from "./components/UploadForm.js";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
