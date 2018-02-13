(function(){
	var app = angular.module('myStrings',[]);
	app.controller('StringController',function($scope){
		$scope.today = new Date();
	});
	app.controller('sliderController',function($scope){
		$scope.sliderH1 = "Software Cake";		
		$scope.sliderP = "The purpose of creating Software Cake is to present a visual "+
			"assistant for developers and tech users alike. We will help them manage and "+
			"keep track of their work flow. Now, there are other companies that present "+
			"assistants for tech users, but we do it differently. The general assistant "+
			"takes in information and runs along a preset process. This way is called a "+
			"'One size fits all' type of programming.";
		$scope.sliderP2 = "Which leaves the users with a lack "+
			"of personalization in the functionality of their own assistant. Each software "+
			"we produce is meant to be customized and developed by it's owner. So that it can "+
			"can do what you want it to do and very little extra. So you don't need to be a "+
			"programmer to have customized assistant that it tailored for you. This is how we "+
			"do it differently, this is how we dare to know. - Software Cake";
		
		$scope.changeSide1 = function(){
			$scope.sliderH1 = "Software Cake";
			
			$scope.sliderP = "The purpose of creating Software Cake is to present a visual "+
			"assistant for developers and tech users alike. We will help them manage and "+
			"keep track of their work flow. Now, there are other companies that present "+
			"assistants for tech users, but we do it differently. The general assistant "+
			"takes in information and runs along a preset process. This way is called a "+
			"'One size fits all' type of programming.";
			$scope.sliderP2 = "Which leaves the users with a lack "+
			"of personalization in the functionality of their own assistant. Each software "+
			"we produce is meant to be customized and developed by it's owner. So that it can "+
			"can do what you want it to do and very little extra. So you don't need to be a "+
			"programmer to have customized assistant that it tailored for you. This is how we "+
			"do it differently, this is how we dare to know. - Software Cake";;
		}
		
		$scope.changeSide2 = function(){
			$scope.sliderH1 = "Our Reasons";
			$scope.sliderP = "Why do we work hard to bring you this technology. That's simple."
			+" We want you the users to feel like you technology is something special. Our "+
			"founder believes that we have the means to make the future technology that we "+
			"see in movies. We just have to make it."
			$scope.sliderP2 = "So we've teamed up the developers and the UI designers to craft"+
			"it. This way we present a futuristic feel to the software as well as the "+
			"functionality of futuristic software. We know that seems too easy to make that happen"
			+" but it is roughly that easy. We take what we know and build on it and craft what ever "+
			"we want and here at Software Cake we want the to be future now.";
		}
		$scope.changeSide3 = function(){
			$scope.sliderH1 = "About Our Leader";
			$scope.sliderP = "Hi, my name is Thyraellis Howard I am the creator of Software Cake."+
			"I am a Software Developer with a Bachelors in Software Development as if 02-22-18. I take joy"+
			" In creating and learning new things. I've interned with an amazing non-profit (Think of Us) and crafted sites"+
			" for some small local businesses. I would consider myself a full stack Developer. Not because"+
			" I have taken classes to have that teach you front-end and back-end but because I take joy in doing both."+
			" Front-end allows me to be as creative as I want to be and yet structure my application."+
			" Were as Back-end lets me animate and process things that only add to the structuring of an amazing app.";
			$scope.sliderP2 = "I first got into programming because I was fascinated in how computers worked."+
			" So, I took up robotics in Elementary School and continued doing it in Middle School."+
			" In High School I took up Electronics part 1 and 2 at the Richmond Technical Center."+ 
			" So I went to college to feed my curiosity and here I am a Software Developer.";
		}
	});	
})();