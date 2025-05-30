import { prisma } from '../prisma/client';
import { Customer } from '@prisma/client';

export class CustomerRepository {
  async findAll(skip: number, take: number): Promise<Customer[]> {
    return prisma.customer.findMany({
      skip,
      take,
      orderBy: { created_at: 'desc' },
    });

  }

  async count(): Promise<number> {
    return prisma.customer.count();
  }

  async create(name: string, email: string): Promise<Customer> {
    return prisma.customer.create({ data: { name, email, status: true, created_at: new Date() } })
  }

  async delete(id: string): Promise<void> {
    await prisma.customer.delete({ where: { id } });
  }

  async update(id: string, name: string, email: string): Promise<void> {
    await prisma.customer.update({ where: { id }, data: { name, email, updated_at: new Date() } });
  }
}