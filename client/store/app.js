export const state = () => {
  return {
    toast: {
      show: false,
      msg: '',
      color: ''
    }
  }
}

export const getters = {
  toast: state => state.toast
}

export const mutations = {
  toast( state, data ){
    state.toast = data
  }
}

export const actions = {

}