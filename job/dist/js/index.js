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


$(window).scroll(function(){
    if(Number($(window).scrollTop()) > 133){
        $(".nav").css({
                position:"fixed",
                top:0,
        })
         $(".rb").css("display","none");
    }else{
        $(".nav").css("position","relative");
        $(".rb").css("display","block");
    }
    if(Number($(window).scrollTop()) > 650){
         $(".top-btn").css("display","block");
    }else{
        $(".top-btn").css("display","none");
    }
})


$(".top-btn").click(function(){
    $(window).scrollTop(0);
})
$("#close").click(function(){
    $(".bottom-alert").css("display","none");
})


var str = ``;
$.ajax({
    url:"./data/video-list-1.json",
    success:function(arr){
        loading(arr);
    },
    error:function(error){
        console.log(error);
    },
});


for(var i =2 ; i < 5 ; i++){
    $(window).scroll(function(){
        console.log($("html").height())
        if($("html").height() >=9000){
            return;
        }
        if($("html").height()-$(window).scrollTop()<2500){
            $.ajax({
                url:`./data/video-list-${i}.json`,
                success:function(arr){
                    loading(arr);
                },
                error:function(error){
                    console.log(error);
                },
            });
        }
        
    })  
}


function loading(arr){
    var list =arr.data .list;
        var inx = null;
        var pic = null;
        var des = null;
        
        for(var i = 0 ; i < list.length ; i++){
            inx = arr.data.list[i].modelData.data;
            if(!inx){
                continue
            }
            pic = inx.cover;
            des = inx.content;
            str = `<div >
                        <img src="${pic}" alt="">
                    <div>
                        <p>${des}</p>
                    </div>
                </div>`
            
            min();
            var id_min = document.getElementById("min");
            id_min.innerHTML += str;
        }
}
function min(){
    var arr = [];
    arr[0] = $(".main-box1").outerHeight();
    arr[1] = $(".main-box2").outerHeight();
    arr[2] = $(".main-box3").outerHeight();
    arr[3] = $(".main-box4").outerHeight();
    arr[4] = $(".main-box5").outerHeight();
    var ind = getMinIndex(arr);
    var main_box = document.getElementsByClassName("main-box");
    for(var j = 0 ; j < 5 ; j++){
        main_box[j].id = "";
    }
    main_box[ind].id = "min";
}
   
function getMinIndex(arr) {
    var min = arr[0];
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
            index = i;
        }
    }
    return index;
}