export interface IReportTab {
    id: number;
    name: IReportTabName[];
    group: string;
    useOTP: boolean;
    deleted: boolean;
}

export interface IReportTabName {
    id: number;
    reportId: number;
    language: string;
    name: string;
}
