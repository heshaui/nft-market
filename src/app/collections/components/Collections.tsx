'use client'
import CollectionsTable from "./CollectionsTab";
import collectionApi from "@/api/collections";
import { useEffect, useState } from "react";
import useGlobalState from "@/hooks/useGlobalState";
import { useAccount } from "wagmi";

const Collections = ({type}: {type: string}) => {
    const [collections, setCollections] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const { state, setState } = useGlobalState();
    const { address } = useAccount();

    useEffect(() => {
        if (address) {
          setState({ walletAddress: address as string });
        }
    }, [address]);

    async function fetchCollections() {
        setLoading(true);
         
        // if (type == "trending") {
        const res = await collectionApi.GetCollections({
            limit: 10,
            range: "1d",
        });
        // @ts-ignore
        setCollections(res?.result || []);
        setLoading(false);
    }

    useEffect(() => {
        fetchCollections();
    }, []);

    return (
        <div>
            <CollectionsTable collections={collections} loading={loading} />
        </div>
    )
}
export default Collections;