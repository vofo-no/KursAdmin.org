$(document).on('click', 'div.scroll-down', function() {
  $('html, body').animate({scrollTop: $('div.container:first').offset().top}, 500);
});

if (typeof(Storage) !== "undefined") {
  $(document).on("change", "#stf-valg", function() {
    var v = $(this).val();
    localStorage.setItem("valgt-stf", v);
    $("#stf-table tr").removeClass("active");
    $("#banner-form-login").attr("href", "https://www.kursadmin.org/pls/kas/f?p=" + v).attr("disabled", !!!v);
    $("#banner-form-login-test").attr("href", "http://test.senitel.no/pls/kastest/f?p=" + v).attr("disabled", !!!v);
    $("#stf-row-" + v).addClass("active");
  });
  $(function() {
    var v = localStorage.getItem("valgt-stf");
    v && $("#stf-valg option[value=" + v + "]").prop("selected", true);
    $("#stf-valg").trigger("change");
  });
}
