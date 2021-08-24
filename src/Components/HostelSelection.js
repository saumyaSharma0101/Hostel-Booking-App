import { Link, Redirect, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

function HostelSelection(props) {
  const { user } = props;
  const history = useHistory();

  function girlsHostel() {
    history.push({ pathname: "/girlshostel" });
  }
  function boysHostel() {
    history.push({ pathname: "/boyshostel" });
  }

  const userExist = localStorage.getItem(user);

  return (
    <>
      {userExist ? (
        <Redirect to="/userexist" />
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>
            <b>Choose your Hostel</b>
          </h1>
          <button
            style={{
              backgroundColor: "pink",
              fontSize: "large",
              fontWeight: "bolder",
              width: "200px",
              height: "150px",
              borderRadius: "20px",
              marginLeft: "38%",
              marginTop: "50px",
            }}
            onClick={girlsHostel}
          >
            Girls Hostel
          </button>
          <button
            style={{
              backgroundColor: "lightblue",
              fontSize: "large",
              fontWeight: "bolder",
              width: "200px",
              height: "150px",
              borderRadius: "20px",
              marginLeft: "10px",
              marginTop: "50px",
            }}
            onClick={boysHostel}
          >
            Boys Hostel
          </button>
        </div>
      )}
    </>
  );
}

export default HostelSelection;
