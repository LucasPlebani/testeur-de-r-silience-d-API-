export default function timer(req, res, next) {
  const start = performance.now(); // performance.now() démarre et calcule en millisecondes le temps écoulé.

  res.on('finish', () => { // finish, évènement lors de la fin de la réponse
    const elapsed = performance.now() - start;
    console.log(`⏱ ${req.method} ${req.originalUrl} - ${elapsed.toFixed(1)} ms`); 
  });

  next();
}