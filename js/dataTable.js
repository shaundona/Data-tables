//Table row reveal on trigger
jQuery(document).ready(function(){

  $(".table-drop-down-trigger").click(function() {
    $(this).toggleClass("active");
    $(this).closest("tr").next().find(".table-drop-down").toggleClass("active");
  });

});
