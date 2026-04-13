const readline = require("readline-sync");

const employees = [];
const EMPLOYEE_COUNT = 3;

// Helper function to get a non-empty name
function getEmployeeName(employeeNumber) {
  while (true) {
    const name = readline.question(`Enter employee #${employeeNumber} name: `).trim();
    if (name.length > 0) {
      return name;
    }
    console.log("Name cannot be empty. Please try again.");
  }
}

// Helper function to get a valid positive wage
function getHourlyWage(name) {
  while (true) {
    const wageInput = readline.question(`Enter ${name}'s hourly wage: `);
    const wage = Number(wageInput);

    if (!Number.isNaN(wage) && wage > 0) {
      return wage;
    }
    console.log("Hourly wage must be a positive number. Please try again.");
  }
}

// Helper function to get valid hours between 0 and 80
function getHoursWorked(name) {
  while (true) {
    const hoursInput = readline.question(`Enter ${name}'s hours worked: `);
    const hours = Number(hoursInput);

    if (!Number.isNaN(hours) && hours >= 0 && hours <= 80) {
      return hours;
    }
    console.log("Hours worked must be between 0 and 80. Please try again.");
  }
}

// Collect employee data
for (let i = 1; i <= EMPLOYEE_COUNT; i++) {
  console.log(`\nEmployee #${i}`);
  console.log("----------------------");

  const name = getEmployeeName(i);
  const hourlyWage = getHourlyWage(name);
  const hoursWorked = getHoursWorked(name);

  const regularHours = Math.min(hoursWorked, 40);
  const overtimeHours = Math.max(hoursWorked - 40, 0);

  const regularPay = regularHours * hourlyWage;
  const overtimePay = overtimeHours * hourlyWage * 1.5;
  const totalPay = regularPay + overtimePay;

  employees.push({
    name,
    hourlyWage,
    hoursWorked,
    regularPay,
    overtimePay,
    totalPay
  });
}

// Find highest-paid employee
let highestPaidEmployee = employees[0];
for (const employee of employees) {
  if (employee.totalPay > highestPaidEmployee.totalPay) {
    highestPaidEmployee = employee;
  }
}

// Print payroll report
console.log("\nPAYROLL REPORT");
console.log("==========================================================================");
console.log(
  "Name".padEnd(20) +
  "Hours".padEnd(12) +
  "Regular Pay".padEnd(16) +
  "Overtime Pay".padEnd(16) +
  "Total Pay"
);
console.log("==========================================================================");

for (const employee of employees) {
  console.log(
    employee.name.padEnd(20) +
    employee.hoursWorked.toFixed(2).padEnd(12) +
    (`$${employee.regularPay.toFixed(2)}`).padEnd(16) +
    (`$${employee.overtimePay.toFixed(2)}`).padEnd(16) +
    `$${employee.totalPay.toFixed(2)}`
  );
}

console.log("==========================================================================");
console.log(
  `Highest-paid employee: ${highestPaidEmployee.name} with $${highestPaidEmployee.totalPay.toFixed(2)}`
);