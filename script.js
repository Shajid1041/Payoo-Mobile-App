document.getElementById('login-btn').addEventListener('click', function(e){
    e.preventDefault()
    const mobileNumber = 12345678910
    const pin = 1077

    const userMobileNumber = parseInt(document.getElementById('mobile-number').value)
    const userPinNumber = parseInt(document.getElementById('pin-number').value)
    
    if(userMobileNumber === mobileNumber && userPinNumber === pin){
        window.location.href = "home.html"
    }else{
        alert("Invalid credentials")
    }
})