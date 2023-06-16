

export class Atalho {
    component: any;
    keys!: string;
    description!: string;

    constructor(data: Partial<Atalho>) {
        Object.assign(this, data);
    }
}