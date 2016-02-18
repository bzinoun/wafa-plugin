export default function (server) {

  server.route({
    path: '/wafa-plugin/api/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

};
