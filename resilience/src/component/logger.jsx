import React, { useState, useEffect } from "react";

export default function BodyJson() {
  const [jsonBody, setJsonBody] = useState("{}");
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const originalLog = console.log;

    console.log = (...args) => {
      originalLog(...args);

      // On formate chaque argument
      const formattedArgs = args.map((arg) => {
        if (typeof arg === "object") {
          try {
            return JSON.stringify(arg, null, 2); 
          } catch (e) {
            return "[Unserializable object]";
          }
        }
        return String(arg);
      });

      setLogs((prevLogs) => [...prevLogs, formattedArgs.join(" ")]);
    };

    return () => {
      console.log = originalLog;
    };
  }, []);

  return (
    <div className="json-body">
      <h1>Corps de la requête JSON</h1>
      <label>
        JSON Body :
        <textarea
          rows={8}
          value={jsonBody}
          onChange={(e) => setJsonBody(e.target.value)}
        />
      </label>

      <div className="logs-section" style={{ marginTop: "1rem" }}>
        <h2>Logs Console</h2>
        <ul>
          {logs.map((log, index) => (
            <li key={index}>
              <pre>{log}</pre>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
