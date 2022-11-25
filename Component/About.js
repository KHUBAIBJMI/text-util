import React from "react";

export default function About() {
  // const [myStyle, setMystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  // // const [btnText, setbtnText] = useState("Enable Dark Mode");

  // // const toogleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMystyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //     });
  //     // setbtnText("Enable Light Mode");
  //   } else {
  //     setMystyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  // //     setbtnText("Enable Dark Mode");
  // //   }
  // };
  return (
    <div className="container"
    //  style={myStyle}
    >
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              // style={myStyle}
            >
              <strong>Use To Free</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" 
            // style={myStyle}
                 >
             you can use free 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              // style={myStyle}
            >
              <strong>Count Word and Charecter</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"
            //  style={myStyle}
             >
              you can count you text and charector
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              // style={myStyle}
            >
              <strong> Convert Your text into Upeer and Lover case</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"
            //  style={myStyle}
             >
              convert your text into UpperCase to LowerCase and Lovercase to UpperCase and you can copy your text and remove extra space
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
