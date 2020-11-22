chrome.cookies.onChanged.addListener(function(info) {
    if (info.removed) {
        return;
    }
    if (block(info.cookie.domain)) {
        var proto = (info.cookie.secure ? "https://" : "http://");
        var url = proto + info.cookie.domain + info.cookie.path;
        chrome.cookies.remove({url: url, name: info.cookie.name, storeId: info.cookie.storeId});
    }
});

function block(domain) {
    if (domain.includes("medium.com")) {
        return true;
    }
    if (domain.includes("bloomburg.com")) {
        return true;
    }
    if (domain.includes("thebolditalic.com")) {
        return true;
    }
    if (domain.includes("theatlantic.com")) {
        return true;
    }
    return false;
}
