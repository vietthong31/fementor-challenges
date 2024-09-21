const inputs = [
  ...document.querySelectorAll("input[type='number']"),
  document.querySelector("input[type='radio']"),
];
const form = document.querySelector('form');
const clearBtn = document.getElementById('clear');

inputs.forEach((input) => input.addEventListener('change', showErrorMessage));
inputs.forEach((input) => input.addEventListener('invalid', showErrorMessage));

form.addEventListener('submit', validate);
form.addEventListener('submit', showResult);

clearBtn.addEventListener('click', (e) => {
  document.querySelectorAll('input').forEach((input) => {
    input.value = '';
    input.checked = false;
  });
});

function showErrorMessage() {
  const inputContainer = document.querySelector(`form div:has(> input#${this.id})`);
  const message = document.querySelector(`div:has(> input#${this.id}) ~ p`);
  const { valid, valueMissing } = this.validity;
  if (!valid || valueMissing) {
    message.textContent = `This field is ${valueMissing ? 'required' : 'invalid'}`;
    message.classList.remove('hidden');
    inputContainer.classList.add('invalid');
  } else {
    message.classList.add('hidden');
    inputContainer.classList.remove('invalid');
  }
}

function validate() {
  inputs.forEach((input) => {
    input.required = true;
    input.checkValidity();
  });
}

function showResult(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const amount = parseFloat(formData.get('amount'));
  const year = parseInt(formData.get('term'));
  const rate = parseFloat(formData.get('rate'));
  const type = formData.get('type');
  const { monthlyPayment, totalPayment } = calculateMortgage(amount, year, rate, type);
  const result = document.getElementById('result');
  result.classList.replace('text-center', 'text-justify');
  result.classList.replace('justify-center', 'justify-start');
  result.innerHTML = `
    <h2 class='text-white font-bold text-xl'>Your results</h2>
    <p class='font-medium text-slate-500 mt-4'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
    <div class='bg-slate-900 bg-gradient-to-r from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.3)] border-t-4 border-lime rounded-lg p-4 mt-6'>
      <div>
        <p class='font-medium text-slate-500'>Your monthly repayments</p>
        <p class='font-bold text-4xl text-lime py-2'>${monthlyPayment.toLocaleString('en', {
          style: 'currency',
          currency: 'GBP',
          maximumFractionDigits: 2,
        })}</p>
      </div>
      <div class='border my-4 border-gray-500'></div>
      <div>
        <p class='font-medium text-slate-500'>Total you'll repay over term</p>
        <p class='font-bold text-2xl text-white py-2'>${totalPayment.toLocaleString('en', {
          style: 'currency',
          currency: 'GBP',
          maximumFractionDigits: 2,
        })}</p>
      </div>
    </div>
  `;
}

function calculateMortgage(amount, year, interestRate, type) {
  const numberOfPayments = year * 12;
  const monthlyRate = interestRate / 100 / 12;

  let monthlyPayment, totalPayment;

  if (type === 'repayment') {
    monthlyPayment =
      (monthlyRate * amount * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    totalPayment = monthlyPayment * numberOfPayments;
  } else if (type === 'interest') {
    monthlyPayment = amount * monthlyRate;
    totalPayment = monthlyPayment * numberOfPayments + amount;
  }

  return { monthlyPayment, totalPayment };
}
