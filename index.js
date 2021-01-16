function toggleMenu(){
  let toggle = document.querySelector('.toggle');
  let hoverBar = document.querySelector('.hoverBar');
  let mainBar = document.querySelector('.mainBar');
  toggle.classList.toggle('active');
  hoverBar.classList.toggle('active');
  mainBar.classList.toggle('active');
}
window.addEventListener('resize',(e)=>{
if(window.innerWidth>800){
  let toggle = document.querySelector('.toggle');
  let hoverBar = document.querySelector('.hoverBar');
  let mainBar = document.querySelector('.mainBar');
  toggle.classList.remove('active');
  hoverBar.classList.remove('active');
  mainBar.classList.remove('active');
}
})
function updateWindowHeight() {
  document.documentElement.style.setProperty(
    "--windowHeight",
    window.innerHeight + "px"
  );
}
window.onload = () => {
  updateWindowHeight();
};
window.onresize = updateWindowHeight;
