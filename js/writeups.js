// Load the latest Medium posts through Medium's RSS feed.
(function () {
  var list = document.getElementById("writeups-list");
  var status = document.getElementById("writeups-status");
  if (!list || !status) return;

  var feed =
    "https://api.rss2json.com/v1/api.json?rss_url=" +
    encodeURIComponent("https://medium.com/feed/@Mrrmano");

  fetch(feed)
    .then(function (response) {
      if (!response.ok) throw new Error("HTTP " + response.status);
      return response.json();
    })
    .then(function (data) {
      if (data.status !== "ok") throw new Error("Feed error");

      var items = data.items || [];
      if (!items.length) {
        status.textContent = "No write-ups published yet. Check back soon.";
        return;
      }

      status.textContent = "";
      items.slice(0, 6).forEach(function (item) {
        var li = document.createElement("li");
        var link = document.createElement("a");
        link.href = item.link;
        link.target = "_blank";
        link.rel = "noopener";
        link.textContent = item.title;

        var date = document.createElement("span");
        date.className = "text-darkgrey";
        var published = new Date(item.pubDate);
        date.textContent = isNaN(published.getTime())
          ? ""
          : " - " +
            published.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            });

        li.appendChild(link);
        li.appendChild(date);
        list.appendChild(li);
      });
    })
    .catch(function () {
      status.innerHTML =
        'Unable to load posts right now. Read them on <a href="https://medium.com/@Mrrmano" target="_blank" rel="noopener">Medium</a>.';
    });
})();
