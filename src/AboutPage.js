import { useNavigate } from 'react-router-dom';
import './App.css';

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <button className="back-button" onClick={() => navigate('/')}>← Back to Homepage</button>

      <div className="about-content">
        <h2> About This Project</h2>

        <p><strong>Putting power into the hands of New Yorkers!</strong></p>

        <p>
          This app was created as a public service to hold landlords accountable for following NYC’s composting laws.
          By tracking which buildings do or don’t offer composting, we can help keep our city cleaner and greener.
        </p>

        <p>
          If your building doesn’t provide bins — report it! If it does — even better, let us know!
        </p>

        <p>
          <strong>The more reports we have, the more power we have. </strong>
            Please share this app with your neighbors, friends, and communities.
        </p>

        <p style={{ fontSize: '0.9rem', color: '#2c6e49', marginTop: '2rem' }}>
         Designed by Auz LoPinto for their <em>Design with Climate Change</em> class.
        </p>

      </div>
    </div>
  );
}

export default AboutPage;
