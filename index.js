let element = document.createElement('div') 

document.body.appendChild(element)

let h1 = document.createElement('h1')
element.appendChild(h1)

h1.setAttribute('id', 'victory')

let newHeader = document.querySelector('h1#victory');
newHeader.innerHTML = "YOUR-NAME is the champion"

element.appendChild(newHeader)

