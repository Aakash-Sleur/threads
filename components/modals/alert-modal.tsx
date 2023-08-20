'use client'

import toast from "react-hot-toast";
import { useEffect, useState } from "react";

import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import useAlertModal from "@/hooks/useAlertModal"
import { deleteThread } from "@/lib/actions/thread.actions";


const AlertModal = () => {

    const [isMounted, setIsMounted] = useState(false)
    const { id, pathName, onClose, isOpen } = useAlertModal()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    const onDelete = async () => {
        try {
            // set id and pathName to zustand
            await deleteThread(id, pathName)
            toast.success("Thread Deleted Successfully.")
            onClose()
        } catch (error: any) {
            onClose();
            toast.error("Error while deleting")
            console.log(error)
            throw new Error("Error deleting thread:", error)
        }
    }

    return (
        <Modal
            title="Are you sure?"
            description="This action cannot be undone."
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button variant={'outline'} onClick={onClose}>
                    Cancel
                </Button>

                <Button variant={'destructive'} onClick={onDelete}>
                    Continue
                </Button>
            </div>
        </Modal>
    );
}

export default AlertModal;