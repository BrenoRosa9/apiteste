import type { Customer } from "@prisma/client";
import { CustomerRepository } from "../repositories/customer-repository";

interface UpdateCustomerProps{
    id: string;
    name: string;
    email: string;
}

class UpdateCustomerService {
  async execute(id: string, name: string, email: string): Promise<void> {
    const repository = new CustomerRepository();
    return repository.update(id, name, email);
  }
}
export { UpdateCustomerService }