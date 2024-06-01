import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      key: 0,
      name: '分段广告-好友动态-广告 ×',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity'
      ],
      rules: [
        {
          key: 0,
          matches: [
            'View[desc="广告"][clickable=true] + @ImageView[desc="更多"][clickable=true]'
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12929620',//不可用，自己的没传上去
            'https://i.gkd.li/i/13387606'//不可用，自己的没传上去
          ]
        },
        {
          key: 1,
          preKeys: [
            0
          ],
          matches: [
            'ImageView + @TextView[text="关闭此条广告"]'
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12929619',//不可用，自己的没传上去
            'https://i.gkd.li/i/13387605'//不可用，自己的没传上去
          ]
        }
      ]
    },
    {
      key: 1,
      name: '分段广告-动态页-好友热播',
      key: 5,
      desc: '好友动态中的好友热播，自动选择“减少好友热播” - 默认关闭',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
        'com.tencent.mobileqq.activity.SplashActivity'
      ],
      rules: [
        {
          name: '点击 [好友热播] 卡片右上角菜单按钮',
          key: 0,
          matches: [
            '@Button[clickable=true] - [text="好友热播"]'
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12721427',
            'https://i.gkd.li/i/14822579'
          ]
        },
        {
          name: '点击[减少好友热播]',
          key: 1,
          preKeys: [
            0
          ],
          matches: [
            '@[clickable=true] >2 [text="减少好友热播"]'
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12721433',
            'https://i.gkd.li/i/14822576'
          ]
        }
      ]
    }
  ]
}
);
