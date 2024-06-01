import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      name: '开屏广告-微信小程序',
      key: 0,
      quickFind: true,
      order: -12,
      matchTime: 10000,
      activityIds: [
        'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
        'com.tencent.mm.plugin.appbrand.launching.AppBrandLaunchProxyUI',
      ],
      rules: [
        {
          matches: [
            '[text="广告"][visibleToUser=true]',
            '[text="跳过"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12785183',
            'https://i.gkd.li/i/13306883',
            'https://i.gkd.li/i/13407275',
            'https://i.gkd.li/i/15108441',
          ],
        },
      ],
    },
    {
      name: '分段广告-公众号文章内部-广告 ∨',
      key: 1,
      enable: false,
      quickFind: true,
      activityIds: [
        'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
      ],
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          position: {
            left: 'width*0.5',
            top: 'height*0.5',
          },
          matches: [
            '@View[visibleToUser=true] > TextView[text="广告"] + Image[text="feedback"] <<8 View',
          ],
          exampleUrls: [
            'https://m.gkd.li/55350790/1d60b7e4-6937-4b95-8b71-d7ab2b38adb9',
          ],
        },
        {
          key: 1,
          preKeys: [0],
          action: 'clickCenter',
          position: {
            left: 'width*0.5',
            top: 'height*0.5',
          },
          matches: ['@TextView[text="关闭此广告"] < View[childCount=3]'],
          exampleUrls: [
            'https://m.gkd.li/55350790/7ca6b000-3f1f-4604-a25c-04a9114a997e',
          ],
        },
      ],
    },
    {
      name: '分段广告-公众号文章底部-广告 ∨',
      key: 2,
      desc: '在quickFind和activityIds之间添加“actionMaximum: 5”可限制执行次数',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
        'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
      ],
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          position: {
            left: 'width*0.5',
            top: 'height*0.5',
          },
          matches: [
            '@View[visibleToUser=true] > TextView[text="广告"] + Image[text*="feedback"] <<8 View',
          ],
          exampleUrls: [
            'https://m.gkd.li/55350790/236466b7-102f-47e5-bd88-2d69b8903434',
          ],
        },
        {
          key: 1,
          preKeys: [0],
          action: 'clickCenter',
          position: {
            left: 'width*0.5',
            top: 'height*0.5',
          },
          matches: ['@TextView[text="不感兴趣"] < View[childCount=2]'],
          exampleUrls: [
            'https://m.gkd.li/55350790/2b249a65-c19e-40e0-82b4-7717f5f876f3',
          ],
        },
        {
          key: 2,
          preKeys: [1],
          action: 'clickCenter',
          position: {
            left: 'width*0.5',
            top: 'height*0.5',
          },
          matches: ['@TextView[text="与我无关"] < View[childCount=3]'],
          exampleUrls: [
            'https://m.gkd.li/55350790/7c990a80-2217-459a-8f0f-78766b969644',
          ],
        },
      ],
    },
  ],
});
