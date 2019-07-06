export default {

    buildUrl: function (url, parameters) {
        let qs = "";
        for (const key in parameters) {
            if (parameters.hasOwnProperty(key)) {
                const value = parameters[key];
                qs +=
                    encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
            }
        }
        if (qs.length > 0) {
            qs = qs.substring(0, qs.length - 1); //chop off last "&"
            url = url + "?" + qs;
        }
        alert("build url");
        return url;
    },


    // Return the first text node in the element parameter
    getFirstTextNode: function (element) {
        var firstTextNode = "";
        for (var i = 0; i < element.childNodes.length; i++) {
            var curNode = element.childNodes[i];
            if (curNode.nodeName === "#text") {
                // firstTextNode = curNode.nodeValue;
                firstTextNode = curNode;

                break;
            }
        }
        return firstTextNode;
    }
}

export function stopEvent(ev) {
    ev.stopPropagation();
}