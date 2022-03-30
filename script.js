
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

  $(document).on("click",".sign-in",function(e){
    $(".modal-header").remove();
    $(".modal-body").remove();
    $(".modal-footer").remove();
     var modal_header = '<div class = "modal-header"></div>';
    $(".modal-content").append(modal_header);
    var modal_body = '<div class = "modal-body border-0"></div>';
    $(".modal-content").append(modal_body);
    var modal_footer = '<div class = "modal-footer justify-content-start border-0"></div>';
    $(".modal-content").append(modal_footer);
    var label_text = '<h5 class="modal-title" id="exampleModalLabel">Login</h5>';
    var closeBtn = '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>';
    $(".modal-header").append(label_text,closeBtn);
    var label = '<label>Email<span style="color: red">*</span></label>';
    var input = '<input type="text" class="form-control border-0 login_input">';
    var label2 = '<label class= "mt-5">Passsword<span style="color: red">*</span></label>';
    var input2 = '<input type="password" class="form-control border-0 login_input">';
    var text = '<p class="mb-auto forgot mt-4 text-end">Forgot Password ?</p>';
    $('.modal-body').append(label,input,label2,input2,text);
    var btn = '<button type="button" class="btn login_btn text-white px-5">Login</button>';
    $(".modal-footer").append(btn);
    $(".modal").show();
  })

  $(document).on("click",".forgot",function(e){
    $(".modal-header").remove();
    $(".modal-body").remove();
    $(".modal-footer").remove();
    var modal_header = '<div class = "modal-header"></div>';
    $(".modal-content").append(modal_header);
    var modal_body = '<div class = "modal-body border-0"></div>';
    $(".modal-content").append(modal_body);
    var modal_footer = '<div class = "modal-footer justify-content-start border-0"></div>';
    $(".modal-content").append(modal_footer);
    var label_text = '<h5 class="modal-title" id="exampleModalLabel">Forgot Passsword</h5>';
    var closeBtn = '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>';
    $(".modal-header").append(label_text,closeBtn);
    var label = '<label>Email<span style="color: red">*</span></label>';
    var input = '<input type="text" class="form-control border-0 login_input">';
    $('.modal-body').append(label,input);
    var btn = '<button type="button" class="btn login_btn text-white px-5">Submit</button>';
    $(".modal-footer").append(btn);
  })
    

 function loading() {
    $("#submit .spinner-border").show();
    $("#submit .btn-text").html("Saving..");  
}

function showImg(e){
  $(".modal").show();
  var imgSrc = e.src
  var modalImg = document.getElementById("img01");
  modalImg.src = imgSrc;
}

$(document).on("click",".close",function(e){
  $(".modal").hide();
})
$(document).on("click",".btn-close",function(e){
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