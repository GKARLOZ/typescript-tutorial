// implementing HasFormatter will require this class to add a format() function cus it is part of the HasFomrmatter structure. 
export class payments {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} owed Euro ${this.amount} for ${this.details}`;
    }
}
