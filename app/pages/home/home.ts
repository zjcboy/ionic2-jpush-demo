import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JPush } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

    jpushInit() {
        JPush.init().then(res => { alert(res) });
    }

    jpushStop() {
        JPush.stopPush().then(res => { alert(res) });
    }

    jpushGetRegistrationID() {
        JPush.getRegistrationID().then(res => { alert(res) });
    }

    jpushResumePush() {
        JPush.resumePush().then(res => { alert(res) });
    }

    jpushStoped() {
        JPush.resumePush().then(res => { alert(res) });
    }

    jpushSetAlias(data) {
        JPush.setAlias(data).then(res => { alert(res) });
    }

}
