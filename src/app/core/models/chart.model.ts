export interface IChart {
    chartData: IChartData[];
}

export interface IChartData {
    name: string;
    dataSource: IDataSource[];
}

export interface IDataSource {
    x: string;
    y: number;
    tooltipMappingName: string;
    color?: string;
}
