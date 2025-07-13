# MachineWise IoT Dashboard

This project is a simple yet functional simulation of a real-time industrial monitoring dashboard. It was built using **React.js** on the frontend and **Node.js with Express** on the backend. The dashboard fetches mock machine sensor data—such as current, voltage, temperature, and vibration—every 5 seconds, and dynamically displays the machine's health status.

### Status Logic:
- **Critical**: When temperature > 80°C *and* vibration > 20 mm/s
- **Warning**: When either temperature *or* vibration crosses the limit
- **Healthy**: When both are within the safe range

---

## 🧠 How I Approached It
The first step was to define a clear and testable logic for determining machine status. I chose to simulate data on the backend using a simple Express server that returns randomized values to mimic real-world fluctuations. This kept the project lightweight and easy to test without relying on actual hardware.

For the frontend, I used React with functional components and hooks (`useEffect`, `useState`) to manage data updates. The UI is intentionally clean and minimal—each metric is displayed as a colored card that updates in real-time. Status is determined dynamically based on the sensor readings and is styled to indicate severity clearly.

---

## 🚀 What I'd Improve for Production
If I were to take this dashboard into a production environment, I’d focus on:
- **Real-time data streaming** using MQTT or WebSockets
- **Charts and trend analysis** with libraries like Chart.js or Recharts
- **User management** and secure login systems
- **Responsive design** for mobile and tablet views
- **Error handling & retry logic** for unstable connections
- **Backend integration** with actual sensor hardware via serial port or IoT gateway


