const authorsInventory = require("../data/authorsInventory");
const bookInventory = require("../data/booksInventory");

const getAllAuthors = async(request, response, next) => {
    const authors = authorsInventory; 

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
    const foundAuthor = authorsInventory.find((author)=> author._id===_id);

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

module.exports = { getAllAuthors, getAuthor };