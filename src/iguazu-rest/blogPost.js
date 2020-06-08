export default {
  fetch: ({ postSlug }, action, state) => ({
    url: `https://www.infoxication.net/wp-json/wp/v2/posts/?slug=${postSlug}`,
    opts: {
      Accept: 'application/json',
      ContentType: 'application/json',
    },
  }),
};
