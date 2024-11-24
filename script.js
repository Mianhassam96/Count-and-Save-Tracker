let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    // Use the plus-equal technique to increment the count
    count += 1;
    countEl.innerText = count; // Update the displayed count
}


function save() {  
  let countStr  = count + "-"
  saveEl.innerText += countStr;

    console.log(count); // Log the current count to the console
}
 