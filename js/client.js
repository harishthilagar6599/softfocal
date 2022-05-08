window.onload = () => {
    const form = document.getElementById('grov-contact-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })
}

const submitForm = () => {
    console.log("called");
    const btn = document.getElementById('grov-submit-btn')
    console.log(btn);
    btn.value = "Please wait..."
    btn.disabled = true
    const msg = document.getElementById('grov-msg-id')
    setTimeout(() => {
        msg.style.display = "flex"
    }, 1000);
    setTimeout(()=>{
        window.location.reload()
    },1500)
}