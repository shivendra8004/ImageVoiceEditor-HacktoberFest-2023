let canvas = document.getElementById("Imagecanvas");
let ctx = canvas.getContext("2d");
let GlobalImage = new Image();

let global_brightness = 100; // done
let global_blur = 0; // done
let global_contrast = 100; // done
let global_grayscale = 0; // done
let global_hue_rotate = 0; // done
let global_invert = 0; // done
let global_sepia = 0; // done
let global_saturation = 100; // done
// let global_opacity = 100;
let global_drop_shodow_x = 0; // done
let global_drop_shodow_y = 0; // done
let global_drop_shodow_blur = 0; // done
let global_drop_shodow_color = "black"; // done

let global_image_format = "png";
let global_image_filename = "Smart_Editor";

let fit = 1.3;

function cancleImage() {
  $("#confirm-image-box").fadeOut(500);
  $("#Inputimage").val("");
}

function confirmImage() {
  $("#image-input-box").fadeOut();
  $(".photo-editor-heading").fadeOut();
  $("#Imagecanvas").fadeIn();
  $("#imageOperationBox").fadeIn();
  $("#imageOperationBox2").fadeIn();

  GlobalImage.onload = function () {
    canvas.width = GlobalImage.naturalWidth;
    canvas.height = GlobalImage.naturalHeight;
    ctx.drawImage(
      GlobalImage,
      0,
      0,
      GlobalImage.naturalWidth / fit,
      GlobalImage.naturalHeight / fit
    );
  };
  GlobalImage.src = $("#thumbnail-image-confirmation").attr("src");
  ctx.drawImage(GlobalImage, 0, 0);
}

function UpdateImageFilter() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.filter = `brightness(${global_brightness}%) contrast(${global_contrast}%) saturate(${global_saturation}%) blur(${global_blur}px) grayscale(${global_grayscale}%) hue-rotate(${global_hue_rotate}deg) drop-shadow(${global_drop_shodow_x}px ${global_drop_shodow_y}px ${global_drop_shodow_blur}px ${global_drop_shodow_color})  invert(${global_invert}%) sepia(${global_sepia})`;
  ctx.drawImage(
    GlobalImage,
    0,
    0,
    GlobalImage.naturalWidth / fit,
    GlobalImage.naturalHeight / fit
  );
}

function changeImageBrightness(brightness) {
  global_brightness = brightness;
  $("#brightness_range_counter").text(brightness);
  UpdateImageFilter();
}

function changeImageContrast(contrast) {
  global_contrast = contrast;
  $("#contrast_range_counter").text(contrast);
  UpdateImageFilter();
}

function changeImageSatutation(saturation) {
  global_saturation = saturation;
  $("#saturate_range_counter").text(saturation);
  UpdateImageFilter();
}

function changeImageBlurness(blurness_level) {
  global_blur = blurness_level;
  $("#blur_range_counter").text(blurness_level);
  UpdateImageFilter();
}

function changeImageHue(hue) {
  global_hue_rotate = hue;
  $("#hue_range_counter").text(hue);
  UpdateImageFilter();
}

function changeImageGrayScale(grayscale) {
  global_grayscale = grayscale;
  $("#grayscale_range_counter").text(grayscale);
  UpdateImageFilter();
}

function changeImageInvert(invert) {
  global_invert = invert;
  $("#invert_range_counter").text(invert);
  UpdateImageFilter();
}

function changeImageDropShadowX(x) {
  global_drop_shodow_x = x;
  $("#drop_shadow_x_range_counter").text(x);
  UpdateImageFilter();
}

function changeImageDropShadowY(y) {
  global_drop_shodow_y = y;
  $("#drop_shadow_y_range_counter").text(y);
  UpdateImageFilter();
}

function changeImageDropShadowBlur(blur) {
  global_drop_shodow_blur = blur;
  $("#drop_shadow_blur_range_counter").text(blur);
  UpdateImageFilter();
}

function changeImageDropShadowColor(color) {
  global_drop_shodow_color = color;
  $("#drop_shadow_color_counter").text(color);
  UpdateImageFilter();
}

function showOldImage() {
  confirmImage();
  $("#imagecompare").val("1");
  $("#imagecompare").text("Show Edited");
}

function showEditedImage() {
  UpdateImageFilter();
  $("#imagecompare").val("0");
  $("#imagecompare").text("Show Old");
}

function compareImage() {
  let value = parseInt($("#imagecompare").val());

  if (value == 0) {
    confirmImage();
    $("#imagecompare").val("1");
    $("#imagecompare").text("Show Edited");
  } else {
    // UpdateImageFilter();
    // $("#imagecompare").val("0");
    // $("#imagecompare").text("Show Old");
  }
}

function downloadImage() {
  image_name =
    $("#image_filename").val().length > 0
      ? $("#image_filename").val()
      : global_image_filename;
  image_format =
    $("#image_format").val().length > 0
      ? $("#image_format").val()
      : global_image_format;
  image = canvas.toDataURL(`image/${image_format}`);
  var link = document.createElement("a");
  link.download = `${image_name}.${image_format}`;
  link.href = image;
}

function reset_image() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  $("#Inputimage").val("");
  $("#imageOperationBox").fadeOut();
  $("#imageOperationBox2").fadeOut();
  $(".photo-editor-heading").fadeIn();
  $("#image-input-box").fadeIn();
  $("#confirm-image-box").hide();
}

function resetImageFilter() {
  let global_brightness = 100; // done
  let global_blur = 0; // done
  let global_contrast = 100; // done
  let global_grayscale = 0; // done
  let global_hue_rotate = 0; // done
  let global_invert = 0; // done
  let global_sepia = 0; // done
  let global_saturation = 100; // done
  // let global_opacity = 100;
  let global_drop_shodow_x = 0; // done
  let global_drop_shodow_y = 0; // done
  let global_drop_shodow_blur = 0; // done
  let global_drop_shodow_color = "black"; // done

  changeImageBrightness(global_brightness);
  $("#brightness_range").val(global_brightness);
  changeImageBlurness(global_blur);
  $("#blur_range").val(global_blur);
  changeImageContrast(global_contrast);
  $("#contrast_range").val(global_contrast);
  changeImageGrayScale(global_grayscale);
  $("#grayscale_range").val(global_grayscale);
  changeImageHue(global_hue_rotate);
  $("#hue_range").val(global_hue_rotate);
  changeImageInvert(global_invert);
  $("#invert_range").val(global_invert);
  changeImageSepia(global_sepia);
  $("#sepia_checkbox").prop("checked", false);
  changeImageSatutation(global_saturation);
  $("#saturate_range").val(global_saturation);
  changeImageDropShadowX(global_drop_shodow_x);
  $("#drop_shadow_x_range").val(global_drop_shodow_x);
  changeImageDropShadowY(global_drop_shodow_y);
  $("#drop_shadow_y_range").val(global_drop_shodow_y);
  changeImageDropShadowBlur(global_drop_shodow_blur);
  $("#drop_shadow_blur_range").val(global_drop_shodow_blur);
  changeImageDropShadowColor(global_drop_shodow_color);
}

// function chanegImageOpacity(opacity){
//     global_opacity = opacity;
//     $("#opacity_range_counter").text(opacity);
//     UpdateImageFilter();
// }

function changeImageSepia(sepia) {
  if (sepia) {
    global_sepia = 1;
  }
  else {
    global_sepia = 0;
  }
  
  UpdateImageFilter();
}

$(document).ready(function () {
  $(document).on("change", "#Inputimage", function (e) {
    if (
      $("#Inputimage").val() != "" ||
      $("#Inputimage").val() != null ||
      $("#Inputimage").val() != undefined
    ) {
      $("#confirm-image-box").fadeIn(1000);
      $(".photo-editor-heading").fadeOut();

      let reader = new FileReader();
      reader.onload = function () {
        $("#thumbnail-image-confirmation").attr("src", reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  });

  $(document).on("click", "#cancleImage", cancleImage);
  $(document).on("click", "#confirmImage", confirmImage);
  $(document).on("click", "#reset_image_filter", resetImageFilter);
  $(document).on("click", "#reset_image", reset_image);
  $(document).on("click", "#imagecompare", compareImage);

  $(document).on("input", "#brightness_range", function () {
    changeImageBrightness(this.value);
  });

  $(document).on("input", "#contrast_range", function () {
    changeImageContrast(this.value);
  });

  $(document).on("input", "#saturate_range", function () {
    changeImageSatutation(this.value);
  });

  $(document).on("input", "#blur_range", function () {
    changeImageBlurness(this.value);
  });

  $(document).on("input", "#hue_range", function () {
    changeImageHue(this.value);
  });

  $(document).on("input", "#grayscale_range", function () {
    changeImageGrayScale(this.value);
  });

  $(document).on("input", "#invert_range", function () {
    changeImageInvert(this.value);
  });

  $(document).on("change", "#sepia_checkbox", function () {
    if (this.checked) {
      changeImageSepia(true);
    } else {
      changeImageSepia(false);
    }
  });

  // $(document).on("input","#opacity_range",function(){
  //     chanegImageOpacity(this.value);
  // });

  $(document).on("input", "#drop_shadow_x_range", function () {
    changeImageDropShadowX(this.value);
  });

  $(document).on("input", "#drop_shadow_y_range", function () {
    changeImageDropShadowY(this.value);
  });

  $(document).on("input", "#drop_shadow_blur_range", function () {
    changeImageDropShadowBlur(this.value);
  });

  $(document).on("input", "#drop_shadow_color", function () {
    changeImageDropShadowColor(this.value);
  });

  $(document).on("click", "#save_image_btn", function () {
    downloadImage();
  });

  $(document).on("mouseover", "#canvasBox", function () {
    // confirmImage();
  });

  $(document).on("mouseout", "#canvasBox", function () {
    // UpdateImageFilter();
  });
});
