import React from 'react';
import './index.css';

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

const RegistrationForm = (props) => {
    return (
        <div className="registration-form">
            <div className='registration-background'>

            </div>
            <div className='button-registration'>
                <div className='buttonToLink'>
                    <button className='btn btn-warning center p-3 fw-bold' onClick={() => openInNewTab('https://docs.google.com/spreadsheets/d/1k_AGxjFLSNZj7aPNnze7OMoZXm65Xp5cgwXooa-5ZuE/edit#gid=0')}>
                        REGISTRATION FORM
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegistrationForm;