import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  private readonly prisma: PrismaClient
  constructor() {
    this.prisma = new PrismaClient()
  }

  async get() {
    return await this.prisma.user.findMany()
  }
}
