export const state = () => {
  return {
    sidebar: localStorage.getItem('sidebarOff') ? false : true,
  }
}

export const getters = {
  sidebar: state => state.sidebar
}

export const mutations = {
  SET_SIDEBAR(state, show){
    state.sidebar = show;
    state.sidebar
      ? localStorage.removeItem('sidebarOff')
      : localStorage.setItem('sidebarOff', 1)
  }
}

export const actions = {

}