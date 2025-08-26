const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>Hello from server</h1>");

    }
    else if (req.url === "/services") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>Hello from services</h1>");

    }
    else if (req.url === "/aboutus") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>Hello from aboutus</h1>");

    }

    else if (req.url === "/contactus") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>Hello from contactus</h1>");

    }


    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>Not Found</h1>");

    }


})


server.listen(3000, () => {
    console.log("Listening to server on port 3000")
});