import React from 'react'
import { connect } from 'react-redux';

const formatDate = (dateString) => {
  const [year, month, day] = dateString.split("-")
  return `${month}-${day}-${year}`
}

const TableContainer = ({ data, loading, error }) => {
  if (loading || !data[0]) return(<div>Loading...</div>)

  if (error) return(<div>Error: {error}</div>)

  const sales = data[0].sales

  return (
    <div className="table-container">
      <div className="sales-table-labels">
        <p>Week Ending</p>
        <p>Retail Sales</p>
        <p>Wholesale Sales</p>
        <p>Units Sold</p>
        <p>Retailer Margin</p>
      </div>
      <div className="sales-rows-container">
        {sales.map((sale, i) => (
          <div className="sale-row-container" key={i}>
            <p>{formatDate(sale.weekEnding)}</p>
            <p>{sale.retailSales}</p>
            <p>{sale.wholesaleSales}</p>
            <p>{sale.unitsSold}</p>
            <p>{sale.retailerMargin}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  data: state.data.data,
  loading: state.data.loading,
  error: state.data.error
})

export default connect(mapStateToProps)(TableContainer)