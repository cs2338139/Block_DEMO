import { createApp, provide, h } from "vue";
import "./style.css";
import App from "./App.vue";

import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core";
// import { createApolloProvider } from '@vue/apollo-components'
import { createApolloProvider } from "@vue/apollo-option";
import { VueWindowSizePlugin } from "vue-window-size/plugin";
import { DefaultApolloClient } from "@vue/apollo-composable";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  // uri: "https://wp.nmtl-ws.com/graphql",
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

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});
// const apolloProvider = createApolloProvider({
//   defaultClient: apolloClient,
// });

app.use(VueWindowSizePlugin);
// app.use(apolloProvider);
app.mount("#app");
