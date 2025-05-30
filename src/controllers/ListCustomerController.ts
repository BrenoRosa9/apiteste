import { Request, Response } from "express"
import { ListCustomersService } from '../services/ListCustomerService'

export class ListCustomersController {
  async handle(req: Request, res: Response) {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;

        const listCustomerService = new ListCustomersService();
        const customers = await listCustomerService.execute(page, limit);

        return customers;
    }

}