import { Module } from '@nestjs/common';
import { PixivBotService } from './pixiv-bot.service';
import { CoreModule } from '@/core/core.module';

@Module({
    imports: [CoreModule],
    providers: [PixivBotService],
    exports: [PixivBotService],
})
export class PixivBotModule {}