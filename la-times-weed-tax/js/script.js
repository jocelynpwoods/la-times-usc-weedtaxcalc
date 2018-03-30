/* script.js 
   Author:
   Date:
*/
 

$(document).ready(function(){ // begin document.ready block
	

		// Build the options in datalist#findcity
		var leng = weedtax.length;

		for (i = 0; i < leng; i++) {

	    	$('#findcity').append('<option value="'+ weedtax[i].city + '" data-id="'+ i +'"></option>');
		}


		// grab the data-id for the selected city
		var findcity;

	    $('#input').change(function(){
        	findcity = $("#findcity option[value='" + $('#input').val() + "']").attr('data-id');
    	
    		findcity = Number(findcity);

    	});



		$('.taxbtn').click(function(){

			var weedamt = $('.howmuch').val();

			var rectax = weedtax[findcity].rectax;

			var total = rectax/100 * weedamt

			var reccost = Number(weedamt) + Number(total)




			var cityrectax = weedtax[findcity].cityrectax;

			var total2 = cityrectax/100 * reccost

			var reccitycost = Number(total2) + Number(reccost)



			var statetax = weedtax[findcity].statetax;

			var citytax = weedtax[findcity].citytax;

			var total3 = statetax/100 + citytax/100

			var total4 = Number(total3) * Number(reccitycost)

			var totalcost = Number(total4) + Number(reccitycost)

			var totalcost = totalcost.toFixed(2);


			$('.setme').html('<p>' + 'After taxes, you will pay $ ' + totalcost + '.' + '</p>');
			

	});


});


//end document.ready block
