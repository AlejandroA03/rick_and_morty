import React from "react";
import { useState } from "react";
import { validator } from "./validations";
import { useEffect } from "react";

const Form = ({loginUser}) =>{

    const [userData, setData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email:false,
        password:false
    })

    const handleOnchange = (e) => {
        setData({
            ...userData, [e.target.name]:e.target.value
        })

        setErrors(validator({...userData, [e.target.name]:e.target.value}))
    }

    const handleSubmit= (e) => {
        e.preventDefault()
        loginUser(userData)
    }

    useEffect(() =>{},[errors])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleOnchange} 
                    />

                {errors.email && <p>{errors.email}</p>}

                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={userData.password}
                    onChange={handleOnchange} 
                    />

                {errors.password && <p>{errors.password}</p>}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;