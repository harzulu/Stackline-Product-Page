import React, { useEffect } from 'react'
import Chart from 'chart.js/auto'

const monthDates = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec"
}

const createLabels = (sales) => {
  const list = []

  sales.forEach((sale) => {
    const saleDate = parseInt(sale.split("-")[1], 10)

    if (!list.includes(monthDates[saleDate])) {
      list.push(monthDates[saleDate])
    } else {
      list.push("")
    }
  })

  return list
}

let chart

const SalesChart = ({ data }) => {
  const saleData = {
    "weekEnding": [],
    "retailSales": [],
  }

  data.forEach((sale) => {
    saleData.weekEnding.push(sale.weekEnding)
    saleData.retailSales.push(sale.retailSales)
  })

  useEffect(() => {
    const ctx = document.getElementById('salesChart').getContext("2d")

    if (chart) chart.destroy()

    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: createLabels(saleData.weekEnding),
        datasets: [{
          label: 'Sales',
          data: saleData.retailSales,
          borderColor: 'rgb(75, 75, 192)',
          tension: 0.3
        }]
      },
      options: {
        plugins: {
          title: {
              display: true,
              text: 'Retail Sales',
              align: 'start',
              fullSize: true,
          },
          legend: {
            display: false 
          }
        },
        scales: {
          x: {
            display: true,
            grid: {
              display: false,
            },
            ticks: {
              autoSkip: false,
            }
          },
          y: {
            display: false,
            beginAtZero: true,
            grid: {
              display: false,
            },
          }
        }
      }
    })

    window.salesChart = chart
  }, [data])

  return(
    <canvas className="sales-chart" id="salesChart" />
  )
}

export default SalesChart