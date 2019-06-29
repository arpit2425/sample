import React from "react";
const Avatorlist = (props) => {
  return (
    <div  className="imgAavt ma4 bg-light-purple dib pa4 grow shadow-4">
      <img src={`https://joeschmoe.io/api/v1/${props.name}/`} alt="Avator" />
      <h1 className="tc">{props.name}</h1>
      <p className="tc">{props.work}</p>
    </div>
  );
};
export default Avatorlist;
