import React from 'react';
import './Dashboard.css';

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from './Data';

import BarChart from './BarChart';
Chart.register(CategoryScale);
Chart.defaults.backgroundColor = '#fff';

const Dashboard = () => {

    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.country), 
        datasets: [
          {
            label: "Link Clicks ",
            data: Data.map((data) => data.userGain),
            backgroundColor: [
              "#ffffff ",
              "#ffd800",
              "#96331e",
              "#2154f4 ",
              "#bd00ff"
            ],
            borderColor: "black",
            borderWidth: 5,
            borderRadius: 5,
          }
        ]
    });

    return(
        <div className='Dashboard'>
            
            <div className='sidebar'>

                <img src='logo.png' alt='JazCodeIt.ca' />

                <ul>
                    <li>Home</li>
                    <li>My Links</li>
                    <li>Create Link</li>
                    <li>Shop</li>
                    <li>Report Issue</li>
                    <li>Logout</li>
                </ul>
            
            </div>

            <div className='main'>

                <div className='chart'>
                    <BarChart chartData={chartData} />
                </div>

                <div className='accountInfo'>
                
                    <div className='limit'>
                        <i className='bi bi-link-45deg'></i>
                        <h1>4/5</h1>
                        <p>Link Limit (<a href='./Pay' rel='noreferrer'>Increase Limit</a> )</p>       
                    </div>

                    <div className='total'>
                        <i class="bi bi-graph-up-arrow"></i>
                        <h1>104,343</h1>
                        <p>Total Clicks</p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;