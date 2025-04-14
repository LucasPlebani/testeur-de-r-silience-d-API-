import React from "react";

export default Button;

function Button({ formData, apiUrl }) {
    const handleClick = async () => {
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log("Données envoyées avec succès !");
            } else {
                console.error("Erreur lors de l'envoi des données.");
            }
        } catch (error) {
            console.error("Erreur réseau :", error);
        }
    };

    return (
        <button className="button" onClick={handleClick}>
            Lancer le test
        </button>
    );
}