(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}(function () { 'use strict';

    function hello(p) {
        console.log(p.name);
    }
    hello({ name: 'zhangkefei' });

}));
