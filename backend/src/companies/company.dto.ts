export class CompanyDto {
    name: string
    currency: string
    exchange: string

    constructor(name: string, currency: string, exchange: string) {
        this.name = name
        this.currency = currency
        this.exchange = exchange
    }

}