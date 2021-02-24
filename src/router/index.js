import Vue from "vue";
import VueRouter from "vue-router";
import store from '@/store'
import NotFound from '@/components/issues/views/NotFound.vue'
import NetworkIssue from '@/components/issues/views/NetworkIssue.vue'
import NProgress from 'nprogress'
import EditSurvey from '@/components/surveys/views/EditSurvey.vue'
import UserSpace from '@/components/surveys/views/UserSpace.vue'
import NewSurvey from '@/components/surveys/views/NewSurvey.vue';

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
    path: "/editsurvey/:id",
    name: "edit-survey",
    component: EditSurvey,
    props: true, 
    beforeEnter(routeTo, routeFrom, next) {
        store
            .dispatch('survey/fetchSurvey', routeTo.params.id)
            .then(survey => {
                routeTo.params.survey = survey
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
  },
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
