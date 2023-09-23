import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <center>
      <div className="qr-code-scanner-container">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
        <p className="scanned-data">Result: {result}</p>
      </div>
    </center>
  );
}

export default App;
