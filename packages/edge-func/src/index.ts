import { getAllItems } from 'db-client';

export async function handler(event: any) {
    try {
        const items = await getAllItems();
        console.log(items);
        return {
            statusCode: 200,
            body: JSON.stringify(items),
            headers: { "Content-Type": "application/json" }
        };
    } catch (error) {
        console.error('Error fetching items:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to fetch items" }),
            headers: { "Content-Type": "application/json" }
        };
    }
}

handler({})
