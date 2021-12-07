import React, { Component } from "react";
import Chart from "react-apexcharts";

class PopChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: "#4f4f4f4",
          foreColor: "#333",
        },
        xaxis: {
          categories: [
            "Ontario",
            "Quebec",
            "Alberta",
            "British Columbia",
            "Manitoba",
            "Saskatchewan",
            "Nova Scotia",
            "New Brunswick",
            "Newfoundland and Labrador",
            "Prince Edward Island",
            "Nunavut",
            "Northwest Territories",
            "Yukon",
          ],
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        fill: {
          colors: ["#ff0000"],
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: "Births in Canada 2020 by Province or Territory",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "25px",
          },
        },
      },
      series: [
        {
          name: "Population",
          data: [
            142739, 84400, 51996, 42996, 16837, 14435, 8193, 6316, 3715, 1353,
            846, 576, 438,
          ],
        },
      ],
    };
  }

  onClick = () => {
    this.setState({
      options: {
        ...this.state.options,
        plotOptions: {
          ...this.state.options.plotOptions,
          bar: {
            ...this.state.options.plotOptions.bar,
            horizontal: !this.state.options.plotOptions.bar.horizontal,
          },
        },
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="450"
          width="100%"
        />
        <button onClick={this.onClick}>Change View</button>
      </React.Fragment>
    );
  }
}

export default PopChart;
