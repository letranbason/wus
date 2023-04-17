var App = {
            sliderPartner: function(){
                jQuery('.slider_banner').slick({
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: false,
                    arrows: false,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                dots: false,
                                arrows: true
                            }
                        }
                    ]
                });
            },
        };
        jQuery(document).ready(function(){
            App.sliderPartner();
        });