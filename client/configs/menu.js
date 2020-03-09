import { prefixAdmin } from '~/configs/prefix';
export default [
  {
    icon: 'mdi-cog',
    title: 'dashboard',
    href: prefixAdmin + '/dashboard',
    active: true
  },
  {
    icon: 'mdi-cog',
    title: 'test',
    href: prefixAdmin + '/test',
    active: true
  },
  // {
  //   title: 'Attractions',
  //   children: [
  //     { title: 'List Item' },
  //   ],
  // },
]