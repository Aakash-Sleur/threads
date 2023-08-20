'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import useAlertModal from "@/hooks/useAlertModal";

const DeleteButton = ({ id }: { id: string }) => {

    const pathName = usePathname()
    const { onOpen, updateModalData } = useAlertModal()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return
    }

    const handleClick = () => {
        updateModalData({ id: id, pathName: pathName })
        onOpen();
    }

    return (
        <div onClick={handleClick}>
            <Image
                src={'/assets/delete-thread.svg'}
                height={24}
                width={24}
                alt="delete"
                className="object-contain"
            />
        </div>
    );
}

export default DeleteButton;