import React, { useState } from 'react';

export default function Settings() {
  const [chzzkKey, setChzzkKey] = useState('');
  const [youtubeKey, setYoutubeKey] = useState('');

  const save = (e) => {
    e.preventDefault();
    alert('API 키가 저장되었습니다');
  };

  return (
    <div>
      <h2>설정</h2>
      <form className="settings-form" onSubmit={save}>
        <label>
          치지직 API 키
          <input value={chzzkKey} onChange={e => setChzzkKey(e.target.value)} />
        </label>
        <label>
          YouTube API 키
          <input value={youtubeKey} onChange={e => setYoutubeKey(e.target.value)} />
        </label>
        <button type="submit">저장</button>
      </form>
    </div>
  );
}
