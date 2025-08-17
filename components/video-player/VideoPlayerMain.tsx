"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { VideoSlider } from "../ui/slider";
import { PauseAndPlayMain, Spinner } from "./Icons";

interface VideoPlayerProps {
  url: string;
  subtitles?: Array<{
    lang: string;
    src: string;
    label: string;
  }>;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
  lessons?: string[];
  currentLessonIndex?: number;
}

// components/AudioPlayer.tsx
import {
  Play,
  Pause,
  Volume2,
  RotateCw,
  RotateCcw,
  Fullscreen,
} from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface ControllerProps {
  handleSeek: (newTime: number[]) => void;
  isBuffering: boolean;
  handleVolumeChange: (newVolume: number[]) => void;
  duration: number;
  currentTime: number;
  togglePlay: () => void;
  isPlaying: boolean;
  toggleFullscreen: () => void;
  isFullscreen: boolean;
  isMuted: boolean;
  volume: number;
  skip: (seconds: number) => void;
  toggleMute: () => void;
}

export default function Controller({
  isBuffering,
  handleSeek,
  handleVolumeChange,
  duration,
  currentTime,
  togglePlay,
  toggleFullscreen,
  isFullscreen,
  isPlaying,
  isMuted,
  volume,
  skip,
  toggleMute,
}: ControllerProps) {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="flex items-center gap-2 lg:gap-4 p-4 rounded-lg w-full">
      <button className="p-2 sm:block hidden bg-[#E7EDF9] rounded-lg shadow hover:bg-gray-200">
        <Volume2 onClick={toggleMute} className="md:w-4 md:h-4 h-3 w-3" />
      </button>
      {/* Volume Slider */}
      <VideoSlider
        min={0}
        max={1}
        step={0.01}
        value={[isMuted ? 0 : volume]}
        onValueChange={handleVolumeChange}
        onValueCommit={handleVolumeChange}
        orientation="horizontal"
        size="sm"
        color={isFullscreen ? "blue" : "black"}
        className="min-w-[60px] sm:block hidden"
        showBuffer={true}
        thumbVisible={false}
        interactive={false}
        jumpOnClick={true}
        previewOnHover={true}
      />

      <button
        onClick={() => skip(-10)}
        className="p-2 md:ml-4 bg-[#E7EDF9] rounded-lg sm:block hidden shadow hover:bg-gray-200"
      >
        <RotateCcw className="md:w-4 md:h-4 h-3 w-3" />{" "}
      </button>

      {/* Play / Pause */}
      <button
        onClick={togglePlay}
        className="p-2 bg-[#E7EDF9] rounded-lg shadow hover:bg-gray-200"
      >
        {isPlaying ? (
          <Pause className="md:w-4 md:h-4 h-3 w-3" />
        ) : (
          <Play className="md:w-4 md:h-4 h-3 w-3" />
        )}
      </button>

      <button
        onClick={() => skip(10)}
        className="p-2 bg-[#E7EDF9]  sm:block hidden rounded-lg shadow hover:bg-gray-200"
      >
        <RotateCw className="md:w-4 md:h-4 h-3 w-3" />{" "}
      </button>

      {/* Progress Bar */}
      <VideoSlider
        min={0}
        max={duration || 100}
        value={[currentTime]}
        onValueChange={handleSeek}
        onValueCommit={handleSeek}
        orientation="horizontal"
        size="sm"
        color="orange"
        colorScheme="dualOrange"
        className="w-full min-w-[80px]"
        showBuffer={isBuffering}
        thumbVisible={false}
        interactive={false}
        jumpOnClick={true}
        previewOnHover={false}
      />

      {/* Time */}
      <span className=" md:text-md text-xs text-nowrap text-[#FF8800] mr-4">
        {formatTime(currentTime)} / {formatTime(duration)}
      </span>
      <button
        onClick={toggleFullscreen}
        className="p-2 bg-[#E7EDF9] rounded-lg shadow hover:bg-gray-200"
      >
        <Fullscreen className="md:w-4 md:h-4 h-3 w-3" />
      </button>
    </div>
  );
}

export const VideoPlayerMain = ({
  url,
  subtitles,
  poster,
  autoPlay = false,
  loop = false,
  className = "",
  lessons = [],
  currentLessonIndex = 1,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);
  const [,setShowVolumeSlider] = useState(false);

  const router = useRouter();

  const goToLesson = (index: number) => {
    if (index >= 0 && index < lessons?.length) {
      router.push(lessons[index]);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      if (currentLessonIndex < lessons.length - 1) {
        goToLesson(currentLessonIndex + 1);
      }
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [currentLessonIndex, lessons]);

  const skip = useCallback(
    (seconds: number) => {
      if (videoRef.current) {
        const video = videoRef.current;
        const newTime = Math.max(
          0,
          Math.min(duration, video.currentTime + seconds)
        );
        video.currentTime = newTime;
        resetHideTimer();
      }
    },
    [duration]
  );

  const INACTIVITY_TIMEOUT_MS = 3000;

  const hideControls = useCallback(() => {
    if (isPlaying && isFullscreen) {
      setShowControls(false);
    }
  }, [isPlaying, isFullscreen]);

  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    
    if (isPlaying && isFullscreen) {
      controlsTimeoutRef.current = setTimeout(hideControls, INACTIVITY_TIMEOUT_MS);
    }
  }, [hideControls, isPlaying, isFullscreen]);

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleSeek = useCallback(
    (newTime: number[]) => {
      if (!videoRef.current || newTime.length === 0) return;
      const seekTo = newTime[0];
      videoRef.current.currentTime = seekTo;
      setCurrentTime(seekTo);
      resetHideTimer();
    },
    [resetHideTimer]
  );

  const handleVolumeChange = useCallback(
    (newVolume: number[]) => {
      if (!videoRef.current || newVolume.length === 0) return;
      const vol = newVolume[0];
      videoRef.current.volume = vol;
      setVolume(vol);
      setIsMuted(vol === 0);
      setShowVolumeSlider(true);
      resetHideTimer();
    },
    [resetHideTimer]
  );

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      setVolume(isMuted ? 0.7 : 0);
      resetHideTimer();
    }
  }, [isMuted, resetHideTimer]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen().catch(console.error);
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
    resetHideTimer();
  }, [isFullscreen, resetHideTimer]);

  useEffect(() => {
    if (isPlaying && isFullscreen) {
      resetHideTimer();
    } else {
      setShowControls(true);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
        controlsTimeoutRef.current = null;
      }
    }
  }, [isPlaying, isFullscreen, resetHideTimer]);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };
    const handleLoadedMetadata = () => setDuration(video.duration);
    const handleWaiting = () => setIsBuffering(true);
    const handleCanPlay = () => setIsBuffering(false);
    const handleEnded = () => setIsPlaying(false);
    const handleFullscreenChange = () =>
      setIsFullscreen(!!document.fullscreenElement);
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === "INPUT" || !video) return;
      resetHideTimer();

      switch (e.key) {
        case " ":
          e.preventDefault();
          togglePlay();
          break;
        case "ArrowRight":
          e.preventDefault();
          video.currentTime += 5;
          break;
        case "ArrowLeft":
          e.preventDefault();
          video.currentTime -= 5;
          break;
        case "ArrowUp":
          e.preventDefault();
          video.volume = Math.min(video.volume + 0.1, 1);
          setVolume(video.volume);
          break;
        case "ArrowDown":
          e.preventDefault();
          video.volume = Math.max(video.volume - 0.1, 0);
          setVolume(video.volume);
          break;
        case "f":
          toggleFullscreen();
          break;
        case "m":
          toggleMute();
          break;
      }
    };

      const handleUserInteraction = () => {
      resetHideTimer();
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("waiting", handleWaiting);
    video.addEventListener("canplay", handleCanPlay);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    container.addEventListener("mousemove", handleUserInteraction);
    container.addEventListener("touchstart", handleUserInteraction);
    container.addEventListener("click", handleUserInteraction);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("canplay", handleCanPlay);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      container.removeEventListener("mousemove", handleUserInteraction);
      container.removeEventListener("touchstart", handleUserInteraction);
      container.removeEventListener("click", handleUserInteraction);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [resetHideTimer, togglePlay, toggleFullscreen, toggleMute]);

  return (
    <div className="relative w-full mx-auto">
      <div
        ref={containerRef}
        className={`flex items-center w-full bg-black rounded-lg overflow-hidden group select-none ${className}`}
        onDoubleClick={toggleFullscreen}
        onMouseLeave={() => {
          setShowVolumeSlider(false);
        }}
      >
        <video
          ref={videoRef}
          src={url}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          className="w-full aspect-video cursor-pointer"
          onClick={togglePlay}
        >
          {subtitles?.map((subtitle, index) => (
            <track
              key={index}
              kind="subtitles"
              srcLang={subtitle.lang}
              src={subtitle.src}
              label={subtitle.label}
              default={index === 0}
            />
          ))}
          Your browser does not support the video tag.
        </video>
        
        {/* Loading Spinner */}
        {isBuffering && <Spinner />}
        
        {/* Play/Pause Overlay Button */}
        {!isPlaying && (
          <PauseAndPlayMain
            onClick={togglePlay}
            isPlaying={isPlaying}
            isFullscreen={isFullscreen}
          />
        )}

        {/* Controls Container - Back to your original layout */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 transition-all duration-300 ${
            showControls || !isFullscreen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          {/* Progress Bar (using VideoSlider) */}
        </div>
        <div
          className={`absolute ${isFullscreen ? "bottom-0" : "-bottom-17"} left-0 h-16 w-full flex items-center transition-all duration-300 ${
            showControls || !isFullscreen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <Controller
            handleSeek={handleSeek}
            handleVolumeChange={handleVolumeChange}
            isBuffering={isBuffering}
            currentTime={currentTime}
            togglePlay={togglePlay}
            isPlaying={isPlaying}
            duration={duration}
            toggleFullscreen={toggleFullscreen}
            toggleMute={toggleMute}
            isFullscreen={isFullscreen}
            isMuted={isMuted}
            volume={volume}
            skip={skip}
          />
        </div>

        {/* Previous/Next buttons - only shown when not fullscreen */}
        {!isFullscreen && (
          <div className="absolute -bottom-36 left-0 flex justify-between w-full px-4">
            <Button
              onClick={() => goToLesson(currentLessonIndex + 1)}
              className={`py-4 lg:py-6 w-20 lg:w-24 bg-[#E7EDF9] hover:bg-[#E7EDF9]/70 cursor-pointer font-bold text-[#081227] lg:text-lg text-sm ${currentLessonIndex >= lessons.length - 1 ? "opacity-100" : "opacity-100"}`}
            >
              Previous
            </Button>

            <Button
              onClick={() => goToLesson(currentLessonIndex - 1)}
              className={`py-4 px-6 lg:py-6 lg:px-8 bg-[#E7EDF9] hover:bg-[#E7EDF9]/70 cursor-pointer font-bold text-[#081227] lg:text-lg text-sm ${currentLessonIndex <= 0 ? "opacity-0" : "opacity-100"}`}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};