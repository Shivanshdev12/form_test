import { Fragment } from "react";
import { IoNotificationsOutline } from 'react-icons/io5';
import Logo from "../assets/logo-removebg-preview.png";
import MailLogo from "../assets/icon-park_email-down.png";
import "./Verify.css";

const Verify = () => {
    return (
        <Fragment>
            <div className="verify">
                <div className="header">
                    <div className="header_firstChild">
                        <img src={Logo} alt="logo" className="header_img" />
                        <h3>Ramaera Industries</h3>
                    </div>
                    <div className="header_secondChild">
                        <span>
                            <IoNotificationsOutline />
                        </span>
                        <select>
                            <option>English (U.K.)</option>
                            <option>English (U.S.)</option>
                        </select>
                    </div>
                </div>
                <hr />
                <div className="verify_code">
                    <h3>Welcome <span>Ramera</span>, Please enter the code sent to your registered Email ID.</h3>
                    <hr />
                    <img src={MailLogo} alt="maildown" className="verify_img" />
                    <button className="btn">Open</button>
                </div>
            </div>
        </Fragment>)
}

export default Verify;