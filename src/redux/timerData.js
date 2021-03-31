// constantes
const dataInicial = {
  ciclo: 0,
  reset: false,
  counting: false,
  worktime: null,
  blocks: null,
  timerConfig: {
    name: "pomodoro",
    blocks: 4,
    work: 2,
    break_short: 1,
    break_long: 10,
    color: "green",
  },
};

// types
const SETCICLO = "SETCICLO";
const SETRESET = "SETRESET";
const SETCOUNTING = "SETCOUNTING ";
const SETEARCONFIG = "SETEARCONFIG";
const SETWORKTIME = "SETWORKTIME";
const SETCOUNTER = "SETCOUNTER";
const SETBLOCKS = "SETBLOCKS";

// reducer
export default function timerReducer(state = dataInicial, action) {
  switch (action.type) {
    case SETEARCONFIG:
      return { ...state, timerConfig: action.value };
    case SETWORKTIME:
      return { ...state, worktime: action.value };
    case SETCICLO:
      return { ...state, ciclo: state.ciclo + 1 };
    case SETCOUNTER:
      return { ...state, worktime: state.worktime - 1 };
    case SETRESET:
      return { ...state, reset: !state.reset };
    case SETCOUNTING:
      return { ...state, counting: !state.counting };
    case SETBLOCKS:
      return { ...state, blocks: action.value };
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
};

export const timerCicloAction = () => async (dispatch, getState) => {
  dispatch({
    type: SETCICLO,
  });
};

export const timerConfigSet = (value) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SETEARCONFIG,
      value: value,
    });
  } catch (err) {
    console.log(err);
  }
};

export const timerWorkSet = (value) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SETWORKTIME,
      value: value,
    });
  } catch (err) {
    console.log(err);
  }
};

export const timerDecrementAction = () => async (dispatch, getState) => {
  dispatch({
    type: SETCOUNTER,
  });
};

export const timerBlocksSet = (value) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SETBLOCKS,
      value: value,
    });
  } catch (err) {
    console.log(err);
  }
};
