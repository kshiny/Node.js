// fs 모듈을 불러오세요.
var http = require("http")
var fs = require("fs")

// 서버를 생성하세요.
http
    .createServer(function(req, res) {
        res.writeHead(200, {"Content-Type": "text/html"});
    
        var data = fs
            .readFileSync("poetry.txt", "utf-8")
            .split("\n") // 문자열을 줄 단위로 분리
        for (var i = 0; i < data.length; i++) {
            res.write(data[i]);
            res.write("<br />"); // 한 줄씩 화면에 출력
        }
        res.end();
    })
    .listen(8080);