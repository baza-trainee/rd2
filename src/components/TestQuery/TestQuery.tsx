import { usePosts } from "api/hooks/usePosts";

export const TestQuery = () => {
  const { data, isError, isLoading } = usePosts();

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error fetching posts</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <h1>Posts</h1>
      {data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};
