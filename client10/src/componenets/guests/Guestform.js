import React,{useState,useContext,useEffect} from 'react'
import GuestContext from '../../context/guestcontext/guestContext'

 const Guestform = () => {
   const {addGuest,editAble,updateGuest,clearEdit} = useContext(GuestContext)
   useEffect( ()=>{
     if (editAble !== null){
       setGuest(editAble)
     }else {
      setGuest({
        name:'',
        phone:'',
        dietary:'Non-Veg'
      })
     }
   }, [editAble])
   const [guest,setGuest] = useState({
     name:'',
     phone:'',
     dietary:'Non-Veg'
   })
   
    const { name , phone,dietary} = guest

    const handleChange = e => {
      setGuest({
        ...guest,
        [e.target.name]:e.target.value
      })
    }
    const onsubmit =  e=>{
      e.preventDefault()
      if(editAble!== null){
        updateGuest(guest)
        clearEdit()
      }else{
         addGuest(guest)
      setGuest({
        name:'',
        phone:'',
        dietary:'Non-Veg'
      })

      }
   
    }
    return (
        <div className="invite-section">
        <h1>{editAble !== null ? '  Edit Guest': ' Invite Someone'}</h1>
        <form onSubmit={onsubmit} >
          <input type="text" placeholder="Name" name="name" value={name} onChange={handleChange} />
          <input type="text" placeholder="Phone" name="phone" value={phone} onChange={handleChange} />
          <p className="options-label">
            Dietary</p>
          <div className="options">
            <label className="container">Non-Veg
            <input type="radio" name="dietary" value="Non-Veg" checked={dietary === "Non-Veg"} onChange={handleChange} />
              <span className="checkmark"></span>
            </label>
            <label className="container">Vegan
            <input type="radio" name="dietary" value="Vegan" checked={dietary === "Vegan"} onChange={handleChange}  />
              <span className="checkmark"></span>
            </label>
            <label className="container">Pescatarian
            <input type="radio" name="dietary" value="Pescatarian" checked={dietary === 'Pescatarian'} onChange={handleChange}  />
              <span className="checkmark"></span>
            </label>
          </div>
          <input type="submit" value= {editAble !== null ? '  Update Guest': ' Add Guest'} className="btn1" />
         {editAble !== null ? <input onClick={clearEdit} value="Cancel" type="button" className="btn clear"/> :null }
        </form>
  
      </div>
    )
}


export default  Guestform