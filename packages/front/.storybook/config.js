
import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
import HelloWorld from '../src/stories/HelloWord/HelloWorld.vue';

// Install Vue plugins.
Vue.use(Vuex);

// Register custom components.
Vue.component('hello-world', HelloWorld);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories');
}

configure(loadStories, module);


