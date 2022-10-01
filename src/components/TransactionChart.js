import React from "react";
import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const TransactionChart = () => {
  //   let dataPoints = [];
  //   const options = {
  //     theme: "light2",
  //     title: {
  //       text: "Transactions",
  //     },
  //     axisY: {
  //       title: "Net Commission",
  //       prefix: "$",
  //     },
  //     data: [
  //       {
  //         type: "line",
  //         xValueFormatString: "MMM YYYY",
  //         yValueFormatString: "$#,##0.00",
  //         dataPoints: dataPoints,
  //       },
  //     ],
  //   };

  return (
    <Card className="w-75">
      <Card.Body>
        <Line
          data={{
            labels: ["Red", "Yellow", "Green", "Blue", "Purple"],
            datasets: [
              {
                label: "# of votes",
                data: [12, 5, 3, 8, 10],
              },
            ],
          }}
          height={400}
          width={500}
        />
      </Card.Body>
    </Card>
  );
};

export default TransactionChart;
