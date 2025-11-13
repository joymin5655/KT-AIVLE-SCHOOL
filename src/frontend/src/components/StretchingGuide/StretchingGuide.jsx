import React, { useState } from 'react';
import './StretchingGuide.css';

const StretchingGuide = () => {
  const [selectedExercise, setSelectedExercise] = useState(0);

  const exercises = [
    {
      id: 0,
      title: 'Proper Posture',
      titleEn: 'Proper Posture',
      description: 'This is the foundation of proper posture. Maintain this position while performing stretches.',
      image: '/images/stretching/0_가만히 바른자세.jpg',
      duration: 'Basic Position',
      benefits: ['Spine Alignment', 'Core Muscle Activation', 'Healthy Posture Maintenance']
    },
    {
      id: 1,
      title: 'Side Arm Stretch',
      titleEn: 'Side Arm Stretch',
      description: 'Stretches the arm and side muscles. Repeat slowly.',
      image: '/images/stretching/1_팔 옆으로 늘리는 스트레칭.jpg',
      gif: '/images/stretching/1.gif',
      duration: '15-20 sec x 3 sets',
      benefits: ['Arm Muscle Flexibility', 'Side Stretching', 'Shoulder Mobility']
    },
    {
      id: 2,
      title: 'Shoulder Press Stretch',
      titleEn: 'Shoulder Press Stretch',
      description: 'Press your shoulders with both arms while stretching. Maintain natural movements.',
      image: '/images/stretching/2_팔로 어깨 누르는 스트레칭.jpg',
      gif: '/images/stretching/2.gif',
      duration: '10-15 sec x 3 sets',
      benefits: ['Shoulder Muscle Relaxation', 'Neck Stretching', 'Upper Body Flexibility']
    },
    {
      id: 3,
      title: 'Chin Lift Stretch',
      titleEn: 'Chin Lift Stretch',
      description: 'Gently lift your chin with your hands to stretch the front of your neck.',
      image: '/images/stretching/3_손으로 턱 올리는 스트레칭.jpg',
      gif: '/images/stretching/3.gif',
      duration: '10-15 sec x 3 sets',
      benefits: ['Front Neck Muscle Relaxation', 'Jaw Strengthening', 'Posture Improvement']
    },
    {
      id: 4,
      title: 'Torso Rotation Stretch',
      titleEn: 'Torso Rotation Stretch',
      description: 'Slowly rotate your upper body left and right while stretching.',
      image: '/images/stretching/4_몸통 돌리기 스트레칭.jpg',
      gif: '/images/stretching/4.gif',
      duration: '15-20 sec x 3 sets',
      benefits: ['Spine Rotation', 'Side Abdominal Muscles', 'Spine Flexibility']
    },
    {
      id: 5,
      title: 'Torso Side Bend Stretch',
      titleEn: 'Torso Side Bend Stretch',
      description: 'Bend your body sideways to stretch the entire side.',
      image: '/images/stretching/5_몸통 옆으로 기울이기 스트레칭.jpg',
      gif: '/images/stretching/5.gif',
      duration: '15-20 sec x 3 sets',
      benefits: ['Side Abdominal Stretching', 'Lateral Spine Flexibility', 'Posture Improvement']
    },
    {
      id: 6,
      title: 'Head Forward Press Stretch',
      titleEn: 'Head Forward Press Stretch',
      description: 'Gently press your head forward with your hands to stretch the back of your neck.',
      image: '/images/stretching/6_머리 앞으로 누르기 스트레칭.jpg',
      gif: '/images/stretching/6.gif',
      duration: '10-15 sec x 3 sets',
      benefits: ['Back Neck Relaxation', 'Upper Body Stretching', 'Forward Head Posture Improvement']
    },
    {
      id: 7,
      title: 'Head Side Tilt Stretch',
      titleEn: 'Head Side Tilt Stretch',
      description: 'Tilt your head to the side to stretch one side of your neck.',
      image: '/images/stretching/7_머리 옆으로 기울이는 스트레칭.jpg',
      gif: '/images/stretching/7.gif',
      duration: '10-15 sec x 3 sets',
      benefits: ['Side Neck Muscle Relaxation', 'Neck Flexibility', 'Stress Relief']
    }
  ];

  const current = exercises[selectedExercise];

  return (
    <div className="stretching-guide">
      <div className="stretching-header">
        <h1>Stretching Guide</h1>
        <p>Learn proper stretching techniques and maintain healthy posture</p>
      </div>

      <div className="stretching-container">
        {/* Exercises List */}
        <div className="exercises-list">
          <h2>Stretching Exercises</h2>
          <div className="exercises-grid">
            {exercises.map((exercise, index) => (
              <button
                key={exercise.id}
                className={`exercise-card ${selectedExercise === index ? 'active' : ''}`}
                onClick={() => setSelectedExercise(index)}
              >
                <div className="exercise-card-number">{exercise.id}</div>
                <div className="exercise-card-title">{exercise.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Exercise Detail */}
        <div className="exercise-detail">
          <div className="detail-header">
            <h2>{current.title}</h2>
            <p className="detail-subtitle">{current.titleEn}</p>
          </div>

          <div className="detail-content">
            {/* Images/GIF */}
            <div className="detail-media">
              {current.gif && (
                <div className="media-container">
                  <img src={current.gif} alt={current.title} className="exercise-gif" />
                  <p className="media-label">Exercise Method</p>
                </div>
              )}
              <div className="media-container">
                <img src={current.image} alt={current.title} className="exercise-image" />
                <p className="media-label">Reference Image</p>
              </div>
            </div>

            {/* Details */}
            <div className="detail-info">
              <div className="info-section">
                <h3>Description</h3>
                <p>{current.description}</p>
              </div>

              <div className="info-row">
                <div className="info-item">
                  <h4>⏱️ Recommended Duration</h4>
                  <p>{current.duration}</p>
                </div>
              </div>

              <div className="info-section">
                <h3>Benefits</h3>
                <ul className="benefits-list">
                  {current.benefits.map((benefit, index) => (
                    <li key={index}>
                      <span className="benefit-icon">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="info-section warning">
                <h3>Precautions</h3>
                <ul>
                  <li>Do not strain to the point of pain</li>
                  <li>Move slowly and gently</li>
                  <li>Regular repetition increases effectiveness</li>
                  <li>Consult a doctor if you experience any issues</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="detail-navigation">
            <button
              className="nav-btn"
              onClick={() => setSelectedExercise((prev) => (prev - 1 + exercises.length) % exercises.length)}
            >
              ← Previous
            </button>
            <span className="nav-counter">
              {selectedExercise + 1} / {exercises.length}
            </span>
            <button
              className="nav-btn"
              onClick={() => setSelectedExercise((prev) => (prev + 1) % exercises.length)}
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="stretching-tips">
        <h2>Stretching Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h4>Optimal Timing</h4>
            <p>Most effective when performed 3-4 times daily, 15-20 seconds each.</p>
          </div>
          <div className="tip-card">
            <h4>Warm Muscles</h4>
            <p>Stretching is more effective when muscles are warm after light exercise.</p>
          </div>
          <div className="tip-card">
            <h4>Consistency</h4>
            <p>Daily stretching increases posture improvement and muscle flexibility.</p>
          </div>
          <div className="tip-card">
            <h4>Breathing</h4>
            <p>Slow, deep breathing during stretching helps muscles relax better.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StretchingGuide;
