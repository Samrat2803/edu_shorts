
(function() {
    // define an array of page URLs
    var pageUrls = [
        "/Users/admin/Desktop/Personal/upsc_app/edu_shorts/pages/page_0.html",
        "/Users/admin/Desktop/Personal/upsc_app/edu_shorts/pages/page_1.html",
        "/Users/admin/Desktop/Personal/upsc_app/edu_shorts/pages/page_0.html",
        "/Users/admin/Desktop/Personal/upsc_app/edu_shorts/pages/page_1.html",
        "/Users/admin/Desktop/Personal/upsc_app/edu_shorts/pages/page_0.html"
    ];

    var currentPageIndex = 0;

    // load the initial page
    loadPage(currentPageIndex);

    // attach click event handlers to the navigation buttons
    document.getElementById("prev-button").addEventListener("click", function() {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            loadPage(currentPageIndex);
        }
    });
    document.getElementById("next-button").addEventListener("click", function() {
        if (currentPageIndex < pageUrls.length - 1) {
            currentPageIndex++;
            loadPage(currentPageIndex);
        }
    });

    // load a page into the page container
    function loadPage(pageIndex) {
        var pageContainer = document.getElementById("page-container");
        pageContainer.innerHTML = ""; // clear the container
        var pageUrl = pageUrls[pageIndex];
        var xhr = new XMLHttpRequest();
        xhr.open("GET", pageUrl);
        xhr.onload = function() {
            if (xhr.status === 200) {
                // create a div element to hold the page content
                var pageDiv = document.createElement("div");
                pageDiv.className = "page current";
                pageDiv.innerHTML = xhr.responseText;
                pageContainer.appendChild(pageDiv);
                // hide all other pages
                var pages = pageContainer.querySelectorAll(".page");
                for (var i = 0; i < pages.length; i++) {
                    if (i !== pageIndex) {
                        pages[i].className = "page";
                    }
                }
            } else {
                console.error("Failed to load page: " + pageUrl);
            }
        };
        xhr.send();
    }
})();
