//Вы хотите взять кредит в банке. Напишите программу, которая поможет вам рассчитать общую сумму выплаты и переплату по кредиту.Дано: вы взяли в кредит 200000 рублей, процентная ставка 10% годовых, срок кредита 2 года//
const credit = 200000;
const procentsPerYear = 10;
const yearsCredit = 2;
const overPayment = (credit / procentsPerYear) * yearsCredit;
const payment = credit + overPayment;
console.log(payment);