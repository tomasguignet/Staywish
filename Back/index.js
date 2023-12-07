const app = require("./src/app.js");
const {dbConnection} = require("./src/db.js");

dbConnection.sync({force: false}).then(() => {
    app.listen(3001, () => {
        console.log("%s listening at 3001");
    });
});
