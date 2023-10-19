import Form from "@/components/Form";
import Header from "@/components/Headers";
import PostFeed from "@/components/posts/PostFeed";

export default function Home() {
  return (
    <>
      <Header label="Home" />
      <Form placeholder="what's happenning?" />
      <PostFeed />
    </>
  );
}
