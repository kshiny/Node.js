const express = require('express');

const app = express();

const hasError = (req, res, next) => {
    next("ERROR"); // next에 인자를 전달하게 되면 미들웨어는 다음 미들웨어를 전달하지 않고 오류 처리 미들웨어로 넘기게 된다.
}

app.get('/', (req, res) => {
    res.send("OK");
});

app.get('/success', (req, res) => {
    res.send("SUCCESS");
});

app.get('/fail', hasError, (req, res) => {
    res.send("FAIL");
});

// 원하는 방식으로 오류처리 하도록 오류처리 미들웨어 추가하기
app.use((err, req, res, next) => {
    res.send(`Request failed with ${err}`);
})

app.listen(8080);