import React from "react";

import elements from "./elements";

export const List = ({ elementsId }) => {
  return (
    <ul>
      {elements[elementsId].map((elem) => (
        <li>{elem}</li>
      ))}
    </ul>
  );
};
