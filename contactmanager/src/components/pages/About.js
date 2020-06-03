import React from "react";

export default function About(props) {
  return (
    <div>
      <h1>About Conatct Manager</h1>
      <h2>{props.match.params.id}</h2>
    </div>
  );
}
