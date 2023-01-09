const form = document.querySelector('.contact-form')

const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#e-mail')
const inputPhoneNumber = document.querySelector('#phone-number')
const inputBirthdayDate = document.querySelector('#birthday-date')

const paragraphNameFeedback = document.createElement('p')
const paragraphEmailFeedback = document.createElement('p')
const paragraphPhoneNumberFeedback = document.createElement('p')
const paragraphBirthdayDateFeedback = document.createElement('p')

paragraphNameFeedback.setAttribute('data-feedback', 'submit-feedback')
paragraphEmailFeedback.setAttribute('data-feedback', 'submit-feedback')
paragraphPhoneNumberFeedback.setAttribute('data-feedback', 'submit-feedback')
paragraphBirthdayDateFeedback.setAttribute('data-feedback', 'submit-feedback')


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

const insertParagraphIntoDOM = paragraphInfo => {
	const {paragraph, text, previousSibling} = paragraphInfo
	paragraph.textContent = text
	paragraph.setAttribute('class', 'required-feedback')
	previousSibling.insertAdjacentElement('afterend', paragraph)
}

const removeSubmitParagraph = () => {
	const paragraphSubmitfeedbackExists = document.querySelector('[data-feedback = "submit-feedback"]')
	if (paragraphSubmitfeedbackExists) {
		paragraphSubmitfeedbackExists.remove()
	}
}

inputName.addEventListener('focus', () => {
	removeSubmitParagraph()
})

inputEmail.addEventListener('focus', () => {
	removeSubmitParagraph()
})

inputPhoneNumber.addEventListener('focus', () => {
	removeSubmitParagraph()
})

inputBirthdayDate.addEventListener('focus', () => {
	removeSubmitParagraph()
})


form.addEventListener('submit', event => {
	event.preventDefault()

	if (inputName.value === '') {
		insertParagraphIntoDOM(requiredNameInfo)		
	}

	if (!/^[\w\-.]+@([\w-]+.)+[\w-]{2,4}$/.test(inputEmail.value)) {
		insertParagraphIntoDOM(requiredEmailInfo)
	}

	if (inputPhoneNumber.value === '' || inputPhoneNumber.value.length <= 13) {
		insertParagraphIntoDOM(requiredPhoneInfo)

	}
	console.log(inputPhoneNumber.value.length)

	if (inputBirthdayDate.value === '') {
		insertParagraphIntoDOM(requeredBirthdayDate)
	}

})

const element = document.getElementById('phone-number');
// const maskOptions = 
// 	{
// 		mask: '(00) 00000-0000'
// 	}
// const mask = IMask(element, maskOptions);

// var digitsMask = IMask(element, {
//   mask: /^\d+$/
// });

// 

// const dynamicMask = IMask(inputPhoneNumber, {
//   mask: [
//     {
//       mask: '(00) 00000-0000',
//     },
//     {
//       mask: '(00) 0000-0000'
//     }
//   ]
// })

//console.log(mask)


// const phoneNumberTypes = {
// 	mask: [
// 		{
// 			mask: '(00) 00000-0000',
// 			regex: /^[1-9]{2}[0-9]{4,5}[0-9]{4}$/,
		
// 		},
// 		{
// 			mask: '(00) 0000-0000',
// 			regex: /^[1-9]{2}[0-9]{4,5}[0-9]{4}$/,
			
// 		}
// 	],
// 	dispatch: function(appended, dynamicMasked) {
// 		const number = (dynamicMasked.value + appended).replace(/\D/g, '')
// 		const foundMask = dynamicMasked.compiledMasks.find(({regex}) => number.match(regex))

// 		return foundMask
// 	}
// }
// const phoneNumberMasked = IMask(element, phoneNumberTypes)





// input only keys html onkeypress="return /[0-9]/i.test(event.key)"
// regex phone /^(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/




// var dispatchMask = IMask(element, {
// 	mask: [
// 		{
// 			mask: '(00) 00000-0000',			
// 		},
// 		{
// 			mask: '(00) 0000-0000',
// 		}
// 	],
// 	dispatch: function (appended, dynamicMasked) {
// 		var number = (dynamicMasked.value + appended).replace(/\D/g,'');

// 		return dynamicMasked.compiledMasks.find(function (m) {
// 			return number.indexOf(m.startsWith) === 0;
// 		});
// 	}
// }
// )
//console.log(mask)



