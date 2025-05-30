import { Router } from 'express';
import { CreateCustomerController } from '../controllers/CreateCustomerController';
import { DeleteCustomerController } from '../controllers/DeleteCustomerController';
import { ListCustomersController } from '../controllers/ListCustomerController';
import { UpdateCustomerController } from '../controllers/UpdateCustomerController';

const customerRoutes = Router()
const createCustomerController = new CreateCustomerController();
const deleteCustomerController = new DeleteCustomerController();
const listCustomerController = new ListCustomersController();
const updateCustomerController = new UpdateCustomerController();

customerRoutes.get('/', async (_req, res) => {
  const response = await listCustomerController.handle(_req, res);
  res.status(200).json(response);
});

customerRoutes.post('/:id', async (_req, res) => {
    const response = await createCustomerController.handle(_req, res);
    res.status(200).json(response);
})

customerRoutes.delete('/:id', async (_req, res) => {
    const response = await deleteCustomerController.handle(_req, res);
    res.status(200).json(response);
})

customerRoutes.put('/:id', async (_req, res) => {
    const response = await updateCustomerController.handle(_req, res);
    res.status(200).json(response);
})

export default customerRoutes;