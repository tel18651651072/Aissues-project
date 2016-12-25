import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import home from './components/home/home.vue';
import frontend from './components/frontend/frontend.vue';
import android from './components/android/android.vue';
import mobile from './components/mobile/mobile.vue';
import operation from './components/operation/operation.vue';
import more from './components/more/more.vue';
import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

let app = Vue.extend(App);

let router = new VueRouter({
	linkActiveClass:'active'
});
router.map({
	'/home':{
		component:home
	},
	'/frontend':{
		component:frontend
	},
	'/android':{
		component:android
	},
	'/mobile':{
		component:mobile
	},
	'/operation':{
		component:operation
	},
	'/more':{
		component:more
	}
})
router.start(app, '#app');
