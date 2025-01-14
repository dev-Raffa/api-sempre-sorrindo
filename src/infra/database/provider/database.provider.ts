import 'dotenv/config';

import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BlogEntity } from '../../../app/contexts/blog/entity/blog.entity';

export const databaseProvider: Provider[] = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [BlogEntity],
        synchronize: false
      });

      return dataSource.initialize();
    }
  }
];
