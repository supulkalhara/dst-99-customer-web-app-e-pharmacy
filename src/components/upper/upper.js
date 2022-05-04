import React from "react";
import "./upper.css";
import Header from "../../navigation/header";

function Upper() {
  return (
    <div className="upper">
      <Header />
      <div className="upperDetails">
        <p className="upperDetails__first">
          Get the prescription drugs <br />
          to your doorstep
        </p>
        <p className="upperDetails__second">
          We have all the drugs your doctor prescribed for your <br />
          health and what's more, we can get it to you.
        </p>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Upper;
