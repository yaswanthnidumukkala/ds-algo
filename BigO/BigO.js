const fishes = ["nemo"];

const everyone = ["dory", "bruce", "marlin", "gill", "nemo", "nigel", "squirt"];

const large = new Array(100000).fill("nemo");

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found nemo");
    }
  }
}

//findNemo(large); // O(n) notation -> Linear time



