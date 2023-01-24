"use strict"; 

import collection from './JSON/data.json' assert {type: 'json'}

function generateInputs(attributes) {
    let inputElements = '';
    for (let attribute in attributes) {
        inputElements += `<div id="${attribute}">${attributes[attribute]['name']}`;
        for (let option in attributes[attribute]) {
        if (option !== "name" && option !== "Weight" && option !== "cost" && option !== "selected") {
            ''
            inputElements += `<div class="${option}">
                                <label>${attributes[attribute][option]['name']}</label>
                                <div class="number-input">
                                    <button class="input-increment" input="stepdown" option="${attribute}-${option}"></button>
                                    <input id="${attribute}-${option}" type="number" value="0" min="0">
                                    <button class="input-increment" input="stepup" option="${attribute}-${option}"></button>
                                </div>
                            </div>`;
        }
        }
        inputElements += `</div>`;
    }
    return inputElements;
    
}

document.addEventListener("click", function(e){
    // // Listener For Mint Button
    // const mint = e.mint.closest('#mint');
    // if(mint){
    //     generateArt();
    // }

    // Listener For Stake Increments
    const target = e.target.closest('.input-increment');
    if(target){
        let option =  target.getAttribute("option");
        let input = target.getAttribute("input");
        let optionValue = document.getElementById(option).value;

        console.log(option, input); 
        if(input === 'stepdown'){
            if(optionValue - 100 >= 0)
                document.getElementById(option).value = optionValue - 100;
        }
        else if(input === 'stepup'){
            document.getElementById(option).value = parseInt(optionValue) + 100;
        }
    }
});



let inputContainer = document.getElementById("input-container");
inputContainer.innerHTML = generateInputs(collection.attributes);  

function getAttributeNames(attributes) {
    let AttributeNames = [];
    for (let option in attributes) {
      if (attributes[option].hasOwnProperty("name")) {
        AttributeNames.push(attributes[option].name);
      }
    }
    return AttributeNames;
  }

function getOptionNames(attributes, attributeName) {
let optionNames = [];
for (let option in attributes[attributeName]) {
    if (attributes[attributeName][option].hasOwnProperty("name")) {
    optionNames.push(attributes[attributeName][option].name);
    }
}
return optionNames;
}

let AttributeNames = getAttributeNames(collection.attributes);
let optionNames = getOptionNames(collection.attributes, "attribute1");

console.log(optionNames);
console.log(AttributeNames);

// FUNCTION -- Returns Option names from passed into attribute e.g "attribute1"
function getOptionNames(attributes, attributeName) {
    let optionNames = [];
    for (let option in attributes[attributeName]) {
      if (attributes[attributeName][option].hasOwnProperty("name")) {
        optionNames.push(attributes[attributeName][option].name);
      }
    }
  }
  
  let attr1optionNames = getOptionNames(collection.attributes, "attribute1");
  let attr2optionNames = getOptionNames(collection.attributes, "attribute2");
  let attr3optionNames = getOptionNames(collection.attributes, "attribute1");

  function optionselect(e) {

  e = click 
  // Find the attribute value of the element that was clicked
  const attribute1 = document.getElementsById("attribute-1");
  const attribute2 = document.getElementsById("attribute-2");
  const attribute3 = document.getElementsById("attribute-3");

  // Remove the ".selected" class from all of the children
  const children = click.children;
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove("selected");
    }

  // // Find the selected option the off all attributes
  // let selectedOption1 = attribute1.document.getElementsByClassName("selected")
  // let selectedOption2 = attribute2.document.getElementsByClassName("selected")
  // let selectedOption3 = attribute3.document.getElementsByClassName("selected")

  // Get the data-type of the clicked 
  let imageSource1 = selectedOption1.getAttribute("data-type");
  let imageSource2 = selectedOption2.getAttribute("data-type");
  let imageSource3 = selectedOption3.getAttribute("data-type");

  const metadata = [imageSource1, imageSource2, imageSource3]

  console.log(metadata)

  return metadata
}
