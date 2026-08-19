const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";
const API_USERNAME = "coalition";
const API_PASSWORD = "skills-test";
const TARGET_PATIENT = "Jessica Taylor";

let bloodPressureChart = null;

function getAuthHeader() {
  return `Basic ${btoa(`${API_USERNAME}:${API_PASSWORD}`)}`;
}

async function fetchPatients() {
  const response = await fetch(API_URL, {
    method: "GET",
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
  return `${month.slice(0, 3)}, ${year}`;
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

function createArrow(levelText) {
  const text = levelText.toLowerCase();
  const arrow = document.createElement("span");

  if (text.includes("higher")) {
    arrow.className = "level-arrow level-arrow--up";
    return arrow;
  }

  if (text.includes("lower")) {
    arrow.className = "level-arrow level-arrow--down";
    return arrow;
  }

  return null;
}

function renderLevel(element, levelText) {
  element.replaceChildren();

  const arrow = createArrow(levelText);
  if (arrow) {
    element.appendChild(arrow);
  }

  element.appendChild(document.createTextNode(levelText));
}

function createEllipsisIcon() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "18");
  svg.setAttribute("height", "18");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "currentColor");
  svg.setAttribute("aria-hidden", "true");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  );
  svg.appendChild(path);

  return svg;
}

function createDownloadIcon() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "20");
  svg.setAttribute("height", "20");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "currentColor");
  svg.setAttribute("aria-hidden", "true");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z");
  svg.appendChild(path);

  return svg;
}

function renderPatientsList(patients, activePatientName) {
  const list = document.getElementById("patients-list");
  list.replaceChildren();

  patients.forEach((patient) => {
    const item = document.createElement("li");
    item.className = "patient-item";

    const avatar = document.createElement("img");
    avatar.className = "patient-item__avatar";
    avatar.src = patient.profile_picture;
    avatar.alt = patient.name;

    const info = document.createElement("div");
    info.className = "patient-item__info";

    const name = document.createElement("p");
    name.className = "patient-item__name";
    name.textContent = patient.name;

    const meta = document.createElement("p");
    meta.className = "patient-item__meta";
    meta.textContent = `${patient.gender}, ${patient.age}`;

    info.append(name, meta);

    const more = document.createElement("span");
    more.className = "patient-item__more";
    more.appendChild(createEllipsisIcon());

    item.append(avatar, info, more);

    if (patient.name === activePatientName) {
      item.classList.add("patient-item--active");
    }

    list.appendChild(item);
  });
}

function renderProfile(patient) {
  const photo = document.getElementById("profile-photo");
  photo.src = patient.profile_picture;
  photo.alt = patient.name;

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
  document.getElementById("temperature-value").textContent = `${temperature.value}°F`;
  document.getElementById("heart-rate-value").textContent = `${heartRate.value} bpm`;

  renderLevel(document.getElementById("respiratory-status"), respiratory.levels);
  renderLevel(document.getElementById("temperature-status"), temperature.levels);
  renderLevel(document.getElementById("heart-rate-status"), heartRate.levels);
}

function renderBloodPressureStats(latestDiagnosis) {
  const { systolic, diastolic } = latestDiagnosis.blood_pressure;

  document.getElementById("systolic-value").textContent = systolic.value;
  document.getElementById("diastolic-value").textContent = diastolic.value;
  renderLevel(document.getElementById("systolic-level"), systolic.levels);
  renderLevel(document.getElementById("diastolic-level"), diastolic.levels);
}

function renderDiagnosticList(diagnosticList) {
  const tableBody = document.getElementById("diagnostic-table-body");
  tableBody.replaceChildren();

  diagnosticList.forEach((item) => {
    const row = document.createElement("tr");

    [item.name, item.description, item.status].forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });
}

function renderLabResults(labResults) {
  const list = document.getElementById("lab-results-list");
  list.replaceChildren();

  labResults.forEach((result) => {
    const item = document.createElement("li");
    item.className = "lab-results__item";

    const label = document.createElement("span");
    label.textContent = result;

    const download = document.createElement("span");
    download.className = "lab-results__download";
    download.appendChild(createDownloadIcon());

    item.append(label, download);
    list.appendChild(item);
  });
}

function renderBloodPressureChart(diagnosisHistory) {
  const chartHistory = diagnosisHistory.slice(0, 6).reverse();
  const labels = chartHistory.map((entry) => formatMonthYear(entry.month, entry.year));
  const systolicData = chartHistory.map((entry) => entry.blood_pressure.systolic.value);
  const diastolicData = chartHistory.map((entry) => entry.blood_pressure.diastolic.value);
  const canvas = document.getElementById("blood-pressure-chart");

  if (bloodPressureChart) {
    bloodPressureChart.destroy();
  }

  bloodPressureChart = new Chart(canvas, {
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
          pointBorderColor: "#FFFFFF",
          pointBorderWidth: 1,
          pointRadius: 6,
          pointHoverRadius: 7,
          borderWidth: 2,
          tension: 0.4,
        },
        {
          label: "Diastolic",
          data: diastolicData,
          borderColor: "#8C6FE6",
          backgroundColor: "#8C6FE6",
          pointBackgroundColor: "#8C6FE6",
          pointBorderColor: "#FFFFFF",
          pointBorderWidth: 1,
          pointRadius: 6,
          pointHoverRadius: 7,
          borderWidth: 2,
          tension: 0.4,
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
            color: "#E6E6E6",
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
  if (typeof Chart === "undefined") {
    window.setTimeout(initDashboard, 50);
    return;
  }

  try {
    const patients = await fetchPatients();
    renderPatientDashboard(patients);
  } catch (error) {
    console.error(error);
    document.body.insertAdjacentHTML(
      "beforeend",
      "<p class=\"error-message\">Unable to load patient data. Please check your internet connection and try again.</p>"
    );
  }
}

document.addEventListener("DOMContentLoaded", initDashboard);
