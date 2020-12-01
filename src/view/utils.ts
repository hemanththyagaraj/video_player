import { VIDEO_CONTAINER, VIDEO_PLAYER, VOLUME } from "../constants/elements";

let isFullscreen: boolean = false;
let isMute: boolean = false;

function openFullscreen(elem: HTMLDivElement) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

export const toggleFullscreen = (): void => {
  if (isFullscreen) closeFullscreen();
  else openFullscreen(VIDEO_CONTAINER);
  isFullscreen = !isFullscreen;
};

//toggle mute / unmute
export const toggleVolume = (): void => {
  if (isMute) {
    VOLUME.classList.replace("fa-volume-mute", "fa-volume-up");
    VIDEO_PLAYER.volume = 1;
  } else {
    VOLUME.classList.replace("fa-volume-up", "fa-volume-mute");
    VIDEO_PLAYER.volume = 0;
  }
  isMute = !isMute;
};
