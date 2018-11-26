// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { Row, Col, Button, Input, Avatar } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App';
import router from './router';
import Comments from './components/comments/comments';
import Video from './components/video/video';
import Headerlogo from './components/headerlogo/headerlogo';
import CommentEntry from './components/comments/commententry/commententry';


Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Input.name, Input);
Vue.component(Avatar.name, Avatar);

Vue.component(Headerlogo.name, Headerlogo);
Vue.component(Video.name, Video);
Vue.component(Comments.name, Comments);
Vue.component(CommentEntry.name, CommentEntry);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
