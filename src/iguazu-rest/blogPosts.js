export default {
  fetch: (id, action, state) => ({
    url: `https://www.infoxication.net/wp-json/wp/v2/posts?categories=${id}`,
    opts: {
      Accept: 'application/json',
      ContentType: 'application/json',
    },
  }),
};
