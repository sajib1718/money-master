function fieldValue(element) {

    const elementValue = document.getElementById(element);
    const elementString = elementValue.value;
    const value = parseFloat(elementString);
    elementValue.value = '';
    return value;


}

function fieldText(element) {

    const elementValue = document.getElementById(element);
    const elementString = elementValue.innerText;
    const value = parseFloat(elementString);



    return value;


}

function setValue(element, value) {

    const elements = document.getElementById(element);
    elements.innerText = value;
}


document.getElementById('calculate').addEventListener('click', function () {

    const income = fieldValue('income');
    const food = fieldValue('food');
    const rent = fieldValue('rent');
    const cloths = fieldValue('cloth');

    const totalExpense = food + rent + cloths;
    const totalBalance = income - totalExpense;

    setValue('total-expense', totalExpense);
    setValue('total-balance', totalBalance);




})

document.getElementById('submit').addEventListener('click', function () {


    const savingRate = fieldValue('save');
    const totalBalance = fieldText('total-balance');

    const totalSavings = totalBalance * (savingRate / 100);

    setValue('saving-amount', totalSavings);

    const remaing = totalBalance - totalSavings;

    setValue('remaining', remaing);





})

