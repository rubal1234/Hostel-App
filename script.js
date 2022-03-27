
  $(document).on("click","#navbar-toggle",function(e){
    $('nav ul').toggleClass("responsive");
  })

  // Hamburger toggle
  $(document).on("click","#navbar-toggle",function(e){
      this.classList.toggle('active');
  });


    // If a link has a dropdown, add sub menu toggle.

  $(document).on("click","nav ul li a:not(:only-child)",function(e){
    $(this).siblings('.navbar-dropdown').slideToggle("slow");
    $('.navbar-dropdown').not($(this).siblings()).hide("slow");
     e.stopPropagation();
  })
    


function showImg(e){
  $(".modal").show();
  var imgSrc = e.src
  var modalImg = document.getElementById("img01");
  modalImg.src = imgSrc;
}

$(document).on("click",".close",function(e){
  $(".modal").hide();
})

$(function(){
  $(".navigation").load("nav.html");
});

$(function(){
  $(".footer").load("footer.html");
});

$(function(){
  $(".footer-bottom").load("footer-bottom.html");
});