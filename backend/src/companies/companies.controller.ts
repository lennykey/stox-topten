import {Controller, Get} from '@nestjs/common'
import {CompaniesService} from './companies.service'
import {CompanyDto} from './company.dto'

@Controller('companies')
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService) {
    }

    @Get('top-ten')
    getTopTen(): Promise<Array<CompanyDto>> {
        return this.companiesService.getTopTen()
    }
}
