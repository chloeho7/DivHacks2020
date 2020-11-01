var counter = 5;

		setInterval(function(){
			counter--;

			if( counter >= 0 ){
				id = document.getElementById("count");
				id.innerHTML = counter;
			}

			if( counter === 0 ){
				id.innerHTML = "Click Here 👇";
      // add button element here to refresh
      //add function that does every 5 min

			}
		}, 1000);