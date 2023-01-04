import './sub-header.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SubHeader() {
    const navigate = useNavigate()

    return (
        <div className='sub-header'>
            <div onClick={() => navigate("/dashboard")}>Dashboard</div>
            <div onClick={() => navigate("/donation")}>Donation</div>
            <div onClick={() => navigate("/committment")}>Committment</div>
            <div onClick={() => navigate("/daanpeticollection")}>Daan Peti Collections</div>
            <div onClick={() => navigate("/finiancial")}>Financial Reports</div>
            <div onClick={() => navigate("/internalexpenses")}>Internal Expenses</div>
            <div onClick={() => navigate("/events")}>Events</div>
            <div onClick={() => navigate("/news")}>News</div>
            <div onClick={() => navigate("/notices")}>Notices</div>
            <div onClick={() => navigate("/configuration")}>Configuration</div>
        </div>
    )
}
