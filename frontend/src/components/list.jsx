import React, {useEffect,useState} from "react";
function List(){

    const [details,setdetails]=useState([{
        names:" ",
        age:0,
        gender:" ",
        email: " ",
        phone:0,
        address:" "

    }])

    useEffect(() =>{
        fetch("/list").then(res =>{
           if(res.ok) {
               return res.json()
           }
        }).then(jsonRes => setdetails(jsonRes));
    })


    
    return (
        <div className="container">
            <h1>List of Customers</h1>
            
            {details.map(detail =>
            <div>
                <p>{detail.names}</p>

             </div>   
                )}
        </div>
    )

}

export default List;