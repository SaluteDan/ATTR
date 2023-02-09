// //// ATTRIBUTES ART ENGINE --ALPHA v0.15

// // // IMPORT -- Data From JSON (End Case will be Smart Contracts)
// // import collection from './JSON/data.json' assert {type: 'json'}

// // Get the canvas element
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// ctx.canvas.width = window.innerWidth;
// ctx.canvas.height = window.innerWidth;

// const imageSources = initImageSources();

// function mintArt() {

// // Get the staked amount for each option
// const inputs = document.querySelectorAll("input[id^='attribute']");
// for (const input of inputs) {
//   const [attribute, option] = input.id.split("-");
//   // access your object and update the input value
//   collection.attributes[attribute][option].input = parseInt(input.value);
// }

// // FUNCTION -- Define a function to get the selected option for each attribute
// function getSelectedOption(attribute) {
//   // Total weight of all options
//   let totalWeight = 0;
//   // Map of all options and their weights
//   const optionMap = {};
//   // Loop through options in attribute
//   let inputValues = [];
//   for (let option in attribute) {
//       if (option !== "name" && option !== "Weight" && option !== "cost" && option !== "selected") {
//           const optionWeight = attribute[option].Weight + (attribute[option].input || 0);
//           optionMap[option] = optionWeight;
//           totalWeight += optionWeight;
//           inputValues.push(attribute[option].input);
//       }
//   console.log(inputValues)
//   }  
//   // Select a random option based on weight
//   let random = Math.floor(Math.random() * totalWeight);
//   for (let option in optionMap) {
//     random -= optionMap[option];
//     if (random < 0) {
//       return option;
//     }
//   }
// }

// const attributes = collection.attributes;
// let selectedAttribute1Option = getSelectedOption(attributes.attribute1);
// let selectedAttribute2Option = getSelectedOption(attributes.attribute2);
// let selectedAttribute3Option = getSelectedOption(attributes.attribute3);

  
// console.log("Selected option for attribute 1: ", selectedAttribute1Option);
// console.log("Selected option for attribute 2: ", selectedAttribute2Option);
// console.log("Selected option for attribute 3: ", selectedAttribute3Option);

// // Get the image source for each selected option
// let imageSource1 = imageSources["attribute1"][selectedAttribute1Option];
// let imageSource2 = imageSources["attribute2"][selectedAttribute2Option];
// let imageSource3 = imageSources["attribute3"][selectedAttribute3Option];
  
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   let image3Promise = new Promise((resolve, reject) => {
//     let image3 = new Image();
//     image3.src = imageSource3;
//     image3.onload = () => {
//       resolve(image3);
//     };
//   });
  
//   let image2Promise = new Promise((resolve, reject) => {
//     let image2 = new Image();
//     image2.src = imageSource2;
//     image2.onload = () => {
//       resolve(image2);
//     };
//   });
  
//   let image1Promise = new Promise((resolve, reject) => {
//     let image1 = new Image();
//     image1.src = imageSource1;
//     image1.onload = () => {
//       resolve(image1);
//     };
//   });
  
//   Promise.all([image3Promise, image2Promise, image1Promise]).then((images) => {
//     ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);
//     ctx.globalCompositeOperation = 'destination-over';
//     ctx.drawImage(images[1], 0, 0, canvas.width, canvas.height);
//     ctx.globalCompositeOperation = 'destination-over';
//     ctx.drawImage(images[2], 0, 0, canvas.width, canvas.height);
//   });

//   // Push the selected option into the collection object
//   collection.attributes.attribute1.selected = selectedAttribute1Option;
//   collection.attributes.attribute2.selected = selectedAttribute2Option;
//   collection.attributes.attribute3.selected = selectedAttribute3Option;

//   console.log(collection)

//   const attribute1selector = document.querySelectorAll("[attribute='attribute1'] span");
//   attribute1selector.forEach(function(element) {
//       if (element.classList.contains(selectedAttribute1Option)) {
//           element.classList.add("active");
//           element.classList.add("show");
//       } else {
//           element.classList.remove("active");
//           element.classList.remove("show");
//       }
//   })
//   const attribute2selector = document.querySelectorAll("[attribute='attribute2'] span");
//   attribute2selector.forEach(function(element) {
//       if (element.classList.contains(selectedAttribute2Option)) {
//           element.classList.add("active");
//           element.classList.add("show");
//       } else {
//           element.classList.remove("active");
//           element.classList.remove("show");
//       }
//   })
//   const attribute3selector = document.querySelectorAll("[attribute='attribute3'] span");
//   attribute3selector.forEach(function(element) {
//       if (element.classList.contains(selectedAttribute3Option)) {
//           element.classList.add("active");
//           element.classList.add("show");
//       } else {
//           element.classList.remove("active");
//           element.classList.remove("show");
//       }
//   })    
//   // Return the selected options
//   console.log(canvas.toDataURL());

//   const link = document.createElement('a');

//   link.download = 'download.png';
  
//   link.href = canvas.toDataURL();
//   link.click();
//   link.delete;
 
//   }

//   export {canvas, ctx};