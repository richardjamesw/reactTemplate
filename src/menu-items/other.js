// assets
import { IconBrandChrome, IconSettings, IconAffiliate } from '@tabler/icons-react';

// ==============================|| Settings & External Links ||============================== //

const other = {
  id: 'settings-links-roadmap',
  type: 'group',
  children: [
    {
      id: 'integrations',
      title: 'Integrations',
      type: 'item',
      url: '/integrations',
      icon: IconAffiliate,
      breadcrumbs: false
    },
    {
      id: 'settings-page',
      title: 'Settings',
      type: 'item',
      url: '/settings-page',
      icon: IconSettings,
      breadcrumbs: false
    },
    {
      id: 'extension-link',
      title: 'Browser Extension',
      type: 'item',
      url: 'https://chromewebstore.google.com',
      icon: IconBrandChrome,
      external: true,
      target: true
    }
  ]
};

export default other;
