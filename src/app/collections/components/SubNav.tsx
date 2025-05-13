'use client'

import { TrendingUp, Star, Target, Grid } from 'lucide-react'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { CollectionsContext } from '../hooks/useCollections'

export function SubNav() {
    const router = useRouter()
    const { activeTab, setActiveTab } = useContext(CollectionsContext)
    const navs = [
        { name: 'COLLECTIONS', path: 'collections' },
        { name: '热门', path: 'trending' },
        { name: '收藏', path: 'favorites' },
        { name: '积分', path: 'points' }
    ]
    const handleTabClick = (tab: string) => {
        router.push(`#${tab}`)
        setActiveTab(tab)
    }
    return (
        <nav className="border-b border-gray-800 px-2 sm:px-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:space-x-8 py-2 text-sm">
                {
                    navs.map(nav => {
                        const active = activeTab === nav.path
                        return (
                            <a 
                                onClick={() => handleTabClick(nav.path)} 
                                className={`
                                    flex w-full sm:w-auto items-center space-x-2 p-2 sm:p-3
                                     text-gray-400 rounded-[8px] hover:text-white border-[1px] 
                                    ${active ? 'border-primary text-primary' : 'border-transparent'}
                                `}
                            >
                                <TrendingUp className="w-4 h-4" />
                                <span>{ nav.name }</span>
                            </a>
                        )
                    })
                }
            </div>
        </nav>
    )
}