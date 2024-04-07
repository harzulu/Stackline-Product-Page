import React, { useEffect } from 'react'
import './App.css'

import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './actions/dataAction'

import NavBar from "./components/NavBar"
import ItemOverview from "./components/ItemOverview"
import ChartContainer from './components/ChartContainer'
import TableContainer from './components/TableContainer'

const App = () => {
  const dispatch = useDispatch()
  const { loading, error } = useSelector(state => state.data)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="App">
      <NavBar />
      <div className="page-container">
        <ItemOverview />
        <div className="product-data">
          <ChartContainer />
          <TableContainer />
        </div>
      </div>
    </div>
  )
}

export default App
