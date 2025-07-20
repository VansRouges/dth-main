"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { VideoSlider } from "../ui/slider";
import { formatTime } from "@/lib/utils";
import {
  FullscreenIcon,
  PauseAndPlay,
  PauseAndPlayOverlay,
  SkipBack,
  SkipForward,
  SoundIcon,
  Spinner,
  SubtitleIcon,
} from "./Icons";

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
}

export const VideoPlayer = ({
  url,
  subtitles,
  poster,
  autoPlay = false,
  loop = false,
  className = "",
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const skip = useCallback(
    (seconds: number) => {
      if (videoRef.current) {
        videoRef.current.currentTime = Math.max(
          0,
          Math.min(duration, currentTime + seconds)
        );
        resetHideTimer();
      }
    },
    [currentTime, duration]
  );
  const INACTIVITY_TIMEOUT_MS = 3000;
  const hideControls = useCallback(() => {
    if (isPlaying) {
      setShowControls(false);
    }
  }, [isPlaying]);

  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(
      hideControls,
      INACTIVITY_TIMEOUT_MS
    );
  }, [hideControls]);

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
    resetHideTimer();
  }, [isPlaying, resetHideTimer]);

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

  const changePlaybackRate = useCallback(() => {
    const rates = [0.5, 0.75, 1, 1.25, 1.5, 2];
    const currentIndex = rates.indexOf(playbackRate);
    const nextRate = rates[(currentIndex + 1) % rates.length];
    if (videoRef.current) {
      videoRef.current.playbackRate = nextRate;
      setPlaybackRate(nextRate);
      resetHideTimer();
    }
  }, [playbackRate, resetHideTimer]);

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

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("waiting", handleWaiting);
    video.addEventListener("canplay", handleCanPlay);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    container.addEventListener("mousemove", resetHideTimer);
    container.addEventListener("touchstart", resetHideTimer);
    container.addEventListener("click", resetHideTimer);
    container.addEventListener("wheel", resetHideTimer);

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
      container.removeEventListener("mousemove", resetHideTimer);
      container.removeEventListener("touchstart", resetHideTimer);
      container.removeEventListener("click", resetHideTimer);
      container.removeEventListener("wheel", resetHideTimer);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [
    duration,
    resetHideTimer,
    togglePlay,
    toggleFullscreen,
    toggleMute,
    isPlaying,
    volume,
    isFullscreen,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center w-full bg-black rounded-lg overflow-hidden group select-none ${className}`}
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
      {!isPlaying && !isBuffering && isFullscreen && (
        <PauseAndPlayOverlay onClick={togglePlay} />
      )}
      <div>
        {!isFullscreen && !isBuffering && (
          <div className="absolute inset-0 flex gap-6 items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
            <SkipBack isFullscreen={true} onClick={() => skip(-10)} />
            <PauseAndPlay
              iconStyle="w-8 h-8 text-white"
              style="w-14 h-14 bg-white/20 cursor-pointer backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              isPlaying={isPlaying}
              isFullscreen={false}
              onClick={togglePlay}
            />
            <SkipForward isFullscreen={true} onClick={() => skip(10)} />
          </div>
        )}
      </div>
      {/* --- Controls Container --- */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 transition-all duration-300 ${
          showControls
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        {/* Progress Bar (using VideoSlider) */}
        <div className={`${isFullscreen ? "relative mb-4 " : "hidden"}`}>
          <VideoSlider
            min={0}
            max={duration || 100}
            value={[currentTime]}
            onValueChange={handleSeek}
            onValueCommit={handleSeek}
            orientation="horizontal"
            size="sm"
            color="blue"
            className="w-full"
            showBuffer={isBuffering}
            thumbVisible={false}
            interactive={false}
            jumpOnClick={true}
            previewOnHover={false}
          />
        </div>
        {/* Control Bar (Play/Pause, Volume, Time, Speed, Fullscreen) */}
        <div className="flex items-center justify-between">
          <div className={`flex items-center ${isFullscreen ? `gap-4` : ``}`}>
            <div className={isFullscreen ? "flex" : "hidden"}>
              <PauseAndPlay
                isPlaying={isPlaying}
                isFullscreen={isFullscreen}
                onClick={togglePlay}
              />
            </div>
            <SkipBack isFullscreen={isFullscreen} onClick={() => skip(-10)} />
            <SkipForward isFullscreen={isFullscreen} onClick={() => skip(10)} />
            {/* Time display */}
            <span className="text-white text-sm font-mono">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
          {/* Right-side controls */}
          <div className={`flex items-center space-x-4`}>
            <div className="relative flex items-center">
              <SoundIcon
                onClick={toggleMute}
                onMouseEnter={() => setShowVolumeSlider(true)}
                isMuted={isMuted}
                volume={volume}
                isFullscreen={isFullscreen}
              />
              {/* Volume Slider (using VideoSlider) */}
              {showVolumeSlider && (
                <div
                  className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black/80 p-2 rounded"
                  onMouseLeave={() => setShowVolumeSlider(false)}
                >
                  <VideoSlider
                    min={0}
                    max={1}
                    step={0.01}
                    value={[isMuted ? 0 : volume]}
                    onValueChange={handleVolumeChange}
                    onValueCommit={handleVolumeChange}
                    orientation="vertical"
                    size="xs"
                    color="blue"
                    className="w-8 h-24"
                    thumbVisible={true}
                    jumpOnClick={true}
                    interactive={true}
                    previewOnHover={false}
                  />
                </div>
              )}
            </div>
            {/* Playback speed */}
            <button
              onClick={changePlaybackRate}
              className={
                isFullscreen
                  ? "text-white text-sm font-medium px-2 py-1 rounded bg-white/10 hover:bg-white/20"
                  : `hidden`
              }
            >
              {playbackRate}x
            </button>
            {/* Subtitles button (if subtitles exist) */}
            {subtitles && subtitles.length > 0 && isFullscreen && (
              <SubtitleIcon />
            )}
            {/* Fullscreen button */}
            <FullscreenIcon
              onClick={toggleFullscreen}
              isFullscreen={isFullscreen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
