import React from 'react'
import './home.scss';
import Leftbar from '../../components/leftbar/Leftbar';
import Middlepart from '../../components/middlepart/Middlepart';
import Rightbar from '../../components/rightbar/Rightbar';
import Topbar from '../../components/topbar/Topbar';

import './home.scss';

export default function Home() {
    return (
        <div>
            <Topbar />
            <div className="homeContainer">
                <Leftbar />
                <Middlepart />
                <Rightbar />
            </div>
        </div>
    )
}
