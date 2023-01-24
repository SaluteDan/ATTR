//// ATTRIBUTES ART ENGINE --ALPHA v0.9

function drawArt() {

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

    // update the front-end with selected options 
    document.getElementById("attribute1meta").innerHTML = `<small>ATTRIBUTE 1: ${selectedAttribute1Option}</small>`;
    document.getElementById("attribute2meta").innerHTML = `<small>ATTRIBUTE 2: ${selectedAttribute2Option}</small>`;
    document.getElementById("attribute3meta").innerHTML = `<small>ATTRIBUTE 3: ${selectedAttribute3Option}</small>`;
    
    // // update the front-end with the weight values
    // document.getElementById("attribute1Weight").innerHTML = `<p> You staked ${weight1} coins on Attribute 1</p>`;
    // document.getElementById("attribute2Weight").innerHTML = `<p> You staked ${weight2} coins on Attribute 2</p>`;
    // document.getElementById("attribute3Weight").innerHTML = `<p> You staked ${weight3} coins on Attribute 3</p>`;

    console.log({})

    return {
      attribute1: selectedAttribute1Option,
      attribute2: selectedAttribute2Option,
      attribute3: selectedAttribute3Option
    }; 


  //   // Return the selected options
  //   const metadata = {selectedAttribute1Option, selectedAttribute2Option, selectedAttribute3Option};
  

  //   return metadata
  // }
}


