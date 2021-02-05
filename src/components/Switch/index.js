import React,  { useState }from "react";
import styled from "styled-components";

const Combo = styled.header`
.color{
    height:20px;
    width:20px;
    background:orange;
}
.fadeIn{
    animation: example  ease .6s  ;
    z-index:100;
}

@keyframes example {
  0%   {opacity:0%}
  100% {opacity:100%}
}

.boxCombo{
    display:flex;
        justify-content:center;
}
    .combo{
        color:white;
        border-radius:5px;
        background: linear-gradient(
          164deg,
          rgba(2, 0, 36, 1) 0%,
          rgba(21, 25, 50, 1) 0%,
          rgba(46, 51, 91, 1) 100%
        );
        padding:2px;
        border-radius:40px;
    }

    .combo select:focus{
        outline:none;
        outline-offset: 0px;
    }
    .combo select, .combo button{
    border:none;
    color:white;
    background:#191D39;
    -webkit-border-radius: 0px 40px 40px 0px;
    -moz-border-radius: 0px 40px 40px 0px;
    border-radius: 0px 40px 40px 0px;
    }
    .combo select {
        padding:15px;
        -webkit-border-radius: 40px 0px 0px 40px;
        -moz-border-radius: 40px 0px 0px 40px;
        border-radius: 40px 0px 0px 40px;
    }
    .combo button{
        padding:15px;
    }



    .boxConfig{
        position:relative;
        display:flex;
        justify-content:center;
        transition: ease 0.5 all;
    }
    .config{
        padding:20px;
        position:absolute;
        background:white;
        width:100%;
        max-width:600px;
        color:gray;
        border-radius:10px;
        z-index:100;
    }
    .boxBtn{
        background:red;
        position:relative;
        display:flex;
        justify-content:center;
        height:0px;
    }
    .config button{
        position:absolute;
        border-radius:30px;
        background:#F07675;
        border:none;
        color:white;
        padding:7px 25px;
    }
`;

export default function Switch( {plantillas=["pomodoro","Agustino","pomodoro"]}) {
    const [modal, setModal] = useState(false)
    const listItems = plantillas.map((number) =>
    <option key={number.toString()} >{number}</option>
    );
  return (
    <Combo>
    <>
        <div className="boxCombo">
        <div  className="combo d-flex">
            <select name="select">
                {listItems}
            </select>
            <button type="button" name="button" onClick={()=>{setModal(!modal)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                </svg>
            </button>
        </div>
    </div>

    <div className={`boxConfig ${modal?"fadeIn":"d-none"}`}>
        <div className="config">

        <div className="d-flex justify-content-between">
        <h3>Settings</h3>
        <div type="button" name="button" onClick={()=>{setModal(!modal)}}>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
        </div>
        </div>

            <hr></hr>
          <div className="form-group">
            <label className="d-flex justify-content-between"  >
            Mombre
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                </label>
            <input type="text" className="form-control"  placeholder="Mombre de la configuración"></input>
           </div>

           <div className="form-row">
             <div className="col-4">
             <label  >Ciclo</label>
               <input type="number" className="form-control" placeholder="Ciclo"></input>
             </div>
             <div className="col-4">
                <label  >Trabajo</label>
               <input type="number" className="form-control" placeholder="trabajo"></input>
             </div>
             <div className="col-4">
             <label  >Descanso</label>
               <input type="number" className="form-control" placeholder="descanso"></input>
             </div>
           </div>
           <div className="mt-3 form-group">
           <label for="exampleColorInput" className="form-label">Color</label>
           <div className="d-flex">
           <div className="color form-control  mx-1 form-control-color"> </div>
           <div className="color form-control bg-success mx-1 form-control-color"> </div>
           <div className="color form-control bg-primary mx-1 form-control-color"> </div>
           <div className="color form-control bg-danger mx-1 form-control-color"> </div>
           <div className="color form-control bg-info mx-1 form-control-color"> </div>
           </div>
           </div>


        <div className="boxBtn">
        <button   type="button" name="button">Apply</button>
        </div>
    </div>
    </div>
</>
</Combo>
  );
}
