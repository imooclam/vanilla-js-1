// const getElement = (selector) => {
//   const element = document.querySelector(selector)

//   if (element) return element
//   throw Error(
//     `Please double check your class names, there is no ${selector} class`
//   )
// }

// const links = getElement('.nav-links')
// const navBtnDOM = getElement('.nav-btn')

// navBtnDOM.addEventListener('click', () => {
//   links.classList.toggle('show-links')
// })

// const date = getElement('#date')
// const currentYear = new Date().getFullYear()
// date.textContent = currentYear

// const humber =  document.querySelector(".hamburger")
// const menu =  document.querySelector(".nav-menu")
// humber.addEventListener("click",() => {
//   humber.classList.toggle("active")
//   menu.classList.toggle("active")
// })
// document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click", ()=>{
//   humber.classList.remove("active")
//   menu.classList.remove("active")
// }))
 const humberger = document.querySelector(".hamburger")
 const menu = document.querySelector(".navbar-nav")
  humberger.addEventListener('click',()=>{
     menu.classList.toggle('active')
     humberger.classList.toggle('active')
   })
   document.querySelectorAll(".navbar-item").forEach(n =>n.addEventListener("click", () =>{
       humberger.classList.remove("active")
       menu.classList.remove("active")
      }))
      document.addEventListener("click",(e)=>{
        if(e.target.id !== 'nv' && e.target.id !=='hm'){
      humberger.classList.remove("active")
      menu.classList.remove("active")

    }
   })
