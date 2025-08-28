document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    const pin = 1077
    const bankAccountNumber = document.getElementById('bank-account-number').value
    const ammountToAdd = parseInt(document.getElementById('ammount-to-add').value)
    const userPin = parseInt(document.getElementById('pin-number').value)

    const avilableBalance = parseInt(document.getElementById('avilable-balance').innerText)
    if(bankAccountNumber.length < 11){
        console.log(bankAccountNumber.length)
        alert('Invaled Account Number')
        return;
    }
    if(userPin !== pin){
        alert('Wrong Password')
        document.getElementById('pin-number').value = ''
        return;
    }
    if(ammountToAdd > 0 ){
        const totalNewAmmount = avilableBalance + ammountToAdd 
        console.log(totalNewAmmount)
        document.getElementById('avilable-balance').innerText = totalNewAmmount
        document.getElementById('ammount-to-add').value = ''
        document.getElementById('pin-number').value = ''
        document.getElementById('select-bank').value = ''
        document.getElementById('bank-account-number').value = ''

    }else{
        alert('Add An Ammount')
    }
})




document.getElementById('add-money').addEventListener('click', function(){
    
})