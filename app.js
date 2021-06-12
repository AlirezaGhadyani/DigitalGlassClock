// Make Selectors
const $ = document;
const $selector = name => $.querySelector(name);
// Function
const clockTimer = () => {
// Get Date
const localDate = new Date();
// Get Hours
const hours = localDate.getHours();
// Get Minutes
const minutes = localDate.getMinutes();
// Get Secounds
const secounds = localDate.getSeconds();
// Select Spans
 $selector('.hours').innerHTML = hours < 10 ? '0' + hours : hours;
 $selector('.minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
 $selector('.secounds').innerHTML = secounds < 10 ? '0' + secounds : secounds;
}

// Set Time Every Secound
setInterval(clockTimer,1000)