const Database = require("../lib/index");
const Mongo = new Database.Mongo("");
const Sql = new Database.Sql();
const Json = new Database.Json();
const Yaml = new Database.Yaml();