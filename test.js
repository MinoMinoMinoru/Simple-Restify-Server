const restify = require('restify');
const errs = require('restify-errors');

const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => { });
server.get('/', function (req, res, next) {
  res.send('home')
  return next();
});

server.get('/foo',
  function (req, res, next) {
    req.someData = 'foo';
    return next();
  },
  function (req, res, next) {
    res.send(req.someData);
    // switch "next()" or "next(false)" 
    return next(false);
  },
  function (req, res, next) {
    console.log("hogehoge")
    return next();
  }
);

server.get('/error', function (req, res, next) {
  // resource not found error
  return next(new errs.ConflictError("I just don't like you"));
});
