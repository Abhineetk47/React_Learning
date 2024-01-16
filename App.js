import React from "react";
import  ReactDOM  from "react-dom/client";
const heading = React.createElement("h1", { id: "heading" }, "Hello world from React")
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am H1 Tag "), React.createElement("h2", {}, "I am H2 Tag ")]))
// what if we want to creat multiple siblings inside the div

const root = ReactDOM.createRoot(document.getElementById("root"))
const deliveryPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const deliveryArrived = Math.random() < .5;
        if (deliveryArrived) {
            resolve("Your package has arrived");
        }
        else {
            reject("Your package has not yet arrived")
        }
    }, 2000)
});
deliveryPromise.then((successMessage) => console.log(successMessage)).catch((rejectMessage) => console.log(rejectMessage));
root.render(parent);

