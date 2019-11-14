export class Time {
    constructor() {

    }

    //get current date.
    static today(flag: string) {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let join = flag ? flag : '';
        return '' + year + join + month + join + day;
    }

    static getTime(flag: number | string) {
        let t = new Date();
        if (typeof (flag) == 'number') {
            t.setTime(t.getTime() + (flag * 24 * 60 * 60 * 1000));
            return t;
        } else if (typeof (flag) == 'string') {
            switch (flag) {
                case 'year':
                    return t.getFullYear();
                // break;
                case 'month':
                    return (t.getMonth() + 1) < 10 ? '0' + (t.getMonth() + 1) : (t.getMonth() + 1);
                // break;
                case 'day':
                    return (t.getDate()) < 10 ? '0' + (t.getDate()) : (t.getDate());
                // break;
                case 'inweek':
                    return t.getDay();
                // break;
                case 'hour':
                    return t.getHours();
                // break;
                case 'minute':
                    return t.getMinutes();
                // break;
                case 'second':
                    return t.getSeconds();
                // break;
                case 'millisecond':
                    return t.getMilliseconds();
                // break;
                default:
                    return t;
                // break;
            }
        } else {
            return t;
        }
    }

    //******************************
    //将 Date 转化为指定格式的String
    //月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用1-2个占位符，
    //年(y)可以用1-4个占位符，毫秒(S)只能用1个占位符(是1-3位的数字)
    //例子：
    //timeFormat("yyyy-MM-dd hh:mm:ss.S") => 2006-07-02 08:09:04.423
    //timeFormat("yyyy-M-d h:m:s.S") => 2006-7-2 8:9:4.18
    //******************************
    static timeFormat(fmt: string, flag: number, timestamp: any) {
        let t
        if (timestamp instanceof Date) {
            t = timestamp
        } else {
            t = timestamp ? new Date(timestamp) : new Date();
        }
        if (typeof (flag) == 'number') {
            t.setTime(t.getTime() + (flag * 24 * 60 * 60 * 1000));
        }
        var o = {
            "M+": t.getMonth() + 1, //月份
            "d+": t.getDate(), //日
            "h+": t.getHours(), //小时
            "m+": t.getMinutes(), //分
            "s+": t.getSeconds(), //秒
            "q+": Math.floor((t.getMonth() + 3) / 3), //季度
            "S": t.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }
}