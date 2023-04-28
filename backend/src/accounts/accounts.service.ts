import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AccountsService {
  constructor(private readonly db: PrismaService) {}

  create(createAccountDto: CreateAccountDto) {
    return this.db.account.create({
      data: createAccountDto,
    });
  }

  async findAll() {
    return this.db.account.findMany();
  }

  async findOne(id: string) {
    return this.db.account.findUnique({
      where: { id },
    });
  }

  update(id: string, updateAccountDto: UpdateAccountDto) {
    return this.db.account.update({
      where: { id },
      data: updateAccountDto,
    });
  }

  remove(id: string) {
    return this.db.account.delete({
      where: { id },
    });
  }
}
