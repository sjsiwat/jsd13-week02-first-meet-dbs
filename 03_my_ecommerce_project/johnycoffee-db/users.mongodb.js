
use("johnycoffee-db");

db.users.insertMany([


{
  "_id": 1,
  "username": "Johny01",
  "firstName": "johny",
  "lastName": "catgod",
  "email": "johny@example.com",
  "password": "test1234",
  "profileImage": "https://example.com/profilecat.jpg",
  "role":"customer",
  "create_at": "2026-01-01T00:00:00Z"
},
  {

    "_id": 2,
    "username": "siwat01",
    "firstName": "siwat",
    "lastName": "jankam",
    "email": "siwat@example.com",
    "password": "test5678",
    "profileImage": "https://example.com/profilesiwat.jpg",
    "role": "owner",
    "create_at": "2026-01-01T00:00:00Z"

    
  }


]);
// Find all user in users collection
db.users.find();

// Find only one result from user collection in field 
db.users.findOne({firstName: "johny"});

//  Delete all data
db.users.deleteMany({});
