import React from "react";
import { runResilience } from "../middleware/pow";

function Button({ apiUrl, requestCount }) {
  const handleClick = async () => {
    console.log("Test de résilience lancé ! ");
    const results = await runResilience({
      url: apiUrl,
      count: parseInt(requestCount),
    });

    console.log("Résultats du test : ", results);
  };

  return (
    <button className="button" onClick={handleClick}>
      Lancer le test
    </button>
  );
}

export default Button;
