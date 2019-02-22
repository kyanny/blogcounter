var xhr = new XMLHttpRequest();
xhr.responseType = "json";
xhr.addEventListener("load", function() {
  var entries = this.response.body.entries;
  var days = this.response.body.days;
  var div = document.querySelector('[data-my-stats]');
  var p1 = document.createElement('p');
  p1.textContent = "はてなブログをはじめてからの記事数: " + entries;
  div.appendChild(p1);
  var p2 = document.createElement('p');
  p2.textContent = "はてなブログをはじめてからの日数: " + days;
  div.appendChild(p2);
});
xhr.open("GET", "https://pysw78m6qi.execute-api.ap-northeast-1.amazonaws.com/production");
xhr.send()
