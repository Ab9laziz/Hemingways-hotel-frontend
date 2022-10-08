import React from 'react';
import "../css/style.css"



function Subscribe(){

    return(

       <div className="container9">
        <div className="container10" id="bottom">
            <h1>We'd like to keep in touch</h1>
            <p>Subscribe to our news letter</p>
            <form action="http://localhost:3000/formData" id="form" method="POST">
                <label className="label" htmlFor="fname"> First Name: </label>
                <input className="input" type="text" id="fname" name="firstName" required/><br/>
                <label className="label" htmlFor="lname">Last Name: </label>
                <input className="input" type="text" id="lname" name="lastName" required/><br/>
                <label className="label" htmlFor="email1">Email: </label>
                <input className="input" type="email" id="email1" name="email" required/><br/>
                <input type="submit" value="Subscribe" id="submit"/><br/>
            </form>
        </div>
        </div>
    
    )
}

export default Subscribe;