//A알고리즘

var lotto = [];
var legacyLotto = [];

function colorSel(n) {
    if(n<=10) return 'yellow';
    else if(n<=20) return 'blue';
    else if(n<=30) return 'red';
    else if(n<=40) return 'gray';
    else if(n<=45) return 'green';
}

function genLottoHtml(arr) {
    var html ='';
    for(var i in arr) {
        html += '<div class="number '+colorSel(arr[i])+'">'+arr[i]+'</div>';
    }
    return html;
}

function onLucky() {
    legacyLotto = lotto;
    lotto = [];

    while(lotto.length < 6) {
    var num = Math.floor(Math.random()*45)+1;
    if(lotto.indexOf(num)==-1) lotto.push(num);
    }

    lotto.sort(function(a,b){
        return a - b;
    })
    console.log(lotto);
    
    for(var i in lotto) {
        $(".result-wrap").empty().append(genLottoHtml(lotto));
    }

    if(legacyLotto.length > 0) {
        html = '<div class="history">';
        html += genLottoHtml(legacyLotto);
        html += '</div>';
        $(".history-wrapper").prepend(html);
    }
}

$("#btLucky").click(onLucky);