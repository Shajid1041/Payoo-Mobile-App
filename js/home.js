document.getElementById('add-money').addEventListener('click', function(){
    document.getElementById('cash-out-form').style.display = 'none'
    document.getElementById('transfer-form').style.display = 'none'
    document.getElementById('add-money-form').style.display = 'block'
})
document.getElementById('cash-out').addEventListener('click', function(){
    document.getElementById('add-money-form').style.display = 'none'
    document.getElementById('transfer-form').style.display = 'none'
    document.getElementById('cash-out-form').style.display = 'block'
})
document.getElementById('transfer').addEventListener('click', function(){
    document.getElementById('add-money-form').style.display = 'none'
    document.getElementById('cash-out-form').style.display = 'none'
    document.getElementById('transfer-form').style.display = 'block'
})
// add money function
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
// withdraw money function
document.getElementById('withdraw-btn').addEventListener('click', function(e){
        e.preventDefault()
        const pin = 1077
        const ammountToWithdraw = parseInt(document.getElementById('ammount-to-withdraw').value)
        const userPin = parseInt(document.getElementById('withdraw-pin-number').value)
        const agentNumber = document.getElementById('agent-number').value

        const avilableBalance = parseInt(document.getElementById('avilable-balance').innerText)
        if(agentNumber.length < 11){
            alert('Invaled Agent Number')
            return;
        }
        if(userPin !== pin){
            alert('Wrong Password')
            document.getElementById('withdraw-pin-number').value = ''
            return;
        }
        if(ammountToWithdraw > 0 ){
            const totalNewAmmount = avilableBalance - ammountToWithdraw
            console.log(totalNewAmmount)
            document.getElementById('avilable-balance').innerText = totalNewAmmount
            document.getElementById('ammount-to-withdraw').value = ''
            document.getElementById('withdraw-pin-number').value = ''
            document.getElementById('agent-number').value = ''

        }else{
            alert('input An Ammount to Withdraw')
        }
    })
// transfer money function
document.getElementById('send-btn').addEventListener('click', function(e){
        e.preventDefault()
        const pin = 1077
        const ammountToTransfer = parseInt(document.getElementById('ammount-to-transfer').value)
        const userPin = parseInt(document.getElementById('transfer-pin-number').value)
        const userAccountNumber = document.getElementById('user-account-number').value

        const avilableBalance = parseInt(document.getElementById('avilable-balance').innerText)
        if(userAccountNumber.length < 11){
            alert('Invaled Agent Number')
            return;
        }
        if(userPin !== pin){
            alert('Wrong Password')
            document.getElementById('transfer-pin-number').value = ''
            return;
        }
        if(ammountToTransfer > 0 ){
            const totalNewAmmount = avilableBalance - ammountToTransfer
            console.log(totalNewAmmount)
            document.getElementById('avilable-balance').innerText = totalNewAmmount
            document.getElementById('ammount-to-transfer').value = ''
            document.getElementById('transfer-pin-number').value = ''
            document.getElementById('agent-number').value = ''

        }else{
            alert('input An Ammount to Transfer')
        }
    })





