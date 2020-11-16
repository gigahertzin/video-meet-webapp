import React,{useState} from 'react'
import { Link, Redirect } from "react-router-dom";

export default function SignUp(props) {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    function validation(){
        if(email.replace('@','')!=="" && password!=="" && email.includes("@")){
            localStorage.setItem('email',email);
            setEmail("");setPassword("");setName("");
            props.setIslogin(true);
        }
        else{
            alert("Enter valid Email and password");
        }
    }
    return (
        <div className="login" >
            {props.islogin? <Redirect to="/" />:null}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/"><img src="https://img.icons8.com/fluent/38/000000/video-call.png" /> <span id="main-brand">Vcon</span><span id="main-brand-room">Room</span></a>
            </nav>
            <div style={{ display: "flex" }} className="login_content">
                <div className="col-md-6 left">
                    <img src="/vc_login.jpg" width="100%" />
                </div>
                <div className="col-md-6 right">
                    <div className="login_form">
                    
                        <img src="https://gawvs.in//assets/img/login.png"  width="70%" id="login_img" style={{margin: "0 10%",opacity: "0.9"}} />
                        
                        <h3 style={{fontWeight: "400"}}>Welcome Back :)</h3>
                        <p>To keep connected with us please SignUp with your personal information by user Name , email address and password.</p>
                        <div class="input-group flex-nowrap">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="addon-wrapping" >
                                <img src="https://img.icons8.com/ios/22/000000/name.png"/>      
                                </span>
                            </div>
                            <input type="text" class="form-control" placeholder="Enter your full name " aria-label="Username" aria-describedby="addon-wrapping" value={name} onChange={(e)=>setName(e.target.value)} />

                        </div>
                        <div class="input-group flex-nowrap">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="addon-wrapping" >
                                <img src="https://img.icons8.com/ios/22/000000/important-mail.png"/>        
                                </span>
                            </div>
                            <input type="email" class="form-control" placeholder="Enter your email address " aria-label="Username" aria-describedby="addon-wrapping" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                        </div>
                        <div class="input-group flex-nowrap">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="addon-wrapping" >
                                <img src="https://img.icons8.com/ios/22/000000/privacy.png"/> 
                                </span>
                            </div>
                            <input type="password" class="form-control" placeholder="Enter your password" aria-label="Username" aria-describedby="addon-wrapping"  value={password} onChange={(e)=>setPassword(e.target.value)} />

                        </div>
                        <span id="extra">Forgot your login details ? Get help login</span>
                        <div className="form-inline">
                            <button className="btn btn-success signup-btn  my-2 my-sm-0" type="submit" onClick={()=>{validation()}}>Sign Up </button>
                            <Link to={`/login`} className="nav-link"><button type="button" class="btn btn-light">Login</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
