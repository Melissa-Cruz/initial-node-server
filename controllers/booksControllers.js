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

module.exports = { getAllBooks, getBook };