const app = require("./src/app.js");
const {dbConnection} = require("./src/db.js");

dbConnection.sync({force: true}).then(() => {
    app.listen(3001, () => {
        console.log("%s listening at 3001");
    });
});
