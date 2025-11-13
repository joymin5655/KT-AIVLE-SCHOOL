import { mockGamification } from '../../data/mockData';
import { Star, Trophy, Flame, Lock } from 'lucide-react';
import './Gamification.css';

export default function Gamification() {
  const progressPercent = (mockGamification.pointsToNextLevel / mockGamification.points) * 100;

  return (
    <div className="gamification">
      <div className="gamification-header">
        <h1>🎮 Gamification System</h1>
        <p>Earn points and level up by improving your posture!</p>
      </div>

      {/* Level and Points */}
      <div className="level-section">
        <div className="level-card">
          <div className="level-display">
            <div className="level-badge">Lv.</div>
            <div className="level-number">{mockGamification.level}</div>
          </div>
          <h3>Current Level</h3>
          <p className="level-title">Posture Master</p>
        </div>

        <div className="points-card">
          <div className="points-header">
            <h3>Points</h3>
            <p className="points-amount">{mockGamification.points} / {mockGamification.points + mockGamification.pointsToNextLevel}</p>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
          <p className="next-level">{mockGamification.pointsToNextLevel} points to next level</p>
        </div>

        <div className="streak-card">
          <div className="streak-display">
            <Flame size={40} color="#ff4757" />
          </div>
          <h3>{mockGamification.dailyStreak}</h3>
          <p>Daily Streak</p>
          <p className="streak-info">Best Streak: {mockGamification.bestStreak} days</p>
        </div>
      </div>

      {/* Achievements */}
      <div className="achievements-section">
        <h2>🏆 Achievements</h2>
        <div className="achievements-grid">
          {mockGamification.achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <h4>{achievement.name}</h4>
              {achievement.unlocked ? (
                <p className="unlock-date">✓ {achievement.date}</p>
              ) : (
                <p className="locked-text">Locked</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="leaderboard-section">
        <h2>🏅 Leaderboard</h2>
        <div className="leaderboard-table">
          <div className="leaderboard-header">
            <div className="rank-col">Rank</div>
            <div className="user-col">User</div>
            <div className="points-col">Points</div>
          </div>
          {mockGamification.leaderboard.map((user) => (
            <div
              key={user.rank}
              className={`leaderboard-row ${user.rank === 1 ? 'top' : ''}`}
            >
              <div className="rank-col">
                <span className="rank-badge">
                  {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : user.rank === 3 ? '🥉' : user.rank}
                </span>
              </div>
              <div className="user-col">
                <img src={user.avatar} alt={user.username} className="user-avatar" />
                <span>{user.username}</span>
              </div>
              <div className="points-col">{user.points.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Challenges */}
      <div className="challenges-section">
        <h2>⭐ Daily Challenges</h2>
        <div className="challenges-grid">
          <div className="challenge-card completed">
            <div className="challenge-icon">✓</div>
            <h4>Morning Check-in</h4>
            <p>Login before 9:00 AM</p>
            <div className="challenge-reward">+50 Points</div>
          </div>
          <div className="challenge-card completed">
            <div className="challenge-icon">✓</div>
            <h4>2-Hour Monitoring</h4>
            <p>Monitor posture for 2+ hours</p>
            <div className="challenge-reward">+100 Points</div>
          </div>
          <div className="challenge-card in-progress">
            <div className="challenge-icon">🎯</div>
            <h4>Perfect Posture</h4>
            <p>Maintain correct posture for 30 minutes</p>
            <div className="challenge-progress">5 min / 30 min</div>
          </div>
          <div className="challenge-card">
            <div className="challenge-icon">🔒</div>
            <h4>Stretching Master</h4>
            <p>Complete 3 stretches</p>
            <div className="challenge-reward">+150 Points</div>
          </div>
        </div>
      </div>

      {/* Rewards */}
      <div className="rewards-section">
        <h2>🎁 Rewards Shop</h2>
        <div className="rewards-grid">
          <div className="reward-item">
            <div className="reward-icon">📱</div>
            <h4>Mobile App Premium</h4>
            <p>1 Month Subscription</p>
            <div className="reward-cost">2500 Points</div>
            <button className="buy-btn">Purchase</button>
          </div>
          <div className="reward-item">
            <div className="reward-icon">🎓</div>
            <h4>Posture Correction Course</h4>
            <p>Expert Lectures</p>
            <div className="reward-cost">5000 Points</div>
            <button className="buy-btn">Purchase</button>
          </div>
          <div className="reward-item">
            <div className="reward-icon">👔</div>
            <h4>Theme Change Voucher</h4>
            <p>5 Themes</p>
            <div className="reward-cost">1000 Points</div>
            <button className="buy-btn">Purchase</button>
          </div>
          <div className="reward-item disabled">
            <div className="reward-icon">💎</div>
            <h4>Premium Badge</h4>
            <p>Limited Edition</p>
            <div className="reward-cost">10000 Points</div>
            <button className="buy-btn" disabled>Insufficient Points</button>
          </div>
        </div>
      </div>
    </div>
  );
}
