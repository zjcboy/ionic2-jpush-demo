-# ionic2-jpush-demo
 -# 基于IONIC2极光推送示例
 +This is a starter template for [Ionic 2](http://ionicframework.com/docs/v2/) projects.
  
 +## How to use this template
  
 -## DEMO运行步骤
 +*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/driftyco/ionic2-app-base).
  
 -1. npm install
 -2. ionic serve
 +To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/driftyco/ionic2-app-base).
  
 +### With the Ionic CLI:
  
 -## 集成步骤   [详情](https://github.com/jpush/jpush-phonegap-plugin)
 +Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:
  
 -通过 Cordova Plugins 安装，要求 Cordova CLI 5.0+：
 +```bash
 +$ sudo npm install -g ionic cordova
 +$ ionic start myTabs tabs --v2
 +```
  
 -cordova plugin add jpush-phonegap-plugin --variable API_KEY=your_jpush_appkey
 -或者直接通过 url 安装：
 +Then, to run it, cd into `myTabs` and run:
  
 -cordova plugin add https://github.com/jpush/jpush-phonegap-plugin.git --variable API_KEY=your_jpush_appkey  
 -或下载到本地安装：
 +```bash
 +$ ionic platform add ios
 +$ ionic run ios
 +```
  
 -cordova plugin add Your_Plugin_Path  --variable API_KEY=your_jpush_appkey
 +Substitute ios for android if not on a Mac.
  
 -
 -## 实现方式
 -
 -在[ionic-native](https://github.com/driftyco/ionic-native)的基础上新增了JPUSH的调用方法
 -
 -目前只实现了公共API部分 详情[公共 API]( https://github.com/jpush/jpush-phonegap-plugin/blob/master/doc/Common_detail_api.md)。
 -
 -## 调用方式
 -
 -import { JPush } from 'ionic-native';
 -
 -JPush.init().then(res => { alert(res) });
 -
 -JPush.stopPush().then(res => { alert(res) });
 -
 -JPush.isPushStopped().then(res => { alert(res) });
 -
 -JPush.getRegistrationID().then(res => { alert(res) });
 -
 -JPush.resumePush().then(res => { alert(res) });
 -
 -JPush.resumePush().then(res => { alert(res) });
 -
 -JPush.setAlias(alias).then(res => { alert(res) });
 -
 -JPush.setTags(tags).then(res => { alert(res) });
 -
 -JPush.setTagsWithAlias(tags,alias).then(res => { alert(res) });
 -
 -JPush.getUserNotificationSettings().then(res => { alert(res) });