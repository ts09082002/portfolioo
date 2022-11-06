function togglepopup(){
    document.getElementById("gtn").classList.toggle("active");
}
$('.menu-btn').click(function(){
    $('.navbar').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});