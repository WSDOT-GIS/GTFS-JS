require(["../transitfeeds/TransitFeedsClient"], function (TransitFeedsClient) {

    function objectToDl(o) {
        var value, outputList, childList, dt, dd, a;
        outputList = document.createElement("dl");
        for (var name in o) {
            value = o[name];
            dt = document.createElement("dt");
            dt.textContent = name;
            outputList.appendChild(dt);
            dd = document.createElement("dd");
            if (value === null) {
                dd.innerHTML = "<span class='null'></span>";
            } else if (typeof value === "object" && !(value instanceof Date)) {
                childList = objectToDl(value);
                dd.appendChild(childList);
            } else if (typeof value === "string" && /^https?\:/.test(value)){
                a = document.createElement("a");
                a.textContent = value;
                a.href = value;
                dd.appendChild(a);
            } else {
                dd.textContent = value;
            }
            outputList.appendChild(dd);
        }
        return outputList;
    }

    var client = new TransitFeedsClient("6c809941-f9d9-456e-9215-7feb4590f3cb", "../proxy.ashx");
    client.getFeeds(65, true, null, 100).then(function (response) {
        console.debug("response", response);
        var progress = document.querySelector("progress");
        progress.parentElement.removeChild(progress);
        var list = objectToDl(response);
        document.body.appendChild(list);
    });
});