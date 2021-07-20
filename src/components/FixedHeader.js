import React from 'react';
import { FaRegEnvelope , FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import './FixedHeader.css';
import logo from "./images/downloaded.png";
import { DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const FixedHeader = () => {
    return (
        <div className='fixed-header'>
            <div className="contact-container">
                <div className="contact-button">
                <FaRegEnvelope className="icon"/>
                    adele@hello.com
                </div>
                <div className="separator"></div>
                <div className="contact-button">
                <FaPhoneAlt className="icon"></FaPhoneAlt>
                    1234567890
                </div>
                <div className="separator"></div>
                <div className="contact-button">
                <FaWhatsapp className="icon"></FaWhatsapp>
                    1234567890
                </div>
                <div className="request">Request a Quote</div>
            </div>
            <div className="logo-container">
                <a className="logo" href=".">
                <img  src={logo} alt="logo here" />
                </a>
                <div className="dropdown-container">
                <Dropdown >
                <Dropdown.Toggle id="dropdown-custom-1">Pow! Zoom!</Dropdown.Toggle>
                <Dropdown.Menu className="super-colors">
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                Active Item
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>{' '}
                </div>
                </div>
            </div>
    );
}


 
 
export default FixedHeader;