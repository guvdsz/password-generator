//Toggle Generator Container
//Elements
const generatorForm = document.querySelector(".generator-form");
const generatorContainer = document.querySelector(".generator-container");
const generatorBtn = document.querySelector(".generator-btn");
const closeBtn = document.querySelector(".close-btn");
//Events
generatorBtn.addEventListener("click", (e) => {
	e.preventDefault();
	generatorContainer.classList.toggle("generator-appears");
	setTimeout(() => {
		generatorForm.classList.toggle("appears");
	}, 150);
});
closeBtn.addEventListener("click", (e) => {
	e.preventDefault();
	generatorForm.classList.toggle("appears");
	setTimeout(() => {
		generatorContainer.classList.toggle("generator-appears");
	}, 150);
});

//Generate Password
//Elements
const includeUpperCase = document.querySelector("#includeUpperCase")
const includeLowerCase = document.querySelector("#includeLowerCase")
const includeNumbers = document.querySelector("#includeNumbers")
const includeSymbols = document.querySelector("#includeSymbols")
const passwordInput = document.querySelector("#passwordInput");
const passwordLengthInput = document.querySelector("#passwordLengthInput");
//Functions
const getLowerCases = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
};
const getUpperCases = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
};
const getNumbers = () => {
	return String.fromCharCode(Math.floor(Math.random() * 9 + 48));
};
const getSymbols = () => {
	return String.fromCharCode(Math.floor(Math.random() * 8 + 33));
};
const generatePassword = (passwordLength, useLowerCases, useUpperCases, useSymbols, useNumbers) => {
	let password = "";
	let getCharacters = []
	if (useLowerCases) {
		getCharacters.push(getLowerCases)
	}
	if (useUpperCases) {
		getCharacters.push(getUpperCases)
	}
	if (useSymbols) {
		getCharacters.push(getSymbols)
	}
	if (useNumbers) {
		getCharacters.push(getNumbers)
	}
	if (getCharacters.length === 0) {
		getCharacters = [getLowerCases, getUpperCases, getSymbols,getNumbers]
	}
	for (let i = 0; i < passwordLength; i++) {
		const randomValue = getCharacters[Math.floor(Math.random() * getCharacters.length)]();
		password += randomValue
	}
	console.log(password)
	return password
};
//Events
generatorForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const passwordLength = passwordLengthInput.value;
	const useLowerCases = includeLowerCase.checked
	const useUpperCases = includeUpperCase.checked
	const useSymbols = includeSymbols.checked
	const useNumbers = includeNumbers.checked
	const generatedPassword = generatePassword(passwordLength, useLowerCases, useUpperCases, useSymbols, useNumbers)
	passwordInput.type = "text"
	passwordInput.value = generatedPassword
});

