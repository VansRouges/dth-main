import React from 'react';

interface ScoreRingProps {
  score: number; // Expected to be out of 5
  size?: number;
  strokeWidth?: number;
  primaryColor?: string;
  secondaryColor?: string;
  maxScore?: number; // Defaults to 5
}

const ScoreRing: React.FC<ScoreRingProps> = ({
  score,
  size = 80,
  strokeWidth = 8,
  primaryColor = '#3b82f6',
  secondaryColor = '#e5e7eb',
  maxScore = 5,
}) => {
  // Calculate percentage based on score and maxScore
  const percentage = (score / maxScore) * 100;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg className="w-full h-full transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={secondaryColor}
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={primaryColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      {/* Score text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-lg font-bold leading-tight">
          {score.toFixed(1)}
        </span>
        <span className="text-xs text-gray-500">
          Avg. Score
        </span>
      </div>
    </div>
  );
};

export default ScoreRing;