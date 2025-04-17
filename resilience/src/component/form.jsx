import React from "react";
import "./style/form.css";
import Button from "./button.jsx";
import DropdownRequest from "./dropdownRequest.jsx";

function Form() {
  const [apiUrl, setApiUrl] = React.useState("");
  const [requestCount, setRequestCount] = React.useState(1);
  const [postUrl, setPostUrl] = React.useState("");
  const [nonceToTest, setNonceToTest] = React.useState("");

  const handleApiUrlChange = (e) => setApiUrl(e.target.value);
  const handleRequestCountChange = (e) => setRequestCount(e.target.value);
  const handlePostUrlChange = (e) => setPostUrl(e.target.value);
  const handleNonceChange = (e) => setNonceToTest(e.target.value);

  return (
    <div className="form">
      <h1>Form</h1>
      <p>Ce formulaire permet de configurer l'API cible</p>

      <div>
        <label htmlFor="apiUrl">URL de l'API pour les requêtes : </label>
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
        {/* {showActiveMiddleware()} */}
      </div>

      <div>
        <label htmlFor="postUrl">URL pour la requête POST : </label>
        <input
          type="text"
          id="postUrl"
          value={postUrl}
          onChange={handlePostUrlChange}
          placeholder="http://localhost:8447/api/challenge"
        />
      </div>

      <div>
        <label htmlFor="nonceToTest">Nonce à tester : </label>
        <input
          type="number"
          id="nonceToTest"
          value={nonceToTest}
          onChange={handleNonceChange}
        />
      </div>

      <Button
        apiUrl={apiUrl}
        requestCount={requestCount}
        postUrl={postUrl}
        nonceToTest={nonceToTest}
      />
      <DropdownRequest />
      
    </div>
  );
}

export default Form;
