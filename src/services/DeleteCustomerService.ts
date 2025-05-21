import type { Customer } from "@prisma/client";
import { CustomerRepository } from "../repositories/customer-repository";

interface DeleteCustomerProps{
    id: string;
}

class DeleteCustomerService {
  async execute(id: string): Promise<void> {
    const repository = new CustomerRepository();
    return repository.delete(id);
  }
}
export { DeleteCustomerService }