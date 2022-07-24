var http = require("http");

var server = http.createServer(function (req, res) {
  if (req.url == "/welcome") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>Welcome to Dominos!</p><body><html>");
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<html><body><p>phone no. 18602100000 and email.guestcaredominos@jublfood.com </p><body><html>"
    );
    res.end();
  } else res.end("Invalid request 404");
});
server.listen(8081);
console.log("server is running");
