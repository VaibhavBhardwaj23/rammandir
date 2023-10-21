document.querySelector(".nav_icon").addEventListener("click", () => {
    document.querySelector(".navigation_mobile").classList.remove("hide")
    document.body.classList.toggle('lock-scroll');
  })
  // document.querySelector(".blank").addEventListener("click", () => {
  //   document.querySelector(".navigation_mobile").classList.toggle("hide")
  //   document.body.classList.toggle('lock-scroll');
  // })

  window.onclick = e => {
    if (e.target === document.querySelector(".navigation_mobile")) {
       document.querySelector(".navigation_mobile").classList.toggle("hide")
       document.body.classList.toggle('lock-scroll');
  }
}