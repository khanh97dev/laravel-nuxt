import { prefixLogged } from '~/configs/prefix'
export default ({ store, redirect }) => {
  if (!store.getters['auth/check']) {
    return redirect(prefixLogged  + '/login')
  }
}
