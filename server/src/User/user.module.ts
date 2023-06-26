import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user.entity'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { AuthModule } from 'src/auth/auth.module'

@Module({
	imports: [TypeOrmModule.forFeature([User]), 
        forwardRef(() => AuthModule)],
	controllers: [UserController],
	providers: [UserService],
	exports: [UserService],
})
export class UserModule {}
