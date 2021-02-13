// constantes
const dataInicial = {
  count: 0,
  timerSatate: {},
  configuration: {},
};

// types
const INCREMENTAR = "INCREMENTAR";
const DECREMENTAR = "DECREMENTAR";

// reducer
export default function timerReducer(state = dataInicial, action) {
  switch (action.type) {
    case INCREMENTAR:
      return { ...state, count: state.count + 1 };
    case DECREMENTAR:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// actions
export const timerIncrementarAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: INCREMENTAR,
    });
    const { count } = getState().test;
    console.log(count);
  } catch (err) {
    console.log(err);
  }
};

export const timerDecrementarAction = () => (dispatch, getState) => {
  dispatch({
    type: DECREMENTAR,
  });
  const { count } = getState().test;
  console.log(count);
};
