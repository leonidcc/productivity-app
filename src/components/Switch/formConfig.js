import React, { useState } from "react";
import {  lsGet, lsSet } from "./fnsStore";
export default function FormConfig({close}){

    const [color, setColor] = useState("red");
    const [configSelected, setConfigSelected] = useState("");

    const enviarDatos = (e) => {
      // setModal(!modal);
      close();
      e.preventDefault();
      let temp = lsGet();
      temp[e.target.name.value] = {
        name: e.target.name.value,
        ciclo: e.target.ciclo.value,
        work: e.target.work.value,
        break_short: e.target.break_short.value,
        break_long: e.target.break_long.value,
        color: color
      };
      lsSet(temp);
    };

      const listItems = Object.keys(lsGet()).map((key) => (
        <option key={key.toString()} value={key}> </option>
      ));

      const delet = () =>{
          if(configSelected != ""){
              let temp = lsGet();
              delete temp[configSelected];
              lsSet(temp);
              close();
        }
      };

      const colores =  ["red","orange", "blue", "yellow", "brown","lightblue"].map((c) => (
          <span  className="selectColor" style={{ background:c }} onClick={()=>setColor(c)}></span>
      ))

let change = (e)=>{
    setConfigSelected(e.target.value);
    try {
        let temp = lsGet()[e.target.value];
        let f = document.getElementById('dfs');
        f.ciclo.value = temp.ciclo;
        f.work.value = temp.work;
        f.break_short.value = temp. break_short;
        f.break_long.value = temp.break_long
        setColor(temp.color);
    } catch (e) {

    }

}

    return (
        <form id="dfs" onSubmit={enviarDatos}>
          <div className="form-group">
            <label className="d-flex justify-content-between">
              Mombre
              <svg   onClick={delet}  xmlns="http://www.w3.org/2000/svg"   width="16"    height="16"   fill="currentColor"     class="bi bi-trash"   viewBox="0 0 16 16"   >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </label>
            <input
              list="brow"
              required
              className="form-control"
              name="name"
              placeholder="Mombre de la configuración"
              autocomplete="off"
              onChange = {change}
            ></input>
        <datalist id="brow" >{listItems}</datalist>
          </div>

          <div className="form-row">
            <div className="col-6 col-md-3">
              <label>Ciclo</label>
              <input
                required
                type="number"
                name="ciclo"
                className="form-control"
                placeholder="Ciclo"
              ></input>
            </div>
            <div className="col-6 col-md-3">
              <label>Trabajo</label>
              <input
                required
                type="number"
                name="work"
                className="form-control"
                placeholder="trabajo"
              ></input>
            </div>
            <div className="col-6 col-md-3">
              <label>DescansoS</label>
              <input
                required
                type="number"
                name="break_short"
                className="form-control"
                placeholder="descanso"
              ></input>
            </div>
            <div className="col-6 col-md-3">
              <label>DescansoL</label>
              <input
                required
                type="number"
                name="break_long"
                className="form-control"
                placeholder="descanso"
              ></input>
            </div>

          </div>
          <div className="mt-3 form-group">
            <label for="exampleColorInput" className="form-label">
              Color : < span style={{ color:color}} >{color}</span>
            </label>
            <div className="d-flex">
                {colores}
            </div>
          </div>

          <div className="boxBtn">
            <button type="submit">Apply</button>
          </div>
        </form>
    );
}
