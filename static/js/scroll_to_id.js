// handle links with @href started with '#' only
$(document).on("click", 'a[href^="#"]', function (e) {
  // target element id
  var id = $(this).attr("href");

  var $id = $(id);
  if ($id.length === 0) {
    return;
  }

  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault();

  // top position relative to the document
  var pos = $id.offset().top;
 var delay  = pos/100 * 70; 
  // animated top scrolling
  $("body, html").animate({ scrollTop: pos }, 1200);
  // console.log(window.innerWidth);
  if (window.innerWidth < 800) {
    let asideMenu = document.getElementsByClassName("menu_StyledSidebar")[0];
    let ham = document.getElementById("hamburger");
    ham.classList.remove("hamburger-close");
    ham.classList.add("hamburger");

    asideMenu.classList.remove("menubar-open");
    asideMenu.setAttribute("aria-hidden", "true");
    asideMenu.setAttribute("tabindex", "-1");

    document.querySelector("body").classList.remove("blur");
  }
});

function scrollTop() {
  console.log("here");
  $("body, html").animate({ scrollTop: 0 }, 1200);
}
$("#scroll_to_top").on("click", scrollTop);