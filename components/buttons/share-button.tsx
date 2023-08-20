'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

import { useOrigin } from "@/hooks/use-origin";
import useShareModal from "@/hooks/useShareModal";

const ShareButton = ({ id }: { id: string }) => {
    const origin = useOrigin()
    const link = `${origin}/thread/${id}`
    const { onOpen, updateModalData } = useShareModal()

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return
    }

    const handleClick = () => {
        updateModalData({ link: link })
        onOpen();
    }
    return (
        <div onClick={handleClick}>
            <Image
                src={'/assets/share.svg'}
                height={24}
                width={24}
                alt="share"
                className="object-contain"
            />
        </div>
    );
}

export default ShareButton;