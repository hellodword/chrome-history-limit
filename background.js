chrome.history.onVisited.addListener(function (item) {

    if (new RegExp("^https://gchq\.github\.io/CyberChef/.*?").test(item.url)) {
        chrome.history.deleteUrl({
            url: item.url
        })
    }

})