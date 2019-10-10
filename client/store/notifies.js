/* helper */
function notificationTitle(title = 'Thông báo mới'){
  let originTitle = document.title
  let notifyTitleInterval = setInterval(() => {
    document.title = title
    setTimeout(() => {
      document.title = originTitle
    }, 1000)
  }, 2000)
  setTimeout(() => {
    window.addEventListener('click', function(){
      document.title = originTitle
      clearInterval(notifyTitleInterval);
    });
  }, 1000)
}
export const state = () => {
  return {
    email: [
      {
        name: 'Thông báo 1 ',
        img: 'https://cdn.vuetifyjs.com/images/john.jpg',
        msg: 'Founder of Vuetify.js'
      },
      {
        name: 'John Leider',
        img: 'https://cdn.vuetifyjs.com/images/john.jpg',
        msg: 'Founder of Vuetify.js'
      },
      {
        name: 'John Leider',
        img: 'https://cdn.vuetifyjs.com/images/john.jpg',
        msg: 'Founder of Vuetify.js'
      },
      {
        name: 'John Leider',
        img: 'https://cdn.vuetifyjs.com/images/john.jpg',
        msg: 'Founder of Vuetify.js'
      }
    ]
  }
}

export const getters = {
  email: state => state.email
}

export const mutations = {
  SET_EMAIL( state, data ){
    notificationTitle();
    state.email = data
  }
}

export const actions = {

}