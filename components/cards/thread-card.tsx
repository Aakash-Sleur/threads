
import Link from "next/link";
import Image from 'next/image'

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger
} from "@/components/ui/tooltip";
import ShareButton from "../buttons/share-button";
import DeleteButton from "@/components/buttons/delete-button";
import { formatDateString } from "@/lib/utils";
interface ThreadCardProps {
    id: string,
    currentUserId: string,
    parentId: string | null,
    content: string,
    author: {
        name: string;
        image: string;
        id: string;
        username: string;
    },
    community: {
        id: string;
        name: string;
        image: string
    } | null,
    createdAt: string,
    comments: {
        author: {
            image: string
        }
    }[],
    isComment?: boolean
}

const ThreadCard = ({
    id,
    currentUserId,
    parentId,
    content,
    author,
    community,
    createdAt,
    comments,
    isComment,

}: ThreadCardProps) => {

    const time = formatDateString(createdAt, "thread_header")

    return (
        <article className={`flex flex-col w-full rounded-xl p-7 ${isComment ? 'px-0 xs:px-7' : 'bg-dark-2'}`}>
            <div className="flex items-center justify-between">
                <div className="flex w-full flex-1 flex-row gap-4">
                    <div className="flex flex-col items-center">
                        <Link href={`profile/${author.id}`} className="relative h-11 w-11">
                            <Image
                                src={author.image}
                                alt={`Profile picture of ${author.name}`}
                                fill
                                className="cursor-pointer rounded-full"
                            />
                        </Link>
                        <div className="thread-card_bar" />
                    </div>

                    <div className="flex w-full flex-col">
                        <div className="flex items-center gap-x-3 w-fit">
                            <Link href={`profile/${author.id}`} className="flex items-center gap-x-3">
                                <h4 className="text-base-semibold text-light-1 hover:underline capitalize">
                                    {author.name}
                                </h4>
                                <p className="cursor-pointer text-gray-1 small-medium">
                                    @{author.username}
                                </p>
                            </Link>
                            <time dateTime={time} className="small-medium text-gray-1">
                                · {time}
                            </time>
                        </div>
                        <p className="mt-2 text-small-regular text-light-2">{content}</p>
                        <div className={`${isComment && "mt-10"} mt-2 flex flex-col gap-3`}>
                            <nav className="flex items-center gap-3.5">
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Image
                                            src={"/assets/heart-gray.svg"}
                                            height={28}
                                            width={28}
                                            alt="heart"
                                            className="cursor-pointer object-contain"
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom">Heart</TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Link href={`/thread/${id}`}>
                                            <Image
                                                src={'/assets/reply.svg'}
                                                height={28}
                                                width={28}
                                                alt="reply"
                                                className="cursor-pointer object-contain"
                                            />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom">
                                        Reply
                                    </TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                    <TooltipTrigger>
                                        <Image
                                            src={'/assets/repost.svg'}
                                            height={28}
                                            width={28}
                                            alt="repost"
                                            className="cursor-pointer object-contain"
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom">
                                        Repost
                                    </TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                    <TooltipTrigger>
                                        <ShareButton id={id.toString()} />
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom">
                                        Share
                                    </TooltipContent>
                                </Tooltip>

                                {
                                    currentUserId === author.id && (
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <DeleteButton id={id.toString()} />
                                            </TooltipTrigger>
                                            <TooltipContent side="bottom">
                                                Delete
                                            </TooltipContent>
                                        </Tooltip>
                                    )

                                }

                            </nav>
                            {isComment && comments.length > 0 && (
                                <Link href={`thread/${id}`}>
                                    <p className="mt-2 text-subtle-medium text-gray-1">
                                        {comments.length} replies
                                    </p>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {!isComment && comments.length > 0 && (
                <div className="ml-1 mt-3 flex items-center gap-2">
                    {
                        comments.slice(0, 2).map((comment, index) => (
                            <Image
                                key={index}
                                src={comment.author.image}
                                alt={`user_${index}`}
                                width={24}
                                height={24}
                                className={`${index !== 0 && "-ml-5"} rounded-full object-cover`}
                            />
                        ))
                    }
                    <Link href={`/thread/${id}`}>
                        <p className="mt-1 text-subtle-medium text-gray-1">
                            {comments.length} repl{comments.length > 1 ? "ies" : "y"}
                        </p>
                    </Link>
                </div>
            )}

            {!isComment && community && (
                <Link
                    href={`/communities/${community.id}`}
                    className="mt-5 flex items-center"
                >
                    <p className="text-subtle-medium text-gray-1">
                        {formatDateString(createdAt)}
                        {community && ` - ${community.name} Community`}
                    </p>
                    <Image
                        src={community.image}
                        alt={`Community profile picture of ${community.name}`}
                        width={14}
                        height={14}
                        className="ml-1 rounded-full object-cover"
                    />
                </Link>
            )}
        </article>
    );
}

export default ThreadCard;


// Todo:
//  .Like
//  .re post
//  .share