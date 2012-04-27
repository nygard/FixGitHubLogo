var bad_github = document.getElementsByClassName("site-logo")[0];
var fixed_github = bad_github.cloneNode(true);
bad_github.parentNode.replaceChild(fixed_github, bad_github);
