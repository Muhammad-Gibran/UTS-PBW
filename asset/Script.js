function WordCount() {
    var txtmax = 200;
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");

    var text = document.getElementById('abc').innerHTML;
    var txtlength = text.length;

    if (txtlength > txtmax) {
        dots.style.display = "inline";
        moreText.style.display = "none";   
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
    }
}

function Search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  ul = document.getElementById("data");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h2")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}