


function getCrickteScore(){
    return dispatch => {
          fetch('https://backend.sports.info/api/v1/cricket/match/sr:match:21246257/timeline')
            .then(response => response.json())
            .then(response => {
                dispatch({})
            })
            .catch(e => {
                console.log("====",e);
                dispatch({})
            })
            }
    }


export default {
    getCrickteScore
}