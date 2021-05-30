import React,{useState} from "react";
import axios from  "axios";
function Add(){
    const [input,setInput]=useState({
        names:" ",
        age:0,
        gender:" ",
        email: " ",
        phone:0,
        address:" "

    })
    
    
    function handleChange(event){
    const {name,value}=event.target;
    setInput(prevInput =>{
        return{
        
            ...prevInput,
            [name]:value
        }
    })
    }

    function handleClick(event){
        event.preventDefault();
        const newNode={
         name1: input.names,
         age1 : input.age,
         gender1 : input.gender,  
         email1 : input.email,
         phone1 : input.phone,
         address1 : input.address 
        }
        axios.post("http://localhost:3001/create",newNode)
    }


    return (
        <div className="container">
            
            <form>
               <div className = 'form-group'>
                   <label >Name:</label>
                   <input onChange={handleChange} type="text" name="names" value={input.names} className='form-control' placeholder="Name"/>
               </div>
               <div className = 'form-group'>
               <label >Age::</label>
                   <input  onChange={handleChange} type="number" name="age" value={input.age} className='form-control' placeholder="Age"/>
               </div>
               <div className = 'form-group'>
               <label >Gender:</label>
                   <input onChange={handleChange} type="text" name="gender" value={input.gender} className='form-control' placeholder="Gender"/>
               </div>
               <div className = 'form-group'>
               <label >Email:</label>
                   <input onChange={handleChange} type="text" name="email" value={input.email} className='form-control' placeholder="Email"/>
               </div>
               <div className = 'form-group'>
               <label >Phone Number:</label>
                   <input onChange={handleChange} type="number" name="phone" value={input.phone} className='form-control' placeholder="Phone Number"/>
               </div>
               <div className = 'form-group'>
               <label >Address:</label>
                   <input onChange={handleChange} type="text" name="address" value={input.address} className='form-control' placeholder="Address"/>
               </div>
               <button onClick={handleClick} type="submit" className="btn btn-lg btn-info">Add Customer</button>


            </form>



        </div>
    )

}

export default Add;