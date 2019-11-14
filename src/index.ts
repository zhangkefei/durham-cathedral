import { Check } from './check/index'
import { Url } from './url/index'
import { Time } from './time/index'
import { Event } from './event/index'
import { Cookie } from './cookie/index'
import { File } from './file/index'

export default {
    version: '0.0.1',
    check: Check,
    url: Url,
    time: Time,
    event: Event,
    cookie: Cookie,
    file: File,

    loadScript: function (url, idd = '', func = '') {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        if (idd != '') script.id = idd;
        document.head.appendChild(script);
        if (func != '') script.onload = func;
    },
    axios: {
        urlEncode: function (obj) {
            let str = '';
            if (Object.keys(obj).length) {
                for (let key in obj) {
                    str += key + '=' + encodeURIComponent(String(obj[key])) + '&';
                }
                str = str.slice(0, -1);
                return str;
            }
            return false;
        }
    },
    generateUUID: function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
        });
        return uuid;
    }
}
