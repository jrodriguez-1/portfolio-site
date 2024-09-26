import React, { useState, useRef } from 'react';

const AudioPlayer: React.FC = () => {
  
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-2xl mx-auto text-white min-h-full">
      <div className="flex mb-6">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mx-auto mb-4 font-mono">"Hi there!"</h2>
            <p className="text-lg text-gray-400 font-mono">
              My name is Jose, a Marine Corps Veteran with a passion for life, technology, and self-improvement. After leaving the military, I was eager to explore the world of technology. I enrolled in Code Platoon, a coding bootcamp for veterans that provided me with a solid foundation in software development. Since then, I've worked on various projects, including building full-stack applications and creating interactive data visualizations. I am constantly seeking new opportunities to learn and grow as a developer.
            </p>
            <p className="text-lg text-gray-400 font-mono mt-2">
              My journey doesn’t end there; I am committed to improving not only myself, but those around me if I can as well. With a strong focus on fitness and personal growth, I strive to push myself to new heights. I carry these qualities into every aspect of my life and work. If you’d like to learn more about me or discuss potential opportunities, I encourage you to reach out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;