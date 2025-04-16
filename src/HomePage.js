import { useNavigate } from 'react-router-dom';
import './App.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: "url('/nyc-compost-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className="content-bubble">
        <h1>🗽 Manhattan Compost Tracker</h1>
        <p><strong>Helping NYC go greener — one building at a time.</strong></p>
        <div className="menu">
          <button onClick={() => navigate('/map')}>Live Composting Map</button>
          <button onClick={() => navigate('/report')}>Report Your Building</button>
          <button>Resources</button>
          <button onClick={() => navigate('/about')}>About</button>
        </div>

        <div className="share-banner">
            💬 Know a building that composts (or doesn’t)?  
            <strong>Share this app with friends and neighbors!</strong>
        </div>

      </div>
    </div>
  );
}

export default HomePage;
