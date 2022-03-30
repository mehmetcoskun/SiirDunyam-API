const Poem = {
    poet: async (parent, args, { Poet }) => {
        return await Poet.findOne({ where: { id: parent.author_id } });
    }
};

module.exports = Poem;