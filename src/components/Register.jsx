import { CircleX } from 'lucide-react';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { userRegister } from '../services/Api';


const Register = () => {
    const formRef=useRef();
    const navigate = useNavigate();
       
    const handleSubmit = async (e) => {
        e.preventDefault();
        const registerData = {
            name:formRef.current.name.value,
            email: formRef.current.email.value,
            password: formRef.current.password.value,
            phone: formRef.current.phone.value,
            location: formRef.current.location.value,
            role:formRef.current.role.value,
         };
        console.log("rd",registerData)
        try {
            const response = await userRegister(registerData);
            console.log("Registered successfully", response);
            alert("Registered successfully!");
          } catch (error) {
            console.error("Error in registering", error);
            // alert("Failed to submit request.");
          }
        };
    
    return(
        <div className='h-screen w-screen bg-black/25 absolute top-0 left-0 flex justify-center items-center z-50'>
            <div className='w-[30%] h-[70%] bg-red z-50 flex flex-col bg-white shadow-lg rounded-md'>
                <div className='w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-red-600 bg-[#ffe7cd] text -xl font-bold'>
                    <div className='w-1/2'>Register</div>
                    <div className="w-1/2 flex justify-end ">
                        <CircleX onClick={() => navigate("/")}/>
                    </div>
                </div>
                <div className="w-full h-[85%] flex flex-row justify-center items-center">
                    <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" name='name' placeholder='Name' className='p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-black rounded-md' />
                        <input type="email" name='email' placeholder='Email' className='p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-black rounded-md' />
                        <input type="password"  name='password' placeholder='Password' className='p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-black rounded-md' />
                        <input type="phone" name='phone' placeholder='Phone-no' className='p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-black rounded-md' />
                        <input type="text"  name='location' placeholder='Location' className='p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-black rounded-md' />
                        <select name='role' defaultValue="user" className='p-3 bg-[#f8f8f8] w-full outline-none active:outline-none focus:border-b-2 hover:border-black rounded-md' required>
                            <option value="user">User</option>
                            <option value="employee">Employee</option>
                        </select>
                        <button type="submit" className="bg-red-600 p-3 text-[#ffe7cd] w-full rounded-md text-lg font-bold">   Register</button>
                    </form>
                </div>
            </div> 
        </div>
    )

}

export default Register