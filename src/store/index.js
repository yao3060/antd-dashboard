import { createStore } from 'vuex'

import settings from "./modules/settings"
import users from "./modules/users"

// Create a new store instance.
const store = createStore({
  modules: {
    settings,
    users
  }
})

export default store

// store.state.settings // -> `setting`'s state
// store.state.users // -> `users`'s state
