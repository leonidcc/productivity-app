import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Post from "../../components/Post/index";
import Spinner from "../../components/Spinner/index";
// Hooks react redux
import { useDispatch, useSelector } from "react-redux";
// Importamos la acción
import { getPostsAction } from "../../redux/postsData";

const ContainerBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const SearchBar = styled.input`
  width: 30%;
  height: 30px;
  &:focus {
    border: none;
  }
`;

const SearchButton = styled.button`
  height: 30px;
  background: rgb(3, 172, 240);
  color: #fff;
  border: none;
`;

export default function Board() {
  // declaramos dispatch para llamar a la acción o acciones
  const dispatch = useDispatch();
  const [query, setQuery] = useState(null);

  // creamos el state utilizando nuestra tienda
  const statePosts = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(getPostsAction());
  }, []);

  const onChangeInput = (e) => {
    let query = e.target.value.toLowerCase();
    setQuery(query);
  };

  function cb(el) {
    if (query) {
      if (el.titulo.toLowerCase().indexOf(query) > -1) {
        return el;
      }
    } else {
      return el;
    }
  }

  function RenderItems({ cb }) {
    let notFound = (
      <p style={{ color: "#fff", fontSize: "30px" }}>
        No hay resultados{" "}
        <span
          style={{ color: "#fff", fontSize: "30px" }}
          className="material-icons"
        >
          find_in_page
        </span>
      </p>
    );
    let result = statePosts.posts
      .filter(cb)
      .map((post) => <Post key={post.id} post={post} />);
    return result.length > 0 ? result : notFound;
  }

  return (
    <>
      <ContainerBar>
        <SearchBar
          type="text"
          placeholder="Busca tu post"
          aria-label="Search"
          onChange={onChangeInput}
        />
        <SearchButton>
          <span class="material-icons">search</span>
        </SearchButton>
      </ContainerBar>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            {statePosts.loading ? (
              <Spinner />
            ) : (
              <RenderItems cb={cb} items={statePosts} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
