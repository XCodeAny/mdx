jQuery(document).ready(function(){
    var whichButton=0;
    //上传按钮id
    jQuery('#insert-media-button').click(function(){
        //文本域id
        whichButton=0;
        targetfield = jQuery(this).prev('#mdx_index_img');
        tb_show('', 'media-upload.php?type=image&amp;TB_iframe=true');
        return false;
    });
    jQuery('#insert-media-button-2').click(function(){
        //文本域id
        whichButton=1;
        targetfield = jQuery(this).prev('#mdx_logo');
        tb_show('', 'media-upload.php?type=image&amp;TB_iframe=true');
        return false;
    });
    jQuery('#insert-media-button-3').click(function(){
        //文本域id
        whichButton=2;
        targetfield = jQuery(this).prev('#mdx_side_img');
        tb_show('', 'media-upload.php?type=image&amp;TB_iframe=true');
        return false;
    });
    jQuery('#insert-media-button-4').click(function(){
        //文本域id
        whichButton=3;
        targetfield = jQuery(this).prev('#mdx_side_head');
        tb_show('', 'media-upload.php?type=image&amp;TB_iframe=true');
        return false;
    });
    window.send_to_editor = function(html){
        if(whichButton==0){
            imgurl = jQuery('img','<div>'+html+'</div>').attr('src');
            jQuery('#mdx_index_img').val(imgurl);
            tb_remove();
        }else if(whichButton==1){
            imgurl = jQuery('img','<div>'+html+'</div>').attr('src');
            jQuery('#mdx_logo').val(imgurl);
            tb_remove();
        }else if(whichButton==2){
            imgurl = jQuery('img','<div>'+html+'</div>').attr('src');
            jQuery('#mdx_side_img').val(imgurl);
            tb_remove();
        }else if(whichButton==3){
            imgurl = jQuery('img','<div>'+html+'</div>').attr('src');
            jQuery('#mdx_side_head').val(imgurl);
            tb_remove();
        }
    }
    var mdx_val = jQuery('input.mdx_stbs:checked').val();
    if(mdx_val=='false'){
        jQuery('input.mdx_stbsip').attr("disabled","disabled");
        jQuery('input.mdx_stbsip3').removeAttr("required");
    }
    var mdx_val2 = jQuery('input.mdx_stbs2:checked').val();
    if(mdx_val2=='false'){
        jQuery('input.mdx_stbsip2').attr("disabled","disabled");
        jQuery('input.mdx_stbsip22').attr("disabled","disabled");
        jQuery('input.mdx_stbsip2').removeAttr("required");
    }
    if(jQuery("#mdx_index_img").val()!=''){
        var img1=jQuery("#mdx_index_img").val();
        jQuery('#img1').attr('src',img1);
    }
    if(jQuery("#mdx_side_img").val()!=''){
        var img2=jQuery("#mdx_side_img").val();
        jQuery('#img2').attr('src',img2);
    }
    if(jQuery("#mdx_side_head").val()!=''){
        var img3=jQuery("#mdx_side_head").val();
        jQuery('#img3').attr('src',img3);
    }
    if(jQuery("#mdx_mdx_logo").val()!=''){
        var img4=jQuery("#mdx_mdx_logo").val();
        jQuery('#img4').attr('src',img4);
    }
    setInterval("img1()",500);
    setInterval("img2()",500);
    setInterval("img3()",500);
    setInterval("img4()",500);
});
jQuery(".mdx_stbs").click(function(){
    var mdx_val = jQuery('input.mdx_stbs:checked').val();
    if(mdx_val=='true'){
        jQuery('input.mdx_stbsip').removeAttr("disabled");
        jQuery('input.mdx_stbsip3').attr("required","required");
    }else if(mdx_val=='false'){
        jQuery('input.mdx_stbsip').attr("disabled","disabled");
        jQuery('input.mdx_stbsip3').removeAttr("required");
    }
});
jQuery(".mdx_stbs2").click(function(){
    var mdx_val2 = jQuery('input.mdx_stbs2:checked').val();
    if(mdx_val2=='true'){
        jQuery('input.mdx_stbsip2').removeAttr("disabled");
        jQuery('input.mdx_stbsip22').removeAttr("disabled");
        jQuery('input.mdx_stbsip2').attr("required","required");
    }else if(mdx_val2=='false'){
        jQuery('input.mdx_stbsip2').attr("disabled","disabled");
        jQuery('input.mdx_stbsip22').attr("disabled","disabled");
        jQuery('input.mdx_stbsip2').removeAttr("required");
    }
});
jQuery("#change-color").click(function(){
    jQuery('#mdx_svg_color').val('--SaveToUseTheThemeColor--');
});
function img1(){
    var img1=jQuery("#mdx_index_img").val();
    jQuery('#img1').attr('src',img1);
}
function img2(){
    var img2=jQuery("#mdx_side_img").val();
    jQuery('#img2').attr('src',img2);
}
function img3(){
    var img3=jQuery("#mdx_side_head").val();
    jQuery('#img3').attr('src',img3);
}
function img4(){
    var img4=jQuery("#mdx_mdx_logo").val();
    jQuery('#img4').attr('src',img4);
}