use("johnycoffee-db");

db.orders.insertMany ([



  {
    "_id": "order001",
    "user_id": "user001",
    "shop_id": "shop001",

    "items": [
      {
        "menu_id": "menu001",
        "name": "hot americano",
        "price": 50,
        "quantity": 1,
        "subtotal": 50
      },
      {
        "menu_id": "menu004",
        "name": "iced Espresso Thai Style",
        "price": 70,
        "quantity": 1,
        "subtotal": 70
      }
    ],

    "total_price": 120,
    "payment_method": "cash",
    "status": "paid",
    "created_at": "2026-07-07T12:00:00Z"
  },

  {  
    "_id": "order002",
    "user_id": "user002",
    "shop_id": "shop001",

    "items": [
      {
        "menu_id": "menu005",
        "name": "pure matcha (yame) ",
        "price": 80,
        "quantity": 1,
        "subtotal": 80
      },
      {
        "menu_id": "menu002",
        "name": "ice americano",
        "price": 60,
        "quantity": 1,
        "subtotal": 60
      }
    ],

    "total_price": 140,
    "payment_method": "cash",
    "status": "paid",
    "created_at": "2026-07-07T13:00:00Z"

  }
]);

// Find all in this collection
db.orders.find();

// Find only one result
db.orders.findOne({_id: "order001"});

// Delete data
db.orders.deleteOne({ _id: "order001" });

// edit one document
db.orders.updateOne(
  { _id: "order001" },
  {
    $set: {
      total: 200
    }
  }
);

/*
* insertOne() → เพิ่มข้อมูล
* insertMany() → เพิ่มหลายข้อมูล
* find() → อ่านข้อมูล
* updateOne() → แก้ไขข้อมูล (ใช้บ่อยที่สุด)
* deleteOne() → ลบข้อมูล
* replaceOne() → ลบ document เดิม แล้วแทนที่ด้วย document ใหม่ทั้งก้อน

*/