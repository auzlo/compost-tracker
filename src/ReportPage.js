import { useNavigate } from 'react-router-dom';
import './ReportPage.css';

function ReportPage() {
  const navigate = useNavigate();

  return (
    <div className="report-container">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Homepage
      </button>

      <div className="report-card">
        <h2>📝 Report Your Building</h2>

        <form>
          <label>
            Address:
            <input type="text" placeholder="123 Green St, Manhattan" />
          </label>

          <label>
            Number of Units in Building:
            <input type="number" min="1" placeholder="e.g. 12" />
          </label>

          <label>
            Are composting bins provided?
            <select>
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          <label>
            Number of Composting Bins:
            <input type="number" min="0" placeholder="e.g. 2" />
          </label>

          <label>
            Upload a photo (optional):
            <input type="file" disabled />
          </label>

          <button type="submit" className="submit-button">Submit Report</button>
        </form>
      </div>
    </div>
  );
}

export default ReportPage;
