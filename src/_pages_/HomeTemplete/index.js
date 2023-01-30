import React, { Component } from 'react';
import Countdown from '../../../_components_/Countdown';
import Sidebar from '../../../_components_/Sidebar';

import '../HomeTemplate/index.css';

export default class HomeTemplate extends Component {
    render() {
        const openInNewTab = url => {
            window.open(url, '_blank', 'noopener,noreferrer');
        };

        return (
            <div>
                <Sidebar />

                <Countdown
                    timeTillDate="12 31 2022, 24:00 pm"
                    timeFormat="MM DD YYYY, h:mm a" />

                <div className='button-container'>
                    <div className='buttonToLink'>
                        <button className='btn btn-success center' onClick={() => openInNewTab('https://docs.google.com/spreadsheets/d/1k_AGxjFLSNZj7aPNnze7OMoZXm65Xp5cgwXooa-5ZuE/edit#gid=0')}>
                            RMIT KENDO CLUB
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}