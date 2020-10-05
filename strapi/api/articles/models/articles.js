const slug = require('slug');
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
            if (data.Subject) {
              data.Slug = slug(data.Subject);
            }
        },
        beforeUpdate: async (params, data) => {
            data.Slug = slug(data.Subject);
        },
    },
};