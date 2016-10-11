import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { JPush } from 'ionic-native';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      JPush.init().then(res => { alert(res) });  // 初始化

      document.addEventListener("jpush.openNotification", (event?: any) => {
        console.log("===============打开推送内容===============")
        alert(event.alert)
      }, false);

    });
  }
}
