import { cn } from "@/lib/utils";
import React from "react";

interface PauseAndPlayProps {
  className?: string;
  onClick?: () => void;
}

export const Pause: React.FC<PauseAndPlayProps> = ({ className, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={cn(className)}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  );
};

export const Play: React.FC<PauseAndPlayProps> = ({ className, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={cn(className)}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
};

export const PauseAndPlay: React.FC<{
  isPlaying: boolean;
  isFullscreen: boolean;
  style?: string;
  iconStyle?: string;
  onClick: () => void;
}> = ({ isPlaying, isFullscreen, style, iconStyle, onClick }) => {
  const baseStyle = isFullscreen ? "w-6 h-6" : (iconStyle ?? "w-4 h-4");
  return (
    <button
      onClick={onClick}
      className={style ?? "text-white hover:text-blue-400 transition-colors"}
    >
      {isPlaying ? (
        <Pause className={baseStyle} />
      ) : (
        <Play className={baseStyle} />
      )}
    </button>
  );
};

export const SkipBack: React.FC<{
  isFullscreen: boolean;
  onClick: () => void;
}> = ({ isFullscreen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white cursor-pointer hover:text-blue-400 transition-colors"
    >
      <svg
        className={cn(isFullscreen ? "w-5 h-5 rotate-[-90deg]" : "hidden")}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
      </svg>
    </button>
  );
};

export const SkipForward: React.FC<{
  isFullscreen: boolean;
  onClick: () => void;
}> = ({ isFullscreen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white cursor-pointer hover:text-blue-400 transition-colors"
    >
      <svg
        className={cn(
          isFullscreen ? "w-5 h-5 scale-x-[-1] rotate-90" : "hidden"
        )}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
      </svg>
    </button>
  );
};

interface SoundProps {
  onClick: () => void;
  onMouseEnter: () => void;
  isMuted: boolean;
  volume: number;
  isFullscreen: boolean;
}

export const SoundIcon: React.FC<SoundProps> = ({
  onClick,
  onMouseEnter,
  isMuted,
  volume,
  isFullscreen,
}) => {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className="text-white hover:text-blue-400 transition-colors"
    >
      {isMuted || volume === 0 ? (
        <svg
          className={cn(isFullscreen ? "w-5 h-5" : "hidden")}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
        </svg>
      ) : volume > 0.5 ? (
        <svg
          className={cn(isFullscreen ? "w-5 h-5" : "hidden")}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
        </svg>
      ) : (
        <svg
          className={cn(isFullscreen ? "w-5 h-5" : "hidden")}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
};

export const FullscreenIcon: React.FC<{
  onClick: () => void;
  isFullscreen: boolean;
}> = ({ onClick, isFullscreen }) => {
  return (
    <button
      onClick={onClick}
      className="text-white hover:text-blue-400 transition-colors"
    >
      {isFullscreen ? (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
          />
        </svg>
      )}
    </button>
  );
};

export const PauseAndPlayOverlay: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
      <button
        onClick={onClick}
        className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
      >
        <svg
          className="w-8 h-8 text-white ml-1"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  );
};

export const SubtitleIcon: React.FC = () => {
  return (
    <button className="text-white hover:text-blue-400 transition-colors">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    </button>
  );
};

export const Spinner: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
    </div>
  );
};
