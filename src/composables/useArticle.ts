import {NewsClient} from "@/client/NewsClient";

export async function useArticle(id: number) {
    const client = new NewsClient()

    return await client.getArticle(id)
}