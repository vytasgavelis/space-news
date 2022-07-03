import type {Article} from "@/types/Article";

export class NewsClient {
    baseUrl: string

    constructor() {
        this.baseUrl = 'https://api.spaceflightnewsapi.net'
    }

    async getArticle(id: number): Promise<Article> {
        const res = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
        // Not sure if I should add type of ARticle here
        // Since data can be anything
        const data: Article = await res.json()
        return {
            id: data.id,
            title: data.title,
            url: data.url,
            imageUrl: data.imageUrl,
            summary: data.summary,
            publishedAt: data.publishedAt,
            updatedAt: data.updatedAt,
        }
    }

}