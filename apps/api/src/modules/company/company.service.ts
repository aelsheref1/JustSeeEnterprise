import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { CreateCompanyDto } from './dto/create-company.dto'
import { UpdateCompanyDto } from './dto/update-company.dto'

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCompanyDto: CreateCompanyDto) {
    return this.prisma.company.create({
      data: createCompanyDto,
    })
  }

  findAll() {
    return this.prisma.company.findMany({
      include: {
        branches: true,
      },
    })
  }

  findOne(id: string) {
    return this.prisma.company.findUnique({
      where: { id },
      include: {
        branches: true,
      },
    })
  }

  update(id: string, updateCompanyDto: UpdateCompanyDto) {
    return this.prisma.company.update({
      where: { id },
      data: updateCompanyDto,
    })
  }

  remove(id: string) {
    return this.prisma.company.delete({
      where: { id },
    })
  }
}