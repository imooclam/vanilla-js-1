const year =document.getElementById("year")
const thisyear=  new Date().getFullYear()
year.setAttribute('data-custom',thisyear)
year.textContent = thisyear
