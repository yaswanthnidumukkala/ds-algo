const fishes = ["nemo"];

const everyone = ["dory", "bruce", "marlin", "gill", "nemo", "nigel", "squirt"];

const large = new Array(100000).fill("nemo");

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found nemo");
    }
  }
  let t1 = performance.now();

  console.log("call to nemo took " + (t1 - t0) + " milliseconds");
}

findNemo(large);
