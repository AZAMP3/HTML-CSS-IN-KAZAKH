document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const tagList = document.getElementById("html-tag-list");

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();
        const tags = tagList.getElementsByTagName("li");

        Array.from(tags).forEach(function(tag) {
            const tagName = tag.textContent.toLowerCase();
            const dataTag = tag.getAttribute('data-tag').toLowerCase();
            if (dataTag.startsWith(searchTerm) || searchTerm === "") {
                tag.style.display = "";
            } else {
                tag.style.display = "none";
            }
        });
    });
});