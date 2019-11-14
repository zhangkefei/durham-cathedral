export class Cookie {
    constructor() {

    }

    static get(cname: string) {
        let aCookie = document.cookie.split(';');
        let oTmp = {};
        if (aCookie.length > 0) {
            aCookie.forEach((item) => {
                let aTmp = item.split('=');
                oTmp[aTmp[0].trim()] = aTmp[1];
            });
        } else {
            return '';
        }
        if (cname) {
            if (cname in oTmp) {
                return oTmp[cname];
            } else {
                return '';
            }
        } else {
            return oTmp;
        }
    }
    static set(cname: string, cvalue: any, exdays: number) {
        var d = new Date()
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
        var expires = "expires=" + d.toUTCString()
        document.cookie = cname + "=" + cvalue + "; " + expires
    }
    static remove(name: string) {
        var d = new Date()
        d.setTime(d.getTime() - 1)
        var expires = "expires=" + d.toUTCString()
        document.cookie = name + "='';" + expires + "; path = /"
    }
}