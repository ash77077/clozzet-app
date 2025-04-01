export interface IProvider {
    id: number;
    name: string;
    description: string;
    code: number;
    logoUrl: string;
    priority: number;
    profitMargin: number;
    defaultDealerProfitMargin: number;
    defaultPOSProfitMargin: number;
    active: boolean;
}
