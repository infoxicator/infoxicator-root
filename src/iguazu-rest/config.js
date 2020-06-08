import { configureIguazuREST } from 'iguazu-rest';
import blogPosts from './blogPosts';
import blogPost from './blogPost';

const configureIguazuRest = () => {
  configureIguazuREST({
    getToState: (state) => state.getIn(['modules', 'infoxicator-root', 'resources']),
    resources: {
      posts: blogPosts,
      post: blogPost,
    },
    defaultOpts: {
      credentials: 'include',
    },
  });
};

configureIguazuRest();
