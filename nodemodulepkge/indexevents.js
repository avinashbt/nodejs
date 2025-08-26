// Event Modules
// How to use it?

// create, fire(emit), listen(on)

const event = require("events");
const eventEmitter = new event.EventEmitter();

// Create
eventEmitter.on("eventName", (data) => {
  console.log("Event Fired: ", data);
});
 
eventEmitter.on("eventName", (data) => {
  console.log("Event Fired: ", data);
});

// Fire (Emit)
eventEmitter.emit("eventName", "asdasd");

 