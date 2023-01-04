import React from 'react'
import './header.css';
import SearchIcon from '../../Assests/icnos/search-icon.png';
import MenuIcon from '../../Assests/icnos/menu-icon.png';
import NotificationIcon from '../../Assests/icnos/notification-icon.png';
import LogoutIcon from '../../Assests/icnos/logout-icon.png';
import AdminIcon from '../../Assests/icnos/admin-icon.png';
import AdminEditIcon from '../../Assests/icnos/admin-edit-icon.png';

export default function Header() {
    return (
        <div className='header'>
            <h3>Logo Here</h3>

            <div className='header-search'>
                <input type="text" placeholder="Search Temples, Trust, Evnets, News">
                </input>
                <img src={SearchIcon} />
            </div>

            <div className='header-right'>
                <div className='header-icons'>
                    <img src={MenuIcon} />
                </div>
                <div className='header-icons'>
                    <img src={NotificationIcon} />
                </div>
                <div className='header-icons'>
                    <img src={LogoutIcon} />
                </div>
                <div className='header-admin'>
                    <h4>Ranakpur Jain Temple</h4>
                    <p>Last Logged In: 16 March 2022, 4:37 PM</p>
                </div>
                <div className='header-admin-icon'>
                    <img src={AdminIcon} />
                </div>
                <div className='header-admin-edit-icon'>
                    <img src={AdminEditIcon} />
                </div>
            </div>
        </div>
    )
}
