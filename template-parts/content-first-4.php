<?php $Imagesurl = wp_get_attachment_url( get_post_thumbnail_id(get_the_ID())) ? wp_get_attachment_url( get_post_thumbnail_id(get_the_ID())):get_template_directory_uri().'/img/dpic.jpg';?>
<article class="mdui-grid-tile indexgaid mdui-shadow-3">
  <div class="divimg" style="background-image:url('<?php echo "$Imagesurl"?>')"></div>
  <div class="mdui-grid-tile-actions mdui-grid-tile-actions-gradient">
    <div class="mdui-grid-tile-text">
      <a href="<?php the_permalink();?>" class="gaid-a"><div class="mdui-grid-tile-title"><?php the_title();?></div></a>
    </div>
  </div>
</article>