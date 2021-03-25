// constantes
const dataInicial = {
  timerState: {
    ciclo: 0,
    reset: false,
    counting: false,
  },
  timerConfig: {
    name: "pomodoro",
    blocks: "4",
    work: "25",
    break_short: "5",
    break_long: "10",
    color: "green",
  },
};

// types
const SET_CICLO = "SET_CICLO";
const SETRESET = "SETRESET";
const SETCOUNTING = "SETCOUNTING ";

// reducer
export default function timerReducer(state = dataInicial, action) {
  switch (action.type) {
    case SET_CICLO:
      return { ...state, ciclo: state.ciclo + 1 };
    case SETRESET:
      return { ...state, reset: !state.timerState.reset };
    case SETCOUNTING:
      return { ...state, counting: !state.timerState.counting };
    default:
      return state;
  }
}

// actions
export const timerResetAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SETRESET,
    });
    // const { count } = getState().test;
    // console.log(count);
  } catch (err) {
    console.log(err);
  }
};

export const timerCountingAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SETCOUNTING,
    });
    // const { count } = getState().test;
    // console.log(count);
  } catch (err) {
    console.log(err);
  }

  // const { count } = getState().test;
  // console.log(count);
};

export const timerCicloAction = () => async (dispatch, getState) => {
  dispatch({
    type: SET_CICLO,
  });
};
