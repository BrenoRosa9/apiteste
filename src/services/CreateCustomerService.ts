import type { Customer } from "@prisma/client";
import { CustomerRepository } from "../repositories/customer-repository";

class CreateCustomerService {

  async execute(name: string, email: string): Promise<Customer> {
    const repository = new CustomerRepository();
    return repository.create(name, email);
  }
}

export { CreateCustomerService }