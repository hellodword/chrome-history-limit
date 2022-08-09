chrome.history.onVisited.addListener(function (item) {

    chrome.storage.sync.get({
        patterns: ''
    }, function (items) {
        items.patterns.split('\n').forEach((pattern) => {
            console.log(pattern);
            if (pattern !== "" && new RegExp(pattern).test(item.url)) {
                chrome.history.deleteUrl({
                    url: item.url
                })
            }
        })
    });

})
