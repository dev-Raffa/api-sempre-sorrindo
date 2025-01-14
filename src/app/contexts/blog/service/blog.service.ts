import { Injectable } from '@nestjs/common';
import { SimpleService } from '../../../../utils/builders/service/simple.service';
import { IBlog } from '../model/blog.model';

@Injectable()
export class BlogService extends SimpleService<IBlog> {
  async getOneByTitle(title: string): Promise<IBlog> {
    return this.repository.findOneBy({ title: title });
  }
}
