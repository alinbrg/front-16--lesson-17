// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის ლუწი ან false -ს თუ რიცხვი არის კენტი.
function isEven(num) {
	// console.log(num % 2);
	if (num % 2 === 0) {
		return true;
	} else {
		return false;
	}
	// return num % 2 === 0 ? true : false;
}
// console.log(isEven(4), isEven(5));
// 2. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს - მართკუთხედის გვერდების ზომებს და დააბრუნებს მართკუთხედის ფართობს.
function getRectangleArea(a, b) {
	return a * b;
}
// console.log(getRectangleArea(4, 5));
// 3. დაწერეთ ფუქცია, რომელიც პარამეტრად მიიღებს ერთ რიცხვს - კვადრატის გვერდის სიგრძეს და დააბრუნებს კვადრატის ფართობს. ფართობის გამოსათვლელად გამოიყენეთ #2 პუნქტში აღწერილი ფუნქცია.
function getSquareArea(a) {
	return getRectangleArea(a, a);
}
// console.log(getSquareArea(5));

// 4.
// Math.random() - არის ფუნქცია, რომელიც აბრუნებს შემთხვევით რიცხვს 0-დან 1-მდე.
// Math.floor() - ამრგვალებს რიცხვს ქვემოთ, მაგალითად Math.floor(4.9) აბრუნებს 4-ს.
// Math.round() - ამრგვალებს რიცხვს უახლოეს მთელამდე.
// დაწერეთ ფუნქცია, რომელიც Math.random() ფუნქციის გამოყენებით დააგენერირებს და დააბრუნებს 0-დან 100-მდე შემთხვევით რიცხვს.
function getRandomNumber() {
	let random = Math.random() * 100;
	return Math.round(random);
}

// console.log(getRandomNumber());

// 5. დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს შესაბამისი შეტყობინება
function getCurrencySymbolFromCode(code) {
	let codeLowerCase = code.toLowerCase();
	let codeUpperCase = code.toUpperCase();
	let symbol;
	// console.log(code);
	switch (codeLowerCase) {
		case "usd":
			symbol = "$";
			break;
		case "gel":
			symbol = "ლ";
			break;
		case "eur":
			symbol = "€";
			break;
		default:
			symbol = "none";
			break;
	}

	// if (codeUpperCase === "USD") {
	// 	symbol = "$";
	// } else if (symbol === "GEL") {
	// 	symbol = "ლ";
	// } else if (symbol === "EUR") {
	// 	symbol = "€";
	// } else {
	// 	symbol = "none";
	// }

	// console.log(codeLowerCase, codeUpperCase);
	return symbol;
}

// console.log(getCurrencySymbolFromCode("USD"), getCurrencySymbolFromCode("gel"));

// 6. შექმენით ობიექტების 5 ელემენტიანი მასივი, სადაც თითოეულ ობიექტს გააჩნია name და age ველები. შემდეგ შექმენით ფუნქცია, რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს ყველაზე ახალგაზრდა ობიექტს (რომლის age ველიც არის უმცირესი).
let userArr = [
	{
		name: "gio",
		age: 20,
	},
	{
		name: "nino",
		age: 25,
	},
	{
		name: "nika",
		age: 18,
	},
	{
		name: "tea",
		age: 30,
	},
	{
		name: "mako",
		age: 15,
	},
];

function getYoungerUser(arr) {
	// let sortedArr = arr.sort(function (a, b) {
	// 	return a.age - b.age;
	// });
	// return sortedArr;

	let userAges = arr.map((el) => {
		return el.age;
	});
	let minAge = Math.min(...userAges);
	let minUser = arr.filter((el) => {
		return el.age === minAge;
	});

	// console.log(minUser);
	return minUser[0];
}
// let youngestUser = getYoungerUser(userArr)[0];
// console.log(getYoungerUser(userArr));

const navbar = document.getElementById("navbar");
const mainImg = document.querySelector(".about img");
const firstP = document.querySelector("p");
const navUl = document.querySelector("nav ul");
const navbarLi = navUl.children;
const allP = document.querySelectorAll("p");

console.log(allP);

const firstPInnerText = firstP.innerText;
const firstPTextContent = firstP.textContent;
// console.log(firstPTextContent);
// console.log(firstPInnerText);

const section = document.querySelector("section");
const divBlock = document.createElement("div");
const span = document.createElement("span");
span.innerText = "<p>this is span</p>";

divBlock.innerHTML = `
  <img src="" alt="" />
  <p class="p-center">this is created from innerHtml</p>
`;

divBlock.append(span);
section.appendChild(divBlock);
// divBlock.remove();

const seeMoreLink = document.querySelector(".see-more");
seeMoreLink.getAttribute("href");
seeMoreLink.setAttribute("id", "see-more-link");
console.log(seeMoreLink.href);

const secondP = allP[1];
// secondP.classList.remove("hidden-text");
// secondP.classList.add("hidden-text");

// firstP.style.backgroundColor = "red";
// firstP.style.color = "white";

const seeMoreBtn = document.querySelector(".btn");
function seeMore(e) {
	// console.log("see more", e);
	e.stopPropagation();
	e.target.style.backgroundColor = "green";
	secondP.classList.toggle("hidden-text");
}

seeMoreBtn.addEventListener("click", seeMore);

section.addEventListener("click", (e) => {
	console.log("section clicked");
});

seeMoreLink.addEventListener("click", (e) => {
	e.preventDefault();
	e.stopPropagation();
	console.log("a tag clicked");
});

// seeMoreBtn.addEventListener("click", (event) => {
// console.log(event, "clicked btn");
// 	event.target.style.backgroundColor = "green";
// 	secondP.classList.toggle("hidden-text");
// });

const characters = [
	{
		name: "Harry",
		last_name: "Potter",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/harry.jpg",
	},
	{
		name: "Hermione",
		last_name: "Granger",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
	},
	{
		name: "Ron",
		last_name: "Weasley",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/ron.jpg",
	},
	{
		name: "Draco",
		last_name: "Malfoy",
		house: "Slytherin",
		image: "http://hp-api.herokuapp.com/images/draco.jpg",
	},
];

function renderCards(userArr) {
	const characterCard = userArr.map((el) => {
		return `<div><img src='${el.image}'/></div>`;
	});

	return characterCard;
}

let charactersHTML = renderCards(characters).join("");

let userCardList = document.createElement("div");

userCardList.innerHTML = charactersHTML;

const section2 = document.querySelector(".about");
section2.append(userCardList);
