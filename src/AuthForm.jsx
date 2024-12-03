import { useState } from "react"
import { set } from "react-hook-form";

function AuthForm(){
    const [isLogin, setIsLogin] = useState(true);
    const [signupData, setSignupData] = useState({email:"",password :"",confirmPassword :''
    })
    const [loginData, setLoginData] = useState({email:'',password :''})
    const [storedUser,setStoreUser] = useState(null);
    const handleSignupChange = (e)=>{
        const {name,value} = e.target;
        setSignupData((prevData)=>({...prevData,[name]:value}));

    };
    const handleLoginChange = (e)=>{
        const {name,value} = e.target;
        setLoginData((prev)=>({...prev,[name]:value}));
    }
    const handleSignup = ()=>{
        const {email,password,confirmPassword} = signupData;
        if (!email || !password || !confirmPassword)
        {
            alert("All fields are required");
            return
        }
        if(password !== confirmPassword){
            alert("Password does not match")
        }
        setStoreUser({email,password});
        alert("Signup succesfull! plaese login");
        setSignupData({ email: "", password: "", confirmPassword: "" });
        setIsLogin(true);
    };
    const handleLogin = ()=>{
        const {email,password} = loginData;
        if (!email || !password){
            alert("All fileds are required!");
            return;
        }
        if (storedUser && email === storedUser.email && password===storedUser.password ){
            alert("Login Successfull!")
        }
        else{
            alert("Invalid Informations")
        }

    };
    return(
       <div className="container">
        <div className="form-container">
            <div className="form-toggle">
                <button className={isLogin ? 'active':""} onClick={()=>setIsLogin(true)}>Login</button>
                <button className={!isLogin ? 'active' : ""} onClick={()=>setIsLogin(false)}>SignUp</button>
            </div>
            {isLogin ? <>
            <div className="form">
                <h2>Login page</h2>
                <input type="text" placeholder="Email" name="email" value={loginData.email} onChange={handleLoginChange}/>

                <input type="text"  placeholder="Password" name="password" value={loginData.password} onChange={handleLoginChange}/>
                <a href="a">Forget Password</a>
                <button onClick={handleLogin}>Login</button>
                <p>Not a Member? <a href="#" onClick={()=>setIsLogin(false)}>Signup now</a></p>
            </div>
            </>:<>
            <div className="form">
            <h1>Signup Form</h1>
            <input type="email" placeholder="Email" name="email" value={signupData.email} 
            onChange={handleSignupChange}/>
            <input type="password" placeholder="password" name="password" value={signupData.password} onChange={handleSignupChange}/>
            <input type="password" placeholder="Confirm password" name="confirmPassword"
            value={signupData.confirmPassword} onChange={handleSignupChange}/>
            <button onClick={handleSignup}>Signup</button>
            </div>
            </>}
        </div>
       </div>
    )
}
export default AuthForm