let UrlPecaPequena = "http://localhost:3000/chart-data-pequena";
let UrlPecaMedia = "http://localhost:3000/chart-data-media";
let UrlPecaGrande = "http://localhost:3000/chart-data-grande";

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
    return null; // Return null or a suitable value to indicate an error
  }
}

async function fetchAllData() {
  try {
    const results = await Promise.all([
      fetchData(UrlPecaPequena),
      fetchData(UrlPecaMedia),
      fetchData(UrlPecaGrande),
    ]);

    // Update the chart with the fetched data
    updateChart(results);
  } catch (error) {
    console.error("Error fetching all data:", error);
  }
}

function updateChart(DataPeca) {
  var areaData = {
    labels: ["Peça Pequena", "Peça Média", "Peça Grande"],
    datasets: [
      {
        label: "Dados de Exemplo",
        data: DataPeca,
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Cor da área
        borderColor: "rgba(54, 162, 235, 1)", // Cor da linha
        borderWidth: 1,
      },
    ],
  };

  var areaOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // Oculta linhas de grade no eixo X
        },
      },
      y: {
        beginAtZero: true, // Começa o eixo Y em zero
      },
    },
  };

  new Chart(document.getElementById("areaChart"), {
    type: "line", // Tipo de gráfico de área é linha
    data: areaData,
    options: areaOptions,
  });

  const pieChartData = {
    labels: ["Peça Pequena", "Peça Média", "Peça Grande"],
    datasets: [
      {
        label: "Quantidade de peças",
        backgroundColor: ["#0450C2", "#0073DC", "#0D98FF"],
        data: DataPeca,
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: "Predicted world population (millions) in 2050",
    },
  };

  new Chart(document.getElementById("pie-chart"), {
    type: "pie",
    data: pieChartData,
    options: pieChartOptions,
  });

  var scatterData = {
    datasets: [
      {
        label: "Dados de Exemplo",
        
        data: [
          {
            x: 10,
            y: 20,
          },
          {
            x: 15,
            y: 25,
          },
          {
            x: 20,
            y: 30,
          },
          
        ],
        backgroundColor: "#0073DC", // Cor do ponto
        borderColor: "#00226C", // Cor da borda do ponto
        borderWidth: 1,
      },
    ],
  };

  var scatterOptions = {
    responsive: true,
    scales: {
      x: {
        type: "linear",
        position: "bottom",
      },
      y: {
        type: "linear",
        position: "left",
      },
    },
  };

  var ctx = document.getElementById("areaChart1").getContext("2d");
  var LineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Peça Pequena", "Peça Média", "Peça Grande"],
      datasets: [
        {
          label: "Page Views",
          data: DataPeca,
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          fill: "start",
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
        padding: {
          left: 20,
          right: 20,
          top: 20,
          bottom: 20,
        },
      },
    },
  });

  var BarChart = new Chart(document.getElementById("chartBar"), {
    type: "bar",
    data: {
      labels: ["Peça Pequena", "Peça Média", "Peça Grande"],
      // Conjuntos de dados
      datasets: [
        {
          label: "Quantidade das Peças",

          backgroundColor: ["#0450C2", "#0073DC", "#0D98FF"],

          data: DataPeca,
        },
      ],
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
      title: {
        // Exibir o título
        display: true,
        // Texto do título
        text: "Predicted world population (millions) in 2050",
      },
    },
  });
}

fetchAllData();

function RefreshButton() {
  window.location.reload();
}

// var ListChart = [BarChart, LineChart, PieChart, rangeBarChart];

// var WidthChart = screen.width;

// if (WidthChart <= 430) {
//   ListChart.forEach((item) => {
//     if (item == BarChart) {
//       item.canvas.parentNode.style.width = "390px";
//     } else if (item == LineChart) {
//       item.canvas.parentNode.style.width = "350px";
//     } else if (item == areaCharts) {
//       item.canvas.parentNode.style.width = "372px";
//     } else {
//       item.canvas.parentNode.style.width = "350px";
//     }
//   });
// } else if (WidthChart <= 570) {
// }
