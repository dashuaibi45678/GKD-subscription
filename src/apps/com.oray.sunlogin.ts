import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oray.sunlogin',
  name: '向日葵远程控制',
  groups: [
    {
      name: '开屏广告',
      key: 0,
      quickFind: true,
      actionMaximum: 1,
      order: -12,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[name="android.view.View"][visibleToUser=true][width=110][height=110]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/15492782'],
        },
      ],
    },
  ],
});
