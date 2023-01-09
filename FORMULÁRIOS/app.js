const form = document.querySelector('.contact-form')
const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#e-mail')
const inputPhoneNumber = document.querySelector('#phone-number')
const inputBirthdayDate = document.querySelector('#birthday-date')

const paragraphNameFeedback = document.createElement('p')
const paragraphEmailFeedback = document.createElement('p')
const paragraphPhoneNumberFeedback = document.createElement('p')
const paragraphBirthdayDateFeedback = document.createElement('p')

// Attributes for submit and input validation
paragraphNameFeedback.setAttribute('data-feedback', 'submit-name-feedback')
paragraphEmailFeedback.setAttribute('data-feedback', 'submit-email-feedback')
paragraphPhoneNumberFeedback.setAttribute('data-feedback', 'submit-phone-feedback')
paragraphBirthdayDateFeedback.setAttribute('data-feedback', 'submit-birthday-feedback')

// Objects feedback infos
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
	text: 'Digite um telefone válido',
	previousSibling: inputPhoneNumber
}

const requeredBirthdayDate = {
	paragraph: paragraphBirthdayDateFeedback,
	text: 'Digite ou selecione uma data válida',
	previousSibling: inputBirthdayDate
}

// Imask cdn to verify phone number mask
const dynamicMask = IMask(inputPhoneNumber, {
  mask: [
    {
      mask: '(00) 00000-0000',
    },
    {
      mask: '(00) 0000-0000'
    }
  ]
})

// Function to insert feedback submit validation
const insertParagraphIntoDOM = paragraphInfo => {
	const {paragraph, text, previousSibling} = paragraphInfo
	paragraph.textContent = text
	paragraph.setAttribute('class', 'required-feedback')
	previousSibling.insertAdjacentElement('afterend', paragraph)
}

// Function to insert feedback submit validation
const removeSubmitParagraph = feedback => {
	const paragraphSubmitfeedbackExists = document
		.querySelector(`[data-feedback = ${feedback}]`)
	if (paragraphSubmitfeedbackExists) {
		paragraphSubmitfeedbackExists.remove()
	}
}

// Events to remove feedback paragraphs
inputName.addEventListener('input', () => {
	removeSubmitParagraph('submit-name-feedback')
})

inputEmail.addEventListener('input', () => {
	removeSubmitParagraph('submit-email-feedback')
})

inputPhoneNumber.addEventListener('input', () => {
	removeSubmitParagraph('submit-phone-feedback')
})

inputBirthdayDate.addEventListener('input', () => {
	removeSubmitParagraph('submit-birthday-feedback')
})

const formValidation = event => {
	event.preventDefault()

	const isAValidEmail = !/^[\w\-.]+@([\w-]+.)+[\w-]{2,4}$/.test(inputEmail.value)
	const isAValidPhoneNumer = inputPhoneNumber.value === '' ||
		inputPhoneNumber.value.length < 14
	const isAValidName = inputName.value === ''
	const isAValidBirthdayDate = inputBirthdayDate.value === ''

	let done = true

	if (isAValidName) {
		insertParagraphIntoDOM(requiredNameInfo)
		done = false
	}

	if (isAValidEmail) {
		insertParagraphIntoDOM(requiredEmailInfo)
		done = false
	}

	if (isAValidPhoneNumer) {
		insertParagraphIntoDOM(requiredPhoneInfo)
		done = false
	}

	if (isAValidBirthdayDate) {
		insertParagraphIntoDOM(requeredBirthdayDate)
		done = false
	}

	if (done === true) {
		alert('Obrigado pelas informações, em breve retornaremos o contato')
		form.reset()
	}
}

form.addEventListener('submit', formValidation)
