import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

// utilities routing
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const IntegrationsPage = Loadable(lazy(() => import('views/other/IntegrationsPage')));
const SettingsPage = Loadable(lazy(() => import('views/other/SettingsPage')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'account',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'account',
      children: [
        {
          path: 'account-insights',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'account',
      children: [
        {
          path: 'account-tasks',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'integrations',
      element: <IntegrationsPage />
    },
    {
      path: 'settings-page',
      element: <SettingsPage />
    }
  ]
};

export default MainRoutes;
