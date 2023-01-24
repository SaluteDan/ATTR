"use strict";

// IMPORT -- Data From JSON (End Case will be Smart Contracts)
import collection from './JSON/data.json' assert {type: 'json'}
import Membership from './JSON/member.json' assert {type: 'json'}

// import generateArt from './art-engine.js'

// FUNCTION -- Create Frontend with collection data
function generateLabels(attributes) {
  let inputLabels = '';
  for (let attribute in attributes) {
    inputLabels += `<nav id="${attribute}" class="navigation" aria-label="Page navigation example">
                        <span class="attribute-option">${attributes[attribute]['name']} 
                          <small>ATTR: ${attributes[attribute]["cost"]}</small>
                        </span>
                        <div class="d-flex align-items-start justify-content-between"><ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">`;
    for (let option in attributes[attribute]) {
      if (option !== "name" && option !== "Weight" && option !== "cost" && option !== "selected") {
        inputLabels += `<li option="${option}" attribute="${attribute}" class="nav-item ${option}" role="presentation" id="${attribute}-${option}-tab">
        <span class="nav-link ${option}" aria-controls="${option}" data-bs-toggle="tab" data-bs-target="#${attribute}-${option}-pane" role="tab">${attributes[attribute][option]['name']}</span></li>`
      }
    }
    inputLabels += `</ul>`
    inputLabels += `<div attribute="${attribute}" class="tab-content">`;
    for (let option in attributes[attribute]) {
      if (option !== "name" && option !== "Weight" && option !== "cost" && option !== "selected") {
        inputLabels += `<span class="number-input tab-pane ${option}" attribute="${attribute}" id="${attribute}-${option}-pane" role="tabpanel" aria-labelledby="${attribute}-${option}" tabindex="0">
        <button class="input-increment btn btn-outline-secondary btn-sm" input="stepdown" option="${attribute}-${option}" type="button">&laquo;</button>
          <input id="${attribute}-${option}" type="number" value="0" min="0">
        <button class="input-increment btn btn-outline-secondary btn-sm" input="stepup" option="${attribute}-${option}" type="button">&raquo;</button>
      </span>`
      }
    }
    inputLabels +=`</div></nav>`;
  }
  return inputLabels;
  // <small id="${attribute}-input" class="btn btn-secondary btn-sm">Small button</small>
}

document.querySelector("#attribute1-option2")

// INIT -- Frontend with collection data
let navContainer = document.getElementById("nav-wrapper");
navContainer.innerHTML = generateLabels(collection.attributes);
// INIT -- the front-end with collection data 
const collectionlabel = document.getElementsByClassName("collection-name")
for (var i = 0; i < collectionlabel.length; i++) {
  collectionlabel[i].innerHTML = `${collection.collection}`;
}
const costlabel = document.getElementsByClassName("mint-cost")
for (var i = 0; i < costlabel.length; i++) {
  costlabel[i].innerHTML = `${collection.mint.cost}`;
}
// update the front-end with member data 
document.getElementById("coin-balance").innerHTML = `BALANCE ${Membership.balance}`;


// LISTENERS --  
document.addEventListener("click", function(e){
// DRAW BUTTON --
const draw = e.target.closest('#redraw');
  if (draw) {
    generateArt();
  }

// MINT BUTTON -- 
  const mint = e.target.closest('#mint');
  if(mint){
    const myModal = document.getElementById('stake-modal');
    myModal.addEventListener('shown.bs.modal', () => {
      mint.onclick()
    })
  }
// ATTRIBUTE OPTIONS --
  const option = e.target.closest('.nav-link');
  if (option) {
    // Fiqure out what Attribute and Option was selected
    let attribute = option.parentNode.getAttribute("attribute");
    let attributeoption = option.getAttribute("aria-controls");
  
    // Remove the ".selected" class from all of the children
    const attributeSelector = document.getElementById(attribute);
    const children = attributeSelector.children;
    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove("active");
    }
    let activeOption = document.getElementsByClassName(attributeoption);

    // Push Selected option into collection object to be recalled on drawselected function
    let activeoption = collection.attributes[attribute]
    activeoption.selected = attributeoption;

    drawselected()
  }
  // STAKE INCREMENTS -- 
  const target = e.target.closest('.input-increment');
  if(target){
      let option = target.getAttribute("option");
      let input = target.getAttribute("input");
      let attribute = target.parentNode.getAttribute("attribute");
      let cost = collection.attributes[attribute]["cost"]
      let optionValue = document.getElementById(option).value;

      console.log(option, input); 
      if(input === 'stepdown'){
          if(optionValue - 10 >= 0)
              document.getElementById(option).value = parseInt(optionValue) - cost;
      }
      else if(input === 'stepup'){
          document.getElementById(option).value = parseInt(optionValue) + cost;
      }
    return
  }
});

//// ATTRIBUTES ART ENGINE --ALPHA v0.11

// // IMPORT -- Data From JSON (End Case will be Smart Contracts)
// import collection from './JSON/data.json' assert {type: 'json'}

// Get the canvas element
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerWidth;

const imageSources = initImageSources();

function generateArt() {

// Get the staked amount for each option
const inputs = document.querySelectorAll("input[id^='attribute']");
for (const input of inputs) {
  const [attribute, option] = input.id.split("-");
  // access your object and update the input value
  collection.attributes[attribute][option].input = parseInt(input.value);
}

// FUNCTION -- Define a function to get the selected option for each attribute
function getSelectedOption(attribute) {
  // Total weight of all options
  let totalWeight = 0;
  // Map of all options and their weights
  const optionMap = {};
  // Loop through options in attribute
  let inputValues = [];
  for (let option in attribute) {
      if (option !== "name" && option !== "Weight" && option !== "cost" && option !== "selected") {
          const optionWeight = attribute[option].Weight + (attribute[option].input || 0);
          optionMap[option] = optionWeight;
          totalWeight += optionWeight;
          inputValues.push(attribute[option].input);
      }
  console.log(inputValues)
  }  
  // Select a random option based on weight
  let random = Math.floor(Math.random() * totalWeight);
  for (let option in optionMap) {
    random -= optionMap[option];
    if (random < 0) {
      return option;
    }
  }
}

const attributes = collection.attributes;
let selectedAttribute1Option = getSelectedOption(attributes.attribute1);
let selectedAttribute2Option = getSelectedOption(attributes.attribute2);
let selectedAttribute3Option = getSelectedOption(attributes.attribute3);

  
console.log("Selected option for attribute 1: ", selectedAttribute1Option);
console.log("Selected option for attribute 2: ", selectedAttribute2Option);
console.log("Selected option for attribute 3: ", selectedAttribute3Option);

// Get the image source for each selected option
let imageSource1 = imageSources["attribute1"][selectedAttribute1Option];
let imageSource2 = imageSources["attribute2"][selectedAttribute2Option];
let imageSource3 = imageSources["attribute3"][selectedAttribute3Option];
  
  
  

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let image3Promise = new Promise((resolve, reject) => {
    let image3 = new Image();
    image3.src = imageSource3;
    image3.onload = () => {
      resolve(image3);
    };
  });
  
  let image2Promise = new Promise((resolve, reject) => {
    let image2 = new Image();
    image2.src = imageSource2;
    image2.onload = () => {
      resolve(image2);
    };
  });
  
  let image1Promise = new Promise((resolve, reject) => {
    let image1 = new Image();
    image1.src = imageSource1;
    image1.onload = () => {
      resolve(image1);
    };
  });
  
  Promise.all([image3Promise, image2Promise, image1Promise]).then((images) => {
    ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'destination-over';
    ctx.drawImage(images[1], 0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'destination-over';
    ctx.drawImage(images[2], 0, 0, canvas.width, canvas.height);
  });

  // function getSelectedWeight(attribute) {
  //   // Total weight of all options
  //   let totalWeight = 0;
  //   // Map of all options and their weights
  //   const optionMap = {};
  //   // Loop through options in attribute
  //   for (let option in attributes[attribute]) {
  //     // Add option's weight to total weight
  //     totalWeight += attributes[attribute][option];
  //   }
  //   return totalWeight;
  // }

  // // get the total weight for each attribute
  // let weight1 = getSelectedWeight("attribute1");
  // let weight2 = getSelectedWeight("attribute2");
  // let weight3 = getSelectedWeight("attribute3");

  // // update the front-end with the weight values
  // document.getElementById("attribute1Weight").innerHTML = `<p> You staked ${weight1} coins on Attribute 1</p>`;
  // document.getElementById("attribute2Weight").innerHTML = `<p> You staked ${weight2} coins on Attribute 2</p>`;
  // document.getElementById("attribute3Weight").innerHTML = `<p> You staked ${weight3} coins on Attribute 3</p>`;

  // Push the selected option into the collection object
  collection.attributes.attribute1.selected = selectedAttribute1Option;
  collection.attributes.attribute2.selected = selectedAttribute2Option;
  collection.attributes.attribute3.selected = selectedAttribute3Option;

  console.log(collection)

  const attribute1selector = document.querySelectorAll("[attribute='attribute1'] span");
  attribute1selector.forEach(function(element) {
      if (element.classList.contains(selectedAttribute1Option)) {
          element.classList.add("active");
          element.classList.add("show");
      } else {
          element.classList.remove("active");
          element.classList.remove("show");
      }
  })
  const attribute2selector = document.querySelectorAll("[attribute='attribute2'] span");
  attribute2selector.forEach(function(element) {
      if (element.classList.contains(selectedAttribute2Option)) {
          element.classList.add("active");
          element.classList.add("show");
      } else {
          element.classList.remove("active");
          element.classList.remove("show");
      }
  })
  const attribute3selector = document.querySelectorAll("[attribute='attribute3'] span");
  attribute3selector.forEach(function(element) {
      if (element.classList.contains(selectedAttribute3Option)) {
          element.classList.add("active");
          element.classList.add("show");
      } else {
          element.classList.remove("active");
          element.classList.remove("show");
      }
  })    
  // Return the selected options
  }

  // FUNCTION -- to get the user selected option for each attribute and draw live (so user can see what the option looks like)
  function drawselected() {

    let selectedAttribute1Option = collection.attributes.attribute1["selected"]
    let selectedAttribute2Option = collection.attributes.attribute2["selected"]
    let selectedAttribute3Option = collection.attributes.attribute3["selected"]
    
    // Get the image source for each selected option
    let imageSource1 = imageSources["attribute1"][selectedAttribute1Option];
    let imageSource2 = imageSources["attribute2"][selectedAttribute2Option];
    let imageSource3 = imageSources["attribute3"][selectedAttribute3Option];
      
      
      
    
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    
      let image3Promise = new Promise((resolve, reject) => {
        let image3 = new Image();
        image3.src = imageSource3;
        image3.onload = () => {
          resolve(image3);
        };
      });
      
      let image2Promise = new Promise((resolve, reject) => {
        let image2 = new Image();
        image2.src = imageSource2;
        image2.onload = () => {
          resolve(image2);
        };
      });
      
      let image1Promise = new Promise((resolve, reject) => {
        let image1 = new Image();
        image1.src = imageSource1;
        image1.onload = () => {
          resolve(image1);
        };
      });
      
      Promise.all([image3Promise, image2Promise, image1Promise]).then((images) => {
        ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'destination-over';
        ctx.drawImage(images[1], 0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'destination-over';
        ctx.drawImage(images[2], 0, 0, canvas.width, canvas.height);
      });
    
  // Push the selected option into the collection object
  collection.attributes.attribute1.selected = selectedAttribute1Option;
  collection.attributes.attribute2.selected = selectedAttribute2Option;
  collection.attributes.attribute3.selected = selectedAttribute3Option;

  console.log(collection)


  const attribute1selector = document.querySelectorAll("[attribute='attribute1'] span");
  attribute1selector.forEach(function(element) {
      if (element.classList.contains(selectedAttribute1Option)) {
          element.classList.add("active");
          element.classList.add("show");
      } else {
          element.classList.remove("active");
          element.classList.remove("show");
      }
  })
  const attribute2selector = document.querySelectorAll("[attribute='attribute2'] span");
  attribute2selector.forEach(function(element) {
      if (element.classList.contains(selectedAttribute2Option)) {
          element.classList.add("active");
          element.classList.add("show");
      } else {
          element.classList.remove("active");
          element.classList.remove("show");
      }
  })
  const attribute3selector = document.querySelectorAll("[attribute='attribute3'] span");
  attribute3selector.forEach(function(element) {
      if (element.classList.contains(selectedAttribute3Option)) {
          element.classList.add("active");
          element.classList.add("show");
      } else {
          element.classList.remove("active");
          element.classList.remove("show");
      }
  })
  
  
  function addSelectedClass(attribute, selectedAttributeOption){
    const attributeSelector = document.querySelectorAll("[attribute='" + attribute + "']." + selectedAttributeOption);
    attributeSelector.forEach(element => element.classList.add("selected"));
    }
    
  // Return the selected options
    }  

function initImageSources() {
  const imageSources = {
    attribute1: {
      option1: "imgs/C01/1/1.png",
      option2: "imgs/C01/1/2.png",
      option3: "imgs/C01/1/3.png"
    },
    attribute2: {
      option1: "imgs/C01/2/1.png",
      option2: "imgs/C01/2/2.png",
      option3: "imgs/C01/2/3.png"
    },
    attribute3: {
      option1: "imgs/C01/3/1.png",
      option2: "imgs/C01/3/2.png",
      option3: "imgs/C01/3/3.png"
    }
  };
  console.log("Image sources:", imageSources);
  return imageSources;
}



window.onload = generateArt(collection);