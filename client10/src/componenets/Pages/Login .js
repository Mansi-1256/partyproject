import React, { useState ,useContext,useEffect} from "react";
import AuthContext from '../../context/authContext/authContext'
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import x from './facebook.png';
import y from './google.png';
import w from './social.png';
import z from './user2.jpg';
export const Login = (props) => {
  const{loginUser,userAuth,errors,clearError} = useContext(AuthContext)
  useEffect(()=>{
    if(userAuth){
 props.history.push('/')
    }
   },[userAuth,props.history])
    const [ user, setUser ] = useState({
      
        email: "",
        password: "",
       
      });
      const {  email, password,} = user;
    
      const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        clearError()
      };
      const submit = (e) => {
        e.preventDefault();      
          loginUser({  email, password });
          clearError()
        
      };
  return (
    <div className="busy">


       
     <Grid container direction="row" ls={12} style={{justifyContent:"center"}} >   
   <Grid ls={6}>
    <div className="login" >
    <img src={z}
       alt="logo"
        width="60px"
        height="60px"
        />
       
      <h1> LOG IN</h1>
      <form onSubmit={submit}>
     <input   type="text" name="email" placeholder="email" label="Outlined" value={email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
        <input type="submit" value="Sign In" className="btn" />
      </form>
      <div className="question">
      {errors != null && <button className="danger">
          {errors.msg ? errors.msg : errors.error[0].msg}
          <span onClick={()=> clearError()}>X</span></button>}
        <p>
          {" "}
          Don't have an account? {""} <Link to="/register">Sign Up</Link>
        </p>
        <div  >
         <a href="https://www.facebook.com/">
        <img src={x} 
         alt="logo"
        width="40px"
        height="40px"
        /></a>&nbsp;&nbsp;
        <a href="https://in.pinterest.com/login/">
                <img src={y}
                   alt="logo"
        width="40px"
        height="40px"
        /></a>&nbsp;
         <a href="https://in.pinterest.com/login/">
           <img src={w}
           alt="logo"
        width="40px"
        height="40px"
        /></a>&nbsp;
       
      </div>
     
      </div>
    </div>
    </Grid>
   
    </Grid>
    </div>
   
  );
};

export default Login;
