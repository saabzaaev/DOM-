let div = document.querySelector("div")
div.style.width = "30%"
div.style.height = "350px"
div.style.border = "2px solid black"
div.style.borderRadius = "10px"
div.style.display = "flex"
div.style.justifyContent = "center"
div.style.alignContent = "space-evenly"
div.style.flexWrap = "wrap"
div.style.margin = "auto"
div.style.marginTop = "100px"

let counter = document.querySelector(".counter")
counter.style.fontSize = "50px"
counter.style.height = "50px"

let body = document.querySelector(".body")
body.style.width = "75%"
body.style.height = "50px"
body.style.margin = "auto"
body.style.display = "flex"
body.style.justifyContent = "space-evenly"

let plus = document.querySelector(".plus")
plus.style.width = "25%"
plus.style.height = "50px"
plus.style.backgroundColor = "green"
plus.style.color = "white"
plus.style.FontWeight = "bold"
plus.style.border = "none"
plus.style.borderRadius = "5px"
plus.style.fontSize = "50px"
plus.style.borderRadius = "5px"
plus.style.display = "flex"
plus.style.justifyContent = "center"
plus.style.alignItems = "center"

let cnt = 0
plus.onclick = ()=>
{
    cnt++
    result.innerHTML = cnt;
    if(cnt > 0)
    {
        div.style.border = "2px solid green"
    div.style.boxShadow = "3px 3px 10px 0px green"

    }
}


let reset = document.querySelector(".reset")
reset.style.width = "25%"
reset.style.height = "50px"
reset.style.backgroundColor = "black"
reset.style.color = "white"
reset.style.FontWeight = "bold"
reset.style.border = "none"
reset.style.borderRadius = "5px"
reset.style.margin = "0"
reset.style.display = "flex"
reset.style.justifyContent = "center"
reset.style.alignItems = "center"


let minus = document.querySelector(".minus")
minus.style.width = "25%"
minus.style.height = "50px"
minus.style.backgroundColor = "red"
minus.style.Color = "white"
minus.style.FontWeight = "bold"
minus.style.border = "none"
minus.style.borderRadius = "5px"
minus.style.fontSize = "50px"
minus.style.color = "white"
minus.style.display = "flex"
minus.style.justifyContent = "center"
minus.style.alignItems = "center"
minus.onclick = ()=> 
{
    cnt--
    result.innerHTML = cnt;
    if(cnt < 0)
    {
    div.style.border = "2px solid red"
    div.style.boxShadow = "3px 3px 10px 0px red"
    }
}

let result = document.querySelector(".result")
result.style.fontSize = '100px'
result.innerHTML = 0
result.style.width = "26%"
result.style.height = "100px"
result.style.textAlign = "center"

