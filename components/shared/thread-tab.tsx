import { redirect } from "next/navigation";

import ThreadCard from "@/components/cards/thread-card";
import { fetchUserPosts } from "@/lib/actions/user.actions";
import { fetchCommunityPosts } from "@/lib/actions/community.actions";

interface ThreadTabProps {
    currentUserId: string;
    accountId: string;
    accountType: string;
}

const ThreadTab = async ({
    currentUserId,
    accountId,
    accountType
}: ThreadTabProps) => {

    let result: any;

    if (accountType === "Community") {
        result = await fetchCommunityPosts(accountId)
    } else {
        result = await fetchUserPosts(accountId)
    }

    if (!result) redirect('/')

    return (
        <section className="mt-9 flex flex-col gap-10">
            {result.threads.map((thread: any) => (
                <ThreadCard
                    key={thread._id}
                    id={thread._id}
                    currentUserId={currentUserId}
                    parentId={thread.parentId}
                    content={thread.text}
                    author={accountType === "User" ?
                        {
                            name: result.name,
                            image: result.image,
                            id: result.id,
                            username: result.username
                        } : {
                            name: thread.author.name,
                            image: thread.author.image,
                            id: thread.author.id,
                            username: thread.author.username
                        }
                    }
                    community={thread.community}
                    createdAt={thread.createdAt}
                    comments={thread.children}
                />
            ))}
        </section>
    );
}

export default ThreadTab;