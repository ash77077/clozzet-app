export interface IFinTransaction {
    id: number;
    sender: string;
    receiver: string;
    description: string;
    amount: number;
    time: Date;  
}
