import { prisma } from '../prisma/client';
import { Customer } from '@prisma/client';

export class CustomerRepository {
  async findAll(): Promise<Customer[]> {
    return prisma.customer.findMany();
  }

  async create(name: string, email: string): Promise<Customer> {
    return prisma.customer.create({data:{ name, email, status:true, created_at:new Date() }})
  }

  async delete(id: string): Promise<void> {
    await prisma.customer.delete({ where: { id } });
  }
}