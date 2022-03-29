/* eslint-disable no-unused-vars */
import { Express } from 'express';
import { bodyParser, urlEncoded, cors, ddos, helmet, fingerprint, apiRatelimit } from '../middlewares';
// import { noCache } from '../middlewares/noChache.middleware';
import nocache from 'nocache';

export default (app: Express): void => {
  app.use(fingerprint);
  app.use(bodyParser);
  app.use(urlEncoded);
  app.use(cors);
  app.use(ddos.express);
  app.use(apiRatelimit);
  app.use(helmet());
  app.use(nocache());
};
