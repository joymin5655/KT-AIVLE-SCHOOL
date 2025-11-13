import { useState, useEffect } from 'react';
import { mockPostureResults, mockExercises, mockAIFeedback } from '../../data/mockData';
import { Play, Pause, RotateCcw, AlertCircle, CheckCircle } from 'lucide-react';
import './PostureAnalysis.css';

const postureTypes = {
  'good': { label: 'Good Posture', color: '#43e97b', icon: '✓' },
  'bad_type1': { label: 'Bad Posture (Type 1)', color: '#fa709a', icon: '⚠' },
  'bad_type2': { label: 'Bad Posture (Type 2)', color: '#f093fb', icon: '⚠' },
  'bad_type3': { label: 'Bad Posture (Type 3)', color: '#4facfe', icon: '⚠' },
  'bad_type4': { label: 'Bad Posture (Type 4)', color: '#feca57', icon: '⚠' },
};

export default function PostureAnalysis() {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [currentResult, setCurrentResult] = useState(mockPostureResults[0]);
  const [results, setResults] = useState(mockPostureResults);
  const [selectedExercise, setSelectedExercise] = useState(null);

  useEffect(() => {
    if (!isMonitoring) return;

    const interval = setInterval(() => {
      const randomResult = mockPostureResults[Math.floor(Math.random() * mockPostureResults.length)];
      setCurrentResult(randomResult);
    }, 2000);

    return () => clearInterval(interval);
  }, [isMonitoring]);

  const handleReset = () => {
    setCurrentResult(mockPostureResults[0]);
    setResults([]);
    setIsMonitoring(false);
  };

  return (
    <div className="posture-analysis">
      <div className="analysis-header">
        <h1>🎥 Real-time Posture Analysis</h1>
        <p>Real-time posture monitoring via webcam</p>
      </div>

      {/* Live Monitor */}
      <div className="monitor-section">
        <div className="camera-feed">
          <div className="video-placeholder">
            <div className="placeholder-content">
              {isMonitoring ? (
                <>
                  <div className="recording-indicator">
                    <span className="pulse"></span> Recording...
                  </div>
                  <div className="camera-info">📷 Camera is active</div>
                </>
              ) : (
                <div className="camera-info">📷 Click the button to start camera</div>
              )}
            </div>
          </div>

          <div className="monitor-controls">
            <button
              className={`control-btn ${isMonitoring ? 'pause' : 'play'}`}
              onClick={() => setIsMonitoring(!isMonitoring)}
            >
              {isMonitoring ? <Pause size={20} /> : <Play size={20} />}
              {isMonitoring ? 'Stop' : 'Start'}
            </button>
            <button className="control-btn reset" onClick={handleReset}>
              <RotateCcw size={20} />
              Reset
            </button>
          </div>
        </div>

        {/* Current Analysis */}
        <div className="analysis-panel">
          <h3>Current Analysis Result</h3>
          <div className={`result-box ${currentResult.type}`}>
            <div className="result-icon">
              {postureTypes[currentResult.type].icon}
            </div>
            <div className="result-info">
              <h4>{postureTypes[currentResult.type].label}</h4>
              <p className="timestamp">{currentResult.timestamp}</p>
              <p className="confidence">Confidence: {(currentResult.confidence * 100).toFixed(1)}%</p>
              {currentResult.correction && (
                <div className="correction-tip">
                  <AlertCircle size={16} />
                  <span>{currentResult.correction}</span>
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="quick-stats">
            <div className="stat">
              <span className="stat-label">Total Measurements</span>
              <span className="stat-value">{results.length}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Good Posture</span>
              <span className="stat-value" style={{ color: '#43e97b' }}>
                {results.filter(r => r.type === 'good').length}
              </span>
            </div>
            <div className="stat">
              <span className="stat-label">Bad Posture</span>
              <span className="stat-value" style={{ color: '#fa709a' }}>
                {results.filter(r => r.type !== 'good').length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Analysis Results Timeline */}
      <div className="results-timeline">
        <h3>📊 Analysis History</h3>
        <div className="timeline-list">
          {mockPostureResults.map((result, idx) => (
            <div key={idx} className={`timeline-item ${result.type}`}>
              <div className="timeline-time">{result.timestamp}</div>
              <div className="timeline-dot" style={{ backgroundColor: postureTypes[result.type].color }}></div>
              <div className="timeline-content">
                <h4>{postureTypes[result.type].label}</h4>
                {result.correction && <p>{result.correction}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Feedback */}
      <div className="feedback-section">
        <h3>🤖 AI Feedback</h3>
        <div className="feedback-card">
          <div className="feedback-header">
            <h4>{mockAIFeedback.overall}</h4>
            <div className="feedback-score">
              <span className="score-value">{mockAIFeedback.score}</span>
              <span className="score-max">/10</span>
            </div>
          </div>
          <div className="feedback-list">
            {mockAIFeedback.feedback.map((item, idx) => (
              <p key={idx} className="feedback-item">
                <CheckCircle size={16} />
                {item}
              </p>
            ))}
          </div>
          <div className="recommendations">
            <h4>Recommendations</h4>
            {mockAIFeedback.recommendations.map((rec, idx) => (
              <div key={idx} className="rec-badge">{rec}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Exercises */}
      <div className="exercises-section">
        <h3>💪 Recommended Stretches</h3>
        <div className="exercises-grid">
          {mockExercises.map((exercise) => (
            <div
              key={exercise.id}
              className={`exercise-card ${selectedExercise?.id === exercise.id ? 'selected' : ''}`}
              onClick={() => setSelectedExercise(exercise)}
            >
              <h4>{exercise.name}</h4>
              <p>{exercise.description}</p>
              <div className="exercise-meta">
                <span>⏱️ {exercise.duration}s</span>
                <span>Difficulty: {exercise.difficulty}</span>
              </div>
            </div>
          ))}
        </div>

        {selectedExercise && (
          <div className="exercise-detail">
            <h4>{selectedExercise.name}</h4>
            <ol className="steps-list">
              {selectedExercise.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
            <button className="start-exercise-btn">Start Exercise</button>
          </div>
        )}
      </div>
    </div>
  );
}
