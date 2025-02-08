const btnEl = document.querySelector("#btn");

const bmiInputEl = document.querySelector("#bmi-result");

const weightConditionEl = document.querySelector("#weight-condition");

function calculateBMI() {
  const heightValue = document.querySelector("#height").value / 100;
  const weightValue = document.querySelector("#weight").value;

  const bmiValue = weightValue / (heightValue * heightValue);

  bmiInputEl.value = bmiValue;
  console.log(bmiInputEl);

  if (bmiValue < 18.5) {
    weightConditionEl.innerHTML = " Under weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerHTML = " Normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerHTML = " Overweight";
  } else if (bmiValue > 30) {
    weightConditionEl.innerHTML = " Obesity";
  }
}

btnEl.addEventListener("click", calculateBMI);
