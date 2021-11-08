import React from "react";
import { Icon } from '@iconify/react';
import './MainLeaderboard.css';

class MainLeaderboard extends React.Component {
    render(){
        return(
            <div className="leaderboardcontain">
                <div className="top3leaderboard">
                    <a className="top3leaderboardtext">Leaderboards</a>
                    <div className="timepanel">
                        <div className="alltimepanel">
                            <a className="alltime">All Time</a>
                        </div>
                        <a className="thisweek">This Week</a>
                        <a className="thismonth">This Month</a>
                    </div>

                    <div className="topprofile">
                        <div className="top1">
                            <Icon icon="emojione:crown" color="#312e81" className="crown" />
                            <Icon icon="healthicons:ui-user-profile-outline" color="#fffff" className="top1profile" />
                        </div>
                        <div className="top1name">
                            <a>85 Pearls</a>
                            <a>Alfatih Rizqi Alfian</a>
                        </div>
                        <div className="top2">
                            <a className="rankNumbers">2</a>
                            <Icon icon="bx:bx-right-arrow" color="#ffce31" rotate={1} className="arrow2" />
                            <Icon icon="healthicons:ui-user-profile-outline" color="#fffff" className="top2profile"/>
                        </div>
                        <div className="top2name">
                            <a>80 Pearls</a>
                            <a>Muhammad Raihan Parama</a>
                        </div>
                        <div className="top3">
                            <a className="rankNumbers">3</a>
                            <Icon icon="bx:bx-right-arrow" color="#ffce31" rotate={1} className="arrow3" />
                            <Icon icon="healthicons:ui-user-profile-outline" color="#fffff" className="top3profile"/>
                        </div>
                        <div className="top3name">
                            <a>78 Pearls</a>
                            <a>Ali Rafli</a>
                        </div>
                    </div>
                </div>
                <div className="allleaderboardlist">
                    <a className="numberlist">4.</a>
                    <a className="namelist">Kareem Abdul Jabar</a>
                    <a className="pearlslist">65</a>
                </div>
                <div className="divisionline" ></div>
            </div>
        )
    }
}

export default MainLeaderboard ;