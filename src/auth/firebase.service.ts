import * as firebaseAdmin from 'firebase-admin';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FirebaseService {
  async verifyToken(token: string) {
    return firebaseAdmin.auth().verifyIdToken(token);
  }
}
