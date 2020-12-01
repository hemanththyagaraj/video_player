import {
  VIDEO_PLAYER,
  BTN_PLAY,
  PLAYBACK_SPEED,
  BTN_FULLSCREEN,
  VOLUME,
  BTN_FORWARD,
  BTN_REWIND,
  PROGRESS_BAR_CONTAINER,
  PROGRESS_BAR,
} from "./constants/elements";
import {
  setTotalDuration,
  togglePlay,
  handlePlayback,
  handleSpeedChange,
} from "./view/playback";
import { toggleFullscreen, toggleVolume } from "./view/utils";
import "./css/style.css";

// load the video element (optional)
VIDEO_PLAYER.load();

// EVENT LISTENERS

// on click play / pause button
[BTN_PLAY, VIDEO_PLAYER].forEach((el) => {
  el.addEventListener("click", (event: Event) => {
    event.stopPropagation();
    togglePlay();
  });
});

// once the video loaded or reloaded
VIDEO_PLAYER.addEventListener("loadeddata", () => {
  setTotalDuration();
});

// triggered as playback changes
VIDEO_PLAYER.addEventListener("timeupdate", (event: Event) => {
  handlePlayback(event);
});

//on speed change
PLAYBACK_SPEED.addEventListener("change", (event: Event) => {
  handleSpeedChange(event);
});

//toggle fullscreen
BTN_FULLSCREEN.addEventListener("click", toggleFullscreen);

//toggle volume
VOLUME.addEventListener("click", toggleVolume);

//on video ends
VIDEO_PLAYER.addEventListener("ended", () => {
  togglePlay();
});

//forward by 10 seconds
BTN_FORWARD.addEventListener("click", () => {
  const { currentTime } = VIDEO_PLAYER;
  VIDEO_PLAYER.currentTime = currentTime + 10;
});

//rewind by 10 seconds
BTN_REWIND.addEventListener("click", () => {
  const { currentTime } = VIDEO_PLAYER;
  VIDEO_PLAYER.currentTime = currentTime - 10;
  console.log(currentTime);
});

// on progress bar click
PROGRESS_BAR_CONTAINER.addEventListener("click", function (event) {
  const { offsetX, currentTarget } = event;
  const elementWidth = (currentTarget as HTMLSpanElement).offsetWidth;
  const width = (offsetX / elementWidth) * 100;
  PROGRESS_BAR.style.width = `${width}%`;
  VIDEO_PLAYER.currentTime = (width * VIDEO_PLAYER.duration) / 100;
});
