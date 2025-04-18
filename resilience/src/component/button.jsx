import React from "react";
import { runResilience } from "../middleware/pow";

function Button({ apiUrl, requestCount, postUrl, nonceToTest }) {
  const handleClick = async () => {
    console.log("Test de résilience lancé !");
    const results = await runResilience({
      url: apiUrl,
      count: parseInt(requestCount),
    });
    console.log("Résultats du test : ", results);
  };

  const handlePostClick = async () => {
    try {
      const response = await fetch(postUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          challenge: "test",
          nonce: parseInt(nonceToTest),
        }),
      });

      const data = await response.json();
      console.log("Réponse POST :", data);
    } catch (error) {
      console.error("Erreur lors de la requête POST :", error);
    }
  };

  return (
    <>
      <button className="button" onClick={handleClick}>
        Lancer le test de résilience
      </button>
      <button className="button" onClick={handlePostClick}>
        Envoyer le test POST
      </button>
    </>
  );
}

export default Button;
