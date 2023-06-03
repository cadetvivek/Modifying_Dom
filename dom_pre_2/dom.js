 var itemList = document.querySelector('#items');
 //parentNode
//  console.log(itemList.parentNode)
//  itemList.parentNode.style.backgroundColor='black';
// console.log(itemList.parentNode.parentNode.parentNode)

//parentElement
// console.log(itemList.parentNode)
//  itemList.parentElement.style.backgroundColor='orange';
// console.log(itemList.parentElement.parentElement.parentElement)


//childNodes
// console.log(itemList.childNodes)

// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor='yellow'

// //FirstChild
// console.log(itemList.firstChild)
// //firstElementChild
// console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent='Hellow world'

//lastChild
// console.log(itemList.lastChild)
// //lastElementChild
// console.log(itemList.lastElementChild)
itemList.lastElementChild.textContent='Hellow world-4'

// //nestSibling
// console.log(itemList.nextSibling)
// //nextElementSibling
// console.log(itemList.nextElementSibling)


//previousSibling
// console.log(itemList.parentNode)
// //previousElementSibling
// console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.color='green'
itemList.previousElementSibling.textContent='Hellow world'


//createElement

//Create a div
// var newDiv = document.createElement('div')
// //add class
// newDiv.className='hellow'
// // Add id
// newDiv.id='hellow1'
// // Add attr
// newDiv.setAttribute('title','hello world')
// // create text node
// var newDivText=document.createTextNode('Hello world')
// // add text div
// newDiv.appendChild(newDivText);
// var container = document.querySelector('header .container');
// var h1=document.querySelector('header h1')


// console.log(newDiv)


// newDiv.style.fontSize='30px'
// container.insertBefore(newDiv,h1)

