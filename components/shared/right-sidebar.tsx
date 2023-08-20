import { currentUser } from "@clerk/nextjs";

import UserCard from "@/components/cards/user-card";
import { fetchUsers } from "@/lib/actions/user.actions";
import { fetchCommunities } from "@/lib/actions/community.actions";

const RightSidebar = async () => {

    const user = await currentUser();
    if (!user) return null

    const suggestedUsers = await fetchUsers({
        userId: user.id,
        searchString: "",
        pageNumber: 1,
        pageSize: 4
    })

    const SuggestedCommunities = await fetchCommunities({
        searchString: "",
        pageNumber: 1,
        pageSize: 4
    })
    return (
        <section className="custom-scrollbar rightsidebar">
            <div className="flex flex-col flex-1 justify-start gap-5">
                <h3 className="text-heading4-medium text-light-1">Suggested Communities</h3>
                <div className="flex flex-col gap-9 w-[320px]">
                    {suggestedUsers.users.length === 0 ? (
                        <p className="no-result">No users</p>
                    ) : (
                        suggestedUsers.users.map((person) => (
                            <UserCard
                                key={person.id}
                                id={person.id}
                                name={person.name}
                                username={person.username}
                                imgUrl={person.image}
                                personType="User"
                            />
                        ))
                    )}
                </div>
            </div>
            <div className="flex flex-col flex-1 justify-start gap-5">
                <h3 className="text-heading4-medium text-light-1">Suggested Users</h3>
                <div className="flex flex-col gap-9 w-[320px]">
                    {SuggestedCommunities.communities.length === 0 ? (
                        <p className="no-result">No users</p>
                    ) : (
                        SuggestedCommunities.communities.map((community) => (
                            <UserCard
                                key={community.id}
                                id={community.id}
                                name={community.name}
                                username={community.username}
                                imgUrl={community.image}
                                personType="User"
                            />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}

export default RightSidebar;