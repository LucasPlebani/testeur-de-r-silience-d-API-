import React from "react";
import "./style/form.css";
import Button from "./button.jsx";
import activeMiddleware from "./activeMiddleware.jsx";

function Form() {
  const [apiUrl, setApiUrl] = React.useState("");
  const [requestCount, setRequestCount] = React.useState(1);

  const handleApiUrlChange = (e) => setApiUrl(e.target.value);
  const handleRequestCountChange = (e) => setRequestCount(e.target.value);

<<<<<<< HEAD
    return (
        <div className="form">
            <h1>Form</h1>
            <p>Ce formulaire permet de configurer l'API cible</p>
            <div>
                <label htmlFor="apiUrl">URL de l'API cible:</label>
                <input
                    type="text"
                    id="apiUrl"
                    value={apiUrl}
                    onChange={handleApiUrlChange}
                    placeholder="Entrez l'URL de l'API"
                />
            </div>
            <div>
                <label htmlFor="requestCount">Nombre de requêtes à envoyer:</label>
                <input
                    type="number"
                    id="requestCount"
                    value={requestCount}
                    onChange={handleRequestCountChange}
                    min="1"
                />
                <Button />
                <activeMiddleware />
            </div>
        </div>
    );
=======
  return (
    <div className="form">
      <h1>Testeur de résilience</h1>
      <p>Ce formulaire permet d'avoir le résultat de l'API ciblé</p>
      <div>
        <label htmlFor="apiUrl">URL de l'API cible : </label>
        <input
          type="text"
          id="apiUrl"
          value={apiUrl}
          onChange={handleApiUrlChange}
          placeholder="Entrez l'URL de l'API"
        />
      </div>
      <div>
        <label htmlFor="requestCount">Nombre de requêtes à envoyer : </label>
        <input
          type="number"
          id="requestCount"
          value={requestCount}
          onChange={handleRequestCountChange}
          min="1"
        />
        <Button apiUrl={apiUrl} requestCount={requestCount} />
      </div>
    </div>
  );
>>>>>>> ffa5eb7e0bfe14827e3434f13363a828e6de63f5
}
export default Form;
