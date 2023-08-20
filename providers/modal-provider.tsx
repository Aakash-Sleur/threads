'use client'

import { useEffect, useState } from "react";

import AlertModal from "@/components/modals/alert-modal";
import ShareModal from "@/components/modals/share-modal";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <>
            <AlertModal />
            <ShareModal />
        </>
    );
}

export default ModalProvider;