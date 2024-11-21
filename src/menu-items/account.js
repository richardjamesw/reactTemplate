// assets
import { IconDashboard, IconAnalyze, IconTallymarks } from '@tabler/icons-react';

// constant
const icons = {
  IconDashboard,
  IconAnalyze,
  IconTallymarks
};

// ==============================|| ACCOUNT MENU ITEMS ||============================== //

const account = {
  id: 'account',
  title: 'Account',
  type: 'group',
  children: [
    {
      id: 'account-dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'account-insights',
      title: 'Insights',
      type: 'item',
      url: '/account/account-insights',
      icon: icons.IconAnalyze,
      breadcrumbs: false
    },
    {
      id: 'account-tasks',
      title: 'Tasks',
      type: 'item',
      url: '/account/account-tasks',
      icon: icons.IconTallymarks,
      breadcrumbs: false
    }
  ]
};

export default account;
