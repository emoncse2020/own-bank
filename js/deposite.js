// step 1:add evenListener to the deposite button
document.getElementById('button-deposite').addEventListener('click', function () {
    // setp2: get the deposite ammount from the deposite field
    const depositeField = document.getElementById('user-deposite');
    const newDepositeAmmountString = depositeField.value;
    const newDepositeAmmount = parseFloat(newDepositeAmmountString);

    // step3: current deposite ammount
    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);
    // step:4 Add number
    const currentDepositeTotal = newDepositeAmmount + previousDepositeTotal;
    depositeTotalElement.innerText = currentDepositeTotal;
    depositeField.value = '';

    // step:5 
    const balenceTotalElement = document.getElementById('balence-total');
    const previousBalenceTotalString = balenceTotalElement.innerText;
    const previousBalenceTotal = parseFloat(previousBalenceTotalString);

    // const current calculeate
    const currentBalence = previousBalenceTotal + newDepositeAmmount;
    // set the balence totoal
    balenceTotalElement.innerText = currentBalence;

})