import 'css/site.scss'

$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});
function myFunction() {
  alert("Page is loaded");
}
export default myFunction;