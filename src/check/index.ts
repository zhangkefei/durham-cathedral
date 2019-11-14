export class Check {
    constructor() {

    }

    static platform() {
        let u = navigator.userAgent;
        let u2 = navigator.userAgent.toLowerCase();
        return { //移动终端浏览器版本信息
            //IE内核
            trident: u.indexOf('Trident') > -1,
            //opera内核
            presto: u.indexOf('Presto') > -1,
            //苹果内核
            webKit: u.indexOf('AppleWebKit') > -1,
            //谷歌内核
            chrome: u.indexOf('Chrome') > -1,
            //火狐内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
            //是否为移动终端
            mobile: !!u.match(/AppleWebKit.*Mobile.*/),
            //ios终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            //android终端或uc浏览器
            android: u.indexOf('Android') > -1,
            linux: u.indexOf('Linux') > -1,
            //是否为iPhone
            iPhone: u.indexOf('iPhone') > -1,
            //是否iPad
            iPad: u.indexOf('iPad') > -1,
            webApp: u.indexOf('Safari') == -1,
            //是否web应该程序，没有头部与底部
            iosv: u.substr(u.indexOf('iPhone OS') + 9, 3),
            wechat: !!u2.match(/MicroMessenger/i),
            ali: u.indexOf('AliApp') > -1,
        };
    }

    static isChrome() {
        return this.platform().chrome
    }

    static isWechat() {
        return this.platform().wechat
    }

    static isIphone() {
        return this.platform().iPhone
    }

    static isIpad() {
        return this.platform().iPad
    }
}