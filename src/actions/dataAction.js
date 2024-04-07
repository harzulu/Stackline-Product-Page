export const fetchDataRequest = () => ({
  type: 'FETCH_DATA_REQUEST'
});

export const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data
});

export const fetchDataFailure = (error) => ({
  type: 'FETCH_DATA_FAILURE',
  payload: error
});

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    fetch('/stackline_frontend_assessment_data_2021.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        dispatch(fetchDataSuccess(data));
      })
      .catch(error => {
        console.log(error)
        dispatch(fetchDataFailure(error.message));
      });
  };
};