import { useLocation } from 'react-router-dom';
import type { link } from '../types';

const links: link[] = [
    { title: 'Settings', icon: 'icon-settings', priority: 0, category: { title: 'settings', priority: 30 }, slug: '/settings' },
    { title: 'The Generator', icon: 'icon-generator', priority: 0, category: { title: 'models', priority: 30 }, slug: '/generator' },
    { title: 'The Predictor', icon: 'icon-predictor', priority: 10, category: { title: 'models', priority: 30 }, slug: '/predictor' },
    { title: 'Connections', icon: 'icon-connections', priority: 50, category: { title: 'generic', priority: 30 }, slug: '/connections' },
    { title: 'The Extender', icon: 'icon-extender', priority: 20, category: { title: 'models', priority: 30 }, slug: '/extender' },
    { title: 'API Keys', icon: 'icon-apikeys', priority: 0, category: { title: 'account', priority: 30 }, slug: '/apikeys' },
    { title: 'Playground', icon: 'icon-playground', priority: 0, category: { title: 'generic', priority: 30 }, slug: '/' },
    { title: 'Activity', icon: 'icon-activity', priority: 10, category: { title: 'generic', priority: 30 }, slug: '/activity' },
    { title: 'Invites', icon: 'icon-invites', priority: 10, category: { title: 'account', priority: 30 }, slug: '/invites' },
    { title: 'Projects', icon: 'icon-projects', priority: 20, category: { title: 'generic', priority: 30 }, slug: '/projects' },
    { title: 'Blueprints', icon: 'icon-blueprints', priority: 30, category: { title: 'generic', priority: 30 }, slug: '/blueprints' },
    { title: 'Workflows', icon: 'icon-workflows', priority: 40, category: { title: 'generic', priority: 30 }, slug: '/workflows' },
    { title: 'Usage', icon: 'icon-usage', priority: 20, category: { title: 'account', priority: 30 }, slug: '/usage' },
    { title: 'Billings', icon: 'icon-billings', priority: 30, category: { title: 'account', priority: 30 }, slug: '/billings' },
]

export const useActiveLink = () => {
  const location = useLocation();
  return links.find(link => link.slug === location.pathname);
};