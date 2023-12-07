require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_DEPLOY } = process.env;
const path = require("path");
const fs = require("fs");

const sequelize = new Sequelize(DB_DEPLOY, {
  logging: false,
  native: false,
});

const basename = path.basename;

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
.filter(
    file => 
    file.indexOf(".") !== 0 
    && file !== basename 
    && file.slice(-3) === ".js"
)
.forEach(file => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)))
});

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  Admin,
  Comment,
  Home,
  Reservation,
  User
} = sequelize.models;

// Aca vendrian las relaciones
User.hasMany(Home, {as: "homes"});
Home.belongsTo(User);

User.hasMany(Reservation, {as: "reservations"});
Reservation.belongsTo(User);

User.hasMany(Comment, {as: "comments"});
Comment.belongsTo(User);

Home.hasMany(Comment, {as: "comments"});
Comment.belongsTo(Home);

Reservation.hasOne(Home);
Home.belongsToMany(Reservation, {as: "reservations"});

Reservation.hasOne(Comment);
Comment.belongsTo(Reservation);



module.exports = {
    ...sequelize.models, // Para poder importar los modelos
    dbConnection: sequelize //Para poder importar la conexion a la db
}