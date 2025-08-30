import React, { useState } from 'react';
import ClipEditor from '../components/ClipEditor.jsx';

const sampleClips = [
  { id: 1, url: 'https://vjs.zencdn.net/v/oceans.mp4', title: 'Sample Clip 1' },
  { id: 2, url: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Sample Clip 2' }
];

export default function Clips() {
  const [editingClip, setEditingClip] = useState(null);

  return (
    <div>
      <h2>클립 목록</h2>
      <div className="video-list">
        {sampleClips.map(clip => (
          <div key={clip.id} className="video-item">
            <video controls width="320" src={clip.url}></video>
            <div>{clip.title}</div>
            <button onClick={() => setEditingClip(clip)}>편집</button>
          </div>
        ))}
      </div>

      {editingClip && (
        <ClipEditor clip={editingClip} onClose={() => setEditingClip(null)} />
      )}
    </div>
  );
}
