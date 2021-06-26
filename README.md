# simple-restify-server
This is simple restify server. 

http://restify.com/
https://www.npmjs.com/package/restify

# APIs
## [Server API](http://restify.com/docs/server-api/)
This is API about setting of server.
PORT,Endpoint,Method etc...

```javascript
const server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 3978, () => {});

// Listen for incoming requests.
server.get('/', (req, res) => {});
```

## [Request API](http://restify.com/docs/request-api/)


```javascript
const message = 'hello ' + req.params.name;
```

## [Response API](http://restify.com/docs/response-api/)
This API add some value to response.

For example, if you want to add header data to response, you should use the following. 

```javascript
res.header('content-type', 'json');
```

## [Plugin API](http://restify.com/docs/plugins-api/)
This is API to add some plugin.

For example, if you want to use request body data, you should add this plugin

```javascript
server.use(restify.plugins.bodyParser({ mapParams: true }));
```
