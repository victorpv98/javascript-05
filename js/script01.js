const form = document.getElementById("salary-calculator");
const categorySelect = document.getElementById("category");
const hoursInput = document.getElementById("hours");
const yearsInput = document.getElementById("years");
const basicSalarySpan = document.getElementById("basic-salary");
const bonusSpan = document.getElementById("bonus");
const netSalarySpan = document.getElementById("net-salary");

const hourlyRates = {
  A: 40,
  B: 35,
  C: 30,
};

const bonusPercentages = {
  1: 15,
  4: 20,
  8: 30,
  13: 35,
};

function calculateBonus(years) {
  for (let [yearsRange, percentage] of Object.entries(bonusPercentages)) {
    const [min, max] = yearsRange.split("-").map(Number);
    if (years >= min && (max === undefined || years <= max)) {
      return percentage;
    }
  }
  return 0;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const category = categorySelect.value;
  const hours = Number(hoursInput.value);
  const years = Number(yearsInput.value);

  const basicSalary = hours * hourlyRates[category];

  const bonus = (basicSalary * calculateBonus(years)) / 100;

  const netSalary = basicSalary + bonus;

  basicSalarySpan.textContent = basicSalary;
  bonusSpan.textContent = bonus;
  netSalarySpan.textContent = netSalary;
});
