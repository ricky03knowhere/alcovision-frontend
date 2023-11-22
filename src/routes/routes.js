export const sidebarMenu = {
  label: 'Crypto Exchanger',
  children: [
    {
      name: 'Dashboard',
      icon: 'home',
      to: '/',
      active: true
    },
    {
      name: 'Bus List',
      icon: 'car-side',
      to: '/bus-list',
      active: false
    },
    {
      name: 'Live Camera',
      icon: 'camera',
      to: '/live-camera',
      active: false
    },
    {
      name: 'Report',
      icon: 'file-alt',
      to: '/dfsad',
      active: false
    },
    {
      name: 'Record History',
      icon: 'file',
      to: '/dfsad',
      active: false
    }
  ]
};
export default [
  sidebarMenu,
];
