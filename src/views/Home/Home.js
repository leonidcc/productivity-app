import React from "react";
import Timer from "../../components/Timer/index";
import Card from "../../components/Card/index";
import Switch from "../../components/Switch/index";
import NoteBoard from "../../components/NoteBoard/index";

export default function Home() {
  return (
    <div className="container">
      <div class="row">
        <div class="col-6">
          <Timer />
        </div>
        <div class="col-6">
          <Switch />
          <NoteBoard />
        </div>
      </div>
    </div>
  );
}
