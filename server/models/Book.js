import {model, Schema} from 'mongoose';

const bookSchema = new Schema({
    title:{
        type: String,
        required: true
    },

    author:{
        type: String,
        required: true,
        unique: true
    },
    
    description:{
        type: String,
        required: true
    },
    cover_image:{
        type: String,
        required: true
    },
    publication_year:{
        type: Number,
        required: true
    }
})

const Book = model("Book", bookSchema);

export default Book;