import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import CommunityCard from "@/components/cards/community-card";
import Searchbar from "@/components/shared/search-bar";
import Pagination from "@/components/shared/pagination";
import { fetchUser } from "@/lib/actions/user.actions";
import { fetchCommunities } from "@/lib/actions/community.actions";

const Page = async ({ searchParams }: {
    searchParams: { [key: string]: string | undefined }
}) => {
    const user = await currentUser();
    if (!user) return null

    const userInfo = await fetchUser(user.id)
    if (!userInfo?.onboarded) redirect('/onboarding')

    const result = await fetchCommunities({
        searchString: searchParams?.q,
        pageNumber: 1,
        pageSize: 25
    })
    return (
        <section>
            <h1 className="head-text mb-10">Search</h1>

            <Searchbar routeType="communities" />

            <div className="mt-14 grid xs:grid-cols-2  gap-9">
                {result.communities.length === 0 ? (
                    <p className="no-result">No communities</p>
                ) : (
                    result.communities.map((community) => (
                        <CommunityCard
                            key={community.id}
                            id={community.id}
                            name={community.name}
                            username={community.username}
                            imgUrl={community.image}
                            bio={community.bio}
                            members={community.members}
                        />
                    ))
                )}
            </div>

            <Pagination
                path="communities"
                pageNumber={searchParams?.page ? +searchParams.page : 1}
                isNext={result.isNext}
            />
        </section>
    );
}

export default Page;