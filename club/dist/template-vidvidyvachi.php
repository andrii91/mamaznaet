<?php
/* Template Name: Учасникам
/**
* PНовая главная template
*
* @package vogue
* @since 1.0.0
*/
// File Security Check
get_header();
?>
  

<div class="head about">
  <div class="container">
    <div class="row">
      <?php if (true) { ?>
        <div class="col-12">
          <h1 class="form-title"><span style="color: #EC1A34;">Станьте учасником</span> AGROSHOW UKRAINE 2021</h1>
          <p class="p-mapinfo" >Заповни форму щоб дізнатися умови участі в виставці та забронювати місце. Стань частиною першого грандіозного святкування Дня Фермера.</p>
          
          <div class="row">
            <div class="col-xs-12 col-lg-6" style="margin-bottom: 1rem;">
              <iframe style="width: 100%; height: 100%; border-radius: 3px; min-height: 300px;" src="https://www.youtube.com/embed/Rw3-vLxg3Qg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="col-xs-12 col-lg-6" style="margin-bottom: 1rem;">
              <form class="form form-large participants-form" action="#" method="post" style="max-width: 807px; margin-left: auto; margin-right: auto;">
                <div class="label"> <span>*</span> Назва компанії (ім'я ФОП) 
                  <input type="text" name="company" value="" size="40" required="true" placeholder="Введіть назву компанії">
                </div>
                <!-- <div class="label"> <span>*</span> Ваш сайт
                  <input type="text" name="site" value="" size="40" required="true" placeholder="http://site.com">
                </div> -->
                <div class="label"> <span>*</span> ПІБ відповідальної особи 
                  <input type="text" name="name" value="" size="40" required="true" placeholder="Введіть ПІБ">
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="label"> <span>*</span> Телефон
                      <input type="tel" name="phone" value="" size="40" required="true" placeholder="(___) ___-____" inputmode="text">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <!-- <div class="label"> <span>*</span> Посада
                      <select name="post">
                        <option value="">Оберіть посаду</option>
                        <option value="Директор/власник">Директор/власник</option><option value="Керівник відділу">Керівник відділу</option><option value="Маркетолог">Маркетолог</option><option value="Менеджер">Менеджер</option>
                      </select>
                    </div> -->
                    <div class="label">
                      <span>*</span> E-mail
                      <input style="margin-bottom: 0;" type="email" name="email" value="" size="40" required="true" placeholder="E-mail *">
                    </div>

                  </div>
                </div>
                <div class="row align-items-end">
                <div class="col-md-12 col-lg-6">
                  <div class="label">
                    Промо-код
                    <input type="number" name="promo_code" value="" size="40" placeholder="Промо-код" min="0" max="999999" style="margin-bottom: 0;">
                    <div class="invalid-code">Не вірний промо-код</div>
                  </div>
                </div>
                  <div class="col-lg-6">
                    <button type="submit" class="order-btn" style="height: 61px; margin-bottom: 24px;">Стати учасником</button>
                  </div>
                  <input type="hidden" name="type" value="Стати учасником">
                              <div jsname="o6bZLc">
                      <input type="hidden" name="entry.1982028087" value="">
                      <input type="hidden" name="entry.1165548504" value="">
                      <input type="hidden" name="entry.147690966" value="">
                      <input type="hidden" name="entry.1941696957" value="">
                      <input type="hidden" name="entry.1669513584" value="">
                      <input type="hidden" name="entry.856995314" value="">
                      <input type="hidden" name="entry.699038958" value="">
					  <input type="hidden" name="entry.2129475484" value="">
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      <?php } else { ?>
        <div class="col-12">
          <h1 class="form-title"><span style="color: #EC1A34;">Станьте учасником</span> AGROSHOW UKRAINE 2021</h1>
          <p class="p-mapinfo" >Заповни форму щоб дізнатися умови участі в виставці та забронювати місце. Стань частиною першого грандіозного святкування Дня Фермера.</p>
          <form class="form form-large participants-form" action="#" method="post" style="max-width: 807px; margin-left: auto; margin-right: auto;">
            <div class="label"> <span>*</span> Назва компанії (ім'я ФОП) 
              <input type="text" name="company" value="" size="40" required="true" placeholder="Введіть назву компанії">
            </div>
          <!--  <div class="label"> <span>*</span> Ваш сайт
              <input type="text" name="site" value="" size="40" required="true" placeholder="http://site.com">
            </div> -->
            <div class="label"> <span>*</span> ПІБ відповідальної особи 
              <input type="text" name="name" value="" size="40" required="true" placeholder="Введіть ПІБ">
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="label"> <span>*</span> Телефон
                  <input type="tel" name="phone" value="" size="40" required="true" placeholder="(___) ___-____" inputmode="text">
                </div>
              </div>
              <div class="col-lg-6">
                <!-- <div class="label"> <span>*</span> Посада
                  <select name="post">
                    <option value="">Оберіть посаду</option>
                    <option value="Директор/власник">Директор/власник</option><option value="Керівник відділу">Керівник відділу</option><option value="Маркетолог">Маркетолог</option><option value="Менеджер">Менеджер</option>
                  </select>
                </div> -->
                <div class="label">
                  <span>*</span> E-mail
                  <input style="margin-bottom: 0;" type="email" name="email" value="" size="40" required="true" placeholder="E-mail *">
                </div>

              </div>
            </div>
            <div class="row align-items-end">
              <div class="col-lg-6"></div>
              <div class="col-lg-6">
                <button type="submit" class="order-btn">Стати учасником</button>
              </div>
              <input type="hidden" name="type" value="Стати учасником">
                          <div jsname="o6bZLc">
                  <input type="hidden" name="entry.1982028087" value="">
                  <input type="hidden" name="entry.1165548504" value="">
                  <input type="hidden" name="entry.147690966" value="">
                  <input type="hidden" name="entry.1941696957" value="">
                  <input type="hidden" name="entry.1669513584" value="">
                  <input type="hidden" name="entry.856995314" value="">
                  <input type="hidden" name="entry.699038958" value="">
                </div>
            </div>
          </form>
        </div>
      <?php } ?>
		
	  <div class="col-12" style="margin-top: 49px;">
        <h2 class="form-title">Схема розміщення учасників</h2>
        <a class="map-info" data-fancybox href="<?php bloginfo('template_url'); ?>/images/map.pdf"><img src="<?php bloginfo('template_url'); ?>/images/map.webp" alt=""></a>
      </div>
    </div>
  </div>
</div>
  <div class="section white">
    <div class="container">
      <h2 class="about-title">Інформаційна підтримка</h2>
      <div class="partners-items">

            <?php

              $args_info_logo = array(
              'numberposts'      => -1,
              'order'            => 'ASC',
              'category'            => 4,
              'orderby' => 'menu_order',
              'post_type'        => 'partn'
              );
              $info_logo = get_posts( $args_info_logo );
              
              foreach ( $info_logo as $post ) {
              $result = '';
              setup_postdata( $post );
              ?>

            <a target="_blank" href="<?=get_field('link', $post->ID);?>" class="partners-item link-img">
              <img src="<?php echo wp_get_attachment_image_url( get_post_thumbnail_id($post->ID), 'full' ); ?>" alt="<?php the_title(); ?>">
            </a>

            <?php } ?>
 <a   href="#prtn" class="partners-item link-img partners-empty" data-fancybox>
            Тут може бути ваша компанія
          </a>
          </div>

    </div>
  </div>


<style>
  .invalid-code {
    visibility: hidden;
    width: 100%;
    margin-top: .25rem;
    font-size: .875em;
    color: #dc3545;
  }
</style>

<?php
get_footer();
