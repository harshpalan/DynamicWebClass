import React from "react";


export default function InstructionsList(props) {
    const { instructions } = props;
    return (
      <ol>
        {instructions.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ol>
    );
  }