import React from 'react';
import './index.css';

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

const RegistrationForm = (props) => {
    return (
        <div className="registration-form">
            <h3 className='registration-title'>Registration</h3>
            <div className='button-registration'>
                <div className='buttonToLink'>
                    <button className='btn btn-success center' onClick={() => openInNewTab('https://docs.google.com/spreadsheets/d/1k_AGxjFLSNZj7aPNnze7OMoZXm65Xp5cgwXooa-5ZuE/edit#gid=0')}>
                        RMIT KENDO CLUB
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegistrationForm;