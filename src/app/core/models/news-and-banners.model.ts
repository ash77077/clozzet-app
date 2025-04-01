export interface ITabs {
    id?: number;
    text: string;
    code: string;
}

export interface INews {
    id?: number;
    newsItem: INewsItem[];
    priority?: number;
    expiration?: Date;
}

export interface IViewNews {
    id?: number;
    priority?: number;
    expiration?: Date;
    text: string;
}

export interface IBanners {
    id?: number;
    image?: string;
    bannerDetails?: IBannerDetails[];
    priority?: number;
    expiration?: Date;
    bannerId?: number;
}

export interface IBannerList {
    id?: number;
    bannerId: number;
    language: string;
    text: string;
    image: string;
    priority?: number;
    expiration?: Date;
}

export interface INewsItem {
    newsId: number;
    language: string;
    text: string;
    expiration: Date;
    id: number;
}

export interface IBannerDetails {
    id: number;
    bannerId: number;
    language: string;
    text: string;
    image: string;
    linkUrl: string;
}
