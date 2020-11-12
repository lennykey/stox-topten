import {HttpService, Injectable} from '@nestjs/common'
import {CompanyDto} from './company.dto'

@Injectable()
export class CompaniesService {

    constructor(private readonly httpService: HttpService) {
    }

    getTopTen(): Promise<Array<CompanyDto>>  {
        return this.httpService
            .get('https://financialmodelingprep.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ&apikey=demo')
            .toPromise()
            .then(items => items.data.map(value => {
                    return new CompanyDto(value.name, value.currency, value.exchangeShortName)
                })
            )
    }
}
