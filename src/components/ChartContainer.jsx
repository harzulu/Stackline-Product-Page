import React from 'react'
import { connect } from 'react-redux'

import SalesChart from './SalesChart'

const ChartContainer = ({ data, loading, error }) => {
  if (loading || !data[0]) return(<div>Loading...</div>)

  if (error) return(<div>Error: {error}</div>)

  const sales = data[0].sales
  
  return(
    <div className="chart-container">
      <SalesChart data={sales} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  data: state.data.data,
  loading: state.data.loading,
  error: state.data.error
})

export default connect(mapStateToProps)(ChartContainer)