
let div = document.querySelector("div")
div.style.width = "30%"
div.style.height = "20svh"
div.style.border = "2px solid black"
div.style.margin = "auto"
div.style.display = "flex"
div.style.flexWrap = "wrap"
div.style.justifyContent = "space-around"
div.style.alignItems = "start"
div.style.paddingTop = "20px"

let inp1 = document.querySelector(".inp1")
let inp2 = document.querySelector(".inp2")
// inp.style.margin = "20px"v 

let h1 = document.querySelector("h1")
h1.style.textAlign = "Center"
let btn = document.querySelector("button")
btn.onclick = ()=>
{
    // return inp1.value > inp2.value ? h1.innerHTML = "The big number is :" + inp1.value : h1.innerHTML = "The big number is :" + inp2.value
    if(inp1.value > inp2.value)
    {
        return h1.innerHTML = "The big number is : " + inp1.value
    }
    else 
    {
        return h1.innerHTML = "The big number is : " + inp2.value
    }
}