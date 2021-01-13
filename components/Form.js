import React from "react";


const Form = (props)=>{
    const{inputs, setInputs} = props;

    const onChange = e =>{
        setInputs({
            ...inputs,
        [e.target.name]: e.target.value
        });
    };
    return(
        <form>
            <label htmlFor="firstName" >First Name</label>
            <input onChange={onChange} type="text" name="firstname"/>

            <label htmlFor="lastName" >Last Name</label>
            <input onChange={onChange} type="text" name="firstname"/>

            <label htmlFor="email" >Email</label>
            <input onChange={onChange} type="text" name="firstname"/>

            <label htmlFor="passWord" >Password</label>
            <input onChange={onChange} type="text" name="firstname"/>

            <label htmlFor="confirmPassword" >Confirm Password</label>
            <input onChange={onChange} type="text" name="firstname"/>
        </form>
    );
};
export default Form