export default function lightMode(params) {
  const btn = document.querySelector("#light-mode");
  const root = document.documentElement;
  const languagesSvg = document.querySelector("#languages-icon");
  const homeSvg = document.querySelector("#home-icon");
  const projectsSvg = document.querySelector("#projects-icon");
  const gitHubSvg = document.querySelector("#github-icon");
  const linkedinSvg = document.querySelector("#linkedin-icon");
  const lightSvg = document.querySelector("#light");
  const globalSvg = document.querySelectorAll(".global-icon");

  btn.addEventListener("click", turnLightMode);

  function turnLightMode(e) {
    btn.classList.toggle("light-active");
    e.preventDefault();
    if (btn.classList.contains("light-active")) {
      root.style.setProperty("--background-white", "#0D1116");
      root.style.setProperty("--background-black", "#F0F6FC");
      root.style.setProperty("--border", "#262626");
      languagesSvg.src = "imgs/svg/languages-white.svg";
      homeSvg.src = "imgs/svg/home-white.svg";
      projectsSvg.src = "imgs/svg/projetos-branco.svg";
      gitHubSvg.src = "imgs/svg/github-branco.svg";
      linkedinSvg.src = "imgs/svg/linkedin-branco.svg";
      lightSvg.src = "imgs/svg/light-sun-white.svg";
      globalSvg.forEach((params) => {
        params.src = "imgs/svg/global-black.svg";
      });
    } else {
      root.style.setProperty("--background-white", "#F0F6FC");
      root.style.setProperty("--background-black", "#0D1116");
      root.style.setProperty("--border", "#e5e7eb");
      languagesSvg.src = "imgs/svg/languages-black.svg";
      homeSvg.src = "imgs/svg/home-black.svg";
      projectsSvg.src = "imgs/svg/projetos-preto.svg";
      gitHubSvg.src = "imgs/svg/github-preto.svg";
      linkedinSvg.src = "imgs/svg/linkedin-preto.svg";
      lightSvg.src = "imgs/svg/light-sun-black.svg";
      globalSvg.forEach((params) => {
        params.src = "imgs/svg/global-white.svg";
      });
    }
  }
}
