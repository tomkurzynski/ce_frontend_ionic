import { Food } from './food';

export class Festival {
    id: string;
    name: string;
    eventDesc: string;
    dateFrom: string;
    dateTo: string;
    logoUrl: string;
    facebook: string;
    twitter: string;
    location: string;
    food: Food;
}
