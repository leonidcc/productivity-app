import React from "react";
import Timer from "../../components/Timer/index";
import Card from "../../components/Card/index";
import Switch from "../../components/Switch/index";

export default function Home() {
  return (
    <div className="container">
      <div class="row">
        <div class="col-6">
          <Timer />
        </div>
        <div class="col-6">
          <Switch />
        </div>
      </div>
    </div>
  );
}
