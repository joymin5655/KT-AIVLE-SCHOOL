import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Edit2, Save, X, Camera } from 'lucide-react';
import './Profile.css';

export default function Profile() {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nickname: user?.nickname || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      nickname: user?.nickname || '',
      email: user?.email || '',
      phone: user?.phone || ''
    });
    setIsEditing(false);
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <h1>👤 Profile</h1>
        <p>Manage your account information</p>
      </div>

      <div className="profile-container">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="avatar-section">
            <img src={user?.avatar} alt={user?.nickname} className="avatar-large" />
            <button className="avatar-upload">
              <Camera size={20} />
            </button>
          </div>

          <div className="profile-info-section">
            <div className="profile-field">
              <label>Username</label>
              <p className="field-value">{user?.username}</p>
            </div>

            <div className="profile-field">
              <label>Nickname</label>
              {isEditing ? (
                <input
                  type="text"
                  name="nickname"
                  value={formData.nickname}
                  onChange={handleInputChange}
                  className="field-input"
                />
              ) : (
                <p className="field-value">{user?.nickname}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Email</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="field-input"
                />
              ) : (
                <p className="field-value">{user?.email}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Phone</label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="field-input"
                />
              ) : (
                <p className="field-value">{user?.phone}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Join Date</label>
              <p className="field-value">{user?.createdAt}</p>
            </div>

            <div className="profile-field">
              <label>Last Login</label>
              <p className="field-value">{user?.lastLogin}</p>
            </div>

            {/* Buttons */}
            <div className="profile-buttons">
              {isEditing ? (
                <>
                  <button className="save-btn" onClick={handleSave}>
                    <Save size={20} /> Save
                  </button>
                  <button className="cancel-btn" onClick={handleCancel}>
                    <X size={20} /> Cancel
                  </button>
                </>
              ) : (
                <button className="edit-btn" onClick={() => setIsEditing(true)}>
                  <Edit2 size={20} /> Edit
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Account Stats */}
        <div className="account-stats">
          <h2>📊 Account Statistics</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">Total Logins</span>
              <span className="stat-value">127 times</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Activity Time</span>
              <span className="stat-value">456 hours</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Posts</span>
              <span className="stat-value">23</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Followers</span>
              <span className="stat-value">45</span>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="preferences-section">
          <h2>⚙️ Preferences</h2>
          <div className="preference-items">
            <div className="preference-item">
              <div>
                <h4>Notification Settings</h4>
                <p>Posture warnings and achievement alerts</p>
              </div>
              <input type="checkbox" defaultChecked className="toggle" />
            </div>
            <div className="preference-item">
              <div>
                <h4>Email Newsletter</h4>
                <p>Receive weekly stats and tips</p>
              </div>
              <input type="checkbox" defaultChecked className="toggle" />
            </div>
            <div className="preference-item">
              <div>
                <h4>Data Sharing</h4>
                <p>Display on leaderboard</p>
              </div>
              <input type="checkbox" defaultChecked className="toggle" />
            </div>
            <div className="preference-item">
              <div>
                <h4>Dark Mode</h4>
                <p>Enable night mode</p>
              </div>
              <input type="checkbox" className="toggle" />
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="security-section">
          <h2>🔒 Security</h2>
          <div className="security-items">
            <div className="security-item">
              <h4>Change Password</h4>
              <p>Change your password regularly for account security</p>
              <button className="security-btn">Change Password</button>
            </div>
            <div className="security-item">
              <h4>Two-Factor Authentication</h4>
              <p>Add an extra layer of security to your account</p>
              <button className="security-btn">Enable</button>
            </div>
            <div className="security-item">
              <h4>Login Activity</h4>
              <p>Review your account access history</p>
              <button className="security-btn">View Activity</button>
            </div>
            <div className="security-item">
              <h4>Delete Account</h4>
              <p>Permanently delete your account</p>
              <button className="security-btn danger">Delete Account</button>
            </div>
          </div>
        </div>

        {/* Privacy */}
        <div className="privacy-section">
          <h2>📋 Privacy</h2>
          <div className="privacy-items">
            <a href="#privacy-policy" className="privacy-link">Privacy Policy</a>
            <a href="#terms" className="privacy-link">Terms of Service</a>
            <a href="#data-policy" className="privacy-link">Data Policy</a>
            <a href="#cookies" className="privacy-link">Cookie Settings</a>
          </div>
        </div>
      </div>
    </div>
  );
}
