import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react"

// 定义上下文类型
type CollectionsContextType = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

export const CollectionsContext = createContext<CollectionsContextType>({
    activeTab: 'collections',
    setActiveTab: (tab: string) => {
       console.log(tab, '=tab')
    }
})

export const CollectionProvider = ({ children }: {children: React.ReactNode}) => {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState('')

    useEffect(() => {
        const initTab = window.location.hash.slice(1)
        setActiveTab(initTab ?? 'trending')
        !initTab && router.push('#trending')
    }, [])

    return (
        <CollectionsContext.Provider value={{activeTab, setActiveTab}}>
            {children}
        </CollectionsContext.Provider>
    )
}