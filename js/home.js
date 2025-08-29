

const transactionData = []


function display(id){
    const formList = document.getElementsByClassName('form')
    for(const form of formList){
        form.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block'

}
function displayClicked(id){
    const formBtns = document.getElementsByClassName('form-btn');
    for(const formBtn of formBtns){
        formBtn.classList.remove("border-[#0874f2]" , "bg-[#0874f20d]")
        formBtn.classList.add("border-gray-200")
    }
    document.getElementById(id).classList.remove("border-gray-200")
    document.getElementById(id).classList.add("border-[#0874f2]" , "bg-[#0874f20d]")

}


function getValue(id){
    return document.getElementById(id).value 
}
function getNumberValue(id){
    return parseInt(getValue(id))
}



document.getElementById('add-money').addEventListener('click', function(){
    displayClicked('add-money')
    display('add-money-form')
})
document.getElementById('cash-out').addEventListener('click', function(){
    displayClicked('cash-out')
    display('cash-out-form')
})
document.getElementById('transfer').addEventListener('click', function(){
    displayClicked('transfer')
        display('transfer-form')
    })
document.getElementById('get-bonus').addEventListener('click', function(){
    displayClicked('get-bonus')
        display('bonus-form')
    })
document.getElementById('pay-bill').addEventListener('click', function(){
    displayClicked('pay-bill')
        display('pay-bill-form')
    })

document.getElementById('transaction').addEventListener('click', function(){
        displayClicked('transaction')
        display('transaction-form')
    
        const transacContainer = document.getElementById('transaction-container')
        transacContainer.innerText = ""
        for(const cardData of transactionData){
            const div = document.createElement("div")
            div.innerHTML =`
                <div class="bg-white rounded-xl p-3 flex justify-between items-center">
                    <div class="flex items-center">
                        <div class="bg-[#f4f5f7] rounded-full p-3">
                            <img class="mx-auto" src="assets/wallet1.png" alt="" /> 
                        </div>
                        <div>
                            <h3 class="font-semibold">${cardData.name}</h3>
                            <p class="text-[#08080880]">${cardData.date}</p>
                        </div>
                    </div>
                    <div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
            `
            transacContainer.appendChild(div)
        }


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

            const data = {
                name: "Add money",
                date: new Date().toLocaleString()
            }
            transactionData.push(data)

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

            const data = {
                name: "Withdraw Money",
                date: new Date().toLocaleString()
            }
            transactionData.push(data)

        }else{
            alert('input An Ammount to Withdraw')
        }
    })
// transfer money function
document.getElementById('send-btn').addEventListener('click', function(e){
        e.preventDefault()
        const pin = 1077
        const ammountToTransfer = getNumberValue('ammount-to-transfer')
        const userPin = getNumberValue('transfer-pin-number')
        const userAccountNumber = getValue('user-account-number')

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

            const data = {
                name: "Transfer money",
                date: new Date().toLocaleString()
            }
            transactionData.push(data)

        }else{
            alert('input An Ammount to Transfer')
        }
    })








