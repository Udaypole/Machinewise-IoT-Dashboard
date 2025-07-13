import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const thresholds = {
  temperature: 80,
  vibration: 20,
};

function getStatus(temp, vib) {
  if (temp > thresholds.temperature && vib > thresholds.vibration) return 'Critical';
  if (temp > thresholds.temperature || vib > thresholds.vibration) return 'Warning';
  return 'Healthy';
}

export default function App() {
  const [data, setData] = useState({ current: 0, voltage: 0, temperature: 0, vibration: 0 });
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:5000/api/data');
      setData(res.data);
      setStatus(getStatus(res.data.temperature, res.data.vibration));
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <header>
        <h1>MachineWise Dashboard</h1>
      </header>
      <main>
        <div className="sensor-cards">
          {Object.entries(data).map(([key, value]) => (
            <div
              key={key}
              className={`card ${
                value > thresholds[key] ? 'alert' : 'normal'
              }`}
            >
              <span className="label">{key.toUpperCase()}</span>
              <span className="value">{value}</span>
            </div>
          ))}
        </div>
        <div className={`status ${status.toLowerCase()}`}>Status: {status}</div>
      </main>
      <footer>
        <p>© 2025 MachineWise IoT | Developed by Uday</p>
      </footer>
    </div>
  );
}
