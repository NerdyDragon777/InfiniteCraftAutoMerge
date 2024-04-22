// ==UserScript==
// @name         Infinite Craft Automerge Utilities.
// @namespace    https://github.com/NerdyDragon777/InfiniteCraftAutoMerge/tree/main
// @version      2024-04-22
// @description  Adds two new buttons to Infinite Craft.
// @author       NerdyDragon777
// @match        https://neal.fun/infinite-craft/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neal.fun
// @grant        none
// @downloadURL  https://github.com/NerdyDragon777/InfiniteCraftAutoMerge/tree/main
// @updateURL    https://github.com/NerdyDragon777/InfiniteCraftAutoMerge/tree/main
// ==/UserScript==

(async function() {
    'use strict';
const getItems = () => Array.from(document.querySelectorAll(".items div.item"));
const getCenter = (offsetX = 0, offsetY = 0) => [
	Math.round((window.innerWidth - main.sidebarSize) / 2) + offsetX,
	Math.round(window.innerHeight / 2) + offsetY
];
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    await wait(1000);
const randomItem = () => {
	const items = getItems();
	return items[Math.floor(Math.random() * items.length)];
};
const main = document.querySelector(".container").__vue__._uid === 7
		? document.querySelector(".container").__vue__.$children[0]
		: document.querySelector(".container").__vue__;

const randomButton = document.createElement("img");
randomButton.src = "https://api.iconify.design/ic:outline-question-mark.svg";
randomButton.id = "random-button";
randomButton.style.width = "23px";
randomButton.style.cursor = "pointer";
document.querySelector(".side-controls").insertBefore(randomButton,document.querySelector(".side-controls").firstChild);
randomButton.addEventListener("click", async () => {
	randomItem().dispatchEvent(new MouseEvent("mousedown"));
	await wait(10);
	main.calcInstanceSize(main.selectedInstance);
	await wait(10);
	main.setInstancePosition(main.selectedInstance, ...getCenter(0, -30));
	main.dropElement();
	await wait(10);
	randomItem().dispatchEvent(new MouseEvent("mousedown"));
	await wait(10);
	main.calcInstanceSize(main.selectedInstance);
	await wait(10);
	main.setInstancePosition(main.selectedInstance, ...getCenter(0, 30));
	main.dropElement();
	await wait(10);
	let lastIndex = document.getElementsByClassName("item instance").length-1;
	let rect =	document.getElementsByClassName("item instance")[lastIndex].getBoundingClientRect();
  let centerX = rect.left + rect.width / 2;
  let centerY = rect.top + rect.height / 2;
	let rect2 =	document.getElementsByClassName("item instance")[lastIndex-1].getBoundingClientRect();
  let centerX2 = rect2.left + rect2.width / 2;
  let centerY2 = rect2.top + rect2.height / 2;
	let falseMove1 = new MouseEvent('mousemove', {
        bubbles: true,
        cancelable: true,
        view: window,
        detail: 0,
        screenX: centerX,
        screenY: centerY,
        clientX: centerX,
        clientY: centerY,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false,
        button: 0,
        relatedTarget: null
    });
	let falseDown = new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
        view: window,
        detail: 0,
        screenX: centerX,
        screenY: centerY,
        clientX: centerX,
        clientY: centerY,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false,
        button: 0,
        relatedTarget: null
    });
	let falseMove2 = new MouseEvent('mousemove', {
        bubbles: true,
        cancelable: true,
        view: window,
        detail: 0,
        screenX: centerX2,
        screenY: centerY2,
        clientX: centerX2,
        clientY: centerY2,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false,
        button: 0,
        relatedTarget: null
    });
	let falseUp = new MouseEvent('mouseup', {
        bubbles: true,
        cancelable: true,
        view: window,
        detail: 0,
        screenX: centerX2,
        screenY: centerY2,
        clientX: centerX2,
        clientY: centerY2,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false,
        button: 0,
        relatedTarget: null
    });
	document.dispatchEvent(falseMove1);
	await wait(10);
	document.getElementsByClassName("item instance")[lastIndex].dispatchEvent(falseDown);
	await wait(10);
	document.dispatchEvent(falseMove2);
	await wait(10);
	document.getElementsByClassName("item instance")[lastIndex].dispatchEvent(falseUp);
});


const combineButton = document.createElement("img");
combineButton.src = "https://api.iconify.design/fluent-mdl2:combine.svg";
combineButton.id = "combine-button";
combineButton.style.width = "23px";
combineButton.style.cursor = "pointer";
document.querySelector(".side-controls").insertBefore(combineButton, document.querySelector(".side-controls").firstChild);

combineButton.addEventListener("click", async () => {
	let lastIndex = document.getElementsByClassName("item instance").length-1;
let checkIndex = (recall) => {
		console.log(document.getElementsByClassName("item instance")[lastIndex].classList.length);

		if (document.getElementsByClassName("item instance")[lastIndex].classList.length != 2) {
			lastIndex -= 2;
			if (lastIndex <= 0) {
				lastIndex += 2;
			} else recall(recall);
		}
	};
	checkIndex(checkIndex);
	let rect =	document.getElementsByClassName("item instance")[lastIndex].getBoundingClientRect();
  let centerX = rect.left + rect.width / 2;
  let centerY = rect.top + rect.height / 2;
	let rect2 =	document.getElementsByClassName("item instance")[lastIndex-1].getBoundingClientRect();
  let centerX2 = rect2.left + rect2.width / 2;
  let centerY2 = rect2.top + rect2.height / 2;
	let falseMove1 = new MouseEvent('mousemove', {
        bubbles: true,
        cancelable: true,
        view: window,
        detail: 0,
        screenX: centerX,
        screenY: centerY,
        clientX: centerX,
        clientY: centerY,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false,
        button: 0,
        relatedTarget: null
    });
	let falseDown = new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
        view: window,
        detail: 0,
        screenX: centerX,
        screenY: centerY,
        clientX: centerX,
        clientY: centerY,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false,
        button: 0,
        relatedTarget: null
    });
	let falseMove2 = new MouseEvent('mousemove', {
        bubbles: true,
        cancelable: true,
        view: window,
        detail: 0,
        screenX: centerX2,
        screenY: centerY2,
        clientX: centerX2,
        clientY: centerY2,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false,
        button: 0,
        relatedTarget: null
    });
	let falseUp = new MouseEvent('mouseup', {
        bubbles: true,
        cancelable: true,
        view: window,
        detail: 0,
        screenX: centerX2,
        screenY: centerY2,
        clientX: centerX2,
        clientY: centerY2,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false,
        button: 0,
        relatedTarget: null
    });
	document.dispatchEvent(falseMove1);
	await wait(10);
	document.getElementsByClassName("item instance")[lastIndex].dispatchEvent(falseDown);
	await wait(10);
	document.dispatchEvent(falseMove2);
	await wait(10);
	document.getElementsByClassName("item instance")[lastIndex].dispatchEvent(falseUp);
});
})();
