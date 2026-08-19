const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";
const API_USERNAME = "coalition";
const API_PASSWORD = "skills-test";
const TARGET_PATIENT = "Jessica Taylor";

let bloodPressureChart = null;

function getAuthHeader() {
  const credentials = btoa(`${API_USERNAME}:${API_PASSWORD}`);
  return `Basic ${credentials}`;
}

async function fetchPatients() {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: getAuthHeader(),
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch patient data: ${response.status}`);
  }

  return response.json();
}

function formatMonthYear(month, year) {
  const shortMonth = month.slice(0, 3);
  return `${shortMonth}, ${year}`;
}

function formatDateOfBirth(dateString) {
  const [month, day, year] = dateString.split("/");
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getArrowClass(levelText) {
  if (levelText.toLowerCase().includes("higher")) {
    return "bp-stat__arrow bp-stat__arrow--up";
  }

  if (levelText.toLowerCase().includes("lower")) {
    return "bp-stat__arrow bp-stat__arrow--down";
  }

  return "bp-stat__arrow";
}

function renderPatientsList(patients, activePatientName) {
  const list = document.getElementById("patients-list");
  list.innerHTML = "";

  patients.forEach((patient) => {
    const item = document.createElement("li");
    item.className = "patient-item";

    if (patient.name === activePatientName) {
      item.classList.add("patient-item--active");
    }

    item.innerHTML = `
      <img src="${patient.profile_picture}" alt="${patient.name}" class="patient-item__avatar">
      <div class="patient-item__info">
        <p class="patient-item__name">${patient.name}</p>
        <p class="patient-item__meta">${patient.gender}, ${patient.age}</p>
      </div>
      <span class="patient-item__more" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      </span>
    `;

    list.appendChild(item);
  });
}

function renderProfile(patient) {
  document.getElementById("profile-photo").src = patient.profile_picture;
  document.getElementById("profile-photo").alt = patient.name;
  document.getElementById("profile-name").textContent = patient.name;
  document.getElementById("profile-dob").textContent = formatDateOfBirth(patient.date_of_birth);
  document.getElementById("profile-gender").textContent = patient.gender;
  document.getElementById("profile-phone").textContent = patient.phone_number;
  document.getElementById("profile-emergency").textContent = patient.emergency_contact;
  document.getElementById("profile-insurance").textContent = patient.insurance_type;
}

function renderVitals(latestDiagnosis) {
  const { respiratory_rate: respiratory, temperature, heart_rate: heartRate } = latestDiagnosis;

  document.getElementById("respiratory-value").textContent = `${respiratory.value} bpm`;
  document.getElementById("respiratory-status").textContent = respiratory.levels;
  document.getElementById("temperature-value").textContent = `${temperature.value}°F`;
  document.getElementById("temperature-status").textContent = temperature.levels;
  document.getElementById("heart-rate-value").textContent = `${heartRate.value} bpm`;
  document.getElementById("heart-rate-status").textContent = heartRate.levels;
}

function renderBloodPressureStats(latestDiagnosis) {
  const { systolic, diastolic } = latestDiagnosis.blood_pressure;

  document.getElementById("systolic-value").textContent = systolic.value;
  document.getElementById("systolic-level-text").textContent = systolic.levels;
  document.getElementById("systolic-arrow").className = getArrowClass(systolic.levels);

  document.getElementById("diastolic-value").textContent = diastolic.value;
  document.getElementById("diastolic-level-text").textContent = diastolic.levels;
  document.getElementById("diastolic-arrow").className = getArrowClass(diastolic.levels);
}

function renderDiagnosticList(diagnosticList) {
  const tableBody = document.getElementById("diagnostic-table-body");
  tableBody.innerHTML = "";

  diagnosticList.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.description}</td>
      <td>${item.status}</td>
    `;
    tableBody.appendChild(row);
  });
}

function renderLabResults(labResults) {
  const list = document.getElementById("lab-results-list");
  list.innerHTML = "";

  labResults.forEach((result) => {
    const item = document.createElement("li");
    item.className = "lab-results__item";
    item.innerHTML = `
      <span>${result}</span>
      <span class="lab-results__download" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
        </svg>
      </span>
    `;
    list.appendChild(item);
  });
}

function renderBloodPressureChart(diagnosisHistory) {
  const chartHistory = diagnosisHistory.slice(0, 6).reverse();
  const labels = chartHistory.map((entry) => formatMonthYear(entry.month, entry.year));
  const systolicData = chartHistory.map((entry) => entry.blood_pressure.systolic.value);
  const diastolicData = chartHistory.map((entry) => entry.blood_pressure.diastolic.value);

  const canvas = document.getElementById("blood-pressure-chart");
  const context = canvas.getContext("2d");

  if (bloodPressureChart) {
    bloodPressureChart.destroy();
  }

  bloodPressureChart = new Chart(context, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Systolic",
          data: systolicData,
          borderColor: "#E66FD2",
          backgroundColor: "#E66FD2",
          pointBackgroundColor: "#E66FD2",
          pointBorderColor: "#E66FD2",
          pointRadius: 6,
          pointHoverRadius: 7,
          borderWidth: 2,
          tension: 0.35,
        },
        {
          label: "Diastolic",
          data: diastolicData,
          borderColor: "#8C6FE6",
          backgroundColor: "#8C6FE6",
          pointBackgroundColor: "#8C6FE6",
          pointBorderColor: "#8C6FE6",
          pointRadius: 6,
          pointHoverRadius: 7,
          borderWidth: 2,
          tension: 0.35,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "#072635",
          titleFont: {
            family: "Manrope",
            size: 14,
            weight: "700",
          },
          bodyFont: {
            family: "Manrope",
            size: 13,
          },
          padding: 12,
          cornerRadius: 8,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#072635",
            font: {
              family: "Manrope",
              size: 12,
            },
          },
          border: {
            display: false,
          },
        },
        y: {
          min: 60,
          max: 180,
          ticks: {
            stepSize: 20,
            color: "#072635",
            font: {
              family: "Manrope",
              size: 12,
            },
          },
          grid: {
            color: "rgba(7, 38, 53, 0.08)",
          },
          border: {
            display: false,
          },
        },
      },
    },
  });
}

function renderPatientDashboard(patients) {
  const patient = patients.find((entry) => entry.name === TARGET_PATIENT);

  if (!patient) {
    throw new Error(`${TARGET_PATIENT} was not found in the API response.`);
  }

  const latestDiagnosis = patient.diagnosis_history[0];

  renderPatientsList(patients, TARGET_PATIENT);
  renderProfile(patient);
  renderVitals(latestDiagnosis);
  renderBloodPressureStats(latestDiagnosis);
  renderDiagnosticList(patient.diagnostic_list);
  renderLabResults(patient.lab_results);
  renderBloodPressureChart(patient.diagnosis_history);
}

async function initDashboard() {
  try {
    const patients = await fetchPatients();
    renderPatientDashboard(patients);
  } catch (error) {
    console.error(error);
    document.body.insertAdjacentHTML(
      "beforeend",
      `<p style="padding:24px;color:#b42318;font-family:Manrope,sans-serif;">Unable to load patient data. Please open this page through a local server or check your network connection.</p>`
    );
  }
}

document.addEventListener("DOMContentLoaded", initDashboard);
