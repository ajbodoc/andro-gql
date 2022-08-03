const { makeJSONPgSmartTagsPlugin } = require("graphile-utils");

module.exports = makeJSONPgSmartTagsPlugin({
    version: 1,
    config: {
        class: {
            actividade: {
                tags: {
                    name: "actividad",
                },
            },
        },
        class: {
            ciudade: {
                tags: {
                    name: "ciudad",
                },
            },
        },
    },
});