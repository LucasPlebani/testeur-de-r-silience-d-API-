import React, { useState } from "react";
import "./style/dropdown.css";

const RequestComponent = () => {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("http://localhost:8447/hello");
  const [jsonBody, setJsonBody] = useState("{}");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleRequest = async (e) => {
    e.preventDefault();

    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (method !== "GET" && method !== "DELETE") {
      try {
        options.body = JSON.stringify(JSON.parse(jsonBody));
      } catch (err) {
        setError("Invalid JSON body");
        return;
      }
    }

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      setResponse(data);
      setError(null);
    } catch (err) {
      setError("Erreur lors de la requête : " + err.message);
      setResponse(null);
    }
  };

  return (
    <div className="dropdown-container">
      <h2>Test de requête </h2>
      <form onSubmit={handleRequest}>
        <label>
          Type de requête :
          <select
            className="dropdown-button"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option className="dropdown-item" value="GET">GET</option>
            <option className="dropdown-item" value="POST">POST</option>
            <option className="dropdown-item" value="PUT">PUT</option>
            <option className="dropdown-item" value="DELETE">DELETE</option>
          </select>
        </label>
        <br />

        <label>
          URL :
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <br />

        {(method === "POST" || method === "PUT") && (
          <label>
            JSON Body :
            <textarea
              rows={8}
              value={jsonBody}
              onChange={(e) => setJsonBody(e.target.value)}
            />
          </label>
        )}
        <br />
        <button className="dropdown-button" type="submit">
          Envoyer
        </button>
      </form>

      <h3>Réponse :</h3>
      {error && <pre style={{ color: "red" }}>{error}</pre>}
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default RequestComponent;