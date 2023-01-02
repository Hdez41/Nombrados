// tambah data
function insert_value() {

    $("#re").css("visibility","hidden");
     document.getElementById("loader").style.visibility = "visible";
    $('#mySpinner').addClass('spinner');

    var id1= $("#id").val();
    var biblia= $("#biblia").val();
    var cita= $("#cita").val();
    var referencia= $("#referencia").val()//////////////////

    var url = script_url+"?callback=ctrlq&referencia="+referencia+"&cita="+cita+"&biblia="+biblia+"&id="+id1+"&action=insert";

       var request = jQuery.ajax({
         crossDomain: true,
         url: url ,
         method: "GET",
         dataType: "jsonp"
       });
     }

   // perbaharui data
     function update_value(){
    $("#re").css("visibility","hidden");
        document.getElementById("loader").style.visibility = "visible";

    var id1= $("#id").val();
    var biblia= $("#biblia").val();
    var cita= $("#cita").val();
    var referencia= $("#referencia").val();//////////////////

    var url = script_url+"?callback=ctrlq&referencia="+referencia+"&cita="+cita+"&biblia="+biblia+"&id="+id1+"&action=insert";

       var request = jQuery.ajax({
         crossDomain: true,
         url: url ,
         method: "GET",
         dataType: "jsonp"
       });
     }

   //hapus data
     function delete_value(){
    $("#re").css("visibility","hidden");
        document.getElementById("loader").style.visibility = "visible";

    $('#mySpinner').addClass('spinner');
    var id1= $("#id").val();
    var biblia= $("#biblia").val();
    var cita= $("#cita").val();
    var referencia= $("#referencia").val();//////////////////

    var url = script_url+"?callback=ctrlq&referencia="+referencia+"&cita="+cita+"&biblia="+biblia+"&id="+id1+"&action=insert";

       var request = jQuery.ajax({
         crossDomain: true,
         url: url ,
         method: "GET",
         dataType: "jsonp"
       });
     }


     // print the returned data
     function ctrlq(e) {
    $("#re").html(e.result);
    $("#re").css("visibility","visible");
    read_value('');
     }

   function read_value(srch) {

       $("#re").css("visibility","hidden");
       document.getElementById("loader").style.visibility = "visible";
       var url = script_url+"?action=read";

       $.getJSON(url, function (json) {

   // buat tabel yang menampilkan data
           var table = document.createElement("table");
           table.setAttribute("id", "myTable");
           var header = table.createTHead();
     var row = header.insertRow(0);
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);
     var cell4 = row.insertCell(3);///////////////////
     row.style.background = "#000000";

     cell1.innerHTML = "<b>ID</b>";
     cell2.innerHTML = "<b>Biblia</b>";
     cell3.innerHTML = "<b>Cita</b>";
     cell4.innerHTML = "<b>Referencia</b>";;//////////////////

   //        alert(json.records);
        // masukkan data ke dalam tabel
         if (srch!=''){
           for (var i = 0; i < json.records.length; i++) {

             if(srch==json.records[i].ID){
               tr = table.insertRow(-1);
       var tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].ID;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Biblia;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Cita;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Referencia;////////////////
               }
           }
            $("#re").html("Citas Bíblicas");
           $("#re").css("visibility","visible");
         } else {
            for (var i = 0; i < json.records.length; i++) {

               tr = table.insertRow(-1);
       var tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].ID;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Biblia;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Cita;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Referencia;////////////////
             }
          }

           var divContainer = document.getElementById("showData");
           divContainer.innerHTML = "";
           divContainer.appendChild(table);
           document.getElementById("loader").style.visibility = "hidden";
        $("#re").css("visibility","visible");

        $("#id").val("")
        $("#biblia").val("")
        $("#cita").val("")
        $("#referencia").val("");///////////////////
       });
    }
   //////////// Ketika data dalam tabel diklik
    function getData2Input(){
     var table = document.getElementById("myTable");

     if (table) {
       for (var i = 0; i < table.rows.length; i++) {
         table.rows[i].onclick = function() {
           tableText(this);
         }
       }
     }
   }

   ///////////////////Ekstrak data dari Spreadsheet dan tampilkan di kolom.

   function tableText(tableRow) {
     var id = tableRow.childNodes[0].innerHTML;
     var biblia = tableRow.childNodes[1].innerHTML;
     var cita = tableRow.childNodes[2].innerHTML;
     var referencia = tableRow.childNodes[3].innerHTML;//////////
     $("#id").val(id)
     $("#biblia").val(biblia)
     $("#cita").val(cita)
     $("#referencia").val(referencia)
   }


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

var script_url =
    "https://script.google.com/macros/s/AKfycbxPgpFxWSZCfza9sBLhUTMw2pkbmcAMhIdiP6UC5ykXkxyvPagpAd4XrYMNtHJU2Ol5EQ/exec"; /////////////////

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') +
        '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();
