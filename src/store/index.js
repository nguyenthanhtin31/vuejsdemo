import Vue from 'vue'
import Vuex from 'vuex'

// Import modules
import auth from '@/store/modules/auth.js'
import todos from '@/store/modules/todos.js'

Vue.use(Vuex)

const storeData = {
	modules: {
		auth,
		todos
	}
}

const store = new Vuex.Store(storeData)

export default store
