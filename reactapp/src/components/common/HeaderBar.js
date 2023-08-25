import { useState } from "react";
import SignupForm from "./SignupForm";
import SigninForm from "./SigninForm";
export default function HeaderBar() {
    const [signup, setSignup] = useState(false);
    const [signin, setSignin] = useState(false)
    console.log(signup)
    const handleOpenSignup = () => setSignup(true)
    const handleOpenSignin = () => setSignin(true);
    const handleCloseSignup = () => setSignup(false);
    const handleCloseSignin = () => setSignin(false);

    return (
        <div className="site-header py-0">
            <nav className="navbar navbar-dark  py-3 container d-flex flex-column flex-md-row justify-content-between ">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ marginLeft: -8 }} href="#">
                        <img src={require("../../assets/logodark.png")} alt=" " width="120" height="41" className="d-inline-block align-text-top" />
                    </a>
                    <div className="d-flex flex-row-reverse">
                        <button style={{ marginRight: 0 }} type="button" className="btn btn-danger px-4" onClick={() => { handleOpenSignup() }}>Signup</button>
                        <button style={{ marginRight: 10 }} type="button" className="btn btn-outline-danger px-4" onClick={() => { handleOpenSignin() }}>Signin</button>
                    </div>

                </div>
            </nav>
            <SignupForm show={signup} onHide={handleCloseSignup} openSignin={handleOpenSignin}></SignupForm>
            <SigninForm show={signin} onHide={handleCloseSignin} openSignup={handleOpenSignup}></SigninForm>
        </div>

    )
}