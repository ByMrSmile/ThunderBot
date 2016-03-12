dataCenter = function(){
			function constructorFn(){
				
			};
			
			var content = [];
			
			var newsblock = "Hey, Data Center is online!";
			
			constructorFn.getData = function(input){
				if (typeof input != "undefined"){
					if (input != null){
						// TODO: check who asks
						if (input.block_name === "news"){
							// give him news
							//$.ajax({
							//			url: "",
							//			
							//			success: input.callback();
							//		}
							//	   );
							
							content.push({
											 id: "newsblock",
											 data: "<div>blablabla</div>"
										  });
							
							input.callback(
											{
												news: newsblock, 
												addon: "blablabla",
												tododo: function (){alert("weee!!!!");}
											}
										   );
						}
					}
				}
			}
		
			return constructorFn;
}();