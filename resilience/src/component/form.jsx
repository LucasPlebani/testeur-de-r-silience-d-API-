import React from "react";
import "./style/form.css";
import Button from "./button.jsx";
import activeMiddleware from "./activeMiddleware.jsx";

function Form() {
  const [apiUrl, setApiUrl] = React.useState("");
  const [requestCount, setRequestCount] = React.useState(1);

  const handleApiUrlChange = (e) => setApiUrl(e.target.value);
  const handleRequestCountChange = (e) => setRequestCount(e.target.value);

  return (
    <div className="form">
      <h1>Form</h1>
      <p>Ce formulaire permet de configurer l'API cible</p>
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
        <Button />
        <activeMiddleware />
      </div>
    </div>
  );
}
export default Form;
