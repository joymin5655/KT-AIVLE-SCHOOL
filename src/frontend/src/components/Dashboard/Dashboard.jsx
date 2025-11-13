import { useEffect, useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockDailyStats, mockWeeklyStats, mockNotifications, mockGamification } from '../../data/mockData';
import { AlertCircle, TrendingUp, Award, Zap } from 'lucide-react';
import './Dashboard.css';

export default function Dashboard() {
  const [stats, setStats] = useState(mockDailyStats);
  const [weeklyData, setWeeklyData] = useState(mockWeeklyStats);
  const [notifications, setNotifications] = useState(mockNotifications);

  const chartColors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b'];

  const dailyPieData = [
    { name: 'Good Posture', value: stats.correctPosture },
    { name: 'Poor Posture', value: stats.incorrectPosture }
  ];

  const weeklyChartData = weeklyData.dates.map((date, idx) => ({
    date,
    'Good Posture': weeklyData.correctRatio[idx],
    'Poor Posture': weeklyData.badRatio[idx],
    'Usage Hours': weeklyData.usageHours[idx]
  }));

  const postureBreakdownData = [
    { name: 'Good', value: stats.postureBreakdown.good, color: '#43e97b' },
    { name: 'Type 1', value: stats.postureBreakdown.bad1, color: '#fa709a' },
    { name: 'Type 2', value: stats.postureBreakdown.bad2, color: '#f093fb' },
    { name: 'Type 3', value: stats.postureBreakdown.bad3, color: '#4facfe' },
    { name: 'Type 4', value: stats.postureBreakdown.bad4, color: '#feca57' }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>📊 Dashboard Overview</h1>
        <p>Real-time posture monitoring statistics</p>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card green">
          <div className="stat-icon">✓</div>
          <div className="stat-content">
            <p className="stat-label">Good Posture</p>
            <h3>{stats.correctPercentage.toFixed(1)}%</h3>
            <p className="stat-value">{stats.correctPosture} times</p>
          </div>
        </div>

        <div className="stat-card red">
          <div className="stat-icon">✕</div>
          <div className="stat-content">
            <p className="stat-label">Poor Posture</p>
            <h3>{stats.incorrectPercentage.toFixed(1)}%</h3>
            <p className="stat-value">{stats.incorrectPosture} times</p>
          </div>
        </div>

        <div className="stat-card blue">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <p className="stat-label">Level</p>
            <h3>Lv. {mockGamification.level}</h3>
            <p className="stat-value">{mockGamification.points} points</p>
          </div>
        </div>

        <div className="stat-card purple">
          <div className="stat-icon">🔥</div>
          <div className="stat-content">
            <p className="stat-label">Daily Streak</p>
            <h3>{mockGamification.dailyStreak} days</h3>
            <p className="stat-value">Best: {mockGamification.bestStreak} days</p>
          </div>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="charts-row">
        {/* Daily Pie Chart */}
        <div className="chart-card">
          <h3>📊 Today's Posture Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dailyPieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                <Cell fill="#43e97b" />
                <Cell fill="#fa709a" />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Posture Breakdown */}
        <div className="chart-card">
          <h3>📈 Posture Type Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={postureBreakdownData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {postureBreakdownData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="charts-row">
        {/* Weekly Trend */}
        <div className="chart-card full-width">
          <h3>📅 Weekly Trends</h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={weeklyChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="Good Posture"
                stroke="#667eea"
                strokeWidth={2}
                dot={{ fill: '#667eea', r: 4 }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="Poor Posture"
                stroke="#fa709a"
                strokeWidth={2}
                dot={{ fill: '#fa709a', r: 4 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="Usage Hours"
                stroke="#feca57"
                strokeWidth={2}
                dot={{ fill: '#feca57', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Info Cards */}
      <div className="info-row">
        <div className="info-card">
          <h4>📍 Status</h4>
          <div className="info-content">
            <p><strong>Total Detections:</strong> {stats.totalDetections} times</p>
            <p><strong>Time Seated:</strong> {stats.timeInSeat}</p>
            <p><strong>Time Absent:</strong> {stats.timeAbsent}</p>
            <p><strong>Usage Hours:</strong> {stats.usageHours} hours</p>
          </div>
        </div>

        <div className="info-card">
          <h4>🔔 Notifications</h4>
          <div className="notifications-list">
            {notifications.map((notif) => (
              <div key={notif.id} className={`notification-item ${notif.type}`}>
                <span className="notif-message">{notif.message}</span>
                <span className="notif-time">{notif.timestamp}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="info-card">
          <h4>💡 Recommendations</h4>
          <div className="recommendations">
            <div className="rec-item">
              <span className="rec-icon">📍</span>
              <p>Improve your posture with regular stretching</p>
            </div>
            <div className="rec-item">
              <span className="rec-icon">⏰</span>
              <p>Check your posture every 30 minutes</p>
            </div>
            <div className="rec-item">
              <span className="rec-icon">🎯</span>
              <p>Practice posture correction through games</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
