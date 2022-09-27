import { Fragment, useRef } from "react";
import { useHistory } from "react-router-dom";
import logo from "../assets/logo-removebg-preview.png";
import CryptoJS from "crypto-js";
import "./SignUp.css";

const SignUp = () => {
    const history = useHistory();
    const firstName = useRef();
    const lastName = useRef();
    const emailRef = useRef();
    const referrelRef = useRef();
    const passwordRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        let obj = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: emailRef.current.value,
            referrelID: referrelRef.current.value,
            password: CryptoJS.MD5(passwordRef.current.value)
        }
        // Although password should not be stored in session or localStorage as it is
        sessionStorage.setItem(obj.email, JSON.stringify(obj));
        history.push("/verify");
    }
    return (
        <Fragment>
            <div className="form">
                <div className="form-side">
                    <div className="form-side_img">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="form-side_head">
                        <h2>Registration</h2>
                        <h3>Become a Partner</h3>
                        <p>RAMAERA is the future of upcoming Industrialisation in India,aiming presence in all kind of manufacturing sectors</p>
                    </div>
                </div>
                <div className="form-main">
                    <div className="form-main_form">
                        <h2>Register Individual Account!</h2>
                        <p>For the purpose of industry regulation, your details are required.</p>
                        <form onSubmit={submitHandler}>
                            <input type="text" name="firstname" placeholder="First Name" ref={firstName} required />
                            <input type="text"
                                name="lastname"
                                placeholder="Last Name" ref={lastName} required />
                            <input type="email" name="email" placeholder="Email" ref={emailRef} required />
                            <input type="text" name="referrel"
                                placeholder="Referrel-ID" ref={referrelRef} />
                            <input type="password" name="password" placeholder="Password" ref={passwordRef} required />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment >)
}

export default SignUp;
