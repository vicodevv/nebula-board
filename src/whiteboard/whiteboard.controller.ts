import { Controller, Get } from '@nestjs/common';
import { WhiteboardService } from './whiteboard.service';

@Controller('whiteboard')
export class WhiteboardController {
  constructor(private readonly whiteboardService: WhiteboardService) {}

  @Get('status')
  getStatus() {
    return this.whiteboardService.getStatus();
  }
}
