let employees = [];

function addEmployee() {
    const name = document.getElementById("empName").value.trim();
    const id = parseInt(document.getElementById("empId").value, 10);
    const salary = parseFloat(document.getElementById("empSalary").value);
    const dept = document.getElementById("empDept").value.trim();

    if (!name || Number.isNaN(id) || Number.isNaN(salary) || !dept) {
        showAddMessage("Please fill all fields correctly.", "error");
        return;
    }

    const duplicate = employees.find(function (emp) {
        return emp.id === id;
    });

    if (duplicate) {
        showAddMessage("Employee ID already exists.", "error");
        return;
    }

    const newEmployee = {
        name: name,
        id: id,
        salary: salary,
        department: dept
    };

    employees.push(newEmployee);
    showAddMessage("Employee added successfully.", "success");
    clearInputs();
}

function displayAllEmployees() {
    if (employees.length === 0) {
        showResult('<div class="empty-state">No employees found. Add employees first.</div>');
        return;
    }

    let html = '<p class="result-title">All Employees (' + employees.length + ')</p>';
    html += '<table class="emp-table"><thead><tr><th>ID</th><th>Name</th><th>Department</th><th>Salary (INR)</th></tr></thead><tbody>';

    for (const emp of employees) {
        const salaryClass = emp.salary > 50000 ? "badge-high" : "badge-low";
        html += '<tr><td>' + emp.id + '</td><td>' + emp.name + '</td><td>' + emp.department + '</td><td class="' + salaryClass + '">' + formatINR(emp.salary) + '</td></tr>';
    }

    html += '</tbody></table>';
    showResult(html);
}

function filterHighSalary() {
    const highEarners = employees.filter(function (emp) {
        return emp.salary > 50000;
    });

    if (highEarners.length === 0) {
        showResult('<div class="empty-state">No employees found with salary greater than 50,000.</div>');
        return;
    }

    let html = '<p class="result-title">Employees with Salary > 50,000 (' + highEarners.length + ')</p>';
    html += '<table class="emp-table"><thead><tr><th>ID</th><th>Name</th><th>Department</th><th>Salary (INR)</th></tr></thead><tbody>';

    for (const emp of highEarners) {
        html += '<tr><td>' + emp.id + '</td><td>' + emp.name + '</td><td>' + emp.department + '</td><td class="badge-high">' + formatINR(emp.salary) + '</td></tr>';
    }

    html += '</tbody></table>';
    showResult(html);
}

function calculateTotalSalary() {
    if (employees.length === 0) {
        showResult('<div class="empty-state">No employees available to calculate total salary.</div>');
        return;
    }

    const totalSalary = employees.reduce(function (total, emp) {
        return total + emp.salary;
    }, 0);

    let html = '<p class="result-title">Total Monthly Salary Payout</p>';
    html += '<div class="stat-card"><div class="stat-label">Total Salary (All Employees)</div><div class="stat-value">' + formatINR(totalSalary) + '</div></div>';
    showResult(html);
}

function calculateAverageSalary() {
    if (employees.length === 0) {
        showResult('<div class="empty-state">No employees available to calculate average salary.</div>');
        return;
    }

    const totalSalary = employees.reduce(function (total, emp) {
        return total + emp.salary;
    }, 0);

    const averageSalary = totalSalary / employees.length;

    let html = '<p class="result-title">Average Salary</p>';
    html += '<div class="stat-card"><div class="stat-label">Average Monthly Salary</div><div class="stat-value">' + formatINR(averageSalary) + '</div></div>';
    showResult(html);
}

function countByDepartment() {
    const deptInput = document.getElementById("deptInput").value.trim();

    if (!deptInput) {
        showResult('<div class="empty-state">Please enter a department name first.</div>');
        return;
    }

    const matchedEmployees = employees.filter(function (emp) {
        return emp.department.toLowerCase() === deptInput.toLowerCase();
    });

    let html = '<p class="result-title">Department: ' + deptInput + '</p>';

    if (matchedEmployees.length === 0) {
        html += '<div class="empty-state">No employees found in this department.</div>';
        showResult(html);
        return;
    }

    html += '<div class="stat-card mb-3"><div class="stat-label">Employee Count</div><div class="stat-value">' + matchedEmployees.length + '</div></div>';
    html += '<table class="emp-table"><thead><tr><th>ID</th><th>Name</th><th>Salary (INR)</th></tr></thead><tbody>';

    for (const emp of matchedEmployees) {
        html += '<tr><td>' + emp.id + '</td><td>' + emp.name + '</td><td>' + formatINR(emp.salary) + '</td></tr>';
    }

    html += '</tbody></table>';
    showResult(html);
}

function showResult(html) {
    const resultArea = document.getElementById("resultArea");
    resultArea.innerHTML = html;
    resultArea.classList.remove("hidden");
    resultArea.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showAddMessage(message, type) {
    const addMessage = document.getElementById("addMessage");
    addMessage.textContent = message;
    addMessage.className = "small align-self-center " + (type === "success" ? "text-success" : "text-danger");

    setTimeout(function () {
        addMessage.textContent = "";
    }, 3000);
}

function clearInputs() {
    document.getElementById("empName").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("empSalary").value = "";
    document.getElementById("empDept").value = "";
}

function formatINR(value) {
    return "INR " + Number(value).toLocaleString("en-IN", { maximumFractionDigits: 2 });
}
