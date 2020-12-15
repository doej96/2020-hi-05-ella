function onGetProduct(r) {
    console.log(r);
    var i, html='';
    for(i in r){
        html = '<div class="product-wrap">';
        html += '<img src="'+r[i].src+'">';
        html += '<div class="tit-like">';
        html += '<span class="title">'+r[i].title+'</span>';
        html += '<i class="like fa fa-heart"></i>';
        html += '</div>';
        html += '<span class="summary">'+r[i].summary+'</span>';
        html += '<span class="color">'+r[i].color+'</span>';
        html += '<span class="price">'+r[i].price+'</span>';
        html += '<div class="star-wrap">';
        for(j=1; j<=5; j++){
            if(r[i].star == 0){
                html += '<i class="star fa fa-star"></i>';
            }else if(r[i].star >= j){
                if (r[i].star >= j-0.7 && r[i].star <= j-0.3){
                    html += '<i class="star active fa fa-star-half"></i>';
                }else html += '<i class="star active fa fa-star"></i>';
            }
        }
        html += '</div>';
        html += '</div>';
        $(".wrapper").append(html);
    }
}

$.get('../json/products.json',onGetProduct);