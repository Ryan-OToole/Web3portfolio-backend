import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMetamaskKey(): string {
    console.log('env', METAMASK_PRIVATEKEY);
    return VERCEL_ENV.METAMASK_PRIVATEKEY;
  }
}
