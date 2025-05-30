import prismaClient from '../prisma';
import { CustomerRepository } from '../repositories/customer-repository';

export class ListCustomersService {
  private repo = new CustomerRepository();

  async execute(page: number, limit: number) {
    const skip = (page - 1) * limit;

    const [customers, total] = await Promise.all([
      this.repo.findAll(skip, limit),
      this.repo.count()
    ]);

    return {
      data: customers,
      total,
      page,
      lastPage: Math.ceil(total / limit)
    };
  }
}