import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'net.csdn.csdnplus',
  name: 'CSDN',
  groups: [
    {
      name: '开屏广告',
      key: 0,
      actionMaximum: 1,
      order: -12,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[text*="跳过"][text.length<=10]'],
          quickFind: true,
          snapshotUrls: ['https://i.gkd.li/i/12673680'],
        },
        {
          matches: [
            '@View <3 FrameLayout <2 FrameLayout < FrameLayout < [vid="fl_third_ad"]',
            //@View <n FrameLayout <n FrameLayout < FrameLayout <<n [vid="action_bar_root"]//这是另一种写法
            //[name="android.view.View"][visibleToUser=true][width=140][height=140]//也可以尝试寻找图形特征
            //@View <<n [vid="action_bar_root"]//甚至可以尝试这种写法
          ],
          quickFind: true,
          snapshotUrls: ['https://i.gkd.li/i/13826577'],
        },
        {
          matches: ['[id$="tt_splash_skip_btn"]'],
          snapshotUrls: ['https://i.gkd.li/i/13224627'],
        },
      ],
    },
  ],
});
