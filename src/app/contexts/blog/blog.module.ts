import { Module } from '@nestjs/common';
import { BlogController } from './controller/blog.controller';
import { BlogService } from './service/blog.service';
import { registerProviders } from '../../../utils/helpers/register-providers/register-providers.helper';
import { BlogEntity } from './entity/blog.entity';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BlogController],
  providers: registerProviders(BlogEntity, BlogService)
})
export class BlogModule {}
