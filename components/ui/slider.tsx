import React from "react";
import * as Slider from "@radix-ui/react-slider";
import { cva, type VariantProps } from "class-variance-authority";

const sliderVariants = cva(
  "relative flex items-center cursor-pointer group",
  {
    variants: {
      size: {
        xs: "h-4 w-full", 
        sm: "h-6 w-full",
        md: "h-8 w-full", 
        lg: "h-10 w-full",
        xl: "h-12 w-full"
      },
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col items-center"
      },
      interactive: {
        true: "hover:scale-105 transition-transform",
        false: ""
      }
    },
    compoundVariants: [
      {
        orientation: "vertical",
        size: "xs",
        class: "h-24 w-4"
      },
      {
        orientation: "vertical",
        size: "sm",
        class: "h-32 w-6"
      },
      {
        orientation: "vertical", 
        size: "md",
        class: "h-40 w-8"
      },
      {
        orientation: "vertical",
        size: "lg", 
        class: "h-48 w-10"
      },
      {
        orientation: "vertical",
        size: "xl", 
        class: "h-56 w-12"
      }
    ],
    defaultVariants: {
      size: "md",
      orientation: "horizontal",
      interactive: true
    }
  }
);

const trackVariants = cva(
  "bg-gray-200 dark:bg-gray-700 relative grow rounded-full group-hover:bg-gray-300 dark:group-hover:bg-gray-600 transition-colors",
  {
    variants: {
      size: {
        xs: "h-1",
        sm: "h-2",
        md: "h-3",
        lg: "h-4",
        xl: "h-5"
      },
      orientation: {
        horizontal: "",
        vertical: ""
      },
      clickable: {
        true: "cursor-pointer",
        false: ""
      }
    },
    compoundVariants: [
      {
        orientation: "vertical",
        size: "xs",
        class: "w-1 h-auto"
      },
      {
        orientation: "vertical",
        size: "sm",
        class: "w-2 h-auto"
      },
      {
        orientation: "vertical",
        size: "md", 
        class: "w-3 h-auto"
      },
      {
        orientation: "vertical",
        size: "lg",
        class: "w-4 h-auto"
      },
      {
        orientation: "vertical",
        size: "xl",
        class: "w-5 h-auto"
      }
    ],
    defaultVariants: {
      size: "md",
      orientation: "horizontal",
      clickable: true
    }
  }
);

const rangeVariants = cva(
  "absolute rounded-full transition-all duration-200",
  {
    variants: {
      size: {
        xs: "h-1",
        sm: "h-2",
        md: "h-3", 
        lg: "h-4",
        xl: "h-5"
      },
      orientation: {
        horizontal: "",
        vertical: "w-full"
      },
      color: {
        blue: "bg-blue-500 hover:bg-blue-600",
        green: "bg-green-500 hover:bg-green-600",
        red: "bg-red-500 hover:bg-red-600", 
        purple: "bg-purple-500 hover:bg-purple-600",
        orange: "bg-orange-500 hover:bg-orange-600",
        white: "bg-white hover:bg-gray-100",
        gray: "bg-gray-500 hover:bg-gray-600"
      },
      buffered: {
        true: "opacity-60",
        false: "opacity-100"
      }
    },
    compoundVariants: [
      {
        orientation: "horizontal",
        class: "h-full"
      },
      {
        orientation: "vertical",
        size: "xs",
        class: "w-1"
      },
      {
        orientation: "vertical",
        size: "sm",
        class: "w-2"
      },
      {
        orientation: "vertical",
        size: "md",
        class: "w-3"
      },
      {
        orientation: "vertical", 
        size: "lg",
        class: "w-4"
      },
      {
        orientation: "vertical", 
        size: "xl",
        class: "w-5"
      }
    ],
    defaultVariants: {
      size: "md",
      orientation: "horizontal",
      color: "blue",
      buffered: false
    }
  }
);

const thumbVariants = cva(
  "block bg-white dark:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-200 shadow-lg border-2",
  {
    variants: {
      size: {
        xs: "w-3 h-3",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7"
      },
      color: {
        blue: "border-blue-500 focus:ring-blue-500 hover:border-blue-600",
        green: "border-green-500 focus:ring-green-500 hover:border-green-600",
        red: "border-red-500 focus:ring-red-500 hover:border-red-600",
        purple: "border-purple-500 focus:ring-purple-500 hover:border-purple-600", 
        orange: "border-orange-500 focus:ring-orange-500 hover:border-orange-600",
        white: "border-gray-300 focus:ring-gray-300 hover:border-gray-400",
        gray: "border-gray-500 focus:ring-gray-500 hover:border-gray-600"
      },
      interactive: {
        true: "",
        false: ""
      },
      visible: {
        true: "opacity-100",
        false: "opacity-0 group-hover:opacity-100"
      }
    },
    defaultVariants: {
      size: "md",
      color: "blue",
      interactive: true,
      visible: false
    }
  }
);

export const SliderRoot = React.forwardRef<
  React.ElementRef<typeof Slider.Root>,
  React.ComponentPropsWithoutRef<typeof Slider.Root> & 
  VariantProps<typeof sliderVariants> & {
    interactive?: boolean;
  }
>(({ className, size, orientation, disabled, interactive, ...props }, ref) => (
  <Slider.Root
    ref={ref}
    className={sliderVariants({ 
      size, 
      orientation,
      interactive,
      className: `${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}` 
    })}
    orientation={orientation}
    disabled={disabled}
    {...props}
  />
));
SliderRoot.displayName = "SliderRoot";

export const SliderTrack = React.forwardRef<
  React.ElementRef<typeof Slider.Track>,
  React.ComponentPropsWithoutRef<typeof Slider.Track> & 
  VariantProps<typeof trackVariants> & {
    clickable?: boolean;
  }
>(({ className, size, orientation, clickable, ...props }, ref) => (
  <Slider.Track
    ref={ref}
    className={trackVariants({ size, orientation, clickable, className })}
    {...props}
  />
));
SliderTrack.displayName = "SliderTrack";

export const SliderRange = React.forwardRef<
  React.ElementRef<typeof Slider.Range>,
  React.ComponentPropsWithoutRef<typeof Slider.Range> & 
  VariantProps<typeof rangeVariants> & {
    buffered?: boolean;
  }
>(({ className, size, orientation, color, buffered, ...props }, ref) => (
  <Slider.Range
    ref={ref}
    className={rangeVariants({ size, orientation, color, buffered, className })}
    {...props}
  />
));
SliderRange.displayName = "SliderRange";

export const SliderThumb = React.forwardRef<
  React.ElementRef<typeof Slider.Thumb>,
  React.ComponentPropsWithoutRef<typeof Slider.Thumb> & 
  VariantProps<typeof thumbVariants> & {
    interactive?: boolean;
    visible?: boolean;
  }
>(({ className, size, color, interactive, visible, ...props }, ref) => (
  <Slider.Thumb
    ref={ref}
    className={thumbVariants({ size, color, interactive, visible, className })}
    {...props}
  />
));
SliderThumb.displayName = "SliderThumb";

// Buffer range component for showing video buffer
export const SliderBufferRange = React.forwardRef<
  HTMLDivElement,
  {
    bufferedEnd: number;
    max: number;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    orientation?: "horizontal" | "vertical";
    className?: string;
  }
>(({ bufferedEnd, max, orientation = "horizontal", className }, ref) => {
  const bufferedPercentage = (bufferedEnd / max) * 100;
  
  return (
    <div
      ref={ref}
      className={`absolute bg-gray-400 dark:bg-gray-500 opacity-40 rounded-full ${
        orientation === "horizontal" ? "h-full" : "w-full"
      } ${className}`}
      style={{
        [orientation === "horizontal" ? "width" : "height"]: `${bufferedPercentage}%`
      }}
    />
  );
});
SliderBufferRange.displayName = "SliderBufferRange";

interface VideoSliderProps extends VariantProps<typeof sliderVariants> {
  value?: number[];
  defaultValue?: number[];
  onValueChange?: (value: number[]) => void;
  onValueCommit?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  inverted?: boolean;
  className?: string;
  label?: string;
  showValue?: boolean;
  formatValue?: (value: number) => string;
  color?: "blue" | "green" | "red" | "purple" | "orange" | "white" | "gray";
    orientation?: "horizontal" | "vertical";
    size?: "xs" | "sm" | "md" | "lg" | "xl" 
  
  // Video-specific props
  bufferedEnd?: number;
  showBuffer?: boolean;
  thumbVisible?: boolean;
  interactive?: boolean;
  jumpOnClick?: boolean;
  previewOnHover?: boolean;
  onPreviewHover?: (position: number, event: React.MouseEvent) => void;
  onSeekStart?: () => void;
  onSeekEnd?: () => void;
  markers?: { position: number; label?: string; color?: string }[];
  chapters?: { start: number; end: number; title: string }[];
}

export const VideoSlider: React.FC<VideoSliderProps> = ({
  value,
  defaultValue = [0],
  onValueChange,
  onValueCommit,
  min = 0,
  max = 100,
  step = 0.1,
  disabled = false,
  orientation = "horizontal",
  inverted = false,
  className = "",
  label,
  showValue = false,
  formatValue = (val) => val.toString(),
  size = "sm",
  color = "blue",
  
  // Video-specific props
  bufferedEnd = 0,
  showBuffer = true,
  thumbVisible = false,
  interactive = true,
  jumpOnClick = true,
  previewOnHover = false,
  onPreviewHover,
  onSeekStart,
  onSeekEnd,
  markers = [],
  chapters = []
}) => {
  const currentValue = value || defaultValue;
  const isVertical = orientation === "vertical";

  const handleValueChange = (newValue: number[]) => {
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  const handleValueCommit = (newValue: number[]) => {
    if (onSeekEnd) onSeekEnd();
    if (onValueCommit) {
      onValueCommit(newValue);
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (previewOnHover && onPreviewHover) {
      const rect = event.currentTarget.getBoundingClientRect();
      const position = orientation === "horizontal" 
        ? ((event.clientX - rect.left) / rect.width) * max
        : ((rect.bottom - event.clientY) / rect.height) * max;
      
      onPreviewHover(Math.max(min, Math.min(max, position)), event);
    }
  };

  return (
    <div className={`flex ${isVertical ? 'flex-col items-center' : 'flex-col'} gap-2 ${className}`}>
      {label && (
        <div className={`flex ${isVertical ? 'flex-col items-center' : 'justify-between items-center'} w-full`}>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>
          {showValue && (
            <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
              {formatValue(currentValue[0])}
            </span>
          )}
        </div>
      )}
      
      <div className="relative w-full" onMouseMove={handleMouseMove}>
        {/* Chapter backgrounds */}
        {chapters.map((chapter, index) => {
          const startPercent = (chapter.start / max) * 100;
          const widthPercent = ((chapter.end - chapter.start) / max) * 100;
          
          return (
            <div
              key={index}
              className="absolute top-0 h-full bg-black/10 rounded-full pointer-events-none"
              style={{
                left: `${startPercent}%`,
                width: `${widthPercent}%`
              }}
              title={chapter.title}
            />
          );
        })}
        
        <SliderRoot
          value={value}
          defaultValue={defaultValue}
          onValueChange={handleValueChange}
          onValueCommit={handleValueCommit}
          onPointerDown={onSeekStart}
          max={max}
          min={min}
          step={step}
          disabled={disabled}
          orientation={orientation}
          inverted={inverted}
          size={size}
          interactive={interactive}
        >
          <SliderTrack size={size} orientation={orientation} clickable={jumpOnClick}>
            {/* Buffer indicator */}
            {showBuffer && bufferedEnd > 0 && (
              <SliderBufferRange
                bufferedEnd={bufferedEnd}
                max={max}
                size={size}
                orientation={orientation}
              />
            )}
            
            {/* Progress range */}
            <SliderRange 
              size={size} 
              orientation={orientation} 
              color={color}
            />
          </SliderTrack>
          
          <SliderThumb 
            size={size} 
            color={color} 
            interactive={interactive}
            visible={thumbVisible}
            aria-label="Video progress" 
          />
        </SliderRoot>
        
        {/* Position markers */}
        {markers.map((marker, index) => {
          const position = (marker.position / max) * 100;
          
          return (
            <div
              key={index}
              className={`absolute top-1/2 transform -translate-y-1/2 w-1 h-4 rounded-full ${
                marker.color ? `bg-${marker.color}-500` : 'bg-yellow-500'
              } pointer-events-none`}
              style={{
                left: `${position}%`
              }}
              title={marker.label}
            />
          );
        })}
      </div>
    </div>
  );
};

export const VideoControllerSlider: React.FC<{
  currentTime: number;
  duration: number;
  bufferedEnd?: number;
  onSeek: (time: number) => void;
  onSeekStart?: () => void;
  onSeekEnd?: () => void;
  onPreviewHover?: (position: number, event: React.MouseEvent) => void;
  className?: string;
}> = ({
  currentTime,
  duration,
  bufferedEnd = 0,
  onSeek,
  onSeekStart,
  onSeekEnd,
  onPreviewHover,
  className
}) => {
  return (
    <VideoSlider
      min={0}
      max={duration || 100}
      value={[currentTime]}
      onValueChange={([newTime]) => onSeek(newTime)}
      onSeekStart={onSeekStart}
      onSeekEnd={onSeekEnd}
      onPreviewHover={onPreviewHover}
      bufferedEnd={bufferedEnd}
      orientation="horizontal"
      size="xs"
      color="white"
      className={className}
      showBuffer={true}
      thumbVisible={false}
      interactive={true}
      jumpOnClick={true}
      previewOnHover={true}
      step={0.1}
      formatValue={(time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
      }}
    />
  );
};