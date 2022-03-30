const Poet = {
    poems: async (parent, args, { Poem }) => {
        return await Poem.findAll({ where: { author_id: parent.id } });
    }
};

module.exports = Poet;