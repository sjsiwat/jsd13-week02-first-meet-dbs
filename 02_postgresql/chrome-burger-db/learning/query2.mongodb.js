/* Excercise 1 */
/* ข้อที่1 
Fetch all documents from comments collection.
*/
use("sample_mflix");

db.comments.find({});


/* ข้อที่2
Fetch only one user from comments collection by _id = “5a9427648b0beebeb69579f5”.
*/

use("sample_mflix");

db.comments.findOne({_id: ObjectId("5a9427648b0beebeb69579f5")});


/* ข้อที่3 
Fetch only one user from comments collection by email = “john_bishop@fakegmail.com”.

*/
use("sample_mflix");

db.comments.find({email: "john_bishop@fakegmail.com"});

/* ข้อที่4 
Fetch only one user from comments collection by name = “John Bishop”.
*/
use("sample_mflix");

db.comments.find({name: "John Bishop"});


/* Excercise 2 */
/* ข้อที่1 
What is an example of  type “movie” and rated “TV-G” look like?
*/

use("sample_mflix");
db.movies.find({type: "movie",rated: "TV-G"});

/* ข้อที่2 
How many movies are there in “movie” type and “TV-G” rated?
*/
use("sample_mflix");
db.movies.find({type: "movie",rated: "TV-G"}).count();



/* Excercise3 */
/* ข้อที่1 */
use("sample_mflix");
db.theaters.find({"location.address.state": "AL"});


/* ข้อที่2 
How many theaters does AL state has?  
 */
use("sample_mflix");
db.theaters.find({"location.address.state": "AL"}).count();



/* ข้อที่3 
How many theaters does La Quinta city has?
*/
use("sample_mflix");
db.theaters.find({"location.address.city": "La Quinta"}).count();


/* Excercise4 */
/* ข้อที่1
How many movies does mentioned American in its plot?
*/
use("sample_mflix");
db.movies.find({ plot: { $regex: "American", $options: "i" } }).count()

/* ข้อที่2How many movies does end plot (sentence) with the street.
*/
use("sample_mflix");
db.movies.find({ plot: { $regex: "street$", $options: "i" } }).count()

/* ข้อที่3 
What is data of above examples like?
*/
use("sample_mflix");
db.movies.find({ plot: { $regex: "street$", $options: "i" } })

/* Excercise5 */
/* ข้อที่ 1
What are top 5 runtime movies? 
*/
use("sample_mflix");
db.movies.find({}).sort({ runtime: -1 }).limit(5)

/* ข้อที่ 2
What are top 5 runtime movies that less than 60 minutes?
*/
use("sample_mflix");
db.movies.find({ runtime: { $lt: 60 } }).sort({ runtime: -1}).limit(5)

/* ข้อที่ 3
I was born in 1955, which 3 movies should I watch in next 10 years?
*/

use("sample_mflix");
db.movies.find({ year: { $gt: 1954, $lt: 1966}}).sort({ year: 1}).limit(3)

/* ข้อที่ 4 
How many movies were released during 1990 - 2000?
*/
use("sample_mflix");
db.movies.find({ released: { $gt: ISODate("1990-01-01T00:00:00Z"), $lt: ISODate("2001-01-01T00:00:00Z")}}).count()



/* Excercise 6 */
/*Find all movies in the "movies" collection released between 1950 and 1970 (inclusive)
 that are documented as being shown in countries located in the USA. */

 db.movies.find({
  countries: {$in: ["USA"]},
  year: {$gte: 1950, $lte: 1970}
})


/*What is the number of movies in the "movies" collection 
with genres "Drama" and "History" released after the year 1970?  */

db.movies.find({ 
  genres: { $all: ["Drama", "History"] },
  released: { $gt: ISODate("1970-01-01T00:00:00Z") }
}).count()


/*In how many films is Roy L. McCardell credited as an actor? */
db.movies.find({
    cast: "Roy L. McCardell" 
}).count()


/*How many movies did Hal Roach directed? */
db.movies.find({
    directors: "Hal Roach"
}).count()


/*What is the movie with the earliest release year directed by Hal Roach?  */
db.movies.find({
     directors: { $in: ["Hal Roach"] }
})



/*  How many awards did Hal Roach’s movies win?  */

db.movies.find({ directors: { $in: ["Hal Roach"] } }, 
{title: 1, "awards.wins": 1, _id: 0 });

