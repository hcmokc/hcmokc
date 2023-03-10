import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const itemSidebar = [
    {
        title: 'Home', 
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cname:'nav-text',
    },
    {
        title: 'Tournament', 
        path: '/match-info',
        icon: <AiIcons.AiFillPicture/>,
        cname:'nav-text',
    },
]
