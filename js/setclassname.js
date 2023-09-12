console.log("jeg er i setclassname")

const pbSetClassname = document.getElementById("pbSetStyle")
const inpElementName = document.getElementById("elementName")
const inpStyleName = document.getElementById("styleName")

function setStyleOnElem(elem) {
    console.log("jeg er i hej")
    console.log(elem)
    elem.className = inpStyleName.value
}


function setClassName() {
    const elementName = inpElementName.value
    console.log(elementName)
    const someTags = document.getElementsByTagName(elementName)
    console.log(someTags)
    if (someTags instanceof HTMLCollection && someTags.length > 0) {
        const tagArr = Array.from(someTags)
        console.log("tagArr length=" + tagArr.length)
        tagArr.forEach(setStyleOnElem)
        console.log("hadfasfdadsf")
    } else {
        const elm = document.querySelector("." + inpElementName)
        console.log(elm)
        elm.className=""  //clears classList
        elm.classList.add(styleName);
        elm.classList.add(inpElementName.value); //this should add the element name to the classlist
        console.log(elm.className)
        console.log(elm.classList)
    }

}


pbSetClassname.addEventListener('click', setClassName)

