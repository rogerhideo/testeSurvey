import Vue from "vue";
import VueRouter from "vue-router";
//import store from '@/store'
import NotFound from '@/views/issues/NotFound.vue'
import NetworkIssue from '@/views/issues/NetworkIssue.vue'
import NProgress from 'nprogress'
import EditSurvey from '@/views/surveys/EditSurvey.vue'
import UserSpace from '@/views/surveys/UserSpace.vue'
import NewSurvey from '@/views/surveys/NewSurvey.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: UserSpace
  },
  {
    path: '/newsurvey',
    name: 'new-survey',
    component: NewSurvey
  },
  {
   path: "/editsurvey",
  name: "edit-survey",
  component: EditSurvey
  },
  //{
  //path: "/createuser",
  //name: "create-user",
  //  component: CreateUser
  //},
  /*{
    path: '/user/:id',
    name: 'user-show',
    component: UserShow,
    props: true, // Set params to props
    beforeEnter(routeTo, routeFrom, next) {
        store
            .dispatch('user/fetchUser', routeTo.params.id)
            .then(user => {
                routeTo.params.user = user // <--- Set the event we retrieved
                next()
            })
            .catch(error => {
                if (error.response && error.response.status == 404) {
                    next({
                        name: '404',
                        params: { resource: 'user' }
                    })
                } else {
                    next({ name: 'network-issue' })
                }
            })
    }
  },*/
  {
    path: '/404',
    name: '404',
    component: NotFound,
    props: true
},
{
    path: '/network-issue',
    name: 'network-issue',
    component: NetworkIssue
},
{
    // Here's the new catch all route
    path: '*',
    redirect: { name: '404', params: { resource: 'page' } }
}

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
export default router;
