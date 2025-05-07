const authorInventory = require("../data/authorInventory");
const bookInventory = require("../data/bookInventory");

const getAllAuthors = async(request, response, next) => {
    const authors = authorInventory; 

    try{
        return response.status(200).json({
            success: {
                message: "This route points to the Authors page with all of the authors"
            }, 
            data: {authors: authors}, 
            statusCode:200, 
        });
    }catch(error){
        return response.status(400).json({
            error:{
                message: "Resource not found. Search again."
            }, 
            statusCode:400,
        });
    }
};


const getAuthor = async(request, response, next) => {
    const {_id } = request.params; 
    const foundAuthor = authorInventory.find((author)=> author._id===_id);

    try {
        return response.status(200).json({
            success: {
                message: "This route points to the Authors page with one of the books by the ID",
            },
            data: { author: foundAuthor},
            statusCode: 200, 
        });
    } catch(error){
        return response.status(400).json({
            error:{
                message:"Resource not found. Search again."
            },
            statusCode: 400,
        });
    }
};


const createAuthor = async (request, response, next) => {
    const {firstName, lastName, birthYear, bio } = request.body;

    const newAuthor = {
        firstName, 
        lastName, 
        birthYear, 
        bio, 
    }; 

    try {
        authorInventory.push(newAuthor)

        return response.status(201).json({
            success:{message: "A new author is created."},
            data: {newAuthor},
        });
    } catch(error){
        return response.status(400).json({
            error: {message: "There is an error when creating an author." }
        });
    };
 
  };

  const updateAuthor = async (request, response, next) => {
    const {_id} = req.params;
    const { firstName, lastName, birthYear, bio } = request.body;
    try{
        const updatedAuthor= {
            firstName, 
            lastName, 
            birthYear, 
            bio, 
        }; 
        
        const foundAuthorIndex = authors.find((author)=> authorInventory._id ===_id); 
        authors[foundAuthorIndex] = newAuthor;

        return response.status(201).json({
            success: {message: "The author is updated"}, 
            data: {updatedAuthor}, 
        });

    } catch(error){
        return response.status(400).json({
            error:{message:"There is an error when updating an author"}
        });
    }

  };

  const deleteAuthor = async (request, response, next) => {
    const {_id} = req.params;

    try{  
        const eraser = authors.filter((author)=> author._id !==_id); 
        console.log(eraser);

        return response.status(200).json({
            success: {message: "Author is deleted."}, 
        });

    } catch(error){
        return response.status(400).json({
            error:{message:"There is an error when deleting an author"}
        });
    }

  };


module.exports = { getAllAuthors, getAuthor, createAuthor,updateAuthor, deleteAuthor };