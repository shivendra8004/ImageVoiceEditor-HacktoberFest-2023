function taskController(data){
    console.log(data);
    if(data.includes("assistant")){


        if(data.includes("photo editor")){
            if($("#photo-editor-nav").hasClass("active")){
                speak("you are already on photo editor");
            }else{
                speak("Opening photo editor");
                openPhotoEditor();
            }  
        }

        else if(data.includes("home")){
            if($("#home-nav").hasClass("active")){
                speak("you are already on Home Page");
            }else{
                speak("Opening Home Page");
                openHomePanel();
            }
        }

        else if(data.includes("about")){
            if($("#about-nav").hasClass("active")){
                speak("you are already on About Page");
            }else{
                speak("Opening About Page");
                openAboutPanel();
            }
        }

        else if(data.includes("brightness")){
            new_brightness = parseInt(data.replace( /^\D+/g, ''));
            changeImageBrightness(new_brightness);
            $("#brightness_range").val(new_brightness);
            speak(`Brighness set to ${new_brightness}`);
            UpdateImageFilter();
        }

        else if(data.includes("contrast")){
            new_contrast = parseInt(data.replace( /^\D+/g, ''));
            changeImageContrast(new_contrast);
            $("#contrast_range").val(new_contrast);
            speak(`Contrast set to ${new_contrast}`);
            UpdateImageFilter();
        }

        else if(data.includes("saturation")){
            new_saturation = parseInt(data.replace( /^\D+/g, ''));
            changeImageSatutation(new_saturation);
            $("#saturate_range").val(new_saturation);
            speak(`Saturation set to ${new_saturation}`);
            UpdateImageFilter();
        }

        else if(data.includes("shadow") && data.includes("blur")){
            new_shadow_blur = parseInt(data.replace( /^\D+/g, ''));
            changeImageDropShadowBlur(new_shadow_blur);
            $("#drop_shadow_blur_range").val(new_shadow_blur);
            speak(`Drop Shadow Blur set to ${new_shadow_blur}`);
            UpdateImageFilter();
        }

        else if(data.includes("blur")){
            new_blur = parseInt(data.replace( /^\D+/g, ''));
            changeImageBlurness(new_blur);
            $("#blur_range").val(new_blur);
            speak(`Blur set to ${new_blur}`);
            UpdateImageFilter();
        }

        else if(data.includes("hue")){
            new_hue = parseInt(data.replace( /^\D+/g, ''));
            changeImageHue(new_hue);
            $("#hue_range").val(new_hue);
            speak(`Hue set to ${new_hue}`);
            UpdateImageFilter();
        }

        else if(data.includes("grayscale") || data.includes("gray scale")){
            new_gray_scale = parseInt(data.replace( /^\D+/g, ''));
            changeImageGrayScale(new_gray_scale);
            $("#grayscale_range").val(new_gray_scale);
            speak(`Gray Scale set to ${new_gray_scale}`);
            UpdateImageFilter();
        }

        else if(data.includes("invert")){
            new_invert = parseInt(data.replace( /^\D+/g, ''));
            changeImageInvert(new_invert);
            $("#invert_range").val(new_invert);
            speak(`Invert set to ${new_invert}`);
            UpdateImageFilter();
        }

        else if(data.includes("vi") || data.includes("y")){
            new_y = parseInt(data.replace( /^\D+/g, ''));
            changeImageDropShadowY(new_y);
            $("#drop_shadow_y_range").val(new_y);
            speak(`Drop Shadow Y set to ${new_y}`);
            UpdateImageFilter();
        }

        else if(data.includes("axe") || data.includes("x") || data.includes("ex")){
            new_x = parseInt(data.replace( /^\D+/g, ''));
            changeImageDropShadowX(new_x);
            $("#drop_shadow_x_range").val(new_x);
            speak(`Drop Shadow X set to ${new_x}`);
            UpdateImageFilter();
        }

        else if(data.includes("reset") && data.includes("filter") || data.includes("reset") && data.includes("filter's")){
            speak("Image Filter's Reset Successfully!");
            resetImageFilter();
        }

        else if(data.includes("reset") && data.includes("image")){
            speak("Image Reset Successfully!");
            reset_image();
        }

        else if(data.includes("show") && data.includes("old") && data.includes("image") || data.includes("show") && data.includes("old") && data.includes("photo")){
            speak("Showing you old Image");
            showOldImage();
        }

        else if(data.includes("show") && data.includes("edited") && data.includes("image") || data.includes("show") && data.includes("edited") && data.includes("photo") || data.includes("show") && data.includes("edit") && data.includes("image") || data.includes("show") && data.includes("edit") && data.includes("photo")){
            speak("Showing you Edited Image");
            showEditedImage();
        }

        

        else if(data.includes("confirm") && data.includes("image") || data.includes("confirm")){
            if($("#Inputimage").val() != "" && $("#Inputimage").val().length > 0 && $("#Inputimage").val() != null && $("#Inputimage").val() != undefined){
                speak("Image Confirmed!");
                $("#confirmImage").click();
            }else{
                speak("Please Select the Image first");
                openPhotoEditor();  
            }
            
        }

        else if(data.includes("turn off") || data.includes("turnoff") || data.includes("shutdown") || data.includes("shut down")){
            recognition_status = false;
            speak("Smart Mode Turned OFF!");
            $("#smartMode").attr("class","btn btn-primary");
            $("#smartMode").text("Turn ON");
            $("#smartMode").attr("value","0");
            $("#listener_gif").fadeOut();
            recognition.stop();
        }

        else if(data.includes("cancel") && data.includes("image")){
            speak("Image Cancelled!");
            cancleImage();
        }

        else if(data.includes("date")){
            speak(getCurrentDate());
        }
        else if(data.includes("day")){
            speak(getCurrentDay());
        }
        else if(data.includes("time")){
            speak(getCurrentTime())
        }



            else if(data.includes("open")){
                if(data.includes("google")){
                    speak("Opening Google");
                    openGoogle();
                }
            }


            else if(data.includes("close")){
                if(data.includes("google")){
                    speak("Closing Google");
                    closeGoogle();
                }
            }

            else if(data.includes("search") && data.includes("google")){
                let end_string = data.indexOf("google");
                let search_text = data.replace("google","").slice(end_string);
                
                speak(`Searching.. , ${search_text}`);
                searchOnGoogle(search_text);
            }


    }
}