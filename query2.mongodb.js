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

