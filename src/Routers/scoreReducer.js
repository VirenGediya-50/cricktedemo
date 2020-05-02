import { CricketJson } from "../Constant/CricketScore";
import { kabaddiJson } from "../Constant/KabaddiScore";

const InitialState = {
    cricketScore : CricketJson,
    kabaddiScore : kabaddiJson
}


const  matchReducer = (state = InitialState, action) => {
    switch (action.type) {
        
      default:
        return state;
    }
  }

export default matchReducer