# DOM
## What is DOM in JavaScript
> [!TIP]
> Document Object Model:structured representetion of HTML documents. Allows JavaScript to access HTML element and style to manipulate them.

![p](https://www.fatalerrors.org/images/blog/7e1369c325180da7c0cccf274a83363c.jpg)

> ### According to the Document Object Model (DOM for short), every HTML tag is an object.Subtags are "children" of the parent element. The text that is inside the tag is also an object. All these objects are available with JavaScript, we can use them to modify the page.

|JavaScript can modify all HTML elements on a page.|
|--------------------------------------------------|
JavaScript can change all HTML attributes on a page.
JavaScript can change all CSS styles on a page.
JavaScript can remove existing HTML elements and attributes.
JavaScript can add new HTML elements and attributes.
JavaScript can respond to all existing HTML events on the page.
JavaScript can fire new HTML events on a page

# $\color{red}{DOM\ Methods}$
* ### The $\color{red}{querySelector()}$ method returns the first child element that matches a specified CSS selector(s) of an element

* ### $\color{red}{querySelectorAll()}$ method can be used to access all elements which match with a specified CSS selector.

* ### $\color{red}innerHTML$ this method for changing value of element.

# $\color{red}CreatElement()$
> ### The JavaScript document.createElement() method allows you to create and return a new element (an empty Element node) with the specified tag name.

1. ### $\color{red}createElement(elementName)$: Creates an html element whose tag is passed as a parameter. Returns the created element
```JavaScript
const btn = document.creatElement("button")
btn.innerHTML = "HEllo World!"
document.body.appendChild(btn)
```

# $\color{red}{HTML\ DOM\ Element\ appendChild()}$
> ### The $\color{red}appendChild()$ method appends a node (element) as the last child of an element.appendChild() adds a node to the end of the list of children of the specified parent node. If the given child element is a reference to an existing node in the document, then the appendChild() function moves it from its current position to the new position.

# ${\color{red} {ClassList\ is\ a\ getter.\ The\ object\ it\ returns\ has\ several\ methods}}$
* add(string[,string])

    Adds the specified classes to the element

* remove(string[,string])

    Removes the specified classes from the element

* toggle(string[,boolen])

    If the element has no class, it adds it, otherwise it removes it. When false is passed as the second parameter, it removes the specified class, and if true, it adds it.
