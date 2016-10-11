import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { JPush } from 'ionic-native';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

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

    jpushSetAlias() {
        let prompt = this.alertCtrl.create({
            title: '设置别名',
            inputs: [
                {
                    name: 'alias',
                    placeholder: '请输入别名'
                },
            ],
            buttons: [
                {
                    text: '取消',
                },
                {
                    text: '确认',
                    handler: data => {
                        // 设置别名
                        JPush.setAlias(data.alias).then(res => { 
                            alert("别名设置成功:" + res) 
                        });
                    }
                }
            ]
        });
        prompt.present();
    }

}
