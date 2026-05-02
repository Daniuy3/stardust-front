import { getUserById } from "../api";

export default async function Page({
    params
}: {
    params: Promise<{ id: number }>;
}) {
    const { id } = await params;

    const response = await getUserById(id);
    
    return (
        <div>

        </div>
    );
}