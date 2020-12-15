

function genStar(v) {
    for(var i=1, html=''; i<6; i++) {
        if(Math.ceil(v) >= i) html += '<i class="star active fa fa-star"></i>';
    }
    return html;
}

function onGetProduct(r) {
    console.log(r);
    var i, html='';
    for(i in r){
        html = '<div class="product-wrap">';
        html += '<img src="'+r[i].src+'">';
        html += '<div class="tit-like">';
        html += '<span class="title">'+r[i].title+'</span>';
        html += '<i class="like far fa-heart"></i>';
        html += '</div>';
        html += '<span class="summary">'+r[i].summary+'</span>';
        html += '<span class="color">'+r[i].color+'</span>';
        html += '<div class="price">'+r[i].price+'</div>';
        html += '<div class="star-wrap">';
        for(var j=0; j<5; j++) html += '<i class="star active fa fa-star"></i>';
        html += '<div class="mask"></div>'
        html += '</div>';
        html += '</div>';
        $(html).appendTo(".wrapper").find(".star-wrap > .mask").css("transform", "translateX("+(Number(r[i].star) * 20)+"%)");
    }
}

$.get('../json/products.json',onGetProduct);

        /* 
        for(j=1; j<=5; j++){
            if(r[i].star == 0){
                html += '<i class="star fa fa-star"></i>';
            }else if(r[i].star >= j){
                if 
                }else html += '<i class="star active fa fa-star"></i>';
            }
        }
         */