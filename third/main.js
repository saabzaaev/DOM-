let box = document.querySelector("div")
box.style.width = "30%"
box.style.height = "300px"
box.style.border = "1px solid black"
box.style.display = "flex"
box.style.flexWrap = "wrap"
box.style.justifyContent = "space-evenly"
box.style.alignContent = "space-around"
box.style.borderRadius = "10px"
box.style.margin = "auto"
box.style.marginTop = "100px"


let h1 = document.querySelector("h1")
h1.style.height = "40px"
h1.style.fontSize = "40px"
h1.style.textAlign = "center"

let p = document.querySelector("p")
p.style.height = "20px"
p.style.fontSize = "20px"
p.style.textAlign = "center"

let inp = document.querySelector("input")
inp.style.width = "60%"
inp.style.height = "30px"

let btn = document.querySelector("button")
btn.style.width = "20%"
btn.style.height = "35px"
btn.style.borderRadius = "5px"
btn.style.fontSize = "20px"
btn.style.border = "1px solid black"

let result = document.querySelector(".result")

btn.onclick = ()=>
{
    if(inp.value >= 0 && inp.value <= 10)
    {
        result.innerHTML = "Welcome !"
        box.style.border = "5px solid green"
    }
    else 
    {
        result.innerHTML = "God buy !"
        box.style.border = "5px solid red"
    }
}