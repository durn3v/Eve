console.log("'Allo 'Allo!"),$(document).ready(function(){function e(e){$.each(e,function(e,i){var s=i.image,t=i.id;$(".photo-list").each(function(e){$(this).prepend('           <label style="background-image:url('+_url+"/media/"+s+');">             <input type="checkbox" name="photo" value="'+t+'">           </label>         ')})})}function i(){$.ajax({url:_url+"/photo/",dataType:"json",success:function(i){e(i.photo_list)}})}function s(e){var i=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;return i.test(e)}i(),$(window).load(function(){$(".slide.n1").addClass("active"),$("body").on("tap",".btn, .btn-nostyle",function(e){if(e.preventDefault(),href=$(this).attr("href").split("#"),href[1]&&$("."+href[1]).size()>0&&!$(this).is(".disabled"))if("isprinted"==href[1]){var i=$('.slide.print .photo-list input[type="checkbox"]:checked').val();$.ajax({url:_url+"/print/"+i,success:function(e){$(".slide").removeClass("active"),$("."+href[1]).addClass("active")}})}else if("isemailsend"==href[1]){var s,t=[];$('.slide.email .photo-list input[type="checkbox"]:checked').each(function(){t.push($(this).val())}),console.log(t),s=$('input[name="email"]').val();var a=$(".slide.email .photo-list").serialize();$.ajax({url:_url+"/email/",data:a+"&"+$.param({email:s}),success:function(e){console.log(e),$(".slide").removeClass("active"),$("."+href[1]).addClass("active")}})}else if("preview"==href[1]){var l=$(".participate-photo .photo-list input:checked").closest("label").css("background-image").replace("url(","").replace(")",""),o=$('.slide.answer textarea[name="answer"]').val();$(".slide.preview .text p").text(o),$(".slide.preview .photo img").attr("src",l),$(".slide").removeClass("active"),$("."+href[1]).addClass("active")}else if("participate-photo"==href[1])$(".slide.participate-photo .photo-list input").prop("checked",!1),$(".slide.participate-photo .photo-list input").change(),$(".slide").removeClass("active"),$("."+href[1]).addClass("active");else if("isparicipate"==href[1]){var a=$(".slide.participate-photo .photo-list").serialize(),n=$('.slide.answer textarea[name="answer"]').val(),c=$(".slide.socials form").serialize();$.ajax({url:_url+"/participate/",data:a+"&"+c+"&"+$.param({answer:n}),success:function(e){console.log(e),$(".slide").removeClass("active"),$("."+href[1]).addClass("active")}})}else $(".slide").removeClass("active"),$("."+href[1]).addClass("active")}),$('input[type="checkbox"][name="agree"]').change(function(){$(this).closest(".slide").find("a.btn").toggleClass("disabled")}),$('textarea[name="answer"]').bind("input propertychange",function(e){""==$(this).val()?$(this).closest(".slide").find("a.btn").addClass("disabled"):$(this).closest(".slide").find("a.btn").removeClass("disabled")}),$(".socials input").bind("input propertychange",function(e){var i="";$(".socials input").each(function(){""!=$(this).val()&&(i=$(this).val())}),""==i?$(this).closest(".slide").find("a.btn").addClass("disabled"):$(this).closest(".slide").find("a.btn").removeClass("disabled")}),$('input[name="email"]').bind("input propertychange",function(e){s($(this).val())?$(this).closest(".slide").find("a.btn").removeClass("disabled"):$(this).closest(".slide").find("a.btn").addClass("disabled")}),$("body").on("change",'.photo-list label input[type="checkbox"]',function(){var e=$(this).closest(".photo-list"),i=$(this).closest(".photo-list").find('input[type="checkbox"]'),s=e.attr("data-maxselect"),t=e.find('input[type="checkbox"]:checked').size();t>=s?i.filter(":not(:checked)").attr("disabled",!0):i.removeAttr("disabled");var a=$(this).closest(".slide");a.find('input[type="checkbox"]:checked').size()>0?a.find(".btn").removeClass("disabled"):a.find(".btn").addClass("disabled")})})});