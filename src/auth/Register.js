import React, {useState} from "react";
import RegisterInput from "./RegisterInput";
import './component.scss'
const Register = () => {
    const [password, setpassword] = useState("");
    const [user, setuser] = useState('')
    const [mail, setmail] = useState("")
   function addData(data) {
       console.log(data.pw)
       setmail(data.email)
       setpassword(data.pw)
       setuser(data.username)
   }
    return (
        <>
         <div className=" flex flex-col h-screen md:flex-row justify-center align-center">
            <div className="bg-blue-600 hidden md:flex w-4/4 md:h-screen text-white md:w-2/4">{/* IMAGE */}
                {/* {password}, {user}, {mail} */}
            </div>
            <div className="w-4/4 md:w-2/4 bg-white md:h-screen p-12 text-black items-center justify-center">
            <h2 className="text-5xl text-center mt-0 md:mt-24">Hello!</h2>
              <RegisterInput onAddData={addData} />
             </div>
            
        </div>
        </>
    );
};

export default Register;
