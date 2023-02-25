import 'dotenv/config';
import koa, { Context, Next } from 'koa';
import { koaBody } from 'koa-body';
import cors from '@koa/cors';

const app = new koa();

app.use(
  cors({
    origin: '*',
  })
);
app.use(koaBody());

app.use(async (ctx: Context) => {
  console.log('Server receive.');
  ctx.status = 200;
  ctx.body = {
    message: 'Client receive.',
  };
});

app.listen(process.env.PORT, () =>
  console.log('running in port ' + process.env.PORT)
);
