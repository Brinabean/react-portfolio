import React from "react";
import { capitalize } from "../../utils/helpers";

function PageSelection(props) {
  const { currentSelection } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalize(currentSelection.name)}</h1>
      <p>{currentSelection.description}</p>
    </section>
  );
}

export default PageSelection;
