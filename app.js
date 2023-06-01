$(document).ready(function () {
  const shrink_btn = $(".shrink-btn");
  const sidebar_links = $(".sidebar-links a");
  const active_tab = $(".active-tab");
  const logo = $("#logo");
  const shortcuts = $(".sidebar-links h4");
  const tooltip_elements = $(".tooltip-element");
  const toggle_btn_open = $(".toggle-btn-open");
  const toggle_btn_close = $(".toggle-btn-close");

  let r_art = $(".r-art");
  let utm = $(".utm");
  let slider = $(".slider");
  let formSection = $(".form-section");

  r_art.on("click", function () {
    slider.addClass("moveslider");
    formSection.addClass("form-section-move");
  });

  toggle_btn_open.on("click", function () {
    $("body").addClass("mobile");
  });

  toggle_btn_close.on("click", function () {
    $("body").removeClass("mobile");
  });

  utm.on("click", function () {
    slider.removeClass("moveslider");
    formSection.removeClass("form-section-move");
  });

  let activeIndex;

  shrink_btn.on("click", function () {
    $("#logo").toggleClass("logo-hide");
    $("body").toggleClass("shrink");
    setTimeout(moveActiveTab, 400);

    shrink_btn.addClass("hovered");

    setTimeout(function () {
      shrink_btn.removeClass("hovered");
    }, 500);
  });

  // Using jQuery
  $("a").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".upload-label").on("dragover", function (event) {
    event.preventDefault();
    $(this).addClass("drag-over");
  });

  $(".upload-label").on("dragleave", function (event) {
    event.preventDefault();
    $(this).removeClass("drag-over");
  });

  $(".upload-label").on("drop", function (event) {
    event.preventDefault();
    $(this).removeClass("drag-over");

    var file = event.originalEvent.dataTransfer.files[0];
    displayPreview(file);
  });

  $("#image-upload").on("change", function (event) {
    var file = event.target.files[0];
    displayPreview(file);
  });

  function displayPreview(file) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var previewImage = $("#preview-image");
      previewImage.attr("src", e.target.result);
      previewImage.css("display", "block");

      var uploadedText = $("#uploaded-text");
      uploadedText.text(file.name);
      uploadedText.addClass("uploaded");
    };

    reader.readAsDataURL(file);
  }
});
