function makeChart() {
  Highcharts.chart("crimechart", {
    chart: {
      type: "column",
    },
    colors: [
      "#a6bddb",
      "#fc9272",
      "#de2d26",
      "#a6bddb",
      "#a6bddb",
    ],
    title: {
      text: "Objasněnost vybraných TČ v letech 2010 - 2014",
    },
    credits: {
      href: "https://www.policie.cz/statistiky-kriminalita.aspx",
      text: "Data: Policie ČR",
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      categories: [
        "Nebezpečné vyhrožování (§ 353)",
        "Nebezpečné pronásledování (§ 354)",
        "Podvod (§ 209)",
        "Výroba drog pro jiného (§ 283)",
        "Šíření poplašné zprávy (§ 357)",
        "Porušení listovního tajemství (§ 182)",
        "Hacking (§§ 230, 231)",
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Objasněnost v %",
      },
    },
    tooltip: {
      headerFormat: "<b>{point.key}</b><table>",
      pointFormat: "<tr><td style=\"padding:0\">Rok {series.name}: </td>"
      + "<td style=\"padding:0\"><b>{point.y:.1f} %</b></td></tr>",
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [{
      name: "2010",
      data: [83.85, 72.63, 47.08, 83.51, 44.04, 26.32, 29.7],
    }, {
      name: "2011",
      data: [84.5, 76.64, 47.98, 87.05, 50.96, 54.55, 40.3],
    }, {
      name: "2012",
      data: [84.76, 71.96, 50.1, 87.15, 39.71, 65.12, 25.28],
    }, {
      name: "2013",
      data: [85.24, 73.08, 50.51, 88.9, 62.56, 55.56, 25.25],
    }, {
      name: "2014",
      data: [84.39, 76.12, 49.97, 88.24, 51.42, 51.52, 28.7],
    }],
  });
}
export default makeChart;
