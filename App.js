import React, { useState } from "react";
import Alert from "./Component/Alert";
import About from "./Component/About";

import Navbar from "./Component/Navbar";
import TextForm from "./TextForm";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been Enable ", "Success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light Mode has been Enable", "Success ");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="AboutTextUtils"
          mode={mode}
          toogleMode={toogleMode}
        />
        <Alert alert={alert} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter Text Here to Analyze"
                mode={mode}
                showAlert={showAlert}
              />
            }
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>

        {/* <div className="container my-3"><About /></div> */}
      </Router>
    </>
  );
}
export default App;
