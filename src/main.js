import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDNOfQVSUADPkdnDx9JG8t6XxEavk9e4uw',}
  })

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.use(VueApollo);
new Vue({
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
