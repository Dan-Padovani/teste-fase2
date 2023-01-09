const form = document.querySelector('.contact-form')

const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#e-mail')
const inputPhoneNumber = document.querySelector('#phone-number')
const inputBirthdayDate = document.querySelector('#birthday-date')

const paragraphNameFeedback = document.createElement('p')
const paragraphEmailFeedback = document.createElement('p')
const paragraphPhoneNumberFeedback = document.createElement('p')
const paragraphBirthdayDateFeedback = document.createElement('p')

const requiredNameInfo = {
	paragraph: paragraphNameFeedback, 
	text: 'O campo nome é obrigatório', 
	previousSibling: inputName
}

const requiredEmailInfo = {
	paragraph: paragraphEmailFeedback, 
	text: 'Digite um e-mail válido', 
	previousSibling: inputEmail
}

const requiredPhoneInfo = {
	paragraph: paragraphPhoneNumberFeedback, 
	text: 'Digite um telefone válido, apenas números',
	previousSibling: inputPhoneNumber
}

const requeredBirthdayDate = {
	paragraph: paragraphBirthdayDateFeedback,
	text: 'Digite uma data válida',
	previousSibling: inputBirthdayDate
}



const insertParagraphIntoDOM = paragraphInfo => {
	const {paragraph, text, previousSibling} = paragraphInfo
	paragraph.textContent = text
	paragraph.setAttribute('class', 'required-feedback')
	previousSibling.insertAdjacentElement('afterend', paragraph)
}


form.addEventListener('submit', event => {
	event.preventDefault()

	if (inputName.value === '') {
		insertParagraphIntoDOM(requiredNameInfo)		
	}

	if (!/^[\w\-.]+@([\w-]+.)+[\w-]{2,4}$/.test(inputEmail.value)) {
		insertParagraphIntoDOM(requiredEmailInfo)
	}

	if (!/^[0-9]{2}[1-9][0-9]{7,8}$/.test(inputPhoneNumber.value)) {
		insertParagraphIntoDOM(requiredPhoneInfo)
	}

	if (inputBirthdayDate.value === '') {
		insertParagraphIntoDOM(requeredBirthdayDate)
	}

})


