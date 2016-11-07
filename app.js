function guidGenerator() {
	var S4 = function() {
		return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	};
	return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

var app = angular.module("app", ["xeditable", "textAngular"]);
// app.run(function(editableOptions) {
// 	editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
// });
app.controller('peopleController', function($scope) {
	randomID = guidGenerator();
	$scope.people = [{
		name: "N. Steadman",
		imgpath: "img/faces/!!!IMAGEPATHNAME!!!.jpg",
		DOB: "26/12/1890",
		id: randomID,
		serviceID: "12/4",
		birthPlace: "Whangarei, New Zealand",
		DOD: "15/05/1915",
		occupation: "WW1 Electrical engineer",
		deathPlace: "Dardanelles, Gallipoli, Turkey.",
		deathcause: "Killed in Action",
		bio: "<p>N. Steadman was the son of Lieutenant-Colonel Thomas Herbert Steadman <i>(Territorial Force, 15th (North Auckland) Regiment)</i> and Edith Minnie Steadman of Whangarei. </p><p>He was a pupil at Whangarei High School during 1904 and 1905 but left in 1906 to enter King’s College in Auckland.</p><p>After leaving school he devoted his studies to engineering.</p><p>When war broke out he enlisted and left with the Main Body as a lieutenant in the Auckland Infantry. </p><p>He took part in the defence of the Suez Canal and the landing at Gallipoli and was afterwards killed on the 8th May 1915 in the attack on Krithia in the Dardanelles.</p>"

	}];

	$scope.addnew = function() {
		randomID = guidGenerator();
		$scope.people.push({
			name: "F. Last Name",
			imgpath: "img/faces/!!!IMAGEPATHNAME!!!.jpg",
			DOB: "01/01/1800",
			id: randomID,
			serviceID: "12/4",
			birthPlace: "Place of Birth",
			DOD: "01/01/1800",
			occupation: "Occupation",
			deathPlace: "Place of Death",
			deathcause: "Cause of Death",
			bio: "Bio Here"
		});
	};

	$scope.delete = function(id) {
		$scope.people = $.grep($scope.people, function(e){ 
		     return e.id != id; 
		});
	};

	$scope.exportdata = function() {
		$(".exportdata").text(JSON.stringify($scope.people));
	}
});
