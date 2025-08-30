import React from 'react';

const sampleShorts = [
  { id: 1, title: 'Short 1', url: 'https://vjs.zencdn.net/v/oceans.mp4' },
  { id: 2, title: 'Short 2', url: 'https://www.w3schools.com/html/mov_bbb.mp4' }
];

export default function Shorts() {
  const upload = (short) => {
    alert(`YouTube로 전송: ${short.title}`);
  };

  return (
    <div>
      <h2>쇼츠 목록</h2>
      <div className="short-list">
        {sampleShorts.map(short => (
          <div key={short.id}>
            <video controls width="320" src={short.url}></video>
            <div>{short.title}</div>
            <button onClick={() => upload(short)}>YouTube로 업로드</button>
          </div>
        ))}
      </div>
    </div>
  );
}
