// constantes
const dataInicial = {
  timerConfig:{
    name: "pomodoro",
    ciclo: "4",
    work: "25",
    break_short: "5",
    break_long: "5",
    color: "green",
  },
};

// types
const SETEAR = "SETEAR";

// reducer
export default function optionReducer(state = dataInicial, action) {
    console.log(action);
  switch (action.type) {
    case SETEAR:
      return { ...state, timerConfig:action.value };
    default:
      return state;
  }
}

// actions
export const timerConfigSet = (value) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SETEAR,
      value:value
    });
  } catch (err) {
    console.log(err);
  }
};
