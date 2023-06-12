import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalData } from "../../context";
import Card from "./item";
import { Button } from "../../core";

export default function List() {
  let navigate = useNavigate();
  const { data } = useGlobalData();
  

  const onClick = () => {
    navigate("/create");
  };

  return (
    <div className="flex flex-col-reverse gap-8 py-10 m-auto">
      <Button label="Create New" variant="primary" onClick={onClick}  className="w-32 fixed right-10 bottom-10 z-10" />
      {data.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
}
