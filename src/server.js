import './config/env';

import app from './app';

app.listen(process.env.APP_PORT);
