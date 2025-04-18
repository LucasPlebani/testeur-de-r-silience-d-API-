export default function logger(req, res, next) {
    const currentTime = new Date().toLocaleTimeString(); 
    console.log(` Logger: ${req.method} ${req.path} @ ${currentTime}`); //Log de la requête ( get / post / put / delete ) + le chemin /durée de la requête
    next();
  }