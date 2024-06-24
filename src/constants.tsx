import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <Icon icon="lucide:home" width="20" height="20" />
  },
  {
    title: 'Ubicaciones',
    path: '/locations',
    icon: <Icon icon="lucide:store" width="20" height="20" />
  },
  {
    title: 'Configuración',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="20" height="20" />,
    submenu: true,
    subMenuItems: [
      { title: 'Usuario', path: '/settings' },
      { title: 'Categorias', path: '/settings/categories' },
      { title: 'Productos', path: '/settings/products' },
    ],
  },
  {
    title: 'Ayuda',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="20" height="20" />
  },
];