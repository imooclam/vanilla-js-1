function scroll(){ 
    window.addEventListener("scroll",()=>{
         const nav = document.querySelector(".navbar")
         nav.classList.toggle("sticky" ,window.scrollY>400)
    })

}
scroll();
const scrollBtn = document.querySelector(".nom");
const btnVisibility = () => {
    if (window.scrollY >300) {
        scrollBtn.style.visibility = "visible";
    } else {
        scrollBtn.style.visibility = "hidden";
    }
};
document.addEventListener("scroll", () => {
    btnVisibility();
});
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});