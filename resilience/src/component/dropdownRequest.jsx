import React, { useState } from "react";

const RequestComponent = () => {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("http://localhost:8447/hello");
  const [jsonBody, setJsonBody] = useState("{}");
  const [requestCount, setRequestCount] = useState(1); // ➕ nouveau state
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleRequest = async (e) => {
    e.preventDefault();

    const count = parseInt(requestCount) || 1;

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
      const allResponses = [];

      for (let i = 0; i < (method === "GET" ? count : 1); i++) {
        const res = await fetch(url, options);
        const data = await res.json();
        allResponses.push(data);
      }

      setResponse(
        method === "GET" && count > 1 ? allResponses : allResponses[0]
      );
      setError(null);
    } catch (err) {
      setError("Erreur lors de la requête : " + err.message);
      setResponse(null);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Tester une requête HTTP</h2>
      <form onSubmit={handleRequest}>
        <label>
          Type de requête :
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </label>
        <br />

        <label>
          URL :
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{ width: "100%" }}
          />
        </label>
        <br />

        {method === "GET" && (
          <div>
            <label htmlFor="requestCount">Nombre de requêtes à envoyer :</label>
            <input
              type="number"
              id="requestCount"
              value={requestCount}
              onChange={(e) => setRequestCount(e.target.value)}
              min="1"
              style={{ width: "100%", padding: "8px", marginTop: "4px" }}
            />
          </div>
        )}

        {(method === "POST" || method === "PUT") && (
          <label>
            JSON Body :
            <textarea
              rows={8}
              style={{ width: "100%" }}
              value={jsonBody}
              onChange={(e) => setJsonBody(e.target.value)}
            />
          </label>
        )}
        <br />

        <button className="button" type="submit">
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
