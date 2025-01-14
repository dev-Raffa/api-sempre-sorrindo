import { Module } from '@nestjs/common';
import { BlogModule } from './contexts/blog/blog.module';

@Module({
  imports: [BlogModule]
})
export class AppModule {}
