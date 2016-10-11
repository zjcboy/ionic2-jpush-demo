### ionic2-jpush-demo
## 基于IONIC2极光推送示例


## DEMO运行步骤
npm install
ionic serve
ionic platfom add android
ionic run android

## 集成步骤 详情

通过 Cordova Plugins 安装，要求 Cordova CLI 5.0+：

cordova plugin add jpush-phonegap-plugin --variable API_KEY=your_jpush_appkey 或者直接通过 url 安装：

cordova plugin add https://github.com/jpush/jpush-phonegap-plugin.git --variable API_KEY=your_jpush_appkey
或下载到本地安装：

cordova plugin add Your_Plugin_Path --variable API_KEY=your_jpush_appkey

## 实现方式

在[ionic-native](https://github.com/driftyco/ionic-native)的基础上新增了JPUSH的调用方法

目前只实现了公共API部分 详情[公共 API](https://github.com/jpush/jpush-phonegap-plugin/blob/master/doc/Common_detail_api.md)。

## 调用方式

import { JPush } from 'ionic-native';

JPush.init().then(res => { alert(res) });

JPush.stopPush().then(res => { alert(res) });

JPush.isPushStopped().then(res => { alert(res) });

JPush.getRegistrationID().then(res => { alert(res) });

JPush.resumePush().then(res => { alert(res) });

JPush.setAlias(alias).then(res => { alert(res) });

JPush.setTags(tags).then(res => { alert(res) });

JPush.setTagsWithAlias(tags,alias).then(res => { alert(res) });

JPush.getUserNotificationSettings().then(res => { alert(res) });

[查看更多>>](http://zjcboy.com/2016/10/09/ionic2-jpush-demo)



### 欢迎大家加入Ionic2.0 交流群 513752928