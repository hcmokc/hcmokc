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
        title: 'Background', 
        path: '/',
        icon: <AiIcons.AiFillPicture/>,
        cname:'nav-text',
    },
    {
        title: 'Timeline', 
        path: '/',
        icon: <AiIcons.AiOutlineFieldTime/>,
        cname:'nav-text',
    },
    {
        title: 'Team', 
        path: '/',
        icon: <IoIcons.IoMdPeople/>,
        cname:'nav-text',
    },
    {
        title: 'Report', 
        path: '/',
        icon: <AiIcons.AiOutlinePaperClip/>,
        cname:'nav-text',
    },
]
