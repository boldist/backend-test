export const getUser = (data) => {
    return dispatch => {
      dispatch({
        type: 'user',
        data
      })
    }
}

export const isLoading = (data) => {
    return dispatch => {
      dispatch({
        type: 'loading',
        data
      })
    }
}
