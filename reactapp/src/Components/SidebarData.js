import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData=[
    {
        title:'Agents',
        icons:<FaIcons.FaUserSecret/>,
        path:'Agents',
        cName: 'nav-text'
    },
    {
        title:'Users',
        icons:<FaIcons.FaUserAlt/>,
        path:'Users',
        cName: 'nav-text'
    },
    {
        title:'Property',
        icons:<AiIcons.AiFillHome/>,
        path:'Property',
        cName: 'nav-text'
    },
    {
        title:'Revenue',
        icons:<IoIcons.IoIosStats/>,
        path:'Revenue',
        cName: 'nav-text'
    }
]