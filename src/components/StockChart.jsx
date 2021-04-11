import React, { Component } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import Loading from "./Loading";

class StockChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
    };
  }

  componentDidMount() {
    this.getStockData("MSFT", "5Y");
  }

  getStockData = (symbol, range) => {
    const API_TOKEN = "pk_342ca2b68eaa41d2a808e43b0785fd65";
    const BASE_URL = "https://cloud.iexapis.com/stable/stock/";
    axios
      .get(
        BASE_URL +
          symbol +
          "/batch?range=" +
          range +
          "&chartInterval=160&types=company,quote,chart,stats,logo,news&token=" +
          API_TOKEN
      )
      .then((response) => response.data.chart)
      .then((chartData) => {
        this.setState({
          chartData: chartData,
        });
      });
  };

  render() {
    if (this.state.chartData.length === 0) {
      return (
        <div className="text-center">
          <Loading />
        </div>
      );
    }

    console.log(this.state.chartData.map((point) => point["uClose"]));
    console.log(this.state.chartData.map((point) => point["date"]));
    return (
      <div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={this.state.chartData} width={400} height={400}>
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis domain={["dataMin", "dataMax"]} hide />
            <XAxis hide dataKey="label" />
            <Legend />
            <Line
              connectNulls
              name="USD $"
              type="monotone"
              dot={false}
              dataKey="close"
              strokeWidth={2.5}
              stroke="#B15DFF"
            />
            <Tooltip
              separator=""
              offset={-40}
              position={{ y: -15 }}
              isAnimationActive
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default StockChart;
