import React from 'react';
import { Icon } from '@iconify/react';
import './Navibar.css';
import {Link} from 'react-router-dom';

class Navibar extends React.Component{
    render(){
        return (
            <div className="sidebarleft">
                <div className= "navbar">
                    <div className="companylogo">
                        <Icon icon="akar-icons:send" className="arrow" />
                        <Icon icon="ci:trash-empty"  className="trash"/>
                        <a>Trash <span style={{color :"#50CB93"}}>Submitter</span></a>
                    </div>
                    <div className = "user">
                        <Icon icon="healthicons:ui-user-profile-outline" className="userprofile" />
                        <a className="username">Alfatih Rizqi Alfian</a>
                    </div>
                    <div className = "navmenu">
                        <Link to ="/" className="dashboard"><Icon icon="ant-design:home-filled" className="home" /><a>Dashboard</a></Link>
                        <Link to ="/MainSubmit" className="submityourtrash"> <Icon icon="bi:download" className="downloadicon" /><a>Submit your Trash</a></Link>
                        <Link to = "/MainLeaderboard"className="leaderboard"><Icon icon="akar-icons:trophy" className="trophyicon" /><a>Leaderboards</a></Link>
                        <Link to ="/History" className="historymenu"><Icon icon="akar-icons:clock" className="historysymbol"/><a>History</a></Link>
                        <div className="activenavpanel start"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navibar ;