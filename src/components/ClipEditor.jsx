import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
import { Cropper } from 'react-cropper';
import 'video.js/dist/video-js.css';
import 'cropperjs/dist/cropper.css';

export default function ClipEditor({ clip, onClose }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const cropperRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        sources: [{ src: clip.url, type: 'video/mp4' }]
      });
    }
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [clip]);

  return (
    <div>
      <h3>클립 편집기</h3>
      <video ref={videoRef} className="video-js" style={{ width: '100%' }} />
      <Cropper
        ref={cropperRef}
        style={{ height: 200, width: '100%', marginTop: '1rem' }}
        src={clip.thumbnail || clip.url}
        viewMode={1}
        guides={true}
      />
      <button onClick={onClose} style={{ marginTop: '1rem' }}>닫기</button>
    </div>
  );
}
