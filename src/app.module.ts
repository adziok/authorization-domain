import { AuthorizationModule } from './modules/authorization/authorization.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [AuthorizationModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
