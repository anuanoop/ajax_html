$(document).ready(function () {
  var listItems = "";
  $.getJSON("store.json", function (jsonList) {
	listItems += "<option value='all'>ALL</option>";
    for (var i = 0; i < jsonList.list.length; i++) {
      
      listItems +=
        "<option value='" +jsonList.list[i].Department + "'>" +jsonList.list[i].Department +
        "</option>";
    }

	
    $("#DLState").html(listItems);
  });

  var search = "all";
  getData(search);
  function getData(search) {
    $(".rowdata").remove();
    $.getJSON("store.json", function (jsonList) {
      for (var i = 0; i < jsonList.list.length; i++) {
        if (jsonList.list[i].Department == search && search!="all") {
          $("#stage").append(
            '<tr class="rowdata"><td>' +jsonList.list[i].name +"</td>" +
              "<td>" +jsonList.list[i].Quantity +"</td>" +
			  "<td>" +jsonList.list[i].Unit +"</td>" +
              "<td>" +jsonList.list[i].Department +"</td></tr>"
          );
        }
		
      }

	  if(search=="all")
		{
			for (var i = 0; i < jsonList.list.length; i++) {
				  $("#stage").append(
					'<tr class="rowdata"><td>' +jsonList.list[i].name +"</td>" +
					  "<td>" +jsonList.list[i].Quantity +"</td>" +
					  "<td>" +jsonList.list[i].Unit +"</td>" +
					  "<td>" +jsonList.list[i].Department +"</td></tr>"
				  );
				
				
			  }
		}
    });
  }
  $("#getdata").click(function () {
    var val = $("#DLState").val();
    getData(val);
  });
});
