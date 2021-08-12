const state = {
    token: null
};

const getters = {
    isLoggedIn: state => !!state.token // short-hand for !== null
};

const actions = {
    logout: ({ commit }) => {
        commit('setToken', null);
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};