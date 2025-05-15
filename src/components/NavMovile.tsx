import { useLocation } from "react-router-dom";
import type { category, link } from "../types"
import { Fragment } from "react/jsx-runtime";
import { useId, type Dispatch } from "react";


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

type NavMovileProps = {
    mobileOpen: boolean,
    setMobileOpen: Dispatch<React.SetStateAction<boolean>>
}

export default function NavMovile({mobileOpen, setMobileOpen} : NavMovileProps) {

    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <div className={mobileOpen ? "absolute top-0 left-0 flex lg:hidden w-screen h-screen z-50 overflow-y-auto" : "hidden"}>
            <nav className="w-64 h-screen bg-white flex flex-col">
                <a href="#" className="mx-auto">
                    <img src="./Logo.png" alt="logo" className="pt-2 pb-6 w-[180px]" />
                </a>

                {
                    categories.map(category => {
                        const linksCategory = links.filter(link => link.category.title === category.title)
                        linksCategory.sort((a, b) => a.priority - b.priority)
                        return (
                            <ul className="w-full text-[16px] text-[#414042] border-b-2 border-black/12 last:border-b-0 flex flex-col" key={useId()}>
                                {linksCategory.map(link => (
                                    <li key={useId()} className={isActive(link.slug) ? "bg-[rgba(25,118,210,0.08)] h-[48px] flex items-center" : "h-[48px] flex items-center"}>
                                        <a href={link.slug} className="pl-8 gap-3 flex items-center">
                                            <i className={link.icon} />
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )
                    })
                }
            </nav>
            <div className="flex-1 h-screen bg-black opacity-80" onClick={()=>{ setMobileOpen(false)}}>

            </div>
        </div>
    )
}
