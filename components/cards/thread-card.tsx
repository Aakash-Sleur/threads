import Link from "next/link";
import Image from 'next/image'

interface ThreadCardProps {
    id: string,
    currentUserId: string,
    parentId: string | null,
    content: string,
    author: {
        name: string;
        image: string;
        id: string;
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
    isComment
}: ThreadCardProps) => {
    return (
        <article className={`flex flex-col w-full rounded-xl p-7 ${isComment ? 'px-0 xs:px-7' : 'bg-dark-2'}`}>
            <div className="flex items-center justify-between">
                <div className="flex w-full flex-1 flex-row gap-4">
                    <div className="flex flex-col items-center">
                        <Link href={`profile/${author.id}`} className="relative h-11 w-11">
                            <Image
                                src={author.image}
                                alt="profile image"
                                fill
                                className="cursor-pointer rounded-full"
                            />
                        </Link>
                        <div className="thread-card_bar" />
                    </div>

                    <div className="flex w-full flex-col">
                        <Link href={`profile/${author.id}`} className="w-fit">
                            <h4 className="cursor-pointer text-base-semibold text-light-1">
                                {author.name}
                            </h4>
                        </Link>
                        <p className="mt-2 text-small-regular text-light-2">{content}</p>
                        <div className={`${isComment && "mt-10"} mt-2 flex flex-col gap-3`}>
                            <div className="flex gap-3.5">
                                <Image
                                    src={'/assets/heart-gray.svg'}
                                    height={28}
                                    width={28}
                                    alt="heart"
                                    className="cursor-pointer object-contain"
                                />
                                <Link href={`/thread/${id}`}>
                                    <Image
                                        src={'/assets/reply.svg'}
                                        height={28}
                                        width={28}
                                        alt="reply"
                                        className="cursor-pointer object-contain"
                                    />
                                </Link>

                                <Image
                                    src={'/assets/repost.svg'}
                                    height={28}
                                    width={28}
                                    alt="repost"
                                    className="cursor-pointer object-contain"
                                />

                                <Image
                                    src={'/assets/share.svg'}
                                    height={28}
                                    width={28}
                                    alt="share"
                                    className="cursor-pointer object-contain"
                                />
                            </div>
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
        </article>
    );
}

export default ThreadCard;


// Todo:
//  .Like
//  .repost
//  .share