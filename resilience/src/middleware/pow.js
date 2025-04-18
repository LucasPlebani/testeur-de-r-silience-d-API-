export async function runResilience({
  url,
  count = 10,
  delay = 0,
  middlewares = [],
  onUpdate,
}) {
  const results = [];

  const wait = (ms) => new Promise((res) => setTimeout(res, ms));

  for (let i = 0; i < count; i++) {
    let request = { url, options: {} };

    for (const middleware of middlewares) {
      await middleware(request);
    }

    const start = performance.now();
    let status = "";
    let statusCode = 0;

    try {
      const response = await fetch(request.url, {
        ...request.options,
      });
      statusCode = response.status;

      if (response.status >= 100 && response.status < 200) {
        status = "Informative_response";
      } else if (response.status >= 200 && response.status < 300) {
        status = "success";
      } else if (response.status >= 300 && response.status < 400) {
        status = "redirection_message";
      } else if (response.status >= 400 && response.status < 500) {
        status = "client_error";
      } else if (response.status >= 500 && response.status < 600) {
        status = "server_error";
      }
    } catch (err) {
      status = "network_error";
    }

    const end = performance.now();
    const duration = end - start;

    results.push({
      status,
      statusCode,
      duration,
    });

    if (onUpdate) onUpdate(results); // MAJ en temps réel

    // Si un délai est défini et que ce n'est pas la dernière requête, attendre le délai avant de continuer.
    if (delay > 0 && i < count - 1) {
      await wait(delay);
    }
  }

  return results;
}
