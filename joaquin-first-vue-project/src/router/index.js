import { createRouter, createWebHashHistory } from 'vue-router';
import ToDoItemView from '../views/ToDoItemView.vue';
import HomeView from '../views/HomeView.vue';
import NewComponent from '../views/NewComponent.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/todo-item-view',
    name: 'todo-item-view',
    component: ToDoItemView,
  },
  {
    path: '/new-component-view',
    name: 'new-component-view',
    component: NewComponent,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
