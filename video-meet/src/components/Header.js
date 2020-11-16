import React from 'react'

import { Link} from "react-router-dom";

export default function Header(props) {

    function logout(){
        localStorage.clear();
        props.setIslogin(false);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/"><img src="https://img.icons8.com/fluent/38/000000/video-call.png"/> <span id="main-brand">Vcon</span><span id="main-brand-room">Room</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link overview-anchor" href="/">Overview <span className="sr-only">(current)</span></a>
                    </li>

                </ul>
                <div className="form-inline my-2 my-md-0">
                    {!props.islogin ? <>
                        <Link to={`/login`} className="nav-link"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button></Link>
                        <Link to={`/signup`} className="nav-link"><button className="btn btn-success signup-btn  my-2 my-sm-0" type="submit">Sign Up</button></Link>
                        </>:<>
                        <button onClick={()=>logout()} className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
                        </>}
                    
                </div>
            </div>
        </nav>
        

    )
}
