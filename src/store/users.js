const state = {
    users: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Welch', last_name: 'Carney' }
    ]
}

const actions = {
    addUserAction({ commit }, user) {
        commit('addUser', user)
    },

    removeUserAction({ commit }, user) {
        commit('removeUser', user)
    }
}

const mutations = {
    addUser(state, user) {
        state.users.push(user)
    },

    removeUser(state, user) {
        state.users = state.users.filter(it => it.first_name !== user.first_name && it.last_name !== user.last_name)
    }
}

export default {
    state,
    actions,
    mutations
}