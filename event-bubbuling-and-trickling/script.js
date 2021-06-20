// Bubbling Event is something where event on child will be called first on DOM tree
// Event Capturing or Trickling is like where event on highest parent element will be called first

// Event Orders
// Bubbling : child -> parent -> grandParent
// Trickling : grandParent -> parent -> child event order

// In this code you can see we can pass third argument to addEventListner function
// which is useCapture flag which false by default so you will see event on child being called first

document.getElementById("grandParent").addEventListener(
  "click", // on click event
  () => {
    console.log(`grandParent called!`);
  },
  true // useCapture = true, events will be trickled
);

document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log(`parent called!`);
  },
  true // useCapture = true, events will be trickled
);

document.getElementById("child").addEventListener(
  "click",
  (e) => {
    // e.stopPropagation();  to stop over here try uncommenting once ;)
    console.log(`child called!`);
  },
  true // useCapture = true, events will be trickled
);

// so, in trickling of the events for this code you'll see
// grandParent -> parent -> child event order
