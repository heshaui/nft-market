import { useContext } from "react";
import { CollectionsContext } from "../hooks/useCollections";
import Collections from "./Collections";
export default function Main() {
    const { activeTab } = useContext(CollectionsContext)
    return (
        <Collections type={activeTab}></Collections>
    )
}