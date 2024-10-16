import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { WhiteboardModule } from './whiteboard/whiteboard.module';
import { WebSocketModule } from './websocket/websocket.module';

@Module({
  imports: [AuthModule, WhiteboardModule, WebSocketModule],
})
export class AppModule {}
