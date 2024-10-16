import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class AppWebSocketGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('offer')
  handleOffer(@MessageBody() data: any, client: Socket) {
    client.broadcast.emit('offer', data);
  }

  @SubscribeMessage('answer')
  handleAnswer(@MessageBody() data: any, client: Socket) {
    client.broadcast.emit('answer', data);
  }

  @SubscribeMessage('ice-candidate')
  handleIceCandidate(@MessageBody() data: any, client: Socket) {
    client.broadcast.emit('ice-candidate', data);
  }

  @SubscribeMessage('drawing')
  handleDrawing(@MessageBody() data: any, client: Socket) {
    this.server.emit('drawing', data);
  }
}
