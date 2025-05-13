'use client'

import { NextPage } from "next"
import { CollectionProvider } from "./hooks/useCollections";
import { SubNav } from "./components/SubNav"
import Main from "./components/Main"

const Collections: NextPage = () => {
	return (
		<CollectionProvider>
			<div>
                <SubNav />
                <Main />
            </div>
		</CollectionProvider>
	)
}

export default Collections;