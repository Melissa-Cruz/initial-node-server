//initialize express environment
const express = require("express");
//allow the app to use the express package
const app = express();

//define a port number for the server to listen for a connection.
const PORT = 3000;

//------------------- Middleware -------------------
//cors
const cors = require("cors");
//morgan
const morgan = require("morgan");

// NEW: add the path module
const path = require("node:path");

app.use(cors());
app.use(morgan("combined"));
//combined - show a log that is moe comprehensive
//dev - will show simpler information

// Define the routing variable for authorRoutes and booksRoutes 
const authorsRoutes = require("./routes/authorsRoutes");
const booksRoutes = require("./routes/booksRoutes");

//Tell the app to use the routing variables
app.use("/api/books", booksRoutes);
app.use("/api/authors", authorsRoutes);


//-----------------------------------------------------------------------------------
// Site Data
const username = "CodeSquader";
const date = new Date();
const year = date.getFullYear();
const isSignedIn = true;

// Array containing 3 objects, each object representing information about a specific book. This is a representation of information that would actually be stored in a database. Since we're not to databases yet, we'll use this array instead.
const books = [
  {
    _id: "001",
    title: "Midnight for Charlie Bone",
    author: "Jenny Nimmo",
    price: 23,
    starRating: 4,
    synopsis:
      "In the first novel, 10-year-old Charlie Bone discovers that he has a special power. After accidentally encountering a photograph of a missing baby, Charlie begins to hear the voices of people in photographs. He discovers that he is a descendant of the Red King, who was an ancient magician.",
  },
  {
    _id: "002",
    title: "Akira",
    author: "Katsuhiro Otomo",
    price: 16,
    starRating: 3,
    synopsis:
      "Akira, a dystopian saga set in Neo-Tokyo, a city recovering from thermonuclear attack where the streets have been ceded to motorcycle gangs and the rich and powerful run dangerous experiments on destructive, supernatural powers that they cannot control.",
  },
  {
    _id: "003",
    title: "Matilda",
    author: "Roald Dahl",
    price: 15,
    starRating: 5,
    synopsis:
      "A girl gifted with a keen intellect and psychic powers uses both to get even with her callous family and free her kindly schoolteacher from the tyrannical grip of a headmistress.",
  },
];


//---------------------Per 2: CW: Dynamic Node Review -------------------------------
// Tell the app to use express to bundle all of the files within the  public directory
app.use(express.static(path.join(__dirname + "/public")));

// Tell the app to use express and JSON to read data
app.use(express.json());

//Tell the app to use express and urlencoded to
app.use(express.urlencoded({ extended: true }));

//end Middleware

//---------------------Per 2: CW: Dynamic Node Review -------------------------------
// -------------Create five basic GET routes with the following information using the .send method

//initialize and retain an index route to automatically render a message when the server starts
app.get("/", (request, response, next) => {
  // response.send("This route points to the Home page"); //render a str on the page
  // response.json("hello world");//will send a json message
  response.status(200).json({
    success: { message: "This route points to the Home page" },
    //in a key of data and a value of an object that has userName, date and year
    data:{
        username:username,
        date:date,
        year:year
    },
    statusCode: 200,
  });
}); //the only route that you keep so that we can see what's in the browswer - I want to see something when the server starts

app.get("/admin", (request, response, next) => {
  // response.send("This route points to the Admin Console page");
  response.status(200).json({
    success: { message: "This route points to the Admin Console page" },
    // key of data and a value of an object that has isSigned as the parameter. 
    data: {
        isSignedIn:isSignedIn
    },
    statusCode: 200,
  });
});

app.get("/site-routes", (request, response, next) => {
    // response.send("This route points to the site router page")
    response.status(200).json({
      success: { message: "This route points to the site router page" },
      statusCode: 200,
    });
  });
  

// ----------AWESOME AUTHORS --------------
app.get("/authors", (request, response, next) => {
  // response.send("This route points to the Author page");

  response.status(200).json({
    success: { message: "This route points to the Author page" },
    // key of data and a value of an object that has the array as the paramete
    data: {
        authors:authors
    },
    statusCode: 200,
  });
});
app.get("/authors/create", (request, response, next) => {
  response.status(200).json({
    success: { message: "This route points to the Create Author page" },
    statusCode: 200,
  });
});

app.get("/authors/:_id", (request, response, next) => {
    const params = request.params;
    console.log(params); //this doesn't actually log unless it's in the response
    const {_id} = params;
    const foundAuthor = authors.find((author)=> author._id ===_id);
    
    if (foundAuthor) {
        response.status(200).json({
            success: { message: "This route points to the specific author via the ID" },
            statusCode: 200,
        });        
    }else{ //Otherwise, send a 404 error with the message of "There is no book with this id", with the corresponding statusCode.
        response.status(404).json({
            error:{message: "There is no author with this id"}, 
            statusCode:404
        });
    };
  

});

//-------------------------------BONUS-------------------------Using the information in the slides regarding route parameters, can you define a route that points to the username of CodeSquader?

app.get(`/:${username}`, (request, response,next) => {
    response.status(200).json({
        success:{message:"This route points to the CodeSquader page"},
        statusCode: 200

    });
})



// ----------BOOK BESTIES --------------

app.get("/books", (request, response, next) => {
  // response.send("This route points to the Books page")
  response.status(200).json({
    success: { message: "This route points to the Books page" },
    // include the proper array of data that is needed to be passed in a key of data and 

    data: {
        //a value of an object that has the array as the parameter.
        books: books
    },
    statusCode: 200,
  });
});
app.get("/books/create", (request, response, next) => {
  response.status(200).json({
    success: { message: "This route points to the Create Book page" },
    statusCode: 200,
  });
});

//the colon in the /books/:_id tells the server that this is a parameter that we are passing through in the
app.get("/books/:_id", (request, response, next) => {
    const params = request.params; //store the request.params object in a variable
    console.log(params);
    const {_id} = params; //retrieve the _id from the parameters using object destructuring 

    // Create a new variable called foundBook and use the .find method on books array to find the book with the given _id.
    const foundBook = books.find((book)=>book._id ===_id);

    if (foundBook) {// if...else statement to detect if there is a book found.  If the book is found, log the key of data and a value of an object that has the foundBook as the parameter after the success message. 
        response.status(200).json({
            success: {message:"This route points to the specific book via the ID"},
            key:{
                book:foundBook
            },
            statusCode:200
        });
    } else{ //Otherwise, send a 404 error with the message of "There is no book with this id", with the corresponding statusCode.
        response.status(404).json({
            error:{message: "There is no book with this id"}, 
            statusCode:404
        })
    };
    

});

// ----------------------------Per 4: CW -----------------------------------//
// We have given you some starter files to begin with: siteInventory.js, booksInventory.js, booksControllers.js, booksRoutes.js


// ---------------------------Per 3: CW: Dynamic Pass Data--------------------------------/
// Making different routes with parameters
// Create 4 NEW GET routes that send a request, receive a response, and move to the next block of code w/ .status().json and a success message :
// PATH: /books/create, HANDLER:"This route points to the Create Book page”
// PATH: /books/:_id, HANDLER: "This route points to the specific book via the ID”
// PATH: /authors/create, HANDLER: "This route points to the Create Author page”
// PATH: /authors/:_id, HANDLER: "This route points to the specific author via the ID”//

// est

//have the app listen at the PORT where a console.log says `Server is listening on ${PORT}. Connection established.`
app.listen(PORT, () => {
  console.log(
    `Server is listening on http://localhost:${PORT}. Connection established.`
  );

  console.log(
    `Carol's bookstore server is listening on port http://localhost:${PORT}. Connection established.`
  );
});
