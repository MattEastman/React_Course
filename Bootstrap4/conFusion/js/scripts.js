//        $(document).ready(function(){
//            $('[data-toggle="tooltip"]').tooltip();
//        });
        $(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
                $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            }); 
            $("#loginModal-nav , #loginModal-close , #loginModal-cancel").click(function(){
                if ($("#loginModal").hasClass('no-show')){
                    $("#loginModal").show();
                    $("#loginModal").removeClass('no-show');
                    $("#loginModal").addClass('show');
                }
                else if ($("#loginModal").hasClass('show')){
                    $("#loginModal").hide();
                    $("#loginModal").removeClass('show');
                    $("#loginModal").addClass('no-show');
                }
            });
               $("#ReserveModal-button , #ReserveModal-close").click(function(){
                 if ($("#ReserveModal").hasClass('no-show')){
                    $("#ReserveModal").show();
                    $("#ReserveModal").removeClass('no-show');
                    $("#ReserveModal").addClass('show');
                }
                else if ($("#ReserveModal").hasClass('show')){
                    $("#ReserveModal").hide();
                    $("#ReserveModal").removeClass('show');
                    $("#ReserveModal").addClass('no-show');
                }
            });
            $("[class='active']").click(function(){
                
            });
        });