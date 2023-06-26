import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { User } from './User/user.entity';
import { Offer } from './Offer/offer.entity';
import { OfferController } from './offer/offer.controller';
import { OfferService } from './offer/offer.service';
import { OfferModule } from './offer/offer.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'DevHire',
      entities: [User, Offer],
      synchronize: true,
    }),
    forwardRef(() => AuthModule),
    forwardRef(() => UserModule),
    forwardRef(() => OfferModule),
  ],
  controllers: [UserController, OfferController, AppController],
  providers: [UserService, OfferService, AuthService],
})
export class AppModule {}
