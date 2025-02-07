export class CustomerModel {
    name: string;
    email: string;
    mobile: string;
    constructor(name: string, email: string, mobile: string) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
    }
}