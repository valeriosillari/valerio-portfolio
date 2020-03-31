import $ from 'jquery'

const urlMailServerValidation =
  // mailer PROD
  'https://express-contact-form.herokuapp.com/submit'
// mailer DEV
// 'https://express-contact-form-develop.herokuapp.com/submit'

const btnSubmitElement = '.js-form-btn-submit'
const buttonSubmitSendingClass = 'js-form-submit-sending'
const classInputGeneric = 'js-form-control'
const formInputGroupClass = '.js-form-group'
const classInputName = 'js-name'
const classInputEmail = 'js-email'
const classInputMessage = 'js-message'
const classInputPrivacy = 'js-privacy'
const formInputErrorClass = 'has-danger'
const formInputSuccessClass = 'has-success'
const messageBoxFeedbackServerJSClass = 'js-box-feedback'
const $form = $('.js-form')
const $inputName = $(`.${classInputName}`)
const $inputEmail = $(`.${classInputEmail}`)
const $inputMessage = $(`.${classInputMessage}`)
const $inputPrivacy = $(`.${classInputPrivacy}`)
const $buttonContactSubmit = $(btnSubmitElement)

// box feedback for each input (client validation)
const feedbackInputMessageBox = (messageText) => {
  return `
    <div class='box-input-feedback ${messageBoxFeedbackServerJSClass} '>
      ${messageText}
    </div>
  `
}

const feedbackServerErrorMessage = () => {
  return `
    <div class='box-message-danger ${messageBoxFeedbackServerJSClass}'>
      <h4 class="title">
        Ops! We got a problem...
      </h4>
      <span class="text">
        Something goes wrong during the process on the server. Please try again.
      </span>
    </div>
  `
}

const feedbackContactFormSuccess = () => {
  return `
    <div class='box-message-success ${messageBoxFeedbackServerJSClass}'>
        <h4 class="title">
          Thanks! Your email has been delivered.
        </h4>
        <span class="text">
          I am answering you as soon as possible.
        </span>
    </div>
  `
}

// todo: check better
const resetFeedbackStatus = () => {
  // input text + inout checkbox: remove style / colors
  $(`${formInputGroupClass}`).removeClass([
    formInputErrorClass,
    formInputSuccessClass,
  ])

  // remove all message boxes
  $(`.${messageBoxFeedbackServerJSClass}`).remove()
}

const isBtnSubmitDisabled = (isBtnStatus) => {
  // set form DISABLED value option (it comes from function input).
  $buttonContactSubmit.prop('disabled', isBtnStatus)

  // set button extra class during process.
  // with this we ADD/REMOVE text for "sending" process
  if (isBtnStatus === true) {
    $buttonContactSubmit.addClass(buttonSubmitSendingClass)
  } else {
    $buttonContactSubmit.removeClass(buttonSubmitSendingClass)
  }
}

const getFormInputsObject = () => {
  let valueInputName
  let valueInputEmail
  let valueInputMessage
  let valueInputPrivacy

  // get inputs elements as array
  const formInputList = Array.from(
    document.getElementsByClassName(classInputGeneric)
  )

  // grab the value of each input
  formInputList.forEach((item) => {
    const $item = $(item)

    // checkbox: get status of each item (checkbox got different logic)
    if ($item.hasClass(classInputPrivacy)) {
      valueInputPrivacy = $item[0].checked
      // name
    } else if ($item.hasClass(classInputName)) {
      valueInputName = $item[0].value
      // email
    } else if ($item.hasClass(classInputEmail)) {
      valueInputEmail = $item[0].value
      // message
    } else if ($item.hasClass(classInputMessage)) {
      valueInputMessage = $item[0].value
    }
  })

  // set values in an object
  const listValuesObject = {
    name: valueInputName,
    email: valueInputEmail,
    message: valueInputMessage,
    privacy: valueInputPrivacy,
  }

  return listValuesObject
}

// validate form inputs on client side and return response
const validationClient = (name, email, message, privacy) => {
  let validationClientInputName
  let validationClientInputEmail
  let validationClientInputMessage

  // check NAME
  if (name) {
    if (name.length >= 2 && name.match(/([A-Za-z])/g)) {
      validationClientInputName = true
    } else {
      validationClientInputName = 'error'
    }
  } else {
    validationClientInputName = false
  }

  // check EMAIL
  if (email) {
    if (email.length >= 2 && email.match(/^([\w-]+@([\w-]+\.)+[\w-]{2,5})?$/)) {
      validationClientInputEmail = true
    } else {
      validationClientInputEmail = 'error'
    }
  } else {
    validationClientInputEmail = false
  }

  // check MESSAGE
  if (message) {
    if (message.length >= 10 && message.match(/([A-Za-z])/g)) {
      validationClientInputMessage = true
    } else {
      validationClientInputMessage = 'error'
    }
  } else {
    validationClientInputMessage = false
  }

  // set values in an object
  const listValidationClientStatusObject = {
    name: validationClientInputName,
    email: validationClientInputEmail,
    message: validationClientInputMessage,
    // check PRIVACY (just boolean)
    privacy,
  }

  return listValidationClientStatusObject
}

// TODO: set loop?
const feedbackMessage = (inputStatus) => {
  let errorMessage

  // ==============================
  // NAME: add error status to input
  if (inputStatus.includes('isNameSuccess')) {
    $inputName.parent(formInputGroupClass).addClass(formInputSuccessClass)
    // error
  } else if (inputStatus.includes('isNameError')) {
    $inputName.parent(formInputGroupClass).addClass(formInputErrorClass)

    errorMessage = 'Please enter at least 2 letters name.'
    $inputName
      .parent(formInputGroupClass)
      .append(feedbackInputMessageBox(errorMessage))
    // empty
  } else if (inputStatus.includes('isNameEmpty')) {
    $inputName.parent(formInputGroupClass).addClass(formInputErrorClass)

    errorMessage = 'This field is empty. Please write something.'
    $inputName
      .parent(formInputGroupClass)
      .append(feedbackInputMessageBox(errorMessage))
  }

  // ==============================
  // EMAIL: add error status to input
  if (inputStatus.includes('isEmailSuccess')) {
    $inputEmail.parent(formInputGroupClass).addClass(formInputSuccessClass)
    // error
  } else if (inputStatus.includes('isEmailError')) {
    $inputEmail.parent(formInputGroupClass).addClass(formInputErrorClass)

    errorMessage = 'Please enter a valid email.'
    $inputEmail
      .parent(formInputGroupClass)
      .append(feedbackInputMessageBox(errorMessage))
    // empty
  } else if (inputStatus.includes('isEmailEmpty')) {
    $inputEmail.parent(formInputGroupClass).addClass(formInputErrorClass)

    errorMessage = 'This field is empty. Please write something.'
    $inputEmail
      .parent(formInputGroupClass)
      .append(feedbackInputMessageBox(errorMessage))
  }

  // ==============================
  // MESSAGE: add error status to input
  if (inputStatus.includes('isMessageSuccess')) {
    $inputMessage.parent(formInputGroupClass).addClass(formInputSuccessClass)
    // error
  } else if (inputStatus.includes('isMessageError')) {
    $inputMessage.parent(formInputGroupClass).addClass(formInputErrorClass)

    errorMessage = 'Please enter at least 10 letters message.'
    $inputMessage
      .parent(formInputGroupClass)
      .append(feedbackInputMessageBox(errorMessage))
    // empty
  } else if (inputStatus.includes('isMessageEmpty')) {
    $inputMessage.parent(formInputGroupClass).addClass(formInputErrorClass)

    errorMessage = 'This field is empty. Please write something.'
    $inputMessage
      .parent(formInputGroupClass)
      .append(feedbackInputMessageBox(errorMessage))
  }

  // ==============================
  // PRIVACY: add error status to input
  if (inputStatus.includes('isPrivacySuccess')) {
    $inputPrivacy.parent(formInputGroupClass).addClass(formInputSuccessClass)
    // error
  } else if (inputStatus.includes('isPrivacyError')) {
    $inputPrivacy.parent(formInputGroupClass).addClass(formInputErrorClass)
  }
}

// TODO: : move up with validation function?
const feedbackMessageInputs = (userInputList) => {
  if (userInputList.name === true) {
    feedbackMessage('isNameSuccess')
  } else if (userInputList.name === 'error') {
    feedbackMessage('isNameError')
  } else {
    feedbackMessage('isNameEmpty')
  }

  if (userInputList.email === true) {
    feedbackMessage('isEmailSuccess')
  } else if (userInputList.email === 'error') {
    feedbackMessage('isEmailError')
  } else {
    feedbackMessage('isEmailEmpty')
  }

  if (userInputList.message === true) {
    feedbackMessage('isMessageSuccess')
  } else if (userInputList.message === 'error') {
    feedbackMessage('isMessageError')
  } else {
    feedbackMessage('isMessageEmpty')
  }

  if (userInputList.privacy === true) {
    feedbackMessage('isPrivacySuccess')
  } else {
    feedbackMessage('isPrivacyError')
  }
}

const startServerValidation = (
  nameString,
  emailString,
  messageString,
  privacyBool
) => {
  // send collected info/inputs to the server for validation via AJAX
  $.ajax({
    type: 'POST',
    url: urlMailServerValidation,
    // data passed all as string values
    data: {
      name: nameString,
      email: emailString,
      message: messageString,
      // privacy from boolean to string
      isPrivacy: String(privacyBool),
    },
  })
    // validation is done on server side, now we got a reponse.
    .done((response) => {
      if (response.validation === true) {
        // // at mail sent :
        // // 1) "slide up the form"
        // // 2) set a box with feedback message before form element
        // // 3) delete the form element itself
        $form.slideUp(250, () => {
          // show box with feedback message
          $form.after(feedbackContactFormSuccess())

          // remove form markup the form markup (no more messages)
          $form.remove()
        })

        // errors feedback
      } else {
        // reset all feedback classes from each input and form (for server)
        resetFeedbackStatus()

        if (response.errorType === 'server-validation') {
          console.error('💩 server validation ....')
        } else if (response.errorType === 'server-mailer') {
          console.error('💩 mailer ...')
        }

        // server error message feedback
        $form.after(feedbackServerErrorMessage())

        // start submit logic: now enable again
        isBtnSubmitDisabled(false)
      }
    })
}

// =======================
// implementation at submit click ....
$(document).on('click', btnSubmitElement, (event) => {
  // this will prevent the form default way (server loads submit page)
  event.preventDefault()

  // reset all feedback classes and boxes
  resetFeedbackStatus()

  // start submit logic: button disable state
  isBtnSubmitDisabled(true)

  // grab data from each input return object with user digits
  const formInputs = getFormInputsObject()

  // validate on Client Side: return an object with all inputs status
  const validationClientResponse = validationClient(
    formInputs.name,
    formInputs.email,
    formInputs.message,
    formInputs.privacy
  )

  // TODO: this is crazy huge !!!!
  // take client validation response and set feedback message (positive or negative)
  feedbackMessageInputs(validationClientResponse)

  // if client validation is ok, move on with server validation. otherwise stay.
  if (
    // it returns 'true' if all values are true.
    // https://stackoverflow.com/questions/17117712/how-to-know-if-all-javascript-object-values-are-true
    Object.values(validationClientResponse).every((item) => item === true)
  ) {
    startServerValidation(
      formInputs.name,
      formInputs.email,
      formInputs.message,
      formInputs.privacy
    )
    // error client validation. stop process.
  } else {
    // start submit logic: now enable again
    isBtnSubmitDisabled(false)
  }
})
