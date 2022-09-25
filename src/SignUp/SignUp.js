import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-removebg-preview.png";
import "./SignUp.css";

const SignUp = () => {
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
                        <h5>RAMAERA is the future of upcoming Industrialisation in India,aiming presence in all kind of manufacturing sectors</h5>
                    </div>
                </div>
                <div className="form-main">
                    <div className="form-main_form">
                        <h2>Register Individual Account!</h2>
                        <p>For the purpose of industry regulation, your details are required.</p>
                        <form>
                            <input type="text" name="firstname" placeholder="First Name" />
                            <input type="text"
                                name="lastname"
                                placeholder="Last Name" />
                            <input type="email" name="email" placeholder="Email" />
                            <input type="text" name="referrel"
                                placeholder="Referrel-ID" />
                            <input type="password" name="password" placeholder="Password" />
                            <button type="submit">
                                <NavLink to="/verify" className="submit">Submit</NavLink>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment >)
}

export default SignUp;
