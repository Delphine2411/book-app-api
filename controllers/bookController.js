//Importation du model book vers controllers
import Book from "../models/bookModel";

//Créer book

export const postBook = async (req, res) => {
    const {title, author,publishedYear,genre} = req.body
    try {   
        const newBook = new Book({title, author,publishedYear,genre});
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ error: "Il y a eu une erreur lors de la création du livre" });
    }
};

// get

  export const getBooks = async (req, res) => {
    try {
      const books = await Book.find().populate('author');
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération des livres', error });
    }
  };

  // getById

  export const getBookById = async (req, res) => {
    try {
      const book = await Book.findById(req.params).populate('author');
      if (!book) {
        return res.status(404).json({ message: 'Livre introuvable' });
      }
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ message: 'Erreur de récupération ', error });
    }
  };

  //put

  export const putBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, publishedDate, genre } = req.body;
    try {
      const miseAjourBook = await Book.findByIdAndUpdate(
        id,
        { title, author, publishedDate, genre },
        { new: true }
      );
      if (!miseAjourBook) {
        return res.status(404).json({ message: 'Livre non trouvé' });
      }
      res.status(200).json(miseAjourBook);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la mise à jour du livre', error });
    }
  };

  //delete

  export const deleteBook = async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params);
      if (!deletedBook) {
        return res.status(404).json({ message: 'Livre non trouvé' });
      }
      res.status(200).json({ message: 'Livre supprimé avec succès' });
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la suppression du livre', error });
    }
  };
  
  