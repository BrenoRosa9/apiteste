import { Request, Response } from "express"
import { DeleteCustomerService } from '../services/DeleteCustomerService'

export class DeleteCustomerController{
    async handle(req: Request, res: Response) {
        const { id } = req.params as { id: string }
        const customerService = new DeleteCustomerService;

        const deleted = await customerService.execute(id)

        res.status(200).json(deleted);
    }

}