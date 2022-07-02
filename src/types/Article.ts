export interface Article {
    id: number,
    title: string,
    url: string,
    imageUrl: string,
    summary: string,
    publishedAt: string, //TODO change this to date
    updatedAt: string,
}