import Author from "../models/authModel";

//Post
export const postAuthor = async (req, res) => {
  const { name, bio } = req.body;
  try {
    const newAuthor = new Author({ name, bio });
    await newAuthor.save();
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(500).json({ message: 'Auteur non créé', error });
  }
};
//Get
export const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message: 'Auteur non récupéré', error });
  }
};

//Méthode put
export const putAuthor = async (req, res) => {
  const { id } = req.params;
  const { name, bio } = req.body;
  try {
    const miseAjourAuthor = await Author.findByIdAndUpdate(
      id,
      { name, bio },
      { new: true }
    );
    if (!miseAjourAuthor) {
      return res.status(404).json({ message: 'Auteur non trouvé' });
    }
    res.status(200).json(miseAjourAuthor);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour', error });
  }
};

//Méthode delete
export const deleteAuthor = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAuthor = await Author.findByIdAndDelete(id);
    if (!deletedAuthor) {
      return res.status(404).json({ message: 'Auteur non trouvé' });
    }
    res.status(200).json({ message: 'Auteur supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression ', error });
  }
};
