import { useRouter } from "next/router";

const PostDetails = ({ post }) => {
    
    const router = useRouter();

    const handleBack = () => {
        router.push("/posts")
    }

    return (
        <div className="card mx-10 my-10 bg-primary text-primary-content">
            <div className="card-body">
                <p>PostId:{post?.id}</p>
                <h2 className="card-title">Title: {post?.title}</h2>
                <p>Post: {post?.body}</p>
                
                <button onClick={handleBack} className="btn btn-primary">Back to post</button>
            </div>
        </div>
    );
};

export const getStaticProps = async (context) => {
    const {params} = context;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`);
    const data = await res.json();

    return {
        props: {
            post: data
        }
    }
}




export const getStaticPaths = async() => { 

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    const paths = posts.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })


    return {
        paths,
        fallback: false,
    }

}

export default PostDetails;