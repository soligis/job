
        $(".aboutUs-box").mouseenter(function(){
            $(".aboutUs").eq(0).css("display","block")
        }).mouseleave(function(){
            $(".aboutUs").eq(0).css("display","none")
        })
        $("#res").mouseenter(function(){
            $(".res-box").eq(0).css("display","block")
        }).mouseleave(function(){
            $(".res-box").eq(0).css("display","none")
        })
        $(".top-btn").click(function(){
            $(window).scrollTop(0);
        })
        $("#close").click(function(){
            $(".bottom-alert").css("display","none");
        })

        var hot = document.getElementsByClassName("hot");
        for(var i = 0; i < hot.length ; i++){
            hot[i].innerHTML += "<img src='./images/shopping/181030_0j433hb2f44i8h93h1cd9b4447k52_24x28.png' alt=''>"
        }



        $(window).scroll(function(){
            if(Number($(window).scrollTop()) > 533){
                $(".nav").css({
                        position:"fixed",
                        top:0,
                })
                $(".rb").css("display","none");
                $("#res").css("display","none");
                $(".sc-top").css("display","block")
            }else{
                $(".nav").css("position","relative");
                $(".rb").css("display","block");
                $("#res").css("display","block");
                $(".sc-top").css("display","none");
            }
            if(Number($(window).scrollTop()) > 50){
                $(".top-btn").css("display","block");
            }else{
                $(".top-btn").css("display","none");
            }
        })



        $(function(){
            var dls = $(".nav-list").eq(0).find("dl");
            var imgs = $(".des-box").eq(0).find("img");
            dls.mouseenter(function(){
                imgs.css("display", 'none').eq($(this).index()).css("display", 'block');
                $(".des-box").css({
                    top:($(this).index())*30,
                    display:"block"
                })

            })
            $(".nav-list").eq(0).mouseleave(function(){
                imgs.css("display", 'none');
                $(".des-box").css({
                    display:"none"
                })

            })

        })