import React, { useEffect, useState } from 'react';
import './Sale.css';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const Revenue = () => {
  const [todayRevenue, setTodayRevenue] = useState(0);

  useEffect(() => {
    const fetchTodayRevenue = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/todayrevenue`);
        setTodayRevenue(response.data.todayRevenue);
      } catch (error) {
        console.error('Error fetching todays revenue:', error);
      }
    };

    fetchTodayRevenue();
  }, []);

  return (
    <div>
      <h2>Today's Revenue: ₹{todayRevenue}</h2>
    </div>
  );
};
export default Revenue;
