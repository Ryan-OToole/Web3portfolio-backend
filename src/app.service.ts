import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMetamaskKey(): string {
    console.log('env', process.env.METAMASK_PRIVATEKEY);
    return process.env.METAMASK_PRIVATEKEY;
  }
}
