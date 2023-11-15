import { auth } from "../auth";

export default async function Home() {
  const session = await auth();
  const username = session?.user?.name;
  return (
    <>
      <h1>Hello World!</h1>
      {username && <p>Hi, {username}</p>}
    </>
  );
}
