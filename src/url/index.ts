export class Url {
    constructor() {

    }

    //get current url params.
    static getUrlParam() {
        let paramArray = window.location.search.substr(1).split('&')
        let obj = {}
        for (var i = 0; i < paramArray.length; i++) {
            obj[paramArray[i].split('=')[0]] = paramArray[i].split('=')[1]
        }
        return obj
    }
}