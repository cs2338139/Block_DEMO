import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core";
// import { createApolloProvider } from '@vue/apollo-components'
import { createApolloProvider } from "@vue/apollo-option";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "https://chanyuanan.com/graphql",
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

// import { createApp, h } from "vue";

// const app = createApp({
//   render: () => h(App),
// })

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

const app = createApp(App);
app.use(apolloProvider);
app.mount("#app");
