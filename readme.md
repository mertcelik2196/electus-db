![Image](https://img.shields.io/npm/v/electus-db?color=%2351F9C0&label=electus-db) 
![Image](https://img.shields.io/npm/dt/electus-db.svg?color=%2351FC0&maxAge=3600) 
#
![Image](https://nodei.co/npm/electus-db.png?downloads=true&downloadRank=true&stars=true)
<br>

## Yüklemek İçin
```npm
npm install electus-db
```
# Yeni Özellikler
Json, Sql, Yaml, Desteği Getirildi<br>
<hr>
Buglar Ve Hatalar Fixlendi


## Nasıl Kullanılır? 💫

# JS Sql
```js
const Database = require("../lib/index");
const db = new Database.Sql();

// Set data
db.set("Hello", "World");

// Get data
db.get("Hello"); // World
db.fetch("Hello"); // World

// Delete data
db.delete("Hello");

db.get("Hello"); // undefined
db.has("Hello"); // false

db.set("age", 10);
db.add("age", 1); // 11
db.subtract("age", 9); // 2

db.set("array", [ "apple" ]);
db.push("array", "orange"); // [ "apple", "orange" ]

// Clear data
db.deleteAll();

// Get all the data
db.all();
```

<br>
<hr>
<br>

# JS Mongo
```js
const Database = require("../lib/index");
const db = new Database.Mongo("mongodb://localhost/electusdb");
async function hello() {
// Set data
await db.set("Hello", "World");

// Get data
await db.get("Hello"); // World
await db.fetch("Hello"); // World

// Delete data
await db.delete("Hello");

await db.get("Hello"); // undefined
await db.has("Hello"); // false

await db.set("age", 10);
await db.add("age", 1); // 11
await db.subtract("age", 9); // 2

await db.set("array", [ "apple" ]);
await db.push("array", "orange"); // [ "apple", "orange" ]

// Clear data
await db.deleteAll();

// Get all the data
await db.all();
};
hello();
```

<br>
<hr>
<br>

# JS Yaml
```js
const Database = require("../lib/index");
const db = new Database.Yaml();

// Set data
db.set("Hello", "World");

// Get data
db.get("Hello"); // World
db.fetch("Hello"); // World

// Delete data
db.delete("Hello");

db.get("Hello"); // undefined
db.has("Hello"); // false

db.set("age", 10);
db.add("age", 1); // 11
db.subtract("age", 9); // 2

db.set("array", [ "apple" ]);
db.push("array", "orange"); // [ "apple", "orange" ]

// Clear data
db.deleteAll();

// Get all the data
db.all();
```

<br>
<hr>
<br>

# JS Json
```js
const Database = require("../lib/index");
const db = new Database.Json();

// Set data
db.set("Hello", "World");

// Get data
db.get("Hello"); // World
db.fetch("Hello"); // World

// Delete data
db.delete("Hello");

db.get("Hello"); // undefined
db.has("Hello"); // false

db.set("age", 10);
db.add("age", 1); // 11
db.subtract("age", 9); // 2

db.set("array", [ "apple" ]);
db.push("array", "orange"); // [ "apple", "orange" ]

// Clear data
db.deleteAll();

// Get all the data
db.all();
```

## Bana Ulaşabiliceğiniz Yerler & Destek Ve Yardım & Bug Hata Bildirim!
[Discord](https://discord.gg/WerBsuagxQ)