import exampleRoute from './server/routes/example';

export default function (kibana) {
  return new kibana.Plugin({

    id: 'wafa-plugin',
    require: ['kibana', 'elasticsearch'],
    uiExports: {
      app: {
        title: 'Wafa Plugin',
        description: 'an awsome wafa kibana plugin',
        main: 'plugins/wafa-plugin/app'
      }
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init(server, options) {
      // Add server routes and initalize the plugin here
      exampleRoute(server);
    }

  });
};
