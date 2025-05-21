import { Request, Response } from "express"
import { ListCustomersService } from '../services/ListCustomerService'

export class ListCustomersController{
    async handle() {
        const listCustomerService = new ListCustomersService();

        const customers = await listCustomerService.execute();

        return customers;
    }

}