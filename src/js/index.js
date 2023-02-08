const confirmBtn = document.querySelector(".confirm-btn")
const continueBtn = document.querySelector(".continue-btn")
const flexbox = document.querySelector(".flexbox")
const confirmationBox = document.querySelector(".confirmation-box")
const allInputs = document.querySelectorAll(".input")
const allParagraphs = document.querySelectorAll(".paragraph")
const cardOwner = document.querySelector(".name")
const cardNumber = document.querySelector(".number")
const expMonth = document.querySelector(".month")
const expYear = document.querySelector(".year")
const cvcNmber = document.querySelector(".cvc-input")
const cvcCard = document.querySelector(".back-cvc-number")
const frontNumber = document.querySelector(".front-card-number")
const frontOwner = document.querySelector(".front-name")
const expDate = document.querySelector(".front-exp-date")

const reg = /[0-9]/
let blankInputs

confirmBtn.addEventListener("click", () => {
	blankInputs = 0
	ValidateForm()

	if (blankInputs == 0) {
		flexbox.style.display = "none"
		confirmationBox.style.display = "flex"

		AssignCardDetails()
	}
})

continueBtn.addEventListener("click", () => {
	ClearInputAndAlerts()
	flexbox.style.display = "flex"
	confirmationBox.style.display = "none"
})

const ValidateForm = () => {
	if (allInputs[0].value == "") {
		allParagraphs[0].textContent = "Cardholder name can't be empty"
		allInputs[0].classList.add("error")
		blankInputs++
	} else {
		allParagraphs[0].textContent = ""
		allInputs[0].classList.remove("error")
	}

	if (
		allInputs[1].value == "" ||
		!reg.test(allInputs[1].value) ||
		allInputs[1].value.length != 16
	) {
		allParagraphs[1].textContent =
			"Cardnumber can't be blank, number must contains only number and should have 16 characters"
		allInputs[1].classList.add("error")
		blankInputs++
	} else {
		allParagraphs[1].textContent = ""
		allInputs[1].classList.remove("error")
	}

	if (
		allInputs[2].value == "" ||
		allInputs[2].value.length > 2 ||
		parseInt(allInputs[2].value) < 1 ||
		parseInt(allInputs[2].value) > 12 ||
		!reg.test(allInputs[2].value)
	) {
		allParagraphs[2].textContent =
			"Month details cannot be blank, also input should cointains maximum 2 numbers from 1-12 range"
		allInputs[2].classList.add("error")
		blankInputs++
	} else {
		allParagraphs[2].textContent = ""
		allInputs[2].classList.remove("error")
	}

	if (
		allInputs[3].value == "" ||
		allInputs[3].value.length > 2 ||
		parseInt(allInputs[3].value) < 1 ||
		!reg.test(allInputs[3].value)
	) {
		allParagraphs[3].textContent =
			"Year details cannot be blank, also input should cointains maximum 2 numbers from 1-99 range"
		allInputs[3].classList.add("error")
		blankInputs++
	} else {
		allParagraphs[3].textContent = ""
		allInputs[3].classList.remove("error")
	}

	if (
		allInputs[4].value == "" ||
		allInputs[4].value.length > 3 ||
		parseInt(allInputs[4].value) < 1 ||
		!reg.test(allInputs[4].value)
	) {
		allParagraphs[4].textContent =
			"CVC number can't be blank, CVC should contains 3 numbers and need to be greather than 0"
		allInputs[4].classList.add("error")
		blankInputs++
	} else {
		allParagraphs[4].textContent = ""
		allInputs[4].classList.remove("error")
	}
}

const ClearInputAndAlerts = () => {
	allInputs.forEach(el => {
		el.value = ""
	})

	allParagraphs.forEach(el => {
		el.textContent = ""
	})

	cvcCard.textContent = ""
	frontNumber.textContent = ""
	frontOwner.textContent = ""
	expDate.textContent = ""
}

const AssignCardDetails = () => {
	cvcCard.textContent = cvcNmber.value
	frontNumber.textContent = `${cardNumber.value.slice(
		0,
		4
	)} ${cardNumber.value.slice(4, 8)} ${cardNumber.value.slice(
		8,
		12
	)} ${cardNumber.value.slice(12, 16)}`
	frontOwner.textContent = cardOwner.value
	expDate.textContent = `${expMonth.value}/${expYear.value}`
}
