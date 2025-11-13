import { useState } from 'react';
import { mockBoardPosts } from '../../data/mockData';
import { Search, Plus, Eye, MessageCircle } from 'lucide-react';
import './Board.css';

export default function Board() {
  const [posts, setPosts] = useState(mockBoardPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreatePost = () => {
    // Simulate creating a new post
    alert('New post creation feature will be activated upon implementation.');
  };

  return (
    <div className="board">
      <div className="board-header">
        <h1>📝 Community</h1>
        <p>Share your posture correction experiences with other users</p>
      </div>

      {/* Controls */}
      <div className="board-controls">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="create-btn" onClick={handleCreatePost}>
          <Plus size={20} />
          New Post
        </button>
      </div>

      <div className="board-container">
        {/* Posts List */}
        <div className="posts-section">
          <div className="posts-list">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className={`post-card ${selectedPost?.id === post.id ? 'selected' : ''}`}
                onClick={() => setSelectedPost(post)}
              >
                <div className="post-header">
                  <h3>{post.title}</h3>
                  <span className="post-date">{post.createdAt}</span>
                </div>
                <p className="post-content">{post.content}</p>
                <div className="post-footer">
                  <span className="author">👤 {post.author}</span>
                  <div className="post-stats">
                    <span><Eye size={16} /> {post.views}</span>
                    <span><MessageCircle size={16} /> {post.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="empty-state">
              <p>No search results.</p>
            </div>
          )}
        </div>

        {/* Post Detail */}
        {selectedPost && (
          <div className="post-detail">
            <div className="detail-header">
              <h2>{selectedPost.title}</h2>
              <span className="detail-date">{selectedPost.createdAt}</span>
            </div>

            <div className="detail-meta">
              <span className="author-info">
                <strong>Author:</strong> {selectedPost.author}
              </span>
              <div className="detail-stats">
                <span><Eye size={16} /> {selectedPost.views} views</span>
                <span><MessageCircle size={16} /> {selectedPost.comments} comments</span>
              </div>
            </div>

            <div className="detail-content">
              <p>{selectedPost.content}</p>
            </div>

            {selectedPost.image && (
              <div className="detail-image">
                <img src={selectedPost.image} alt={selectedPost.title} />
              </div>
            )}

            {/* Comments Section */}
            <div className="comments-section">
              <h4>Comments ({selectedPost.comments})</h4>
              <div className="comments-list">
                <div className="comment">
                  <div className="comment-author">👤 user123</div>
                  <p className="comment-text">This is very helpful!</p>
                  <span className="comment-date">2 hours ago</span>
                </div>
                <div className="comment">
                  <div className="comment-author">👤 posture_expert</div>
                  <p className="comment-text">Thanks for sharing great tips.</p>
                  <span className="comment-date">1 hour ago</span>
                </div>
              </div>

              {/* Comment Input */}
              <div className="comment-input">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="comment-field"
                />
                <button className="comment-btn">Post Comment</button>
              </div>
            </div>

            {/* Actions */}
            <div className="detail-actions">
              <button className="action-btn">👍 Recommend</button>
              <button className="action-btn">🔗 Share</button>
              <button className="action-btn">📋 Copy</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
