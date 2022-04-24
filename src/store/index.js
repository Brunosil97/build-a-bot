import { createStore } from 'vuex';
import RobotModule from './modules/robot';

export default createStore({
  modules: {
    robots: RobotModule,
  },
});
