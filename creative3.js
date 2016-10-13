

function OrderFormController($scope){

	 $scope.filterValue = function($event){
        if(isNaN(String.fromCharCode($event.keyCode))){
            $event.preventDefault();
        }
};

$scope.count = 1;
	$scope.sizes = [
		{
			name: 'Small',
			price: 8,
			active:true
		},{
			name: 'Medium',
			price: 10,
			active:false
		},
		{
			name: 'Large',
			price: 12,
			active:false
		},
		{
			name: 'Extra Large',
			price: 14,
			active:false
		}

	];


	$scope.crusts = [
		{
			name: 'Traditional',
			price: 0,
			active:true
		},{
			name: 'Whole Grain & Flax Seed',
			price: 1.00,
			active:false
		},{
			name: 'Rosemary Herb',
			price: 1.00,
			active:false
		}
	];


  $scope.sauces = [
		{
			name: 'Tomato Blend',
			price: 0.90,
			active:true
		},{
			name: 'Garlic Alfredo',
			price: 0.90,
			active:false
		},{
			name: 'Basil Pesto',
			price: 0.80,
			active:false
		}
	];

  $scope.toppings = [
		{
			name: 'Pork Sausage',
			price: 4,
			active:false
        },{
			name: 'Chicken Breast',
			price: 2.8,
			active:false
		},{
			name: 'Classic Pepperoni',
			price: 3,
			active:false
		},{
			name: 'Shaved Ham',
			price: 2,
			active:false
		},{
			name: 'Roasted Mushroom',
			price: 1.8,
			active:false
		},{
			name: 'Kalamata Olives',
			price: 1,
			active:false
		},{
			name: 'Green Pepper',
			price: 1,
			active:false
		},{
			name: 'Roasted Red Pepper',
			price: 1,
			active:false
		}
	];

  $scope.cheeses = [
		{
			name: 'Grated Parmesan',
			price: 1,
			active:false
		},{
			name: 'Crumbled Goat Cheese',
			price: 0.80,
			active:false
		},{
			name: 'Grated Cheddar',
			price: 0.80,
			active:false
		},{
			name: 'Fresh Grated Mozzarella',
			price: 1.20,
			active:false
		}
	];



	$scope.toggleActive = function(s){
		s.active = !s.active;

	};

	$scope.setActive = function(element, list)
	{
		for (k in list)
		{
			if(list[k]===element)
			{list[k].active=true;}
			else
			{list[k].active=false;}
		}

	}


	$scope.total = function(){

		var total = 0;

		angular.forEach($scope.sizes, function(s){
			if (s.active)
			{total+= s.price;}
		});

		angular.forEach($scope.crusts, function(s){
			if (s.active)
			{total+= s.price;}
		});

		angular.forEach($scope.sauces, function(s){
			if (s.active)
			{total+= s.price;}
		});

		angular.forEach($scope.toppings, function(s){
			if (s.active)
			{total+= s.price;}
		});

		angular.forEach($scope.cheeses, function(s){
			if (s.active)
			{total+= s.price;}
		});

		return total * $scope.count;
	};



}
