// web-app/app/routes/items.tsx
import {json, LoaderFunction} from '@remix-run/node';
import {getAllItems} from "db-client";
import {useLoaderData} from "@remix-run/react";

export const loader: LoaderFunction = async () => {
    try {
        const items = await getAllItems();
        return json({items});
    } catch (error) {
        console.error('Failed to load items', error);
        throw new Response('Failed to load items', {status: 500});
    }
};

export default function Items() {
    // クライアントサイドのコードで users を表示
    const {items} = useLoaderData<typeof loader>();
    console.log(items);
    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items && items.map((item: any) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}
