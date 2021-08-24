import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/app";
import "firebase/auth";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Header from "./Components/Header";
import SignIn from "./Components/SignIn";
import HostelSelection from "./Components/HostelSelection";
import { useState, useEffect } from "react";
import BoysHostel from "./Components/BoysHostel";
import GirlsHostel from "./Components/GirlsHostel";
import FloorRoomSelection from "./Components/FloorRoomSelection";
import UserExists from "./UserExists";

function App(props) {
  var googleProvider = new firebase.auth.GoogleAuthProvider();
  var faceBookProvider = new firebase.auth.FacebookAuthProvider();
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    // FIR Auth State Observer
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        var name = user.displayName;
        console.log(user.displayName);
        console.log(`User has signed in with UID: ${uid}`);
        setUser(name);
      } else {
        // User is signed out
        console.log("User is not signed in.");
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    if (!user) {
      history.push({ pathname: "/" });
      //console.log(history.push());
    }
  }, [user]);

  function signInWithGooglePopUp() {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        console.log("User has signed in.");
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(
          `Errors occurred during sign in: ${errorCode}, ${errorMessage}, ${email}, ${credential}`
        );
      });
  }

  function signInWithFacebookPopUp() {
    firebase
      .auth()
      .signInWithPopup(faceBookProvider)
      .then((result) => {
        console.log("User has signed in.");
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(
          `Errors occurred during sign in: ${errorCode}, ${errorMessage}, ${email}, ${credential}`
        );
      });
  }

  function signout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("User has signed out.");
      })
      .catch((err) => {
        console.log("Error signing out: ", err);
      });
  }

  //console.log(history);
  return (
    <>
      <Header user={user} signout={signout} />
      <Switch>
        <Route exact path="/">
          {user ? (
            <Redirect to="/hostelselection" />
          ) : (
            <SignIn
              signInWithGoogle={signInWithGooglePopUp}
              signInWithFacebook={signInWithFacebookPopUp}
            />
          )}
        </Route>
        <Route path="/userexist">
          <UserExists user={user} />
        </Route>
        <Route path="/hostelselection">
          <HostelSelection user={user} />
        </Route>
        <Route path="/boyshostel">
          <BoysHostel />
        </Route>
        <Route path="/girlshostel">
          <GirlsHostel />
        </Route>
        <Route path="/slectroomandfloor">
          <FloorRoomSelection user={user} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
