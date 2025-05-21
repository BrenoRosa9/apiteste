import { Request, Response } from "express"
import { CreateCustomerService } from '../services/CreateCustomerService'

export class CreateCustomerController{
    async handle(req: Request, res: Response){
        const { name, email} = req.body as { name: string, email: string};
        
        const customerService = new CreateCustomerService()
        const customer = await customerService.execute(name, email);

        res.status(201).json(customer);
    }
}