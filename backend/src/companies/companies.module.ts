import {HttpModule, Module} from '@nestjs/common'
import {CompaniesController} from './companies.controller'
import {CompaniesService} from './companies.service'

@Module({
    imports: [HttpModule],
    controllers: [CompaniesController],
    providers: [CompaniesService]
})
export class CompaniesModule { }
