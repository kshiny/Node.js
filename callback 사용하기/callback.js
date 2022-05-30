const countDown = require('./countdown');

countDown(3, () => {
    console.log("BOOM!");
});
