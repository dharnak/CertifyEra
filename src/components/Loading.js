import React from 'react';
import './Loading.css';

const Loading = () => (
  <div className="loading-screen">
    <svg className="infinity-spinner" viewBox="0 0 100 50">
      <path
        d="M10,25 C10,10 40,10 50,25 C60,40 90,40 90,25 C90,10 60,10 50,25 C40,40 10,40 10,25 Z"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="4"
      />
      <defs>
        <linearGradient id="gradient">
          <stop offset="0%" stopColor="#ff6ec4">
            <animate attributeName="stop-color" values="#ff6ec4;#7873f5;#ff6ec4" dur="2s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#7873f5">
            <animate attributeName="stop-color" values="#7873f5;#ff6ec4;#7873f5" dur="2s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default Loading;
