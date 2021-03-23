import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";    // Hooks react redux
import { timerConfigSet } from "../../redux/relojTypeData";  // Importamos la acción
import {  Combo } from "./style"; // style compoennte
import {  lsGet, lsSet } from "./fnsStore";
import   FormConfig from "./formConfig";

export default function Switch() {

  // declaramos displach para llamar a la acción o acciones
  const dispatch = useDispatch();
  // declaro nuestra tienda
  const estado = useSelector((store) => store.option.timerConfig.name);

  const [modal, setModal] = useState(false);

  const chage = (e) => {
    console.log("change state",e.target.value);
    dispatch(timerConfigSet(lsGet()[e.target.value]));
  };

    const setConfigFromLS =  ()=>{
        return Object.keys(lsGet()).map((number) => (
          <option key={number.toString()} value={number}>
            {number}
          </option>
      ));
    }

 const listItems =  setConfigFromLS();

 const close = () => {
    setModal(!modal);
 }

  return (
    <Combo>
      <>
        <div className="boxCombo">

          <div className="combo d-flex">
            <select name="select" onChange={chage} value={estado}>
              {listItems}
            </select>
            <button   type="button"     name="button"   onClick={close}
            >
              <svg     xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"      fill="currentColor"            class="bi bi-gear-fill"              viewBox="0 0 16 16"   >
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
            </button>
          </div>
        </div>

        <div className={`boxConfig ${modal ? "fadeIn" : "d-none"}`}>
          <div className="config">
            <div className="d-flex justify-content-between">
              <h3>Settings</h3>
              <div
                type="button"
                name="button"
                onClick={() => {
                  setModal(!modal);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
            </div>
            <hr></hr>
                <FormConfig close={close} />
          </div>
        </div>
      </>
    </Combo>
  );
}
