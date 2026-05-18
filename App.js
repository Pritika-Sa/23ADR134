import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch('http://4.224.186.213/evaluation-service/notifications')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNotifications(data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Campus Notification Platform</h1>

      <div className="box">
        <h2>Latest Notifications</h2>

        {notifications.length === 0 ? (
          <p>Loading notifications...</p>
        ) : (
          <ul>
            {notifications.map((item, index) => (
              <li key={index}>
                {item.message || item.title || "Notification"}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;