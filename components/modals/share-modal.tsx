'use client'

import toast from "react-hot-toast";
import { useEffect, useState } from "react";

import { Copy, Link } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import useShareModal from "@/hooks/useShareModal";

const ShareModal = () => {

    const [isMounted, setIsMounted] = useState(false)
    const { onClose, isOpen, link } = useShareModal()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    const onCopy = () => {
        navigator.clipboard.writeText(link);
        toast.success("Color Id copied to clipboard")
    }

    return (
        <Modal
            title="Share"
            description='Share through the below link'
            isOpen={isOpen}
            onClose={onClose}
        >

            <section className="flex gap-2">
                <Link size={32} className="hidden md:block" />
                <p className="border border-slate-900 text-small-medium p-2 rounded-md overflow-hodden w-full min-h-10">
                    {
                        link.length > 30
                            ? link.slice(0, 40) + "..."
                            : link
                    }
                </p>
                <Button variant={"outline"} onClick={onCopy}>
                    <Copy size={15} />
                </Button>
            </section>

        </Modal>
    );
}

export default ShareModal;