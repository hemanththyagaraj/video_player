import { BTN_PLAY, ELAPSED_TIME, PROGRESS_BAR, TOTAL_DURATION, VIDEO_PLAYER } from "../constants/elements";

let isPlaying: boolean = false;

const toggleIcons = () => {
  if (isPlaying) BTN_PLAY.classList.replace("fa-pause", "fa-play");
  else BTN_PLAY.classList.replace("fa-play", "fa-pause");
};

const toggleVideoPlayback = (): void => {
  if (isPlaying) VIDEO_PLAYER.pause();
  else VIDEO_PLAYER.play();
};

const appendZero = (num: number): string => {
  if (num >= 10) return `${num}`;
  else return `0${num}`;
};

export const togglePlay = () => {
  toggleIcons();
  toggleVideoPlayback();
  isPlaying = !isPlaying;
};

export const setTotalDuration = (): void => {
  const { duration } = VIDEO_PLAYER;
  const minutes: number = Math.floor(duration / 60);
  const seconds: number = Math.floor(duration % 60);
  TOTAL_DURATION.textContent = `${appendZero(minutes)}:${appendZero(seconds)}`;
};

export const handlePlayback = (event: Event): void => {
  const { duration } = VIDEO_PLAYER;
  const elapsedTime = (event.target as HTMLVideoElement).currentTime
  const minutes: number = Math.floor(elapsedTime / 60);
  const seconds: number = Math.floor(elapsedTime % 60);
  ELAPSED_TIME.textContent = `${appendZero(minutes)}:${appendZero(seconds)}`;
  if (!isNaN(duration)) {
    const progress = (elapsedTime / duration) * 100 
    setProgress(progress)
  }
};

export const handleSpeedChange = (event: Event): void => {
  const speed: string = (event.target as HTMLSelectElement).value;
  VIDEO_PLAYER.playbackRate = Number(speed);
};

export const setProgress = (progressPercentage: number) => {
  PROGRESS_BAR.style.width = `${progressPercentage}%`
}
