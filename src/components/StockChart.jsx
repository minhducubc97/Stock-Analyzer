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
import { Image } from "react-bootstrap";

class StockChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      companyName: "",
      companyLogo: "",
      latestPrice: "",
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
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          chartData: data.chart,
          companyName: data.company.companyName,
          companyLogo: data.logo.url,
          latestPrice: data.quote.latestPrice,
        });
      });
  };

  render() {
    const { chartData, companyName, companyLogo, latestPrice } = this.state;

    if (chartData.length === 0) {
      return (
        <div className="text-center">
          <Loading />
        </div>
      );
    }

    const CustomToolTip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="border border-info bg-white text-dark p-2">
            <div>
              <strong>Date: </strong>
              {label}
            </div>
            <div>
              <strong>Price: </strong>
              {payload[0].name + payload[0].value}
            </div>
          </div>
        );
      }
      return null;
    };

    return (
      <div className="text-white">
        <h1 className="font-title text-center m-4">
          {companyName}&nbsp;
          <Image className="pb-2" src={companyLogo} width={35} />
        </h1>
        <span>
          <h5>Latest Price: ${latestPrice}</h5>
        </span>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData} width={400} height={400}>
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
              content={<CustomToolTip />}
              separator=""
              offset={20}
              isAnimationActive
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default StockChart;
