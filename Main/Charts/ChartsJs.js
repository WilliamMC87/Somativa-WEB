let UrlPecaPequena = "http://localhost:3100/chart-data-pequena";
let UrlPecaMedia = "http://localhost:3100/chart-data-media";
let UrlPecaGrande = "http://localhost:3100/chart-data-grande";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.length;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; //
  }
}

async function fetchAllData() {

  try {
    const results = await Promise.all([
      fetchData(UrlPecaPequena),
      fetchData(UrlPecaMedia),
      fetchData(UrlPecaGrande),
    ]);

    //
    updateChart(results);
  } catch (error) {
    console.error("Error fetching all data:", error);
  }
}

let areaChart, pieChart, lineChart, barChart;

function updateChart(DataPeca) {
  const areaChartCtx = document.getElementById("areaChart").getContext("2d");
  const pieChartCtx = document.getElementById("pie-chart").getContext("2d");
  const lineChartCtx = document.getElementById("areaChart1").getContext("2d");
  const barChartCtx = document.getElementById("chartBar").getContext("2d");

  if (areaChart) areaChart.destroy();
  if (pieChart) pieChart.destroy();
  if (lineChart) lineChart.destroy();
  if (barChart) barChart.destroy();

  // Configurações e criação dos gráficos
  areaChart = new Chart(areaChartCtx, {
    type: "line",
    data: {
      labels: ["Peça Pequena", "Peça Média", "Peça Grande"],
      datasets: [
        {
          label: "Peças Pequenas",
          data: [DataPeca[0], DataPeca[2], DataPeca[1]],
          backgroundColor: "#FF0000",
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
        },
        {
          label: "Peças Média",
          data: [DataPeca[2], DataPeca[1], DataPeca[0]],
          backgroundColor: "#FF0000",
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
        },
        {
          label: "Peças Grande",
          data: [DataPeca[1], DataPeca[0], DataPeca[2]],
          backgroundColor: "#FF0000",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          grid: { display: false },
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  pieChart = new Chart(pieChartCtx, {
    type: "pie",
    data: {
      labels: ["Peça Pequena", "Peça Média", "Peça Grande"],
      datasets: [
        {
          label: "Quantidade de peças",
          backgroundColor: ["#FF0000"],
          data: DataPeca,
        },
      ],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Predicted world population (millions) in 2050",
      },
    },
  });

  lineChart = new Chart(lineChartCtx, {
    type: "line",
    data: {
      labels: ["Peça Pequena", "Peça Média", "Peça Grande"],
      datasets: [
        {
          label: "Peças Pequenas",
          data: [DataPeca[0], DataPeca[2], DataPeca[1]],
          backgroundColor: "#FF0000",
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Page Views",
          },
        },
      },
      layout: {
        padding: { left: 20, right: 20, top: 20, bottom: 20 },
      },
    },
  });

  barChart = new Chart(barChartCtx, {
    type: "bar",
    data: {
      labels: ["Peça Pequena", "Peça Média", "Peça Grande"],
      datasets: [
        {
          label: "Quantidade das Peças",
          backgroundColor: ["#FF0000"],
          data: DataPeca,
        },
      ],
    },
    options: {
      responsive: true,
      legend: { display: false },
      title: {
        display: true,
        text: "Predicted world population (millions) in 2050",
      },
    },
  });
}

setInterval(fetchAllData, 5000);

function RefreshButton() {
  window.location.reload();
}
