import React from "react";

function BreadCrumbHeader({ path }) {
  return (
    <React.Fragment>
      <p>{path}</p>
    </React.Fragment>
  );
}

export default BreadCrumbHeader;
