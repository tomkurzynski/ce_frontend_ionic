import { Festival } from './festival';

export class News {
    id: string;
	title: string;
	dateCreated: string;
	lastUpdated: string;
	newsBody: string;
	festival: Festival;
}