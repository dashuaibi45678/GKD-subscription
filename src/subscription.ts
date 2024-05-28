import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 555,
  name: '大帅比45678的GKD订阅',
  version: 1.0,
  author: '大帅比45678',
  checkUpdateUrl: './dashuaibi45678_gkd.version.json5',
  supportUri: 'https://github.com/dashuaibi45678/GKD-subscription/issues',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
