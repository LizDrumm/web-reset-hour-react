import React from 'react'

export default function Register(){
    return(
        <form>
            <p> Please Register to learn about the Tunes! </p>
            <input id ='fullName' type = 'text' name ='fullName' placeholder ='Full Name'/>
            <input id ='email' type = 'text' name ='email' placeholder ='Your email address'/>
            <input id = 'username' type='text' name='username' placeholder ='Username'/>
            <input id ='password' type = 'password' name ='password' placeholder='Password'/>
            <button type = 'submit'>Register</button>
        </form>
    )
}