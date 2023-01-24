//// ATTRIBUTES ART ENGINE --ALPHA v0.07

// Get the canvas element
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const imageSources = initImageSources();

window.onload = generateArt(imageSources);

function generateArt() {
   
    // Get the staked amount for each option
    let attribute1Option1Input = document.getElementById("attribute1-option1-input");
    let attribute1Option2Input = document.getElementById("attribute1-option2-input");
    let attribute1Option3Input = document.getElementById("attribute1-option3-input");

    let attribute2Option1Input = document.getElementById("attribute2-option1-input");
    let attribute2Option2Input = document.getElementById("attribute2-option2-input");
    let attribute2Option3Input = document.getElementById("attribute2-option3-input");

    let attribute3Option1Input = document.getElementById("attribute3-option1-input");
    let attribute3Option2Input = document.getElementById("attribute3-option2-input");
    let attribute3Option3Input = document.getElementById("attribute3-option3-input");

    console.log("Image sources:", imageSources);

    let attributes = {
      attribute1: {
        option1: {
          baseWeight: 100,
          stakedWeight: parseInt(attribute1Option1Input.value) || 0
        }, 
        option2: {
          baseWeight: 50,
          stakedWeight: parseInt(attribute1Option2Input.value) || 0
        },
        option3: {
          baseWeight: 10,
          stakedWeight: parseInt(attribute1Option1Input.value) || 0
        },
      },
      attribute2: {
        option1: {
          baseWeight: 10,
          stakedWeight: parseInt(attribute2Option1Input.value) || 0
        },
        option2: {
          baseWeight: 120,
          stakedWeight: parseInt(attribute2Option2Input.value) || 0
        },
        option3: {
          baseWeight: 150,
          stakedWeight: parseInt(attribute2Option3Input.value) || 0
        },
      },
      attribute3: {
        option1: {
          baseWeight: 60,
          stakedWeight: parseInt(attribute3Option1Input.value) || 0
        },
        option2: {
          baseWeight: 100,
          stakedWeight: parseInt(attribute3Option2Input.value) || 0
        },
        option3: {
          baseWeight: 100,
          stakedWeight: parseInt(attribute3Option3Input.value) || 0
        },
      }
    };

    // Define a function to get the selected option for each attribute
    function getSelectedOption(attribute) {
      // Total weight of all options
      let totalWeight = 0;
      
      // Map of all options and their weights
      const optionMap = {};
    
      // Loop through options in attribute
      for (let option in attributes[attribute]) {
        // Add option's weight to total weight
        totalWeight += attributes[attribute][option];
        // Add option and weight to map
        optionMap[option] = attributes[attribute][option];
      }
    
      // check if totalWeight is 0
      if (totalWeight === 0) {
        // Get a random option from the options map
        let randomOption = Object.keys(optionMap)[Math.floor(Math.random() * Object.keys(optionMap).length)];
        console.log("Selected option for " + attribute + ": " + randomOption);
        return randomOption;
      }
      
      // Select a random option based on weight
      let random = Math.floor(Math.random() * totalWeight);
      for (let option in optionMap) {
        random -= optionMap[option];
        if (random < 0) {
          console.log("Selected option for " + attribute + ": " + option);
          return option;
        }
      }
    }
    

    // Get the selected options for each attribute
    let selectedAttribute1Option = getSelectedOption("attribute1");
    let selectedAttribute2Option = getSelectedOption("attribute2");
    let selectedAttribute3Option = getSelectedOption("attribute3");

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
   



    function getSelectedWeight(attribute) {
      // Total weight of all options
      let totalWeight = 0;
      // Map of all options and their weights
      const optionMap = {};
      // Loop through options in attribute
      for (let option in attributes[attribute]) {
        // Add option's weight to total weight
        totalWeight += attributes[attribute][option];
      }
      return totalWeight;
    }

    // get the total weight for each attribute
    let weight1 = getSelectedWeight("attribute1");
    let weight2 = getSelectedWeight("attribute2");
    let weight3 = getSelectedWeight("attribute3");

    // update the front-end with selected options 
    document.getElementById("attribute1meta").innerHTML = `<small>ATTRIBUTE 1: ${selectedAttribute1Option}</small>`;
    document.getElementById("attribute2meta").innerHTML = `<small>ATTRIBUTE 2: ${selectedAttribute2Option}</small>`;
    document.getElementById("attribute3meta").innerHTML = `<small>ATTRIBUTE 3: ${selectedAttribute3Option}</small>`;
    
    // // update the front-end with the weight values
    // document.getElementById("attribute1Weight").innerHTML = `<p> You staked ${weight1} coins on Attribute 1</p>`;
    // document.getElementById("attribute2Weight").innerHTML = `<p> You staked ${weight2} coins on Attribute 2</p>`;
    // document.getElementById("attribute3Weight").innerHTML = `<p> You staked ${weight3} coins on Attribute 3</p>`;


    console.log(attributes);

    return {attribute1: weight1, attribute2: weight2, attribute3: weight3};
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
  return imageSources;
}


