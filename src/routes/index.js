import Vue from 'vue';
import Router from 'vue-router';
import Repository from '../components/Repository';
import List from '../components/List';
import ViewReadmeFile from '../components/ViewReadmeFile';
Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Repository },
    { path: '/username/:id', component: List },
    { path: '/projects/:name/:id', component: ViewReadmeFile }
  ],
});
