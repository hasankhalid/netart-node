let body = document.body;
let rect = appendElement(body, 'div', ["rect"]);

document.body.addEventListener('mousemove', (event) => {
    applyStyleObj(rect, [
            {property: 'left', value: event.clientX, unit: 'px'},
            {property: 'top', value: event.clientY, unit: 'px'}
        ]);
});


//Helper functions

function applyStyle(el, property, value, unit) {
    unit ? el.style[property] = value + unit : el.style[property] = value; 
    //keep difference of unit as some styles dont need unit -> example => background: rgba(100,100,100,100)
    /* 
        Example use 
        applyStyle(rect, 'left', 20, 'px'); 
    */
}

function applyStyleObj(el, styleObjArr) { //styleObjArr takes an object array in the same order property,value and unit
    if (styleObjArr && styleObjArr.length > 0) {
        styleObjArr.forEach((styleObj) => {
            let property = styleObj.property;
            let value = styleObj.value;
            let unit = styleObj.unit ? styleObj.unit : null;
            unit ? el.style[property] = value + unit : el.style[property] = value; 
        })
    }
    //keep difference of unit as some styles dont need unit -> example => background: rgba(100,100,100,100)

    /* 
        Example Use
        applyStyleObj(rect, [
            {property: 'left', value: event.clientX, unit: 'px'},
            {property: 'top', value: event.clientY, unit: 'px'}
        ]);
    */

}

function appendElement(parent_element, element_type, classList, ID, attributeArr) {
    let append = document.createElement(element_type); //create document element for element type
    let returnMe = parent_element.appendChild(append); //create a variable to append element and store it
    if (classList && classList.length > 0) {
        classList.forEach((el_class) => {
            returnMe.classList.add(el_class);
        }); //apply classnames to element
    }
    if (classList && classList.length > 0) {
        classList.forEach((el_class) => {
            returnMe.classList.add(el_class);
        }); //apply classnames to element
    }
    if (attributeArr && attributeArr.length > 0) {
        attributeArr.forEach((attr) => {
            returnMe.setAttribute(attr.type, attr.value); //apply id variable 
        }); //apply classnames to element
    }
    return returnMe;

    /* 
        Example Use
            class array, ID and attribute array are all optional
                appendElement(body, 'div'); 
            following is with class array
                appendElement(body, 'div', ["rect"]); 
            following is with id 
                appendElement(body, 'div', ["rect"], "rect"); 
            for attribute array, attribute array is array of objects {type: 'custom_attribute', value: 'custom_value'}
    */
}