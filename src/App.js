import React, { useEffect } from 'react'
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions/dataActions.js';

const App = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;
