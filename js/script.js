let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".progress span");
let video = document.querySelector(".video");
let nums = document.querySelectorAll(".after-pro .num");
let afterPro = document.querySelector(".after-pro");
let started = false;


window.addEventListener("scroll", function () {
  if (window.scrollY >= section.offsetTop - 500) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});

video.addEventListener("click", (e) => {
  let overlay = document.createElement("div");
  overlay.className = "video-overlay";
  document.body.appendChild(overlay);
  let videoBackground = document.createElement("div");
  videoBackground.className = "videoBackground";
  let video = document.createElement("video");
  video.src = "../video/Google- Project Fi - Design Reel.mp4";
  video.controls = true;
  video.autoplay = true;
  videoBackground.appendChild(video);
  document.body.appendChild(videoBackground);
  overlay.onclick = function () {
    videoBackground.remove();
    overlay.remove();
  };
});

window.onscroll = function () {
  if (window.scrollY >= afterPro.offsetTop - 400) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
