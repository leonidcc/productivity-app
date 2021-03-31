import React, { useState } from "react";
import styled from "styled-components";

const ContainerNotes = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid #fff;
  margin: 10px;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  background: #e2e2e2;
  padding: 5px;
  margin: 5px;
  border-radius: 3px;
`;

export default function NoteBoard() {
  const [show, setShow] = useState(false);

  const mostrar = (e) => {
    setShow(!show);
  };

  const myElements = [
    {
      columnId: "menu-1",
      items: [
        {
          id: "elemento-1",
          text: "Elemento 1",
        },
        {
          id: "elemento-2",
          text: "Elemento 2",
        },
        {
          id: "elemento-3",
          text: "Elemento 3",
        },
      ],
    },
    {
      columnId: "menu-2",
      items: [
        {
          id: "elemento-4",
          text: "Elemento 4",
        },
        {
          id: "elemento-5",
          text: "Elemento 5",
        },
        {
          id: "elemento-6",
          text: "Elemento 6",
        },
      ],
    },
  ];

  return (
    <>
      <button onClick={mostrar}>Ver Notas</button>
      {show && <ContainerNotes></ContainerNotes>}
    </>
  );
}
