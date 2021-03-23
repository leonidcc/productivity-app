// constantes
const dataInicial = {
  posts: [],
  loading: true,
};

const GET_POSTS = "GET_POSTS";
const GET_LOADING = "GET_LOADING";

// reducer
export default function postsReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
    case GET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

// Acciones
export const getPostsAction = () => async (dispatch, getState) => {
  // console.log(getState().posts);
  const URL = "http://localhost:5000/api/posts";

  try {
    let res = await fetch(URL);
    let data = await res.json();

    dispatch({
      type: GET_POSTS,
      payload: data,
    });

    if (data.length !== 0) {
      dispatch({
        type: GET_LOADING,
        payload: false,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
