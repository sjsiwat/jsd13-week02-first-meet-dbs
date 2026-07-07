use("chrome-burger-db");

//clear existing data
db.ingredients.deleteMany({});

// insert mock data for ingredients


    db.ingredients.insertMany([
  {
    "_id": ObjectId("65f200000000000000000001"),
    "name": "Beef Patty",
    "stock_level": 50,
    "unit": "pcs",
    "supplier_id": ObjectId("65f000000000000000000001") 
  },
  {
    "_id": ObjectId("65f200000000000000000002"),
    "name": "Brioche Bun",
    "stock_level": 100,
    "unit": "pcs",
    "supplier_id": ObjectId("65f000000000000000000002") 
  },
  {
    "_id": ObjectId("65f200000000000000000003"),
    "name": "Lettuce",
    "stock_level": 20,
    "unit": "heads",
    "supplier_id": ObjectId("65f000000000000000000003") 
  }
]);



// Find all ingredients and join with supplier info
db.ingredients.aggregate([{$lookup: {
  from: "suppliers",
  localField: "supplier_id",
  foreignField: "_id",
  as: "supplier_info",
}},{$unwind: "$supplier_info",}

]);