/******** 전역선언 *********/
var products = [
    {
    id:1,
    link: "#",
    title: "MARK",
    summary: "Dinterdum Pretium De Condimentus",
    star: 5.0,
    originalPrice: 199.00,
    origin: "from",
    src: "../img/pic1.jpg"
},
{
    id:2,
    link: "#",
    title: "G-STAR",
    summary: "Dinterdum Pretium De Condimentus",
    star: 4.5,
    originalPrice: 189.00,
    salePrice: "",
    origin: "",
    src: "../img/pic2.jpg"
},
{
    id:3,
    link: "#",
    title: "CHANEL",
    summary: "Dinterdum Pretium De Condimentus",
    star: 5.0,
    originalPrice: 215.00,
    salePrice: 192.10,
    origin: "",
    src: "../img/pic3.jpg"
},
{
    id:4,
    link: "#",
    title: "BURBERRY",
    summary: "Dinterdum Pretium De Condimentus",
    star: 4,
    originalPrice: 189.00,
    salePrice: 0,
    origin: "",
    src: "../img/pic4.jpg"
},
{
    id:5,
    link: "#",
    title: "BURBERRY",
    summary: "Dinterdum Pretium De Condimentus",
    star: 3,
    originalPrice: 90.00,
    salePrice: 0,
    origin: "",
    src: "../img/pic5.jpg"
},
{
    id:6,
    link: "#",
    title: "BENJAMIN BUTTON",
    summary: "Dinterdum Pretium De Condimentus",
    star: 5,
    originalPrice: 189.00,
    salePrice: 0,
    origin: "",
    src: "../img/pic6.jpg"
}
];

var json = JSON.stringify(products); //객체에 ''넣어서 문자열로 만듦
var js = JSON.parse(json);
console.log(json);
console.log(js);



/******** 사용자함수 *********/




/******** 이벤트 선언 *********/
$('.top-wrapper .icon-down').click(onLangChg); // 언어선택
$('.top-wrapper .bt-down').click(onLangSel); // 언어선택


/******** 이벤트 콜백 *********/
function onLangChg() {
    $(".trans-wrapper").stop().slideToggle(200);
    $(".trans-wrapper .lang-sel").stop().slideUp(200); /* .trans-wrapper 닫힐 때 .lang-sel 열려 있어도 닫힘 */
}
function onLangSel() {
    if($(this).next().css("display") === 'none'){  /* css속성이 display인 값 찾아서(getter) none이면 */
        $(".trans-wrapper .lang-sel").stop().slideUp(200);
        $(this).next().slideDown(200);
    }else{
        $(".trans-wrapper .lang-sel").stop().slideUp(200); /* 열려있는 상태에서 한 번 더 눌렀을 때 */
    }
}
/* !!!
function onLangSel() {
    $(".trans-wrapper .lang-sel").stop().slideUp(200);
    if($(this).next().css("display") === 'none') $(this).next().slideDown(200);
}
 */
