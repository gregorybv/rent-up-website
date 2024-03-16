import { memo } from "react";

export const Heading = memo(({title, subtitle}) => {
  return (
    <div className="heading">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
});
