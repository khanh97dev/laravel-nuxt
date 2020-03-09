import { prefixAdmin } from '~/configs/prefix';
export default ({ store, redirect }) => {
  if (store.getters['auth/token']) {
    return redirect(prefixAdmin)
  }
}
