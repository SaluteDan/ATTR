// //// ATTRIBUTES ART ENGINE --ALPHA v0.10

// // IMPORT -- Data From JSON (End Case will be Smart Contracts)
// import collection from './JSON/data.json' assert {type: 'json'}

// // Get the canvas element
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// ctx.canvas.width = window.innerWidth;
// ctx.canvas.height = window.innerWidth;

// const imageSources = initImageSources();


// function generateArt(collection) {


//     // Create Map from Collection data

//     // let attributes = {
//     //   attribute1: {
//     //     option1: {
//     //       baseWeight: 100,
//     //       stakedWeight: parseInt(attribute1Option1Input.value) || 0
//     //     }, 
//     //     option2: {
//     //       baseWeight: 50,
//     //       stakedWeight: parseInt(attribute1Option2Input.value) || 0
//     //     },
//     //     option3: {
//     //       baseWeight: 10,
//     //       stakedWeight: parseInt(attribute1Option3Input.value) || 0
//     //     },
//     //   },
//     //   attribute2: {
//     //     option1: {
//     //       baseWeight: 10,
//     //       stakedWeight: parseInt(attribute2Option1Input.value) || 0
//     //     },
//     //     option2: {
//     //       baseWeight: 120,
//     //       stakedWeight: parseInt(attribute2Option2Input.value) || 0
//     //     },
//     //     option3: {
//     //       baseWeight: 150,
//     //       stakedWeight: parseInt(attribute2Option3Input.value) || 0
//     //     },
//     //   },
//     //   attribute3: {
//     //     option1: {
//     //       baseWeight: 60,
//     //       stakedWeight: parseInt(attribute3Option1Input.value) || 0
//     //     },
//     //     option2: {
//     //       baseWeight: 100,
//     //       stakedWeight: parseInt(attribute3Option2Input.value) || 0
//     //     },
//     //     option3: {
//     //       baseWeight: 100,
//     //       stakedWeight: parseInt(attribute3Option3Input.value) || 0
//     //     },
//     //   }
//     // };
//     //
//     // let attribute1Option1Input = document.getElementById("attribute1-option1");
//     // let attribute1Option2Input = document.getElementById("attribute1-option2");
//     // let attribute1Option3Input = document.getElementById("attribute1-option3");

//     // let attribute2Option1Input = document.getElementById("attribute2-option1");
//     // let attribute2Option2Input = document.getElementById("attribute2-option2");
//     // let attribute2Option3Input = document.getElementById("attribute2-option3");

//     // let attribute3Option1Input = document.getElementById("attribute3-option1");
//     // let attribute3Option2Input = document.getElementById("attribute3-option2");
//     // let attribute3Option3Input = document.getElementById("attribute3-option3");


//   // Get the staked amount for each option
//   const inputs = document.querySelectorAll("input[id^='attribute']");
//   for (const input of inputs) {
//     const [attribute, option] = input.id.split("-");
//     // access your object and update the input value
//     collection.attributes[attribute][option].input = parseInt(input.value);
    
//     // return collection
//   }

// console.log(collection)

// // Define a function to get the selected option for each attribute
// function getSelectedOption(attribute) {
//   // Total weight of all options
//   let totalWeight = 0;
//   // Map of all options and their weights
//   const optionMap = {};
//   // Loop through options in attribute
//   for (let option in attribute) {
//     if (option !== "name" && option !== "Weight" && option !== "cost" && option !== "selected") {
//       const optionWeight = attribute[option].Weight + (attribute[option].input || 0);
//       optionMap[option] = optionWeight;
//       totalWeight += optionWeight;
//     }
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

//   // function getSelectedWeight(attribute) {
//   //   // Total weight of all options
//   //   let totalWeight = 0;
//   //   // Map of all options and their weights
//   //   const optionMap = {};
//   //   // Loop through options in attribute
//   //   for (let option in attributes[attribute]) {
//   //     // Add option's weight to total weight
//   //     totalWeight += attributes[attribute][option];
//   //   }
//   //   return totalWeight;
//   // }

//   // // get the total weight for each attribute
//   // let weight1 = getSelectedWeight("attribute1");
//   // let weight2 = getSelectedWeight("attribute2");
//   // let weight3 = getSelectedWeight("attribute3");

//   // update the front-end with selected options 
//   document.getElementById("attribute1meta").innerHTML = `<small>ATTRIBUTE 1: ${selectedAttribute1Option}</small>`;
//   document.getElementById("attribute2meta").innerHTML = `<small>ATTRIBUTE 2: ${selectedAttribute2Option}</small>`;
//   document.getElementById("attribute3meta").innerHTML = `<small>ATTRIBUTE 3: ${selectedAttribute3Option}</small>`;
  
//   // // update the front-end with the weight values
//   // document.getElementById("attribute1Weight").innerHTML = `<p> You staked ${weight1} coins on Attribute 1</p>`;
//   // document.getElementById("attribute2Weight").innerHTML = `<p> You staked ${weight2} coins on Attribute 2</p>`;
//   // document.getElementById("attribute3Weight").innerHTML = `<p> You staked ${weight3} coins on Attribute 3</p>`;

//   // let "option1" = selectedAttribute1Option;
//   // let "option2" = selectedAttribute2Option;
//   // let "option3" = selectedAttribute2Option;

//   const metadata = [{selectedAttribute1Option, selectedAttribute2Option, selectedAttribute3Option}];

//   const attribute1selector = document.getElementById("attribute1")
//   const attribute2selector = document.getElementById("attribute2")
//   const attribute3selector = document.getElementById("attribute3")

//   let activeAttribute1Option = attribute1selector.getElementsByClassName(selectedAttribute1Option)[0];
//   let activeAttribute2Option = attribute2selector.getElementsByClassName(selectedAttribute2Option)[0];
//   let activeAttribute3Option = attribute3selector.getElementsByClassName(selectedAttribute3Option)[0];

//   activeAttribute1Option.classList.add("selected");
//   activeAttribute2Option.classList.add("selected");
//   activeAttribute3Option.classList.add("selected");

//   // Return the selected options
//   console.log(metadata)

//   return metadata;
//   }


//   function initImageSources() {
//   const imageSources = {
//     attribute1: {
//       option1: "imgs/C01/1/1.png",
//       option2: "imgs/C01/1/2.png",
//       option3: "imgs/C01/1/3.png"
//     },
//     attribute2: {
//       option1: "imgs/C01/2/1.png",
//       option2: "imgs/C01/2/2.png",
//       option3: "imgs/C01/2/3.png"
//     },
//     attribute3: {
//       option1: "imgs/C01/3/1.png",
//       option2: "imgs/C01/3/2.png",
//       option3: "imgs/C01/3/3.png"
//     }
//   };
//   console.log("Image sources:", imageSources);
//   return imageSources;
// }

// window.onload = generateArt(collection);
