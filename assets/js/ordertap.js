if ($(".instarOrderPage").hasClass("active")) {
  $("#instarOrder").change(function () {
    let instarOrderVal = $("#instarOrder").val();

    if (instarOrderVal == "instar1") {
      console.log("ggg");
    }
  });
}
