/// <reference path="./typings/index.d.ts" />

import { parse } from 'query-string';

function getFileServerRelativeUrl(): JQueryPromise<any> {
    let deferred: JQueryDeferred<any> = $.Deferred();

    let parsed: any = parse(location.search);

    return deferred.promise();
}

new Vue({
    el: '#app'
});