var ctx = document.getElementById("myChart").getContext("2d");

const xValues = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July"
];

// generate some random values to plot
const yValues = [];
for (let i = 0; i < xValues.length; i++) {
  yValues.push(Math.random() * 50);
}

var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: xValues,
    datasets: [
      {
        label: "Random dataset",
        borderColor: "rgb(255, 99, 132)",
        data: yValues,
        fill: false
      },
      {
        label: "Fixed dataset",
        borderColor: "rgb(132, 99, 255)",
        data: [20, 5, 5, 2, 24, 13, 25],
        fill: false
      }
    ]
  },
});
