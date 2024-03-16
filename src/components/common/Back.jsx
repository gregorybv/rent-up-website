import { memo } from "react";

export const Back = memo(({name, title, cover}) => {
  return (
    <div className="back">
      <div className="container">
        <span>{name}</span>
        <h1>{title}</h1>
      </div>
      <img src={cover} alt="cover"/>
    </div>
  );
});
