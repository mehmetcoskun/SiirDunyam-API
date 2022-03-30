const Query = {
    utils: async (parent, args, { Util }) => {
        return await Util.findOne();
    },
    poets: async (parent, args, { Poet }) => {
        return await Poet.findAll();
    },
    poems: async (parent, args, { Poem }) => {
        return await Poem.findAll();
    }
};

module.exports = Query;