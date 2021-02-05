import React from "react";
import Timer from "../../components/Timer/index";
import Card from "../../components/Card/index";
import Switch from "../../components/Switch/index";

export default function Home() {
  return (
    <div className="container">
      <Switch />
      <Timer />
      <Card />
    </div>
  );
}
