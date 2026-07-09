use("johnycoffee-db");

db.menus.insertMany([



{
    "_id": "menu001",
    "shop_id": "shop001",
    "name": "hot americano",
    "price": 50

},

{
    "_id": "menu002",
    "shop_id": "shop001",
    "name": "ice americano",
    "price": 60

},

{
    "_id": "menu003",
    "shop_id": "shop001",
    "name": "espresso shot",
    "price": 40

},

{
    "_id": "menu004",
    "shop_id": "shop001",
    "name": "ice espresso thai style",
    "price": 70

},

{
    "_id": "menu005",
    "shop_id": "shop001",
    "name": "pure matcha (yame)",
    "price": 80

},

{
    "_id": "menu006",
    "shop_id": "shop001",
    "name": "ice matcha latte",
    "price": 100

}]




);

// find all result in collection
db.menus.find();

// find one result
db.menus.findOne({price: 50});

// delelte all document in menus collection
db.menus.deleteMany({});


// delelte one document in collection
db.menus.deleteOne({ _id: "menu001" });

// find menu price >= 60
db.menus.find({ price: { $gte: 60 } })


// update one document
db.menus.updateOne(

  { _id: "menu001" },
  { $set: {price: 55 }}

);


// update many document
db.menus.updateMany(

  { shop_id: "shop001" },
  { $set: { available: true }}

);