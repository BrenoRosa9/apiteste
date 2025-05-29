import { Request, Response } from "express"
import { UpdateCustomerService } from '../services/UpdateCustomerService'

export class UpdateCustomerController{
    async handle(req: Request, res: Response) {
        const { id } = req.params as { id: string }
        const { name, email} = req.body as { name: string, email: string};
        const customerService = new UpdateCustomerService;

        const updated = await customerService.execute(id, name, email)

        res.status(200).json(updated);
    }

}