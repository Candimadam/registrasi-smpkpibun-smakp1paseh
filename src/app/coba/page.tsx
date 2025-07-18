import { prisma } from "@/lib/prisma";

export default async function CobaPage() {
    const users = await prisma.user.findMany({
        include: {
            posts: true
        }
    })
    return (
        <div>
            {users.map((user, index) => (
                <div key={user.id}>
                    <h1>user ke-{index + 1}</h1>
                    <h2>{user.name}</h2>
                    <p>{user.posts[0].content}</p>
                </div>
            ))}
        </div>
    );
}