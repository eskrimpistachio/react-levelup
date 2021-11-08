import React from "react";
import { Icon } from '@iconify/react';
import './History.css';

class History extends React.Component{
    render(){
        return(
            <div className="historypage">
                <div className="historyheader">
                    <h1>History</h1>
                    <div className="statusrecap">
                        <div className="totalsubmittedrecap">
                            <a>Total Submitted</a>
                        </div>
                        <div className="completedrecap">
                            <a>Completed</a>
                        </div>
                        <div className="pendingrecap">
                            <a>Pending</a>
                        </div>
                    </div>
                </div>
                <div className = "historystatus">
                    <div className="historybar">
                        <a className="alltext">All</a>
                        <a className="completedtext">Completed</a>
                        <a className="pendingtext">Pending</a>
                        <hr></hr>
                    </div>
                    <div className="navpanel">
                            <form>
                                <input className="searchpanel" type="text" placeholder ="Search.."></input>
                            </form>
                            <Icon icon="ant-design:search-outlined" color="#312e81" className="searchpanelicon"/>
                        <div className="filterpanel">
                            <Icon icon="bi:filter" color="#312e81" className="filterpanelicon"/><a>Filter</a>
                        </div>
                        <div className="datepanel">
                            <Icon icon="akar-icons:calendar" color="#312e81" className="datepanelicon"/><a>28 Oct 2021 - 31 Dec 2021</a><Icon icon="bi:arrow-down-short" color="#312e81" className="datapanelicon2"/>
                        </div>
                    </div>
                    <div className="datarecap">
                        <div className="databar">
                            <a>Name</a>
                            <a>Date</a>
                            <a>Amount</a>
                            <a>Reward</a>
                            <a>Status</a>
                        </div>
                        <div className="datalist1">
                            <a>Alfatih Rizqi Alfian</a>
                            <a >28/10/12</a>
                            <a className="amount1">15 Trash</a>
                            <a className="reward1">15 Pearls</a>
                            <div className="statusbar1">
                                <a>Completed</a>
                            </div>
                        </div>
                        <div className="datalist2">
                            <a>Alfatih Rizqi Alfian</a>
                            <a>30/10/12</a>
                            <a className="amount2">20 Trash</a>
                            <a className= "reward2" >20 Pearls</a>
                            <div className="statusbar2">
                                <a>Pending</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default History;