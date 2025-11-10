import AddPost from "../components/AddPost";
import UserCard from "../components/UserCard";
import { usePosts } from "../custom-hooks/usePosts";

export const PostPage = () => {
    const postsHook = usePosts(); // 👈 single shared hook instance
    const { loading, post } = postsHook;

    if (loading) return <div className="text-2xl font-bold w-full h-screen flex justify-center items-center">Loading...</div>

    return <>
        <AddPost addPost={postsHook.addPost} loading={postsHook.loading} />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pt-8 justify-around items-center gap-8">
            {post.length && post.map((post, i) => 
                <UserCard 
                    deletePost={postsHook.deletePost} 
                    loading={postsHook.loading}
                    key={i} 
                    post={post} 
            />)}
        </div>
    </>
}