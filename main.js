function calculateChange() {
	
	//Get Total Input Element
	let totalElement = document.getElementById('total');
	
	//Get Total Value Specified By User
	let total = totalElement && totalElement.value;
	
	//If total is a valid number
	if(total && !isNaN(total)) {
		
		//Standard USD currency value
		let usdCurrency = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 50, 100];
		
		//Change to be returned
		let change = {
			'0.01': { name: 'Pennies', count: 0 },
			'0.05': { name: 'Nickels', count: 0 },
			'0.1': { name: 'Dimes', count: 0 },
			'0.25': { name: 'Quarters', count: 0 },
			'1': { name: '1 Dollar Bills', count: 0 },
			'5': { name: '5 Dollar Bills', count: 0 },
			'10': { name: '10 Dollar Bills', count: 0 },
			'20': { name: '20 Dollar Bills', count: 0 },
			'50': { name: '50 Dollar Bills', count: 0 },
			'100': { name: '100 Dollar Bills', count: 0 }
		};
		
		//Parse change to float and set 0.00 format
		total = parseFloat(total).toFixed(2);
		
		//Update value of total input element to parsed total
		totalElement.value = (total);
		
		//Track Current Amount
		let currentAmountOfCurrency;
		
		//Clone total to temporary variable
		let tempTotal = parseFloat(total);
		
		//Iterate array from right to left
		for (let position = usdCurrency.length - 1; tempTotal > 0 && position >= 0; position--) {
			
			//Gets the currency value of the current position in usd currency array
			let currencyValue = usdCurrency[position];
			
			//If the currency value is less than or equal to the temporary total
			if(currencyValue <= tempTotal) {
				
				//Get current amount of currency
				currentAmountOfCurrency = Math.floor(tempTotal / currencyValue);
				
				//Update change count using currencyValue key
				change[currencyValue].count = currentAmountOfCurrency;
				
				//Update temporary total
				tempTotal = (tempTotal - (currencyValue * currentAmountOfCurrency));
				
			}

		}
		
		let result = ['Change for ' + total + ': '];
		for (let key in change) {
			let currentObject = change[key];
			result.push(currentObject.name + ': ' + currentObject.count);
		}
		alert(result.join('\n'));
		
	}
	
	else {
		
		alert("Invalid Total");
		
	}
	
}