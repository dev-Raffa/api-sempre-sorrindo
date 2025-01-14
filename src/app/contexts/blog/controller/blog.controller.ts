import { Controller, Get, Param } from '@nestjs/common';
import { IBlog } from '../model/blog.model';
import { BlogService } from '../service/blog.service';
import { SimpleController } from '../../../../utils/builders/controller/simple.controller';

@Controller('blog')
export class BlogController extends SimpleController<IBlog, BlogService> {
  @Get('title/:title')
  async getOneByTitle(@Param('title') title: string) {
    return this.service.getOneByTitle(title);
  }
}
