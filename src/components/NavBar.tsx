import { useLocation } from "react-router-dom";
import type { category, link } from "../types";

export default function NavBar() {


  //vamos a emular que recibimos los links para construir el navbar. Tabién recibimos la categorias
  //las categories las recibiremos siempre ordenadas por priority (esto es importante por si queremos añador una categoria de por medio)
  const categories: category[] = [{ title: 'generic', priority: 0 }, { title: 'models', priority: 10 }, { title: 'account', subitle: 'Accounts', priority: 20 }, { title: 'settings', priority: 30 }]

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


  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;


  return (
    <nav className="w-64 lg:flex hidden min-h-screen flex-col sticky top-0 rounded-tr-[40px] rounded-br-[40px] bg-[#E3ECFF] items-center">
      <a href="#" className="mx-auto">
        <img src="./Logo.png" alt="logo" className="py-4 w-[180px]" />
      </a>

      {
        categories.map(category => {
          const linksCategory = links.filter(link => link.category.title === category.title)
          linksCategory.sort((a, b) => a.priority - b.priority)
          return (
            <>
              {category.subitle && (
                <div className="w-full">
                  <span className="text-xs text-[#414042] pb-3 ml-4">{category.subitle}</span>
                </div>
              )}
              <ul className="pl-8 w-full text-sm text-[#414042]">
                {linksCategory.map(link => (
                  <li className={isActive(link.slug) ? "bg-white rounded-l-[30px] p-1 text-white" : ""}>
                    <a href={link.slug} className={isActive(link.slug) ? " w-full flex items-center py-2 px-4  gap-3 my-[5px] rounded-l-[30px] bg-gradient-to-r from-[#5183f0] to-white" : " w-full flex items-center py-2 px-4  gap-3 my-[5px] rounded-l-[30px]"}>
                      <i className={link.icon} />
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
              <span className="line min-h-[1px] w-[80%] bg-gradient-to-r from-blue-600 to-transparent my-3 last:hidden" />
            </>
          )
        })
      }
    </nav>
  )
}