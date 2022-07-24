export interface INews {
    source: {
        readonly id: string;
        readonly name: string;
    };
    readonly author: string;
    readonly urlToImage: string;
    readonly description: string;
    readonly publishedAt: string;
    readonly content: string;
    readonly title: string;
    readonly url: string;
}

export interface ISource {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly url: string;
    readonly category: string;
    readonly language: string;
    readonly country: string;
}
