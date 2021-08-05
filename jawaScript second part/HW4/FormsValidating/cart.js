'use strict'
const regWordsDigits = /[,=+\-\)\(*&%$#@\\\/]/gm
const regValidatePhone = /^(\+7)?\(\d{3}\)?(\d{3})?\-\d{4}$/gm
const regValidateMail = /[a-zA-Z0-9-]+(@mail\.ru)/gm

const validateForm = {
    userName: '',
    userText: '',
    userPhone: '',
    userMail: '',

    getElementHTML(element) {
        return document.getElementById(`${element}`)
    },

    getValue(name) {
        return this.getElementHTML(name).value
    },

    validateData(validator, data) {
        if (validator.test(data)) {
            return true
        } else {
            return false
        }
    },

    makeFieldRed(elem) {
        this.getElementHTML(elem).style.border = '1px solid red'
    },

    makeFieldBlack(elem) {
        this.getElementHTML(elem).style.border = '1px solid black'
    },


    pushButtonSubmit() {
        
        this.getElementHTML('btns').onclick = () => {
            this.makeFieldBlack('userName')
            this.makeFieldBlack('phone')
            this.makeFieldBlack('mail')

            if (this.validateData(regWordsDigits, this.getValue('userName'))) {
                this.makeFieldRed( 'userName')
            } else if (this.validateData(regValidatePhone, this.getValue('phone')) === false) {
                this.makeFieldRed('phone')
            } else if (this.validateData(regValidateMail, this.getValue('mail'))) {
                this.makeFieldRed('mail')
            } else {
                this.userName = this.getValue('userName')
                
                                
                this.userPhone = this.getValue('phone')
                
                
                this.userMail = this.getValue('mail')
                
                this.userText = this.getValue('text')
            }
        }
    },






}
validateForm.pushButtonSubmit()