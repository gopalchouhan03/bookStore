import Book from "../model/book.model.js";

export const getBook = async(req,res)=>{
    try{
        const book = await Book.find();
<<<<<<< HEAD
       
=======
>>>>>>> 48926768c62aa40b4b9c7bb9275670814df4805c
        res.status(200).json(book);
    } catch (error) {
        console.log("ERROR",error);
        res.status(500).json(error);
    }
};