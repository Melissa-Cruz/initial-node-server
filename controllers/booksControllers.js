const bookInventory = require("../data/bookInventory");

const getAllBooks = async (request, response, next) => {
  const books = bookInventory;

  try {
    return response.status(200).json({
      success: {
        message: "This route points to the Books page with all of the books",
      },
      data: { books: books },
      statusCode: 200,
    });
  } catch (error) {
    return response.status(400).json({
      error: { message: "Resource not found. Search again." },
      statusCode: 400,
    });
  }
};

const getBook = async (request, response, next) => {
  const { _id } = request.params;

  const foundBook = bookInventory.find((book) => book._id === _id);

  try {
    return response.status(200).json({
      success: {
        message:
          "This route points to the Books page with one of the books by the ID",
      },
      data: { book: foundBook },
      statusCode: 200,
    });
  } catch (error) {
    return response.status(400).json({
      error: { message: "Resource not found. Search again." },
      statusCode: 400,
    });
  }
};


const createBook = async (request, response, next) => {
    const { title, author, price, starRating, synopsis } = request.body;

    const newBook = {
        title, 
        author, 
        price, 
        starRating, 
        synopsis
    }; 

    try {
        bookInventory.push(newBook)

        return response.status(201).json({
            success:{message: "A new book is created."},
            data: {newBook},
        });
    } catch(error){
        return response.status(400).json({
            error: {message: "There is an error when creating a book." }
        });
    };
 
  };

  const updateBook = async (request, response, next) => {
    const {_id} = req.params;
    const { title, author, price, starRating, synopsis } = request.body;
    try{
        const updatedBook = {
            title, 
            author, 
            price, 
            starRating, 
            synopsis
        }; 
        
        const foundBookIndex = books.find((book)=> bookInventory._id ===_id); 
        books[foundBookIndex] = newBook;

        return response.status(201).json({
            success: {message: "The books is updated"}, 
            data: {updatedBook}, 
        });

    } catch(error){
        return response.status(400).json({
            error:{message:"There is an error when updating a book"}
        });
    }

  };

  const deleteBook = async (request, response, next) => {
    const {_id} = req.params;

    try{  
        const eraser = books.filter((book)=> book._id !==_id); 
        console.log(eraser);

        return response.status(200).json({
            success: {message: "Book is deleted."}, 
        });

    } catch(error){
        return response.status(400).json({
            error:{message:"There is an error when deleting a book"}
        });
    }

  };


module.exports = { getAllBooks, getBook, createBook, updateBook, deleteBook };