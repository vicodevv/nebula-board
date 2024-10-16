import { Injectable } from '@nestjs/common';

@Injectable()
export class WhiteboardService {
  getStatus() {
    return { status: 'Whiteboard service is running.' };
  }
}
