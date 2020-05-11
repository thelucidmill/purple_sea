// import 'css/site.scss'

// $(document).ready(function(){
//   $("p").click(function(){
//     $(this).hide();
//   });
// });
// function myFunction() {
//   alert("Page is loaded");
// }
// export default myFunction;


// :javascript
//   $(document).ready(function(){
//     $("#home img").click(function(){
//       alert('ashdjbh');
//       $('.landing').hide();
//     });
//   });

:javascript
      $(document).ready(function(){
        $(".landing img").click(function(){
          $( ".landing" ).hide();
          $( ".ucd" ).show();
        });
        $(".ucd img").click(function(){
          $( ".ucd" ).hide();
          $( ".ecommerce" ).show();
        });
        $(".ecommerce img").click(function(){
          $( ".ecommerce" ).hide();
          $( ".business-systems" ).show();
        });
        $(".ecommerce img").click(function(){
          $( ".ecommerce" ).hide();
          $( ".business-systems" ).show();
        });
      });

      :javascript
	$(document).ready(function(){
		location.reload();   
	});
    
