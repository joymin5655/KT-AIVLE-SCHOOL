import { useState, useRef, useEffect } from 'react';
import { mockChatbotMessages } from '../../data/mockData';
import { Send, Loader } from 'lucide-react';
import './Chatbot.css';

const sampleQuestions = [
  'What should I do when my posture is poor?',
  'How do I stretch?',
  'How many hours a day should I use this?',
  'How do I earn points?'
];

export default function Chatbot() {
  const [messages, setMessages] = useState(mockChatbotMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (text = input) => {
    if (!text.trim()) return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      type: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setLoading(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponses = {
        'posture': 'Proper posture is very important. Keep your back straight, relax your shoulders, and align your monitor with eye level.',
        'stretch': 'Regular stretching is important. Practice neck, shoulder, and back stretches every 30 minutes.',
        'hours': 'Using it for 8+ hours a day is recommended. Use it consistently throughout the week.',
        'points': 'You can earn points by maintaining correct posture, completing challenges, and attempting stretches.',
        'default': 'Thank you for your question. I will provide you with a more helpful answer.'
      };

      let response = botResponses.default;
      for (const [key, value] of Object.entries(botResponses)) {
        if (key !== 'default' && text.includes(key)) {
          response = value;
          break;
        }
      }

      const newBotMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: response,
        timestamp: new Date().toLocaleTimeString('ko-KR', {
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      setMessages(prev => [...prev, newBotMessage]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        <h1>💬 AI Chatbot</h1>
        <p>Have questions about posture correction?</p>
      </div>

      <div className="chatbot-container">
        {/* Chat History */}
        <div className="chat-window">
          <div className="messages-container">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.type}`}
              >
                <div className={`message-bubble ${message.type}`}>
                  <p>{message.text}</p>
                  <span className="timestamp">{message.timestamp}</span>
                </div>
              </div>
            ))}
            {loading && (
              <div className="message bot">
                <div className="message-bubble bot typing">
                  <Loader size={20} className="spinner" />
                  <span>Typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Enter your question..."
              className="message-input"
              disabled={loading}
            />
            <button
              onClick={() => handleSendMessage()}
              className="send-btn"
              disabled={!input.trim() || loading}
            >
              <Send size={20} />
            </button>
          </div>
        </div>

        {/* Sample Questions */}
        <div className="suggestions-panel">
          <h3>💡 Frequently Asked Questions</h3>
          <div className="suggestions-list">
            {sampleQuestions.map((question, idx) => (
              <button
                key={idx}
                className="suggestion-btn"
                onClick={() => handleSendMessage(question)}
              >
                {question}
              </button>
            ))}
          </div>

          <div className="chatbot-info">
            <h4>🤖 Chatbot Info</h4>
            <p>
              This AI chatbot answers questions about Posture Keeper.
              For medical advice, please consult a healthcare professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
