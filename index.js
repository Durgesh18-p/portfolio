const contact = document.querySelector("#contact-button")
const linkedIn = document.querySelector(".linkedin-link")

contact.addEventListener('click',() => {
    let phoneNumber = '9405807468'
    window.open("https://api.whatsapp.com/send?phone=" + phoneNumber)
})

linkedIn.addEventListener('click',() => {
    window.open("https://www.linkedin.com/in/durgesh-suryawanshi-056a58230/")
})