import React from 'react';
import './index.css';

// Icon
import { IoHome } from 'react-icons/io5';
import { BsTelephoneFill } from "react-icons/bs"
import { MdMarkEmailUnread } from 'react-icons/md'

const now = new Date();

const Footer = (props) => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-title'>
                    <h3 className='name-club'>RMIT KENDO CLUB</h3>
                </div>
                <div className='info-container'>
                    <div className='info-1'>
                        <a href="https://goo.gl/maps/f55QTuiRxjU12qzr9" target="_blank">
                            <div className='address'>
                                <IoHome /> 702 Nguyễn Văn Linh, Phường Tân Hưng, Quận 7, TP.Hồ Chí Minh
                            </div>
                        </a>
                        <div className='contact'>
                            <BsTelephoneFill /> 0909101248 - Bảo
                        </div>
                        <div className='social'>
                            <MdMarkEmailUnread /> tinskin1@gmail.com
                        </div>
                    </div>
                    <div className='info-2'>
                        <a href="https://goo.gl/maps/f55QTuiRxjU12qzr9" target="_blank">
                            <div className='address'>
                                <IoHome /> 702 Nguyễn Văn Linh, Phường Tân Hưng, Quận 7, TP.Hồ Chí Minh
                            </div>
                        </a>
                        <div className='contact'>
                            <BsTelephoneFill /> 0909101248 - Bảo
                        </div>
                        <div className='social'>
                            <MdMarkEmailUnread /> tinskin1@gmail.com
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <small>&copy; Copyright {now.getFullYear()}, RMIT Kendo Club</small>
            </div>
        </footer>
    );
}

export default Footer;
