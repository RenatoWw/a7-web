import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransacoesModule } from './transacoes/transacoes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://renatoflud2017_db_user:vsIFxXA4ZDR7OScR@cluster0.rowytz7.mongodb.net/',
    ),
    TransacoesModule,
  ],
})
export class AppModule {}