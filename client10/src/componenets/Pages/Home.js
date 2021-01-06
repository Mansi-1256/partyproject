import React ,{useContext,useEffect }from 'react'
import AuthContext from '../../context/authContext/authContext'
import { Guestcounter } from '../guests/Guestcounter'
import Guestform from '../guests/Guestform'
import Guestfilter from '../guests/Guestfilter'
import Guestsearch from '../guests/Guestsearch'
import Guests from '../guests/Guests'
 const Home = () => {
     const {getUser} = useContext(AuthContext)
     useEffect(()=>{
         getUser()
     },[])
    return (
        <div className="app-container">
            <div className="main">
            <div className="filter">
            <Guestfilter />
            <Guestsearch />
          
            </div>
          
            <Guestform />
            <Guestcounter />
           
            </div>

            <Guests />
        </div>
    )
}

export default Home
