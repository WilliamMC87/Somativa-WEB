var BarChart = new Chart(document.getElementById("chartBar"), {
  type: "bar",
  data: {
    labels: ["Peça Pequena", "Peça Média", "Peça Grande"],
    // Conjuntos de dados
    datasets: [
      {
        label: "Quantidade das Peças",

        backgroundColor: ["#0450C2", "#0073DC", "#0D98FF"],

        data: [2478, 5267, 734, 784, 433],
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

function RefreshButton() {
  window.location.reload();
}

var areaData = {
  labels: ["Peça Pequena", "Peça Média", "Peça Grande"],
  datasets: [
    {
      label: "Dados de Exemplo",
      data: [10, 20, 15, 25, 30],
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

var areaChart = new Chart(document.getElementById("areaChart"), {
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
      data: [2478, 5267, 734],
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

var PieChart = new Chart(document.getElementById("pie-chart"), {
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
        {
          x: 25,
          y: 35,
        },
        {
          x: 30,
          y: 40,
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

var scatterChart = new Chart(document.getElementById("scatterChart"), {
  type: "scatter",
  data: scatterData,
  options: scatterOptions,
});

var ctx = document.getElementById("areaChart1").getContext("2d");
var LineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Page Views",
        data: [5000, 7500, 8000, 6000, 9000],
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

var rangeBarChart = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,
  exportEnabled: true,
  title: {
    text: "Employees Salary in a Company",
  },
  axisX: {
    title: "Departments",
  },
  axisY: {
    title: "Salary in USD",
    interval: 10,
    suffix: "k",
    prefix: "$",
  },
  data: [
    {
      type: "rangeBar",
      showInLegend: true,
      yValueFormatString: "$#0.#K",
      indexLabel: "{y[#index]}",
      legendText: "Department wise Min and Max Salary",
      toolTipContent: "<b>{label}</b>: {y[0]} to {y[1]}",
      dataPoints: [
        { x: 10, y: [80, 115], label: "Data Scientist" },
        { x: 20, y: [95, 141], label: "Product Manager" },
        { x: 30, y: [98, 115], label: "Web Developer" },
        { x: 40, y: [90, 160], label: "Software Engineer" },
        { x: 50, y: [100, 152], label: "Quality Assurance" },
      ],
    },
  ],
});

var ListChart = [BarChart, LineChart, PieChart, rangeBarChart];

var WidthChart = screen.width;

if (WidthChart <= 430) {
  ListChart.forEach((item) => {
    if (item == BarChart) {
      item.canvas.parentNode.style.width = "390px";
    } else if (item == LineChart) {
      item.canvas.parentNode.style.width = "350px";
    } else if (item == areaCharts) {
      item.canvas.parentNode.style.width = "372px";
    } else {
      item.canvas.parentNode.style.width = "350px";
    }
  });
} else if (WidthChart <= 570) {
  
}
