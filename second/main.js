let box = document.querySelector("div")
box.style.width = "20%"
box.style.height = "40px"
box.style.border = "1px solid black"
box.style.borderRadius = "9px"
box.style.display = "flex"
box.style.justifyContent = "space-evenly"
box.style.alignItems = "center"
box.style.margin = "auto"
box.style.marginTop = "50px"

let inp = document.querySelector("input")
inp.style.width = "60%"
inp.style.height = "25px"
inp.style.borderRadius = "5px"
inp.style.border = "1px solid black"
inp.style.paddingLeft = "10px"
inp.style.fontSize = "15px"

let btn = document.querySelector("button")
btn.style.width = "25%"
btn.style.height = "30px"
btn.style.borderRadius = "5px"
btn.style.border = "1px solid black"

btn.onclick = ()=>
{
    return alert(inp.value ** 2)
}