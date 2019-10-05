import swal from 'sweetalert2'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export default ({ $axios, app, store, redirect }) => {
  if (process.server) {
    return;
  }

  // Request interceptor
  $axios.onRequest(config => {
    config.baseURL = process.env.apiUrl

    config.headers.common['Accept'] = 'Application/json'
    config.headers.common['Content-Type'] = 'Application/json'

    const token = store.getters['auth/token']

    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`
    }

    const locale = store.getters['lang/locale']
    if (locale) {
      config.headers.common['Accept-Language'] = locale
    }

    return config
  })

  // Response interceptor
  $axios.onResponse(response => response, (error) => {
    const { status } = error.response || {}

    if (status >= 500) {
      swal({
        type: 'error',
        title: app.i18n.t('error_alert_title'),
        text: app.i18n.t('error_alert_text'),
        reverseButtons: true,
        confirmButtonText: app.i18n.t('ok'),
        cancelButtonText: app.i18n.t('cancel')
      })
    }

    if (status === 401 && store.getters['auth/check']) {
      swal({
        type: 'warning',
        title: app.i18n.t('token_expired_alert_title'),
        text: app.i18n.t('token_expired_alert_text'),
        reverseButtons: true,
        confirmButtonText: app.i18n.t('ok'),
        cancelButtonText: app.i18n.t('cancel')
      }).then(() => {
        store.commit('auth/LOGOUT')

        redirect({ name: 'login' })
      })
    }

    return Promise.reject(error)
  })
}
