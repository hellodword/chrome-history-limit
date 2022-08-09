chrome.history.onVisited.addListener(function (item) {

    let url_patterns = [
        "^https://gchq\.github\.io/CyberChef/#.*?",
        "^https://www\.google\.com/search.*?",
    ];

    let title_patterns = [];

    url_patterns.forEach((pattern) => {
        if (new RegExp(pattern).test(item.url)) {
            chrome.history.deleteUrl({
                url: item.url
            })
        }
    });

    title_patterns.forEach((pattern) => {
        if (new RegExp(pattern).test(item.title)) {
            chrome.history.deleteUrl({
                url: item.url
            })
        }
    });

})
