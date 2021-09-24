export class Ingredient {
    quantity: number;
    unit: string;
    item: string;

    constructor() {
        this.quantity = 0;
        this.unit = 'kg';
        this.item = 'NOT_ASSIGNED';
    }
}
