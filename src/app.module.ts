import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'bellaDonna',
      entities: [User],
      synchronize: true, //shouldn't be used in production-otherwise you can lose production data
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
