 $(document).ready(function() {
     $("body").html(function(a, cambiar) {
         return cambiar.replace('Ç', '');
     });
        $("body").html(function(a, cambiar2) {
         return cambiar2.replace('¨', '');
     });
     $("body").html(function(a, cambiar3) {
         return cambiar3.replace(/[']/g, '');
     });
 });
