import { Module } from '@nestjs/common';
import { WhiteboardGateway } from './whiteboard.gateway';
import { WhiteboardController } from './whiteboard.controller';
import { WhiteboardService } from './whiteboard.service';

@Module({
  providers: [WhiteboardGateway, WhiteboardService],
  controllers: [WhiteboardController],
})
export class WhiteboardModule {}
