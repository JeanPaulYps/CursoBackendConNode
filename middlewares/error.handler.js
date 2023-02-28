function logErorrs(err, res, req, next) {
  console.error("logErrors", err);
  next(err);
}

function boomErrorHandler(err, req, res, next) {
  console.error("Boom error handler");
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

function errorHandler(err, req, res, next) {
  console.error("Error handler");
  res.status(500).json({ message: err.message, stack: err.stack });
}


module.exports = { logErorrs, errorHandler,  boomErrorHandler };
