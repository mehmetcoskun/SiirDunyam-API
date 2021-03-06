const Query = {
    utils: async (parent, args, { Util }) => {
        return await Util.findOne();
    },
    poets: async (parent, args, { Poet, sequelize }) => {
        return await Poet.findAll({
            limit: args.limit,
            order: args.random && [
                [sequelize.fn('RAND'), 'ASC']
            ]
        });
    },
    poems: async (parent, args, { Poem, sequelize }) => {
        return await Poem.findAll({
            where: args.authorId && {
                author_id: args.authorId
            },
            limit: args.limit && args.limit,
            order: args.random && [
                [sequelize.fn('RAND'), 'ASC']
            ],
            offset: args.offset && args.offset
        });
    },
    poem: async (parent, args, { Poem }) => {
        return await Poem.findOne({
            where: {
                id: args.id
            }
        });
    },
    search: async (parent, args, { Poem, sequelize: { Op }  }) => {
        return await Poem.findAll({
            where: {
                title: {
                    [Op.like]: `${args.query}%`
                }
            },
            limit: args.limit && args.limit
        });
    }
};

module.exports = Query;
