import React, { useState,useContext ,useEffect} from "react";
import AuthContext from '../../context/authContext/authContext'
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import x from './zumba.png';
import y from './wel.png';
import  z  from './damce2.png'
import  firebase from 'firebase';




export const Register = (props) => {
  
  
  const onSubmit = () =>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
     console.log(error);
    });
  }
  const{registerUser,userAuth,errors,setError,clearError} = useContext(AuthContext)
  useEffect(()=>{
   if(userAuth){
props.history.push('/')
   }
  },[userAuth,props.history])
  const [ user, setUser ]= useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    clearError()
  };
  const submit = (e) => {
    e.preventDefault()
    if (password !== password2) {
      setError({msg:"passwords dont match"})
    } else {
      registerUser({ name, email, password })
      clearError()
    }
  };

  
  return (
    
    <div>
      <Grid  ls={12} sm={12}  container direction="row"  style={{justifyContent:"center"}} >
      
      <Grid ls={6}  className="jump" >
      <div  >
        <img src={z}
           alt="logo"
        width="400px"
        height="400px"
        />
       
      </div>
      </Grid>
     
     <Grid ls={6}  >
    <div className="register"   >
    <div>
        <img src={y}
           alt="logo"
        width="200px"
        />
      </div>
    
      <form onSubmit={submit}>
        <input type="text" name="name" placeholder="name" value={name} onChange={handleChange} />
        <input type="email" name="email" placeholder="email" value={email}  onChange={handleChange}/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password2"
          placeholder="Confirm password"
          value={password2}
          onChange={handleChange}
        />
        <input type="submit" value="Sign Up" className="btn" />
      </form>
      <div className="question">
        {errors != null && <button className="danger">
          {errors.msg ? errors.msg : errors.error[0].msg}
          <span onClick={()=> clearError()}>X</span></button>}
        <p>
          {" "}
          Already have an account? {""} <Link to="/login">Login</Link>
        </p>
        {/* <button type="button" className="btn" onClick={ onSubmit}>Login in with Google</button>  */}
      </div>
     
    </div>
    </Grid>
    <Grid ls={6}  className="jump" >
      <div  >
        <img src={x}
           alt="logo"
        width="400px"
        height="400px"
        />
       
      </div>
      </Grid>
    </Grid>

    
    </div>
  );
};

export default Register;
