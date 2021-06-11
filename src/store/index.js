import Vue from 'vue'
import Vuex from 'vuex'

import states from './states'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({ states, getters, mutations, actions })
