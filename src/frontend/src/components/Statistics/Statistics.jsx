import { mockWeeklyStats, mockDailyStats } from '../../data/mockData';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';
import { TrendingUp, Calendar, Clock } from 'lucide-react';
import './Statistics.css';

export default function Statistics() {
  const weeklyData = mockWeeklyStats.dates.map((date, idx) => ({
    date,
    'Correct Posture': mockWeeklyStats.correctRatio[idx],
    'Incorrect Posture': mockWeeklyStats.badRatio[idx],
    'Usage Hours': mockWeeklyStats.usageHours[idx]
  }));

  const monthlyData = [
    { week: 'Week 1', correct: 62, usage: 40 },
    { week: 'Week 2', correct: 65, usage: 42 },
    { week: 'Week 3', correct: 58, usage: 38 },
    { week: 'Week 4', correct: 72, usage: 45 },
  ];

  const hourlyData = [
    { hour: '09:00', correct: 85 },
    { hour: '10:00', correct: 78 },
    { hour: '11:00', correct: 72 },
    { hour: '12:00', correct: 65 },
    { hour: '14:00', correct: 80 },
    { hour: '15:00', correct: 75 },
    { hour: '16:00', correct: 70 },
    { hour: '17:00', correct: 68 },
  ];

  return (
    <div className="statistics">
      <div className="statistics-header">
        <h1>📊 Detailed Statistics</h1>
        <p>Analyze your posture improvement in detail</p>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <h3>Weekly Average</h3>
          <div className="summary-value">{mockWeeklyStats.weekAverage.toFixed(1)}%</div>
          <p>Correct Posture Ratio</p>
        </div>

        <div className="summary-card">
          <h3>This Week's Best</h3>
          <div className="summary-value">{Math.max(...mockWeeklyStats.correctRatio)}%</div>
          <p>Best Performance</p>
        </div>

        <div class="summary-card">
          <h3>Average Usage Time</h3>
          <div className="summary-value">{(mockWeeklyStats.usageHours.reduce((a, b) => a + b) / 7).toFixed(1)}</div>
          <p>hours/day</p>
        </div>

        <div className="summary-card">
          <h3>Streak Days</h3>
          <div className="summary-value">23<span>days</span></div>
          <p>Current Streak</p>
        </div>
      </div>

      {/* Weekly Trend */}
      <div className="chart-section">
        <h2>📈 Weekly Trend</h2>
        <div className="chart-card">
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={weeklyData}>
              <defs>
                <linearGradient id="colorCorrect" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#667eea" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#667eea" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="Correct Posture"
                stroke="#667eea"
                fillOpacity={1}
                fill="url(#colorCorrect)"
              />
              <Area
                type="monotone"
                dataKey="Incorrect Posture"
                stroke="#fa709a"
                fillOpacity={1}
                fill="#fa709a"
                opacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Monthly Comparison */}
      <div className="charts-row">
        <div className="chart-card">
          <h3>Monthly Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="correct" name="Correct Posture (%)" fill="#667eea" radius={[8, 8, 0, 0]} />
              <Bar dataKey="usage" name="Usage Hours (h)" fill="#feca57" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Hourly Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="correct"
                name="Correct Posture (%)"
                stroke="#43e97b"
                strokeWidth={2}
                dot={{ fill: '#43e97b', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Insights */}
      <div className="insights-section">
        <h2>💡 Insights</h2>
        <div className="insights-grid">
          <div className="insight-card">
            <div className="insight-icon">📈</div>
            <h4>Improving</h4>
            <p>Your posture has improved by 5% compared to last week.</p>
          </div>

          <div className="insight-card">
            <div className="insight-icon">⏰</div>
            <h4>Best Time</h4>
            <p>10 AM shows the best posture.</p>
          </div>

          <div className="insight-card">
            <div className="insight-icon">🎯</div>
            <h4>Until Goal</h4>
            <p>7.9% remaining until 80% goal.</p>
          </div>

          <div className="insight-card">
            <div className="insight-icon">🔔</div>
            <h4>Attention Needed</h4>
            <p>Posture worsens between 3-5 PM.</p>
          </div>
        </div>
      </div>

      {/* Detailed Stats Table */}
      <div className="stats-table-section">
        <h2>📋 Detailed Statistics</h2>
        <div className="table-wrapper">
          <table className="stats-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Correct Posture</th>
                <th>Incorrect Posture</th>
                <th>Usage Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {mockWeeklyStats.dates.map((date, idx) => (
                <tr key={idx}>
                  <td>{date}</td>
                  <td>
                    <div className="stat-bar">
                      <div className="stat-fill good" style={{ width: `${mockWeeklyStats.correctRatio[idx]}%` }}>
                        {mockWeeklyStats.correctRatio[idx]}%
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="stat-bar">
                      <div className="stat-fill bad" style={{ width: `${mockWeeklyStats.badRatio[idx]}%` }}>
                        {mockWeeklyStats.badRatio[idx]}%
                      </div>
                    </div>
                  </td>
                  <td>{mockWeeklyStats.usageHours[idx]}h</td>
                  <td>
                    <span className={`status ${mockWeeklyStats.correctRatio[idx] > 70 ? 'excellent' : 'good'}`}>
                      {mockWeeklyStats.correctRatio[idx] > 70 ? '✓ Excellent' : '○ Good'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Export Section */}
      <div className="export-section">
        <h2>📥 Export Data</h2>
        <div className="export-buttons">
          <button className="export-btn">📊 PDF Report</button>
          <button className="export-btn">📈 Export CSV</button>
          <button className="export-btn">📧 Send Email</button>
        </div>
      </div>
    </div>
  );
}
