function Human(name,age,sex,height,weight){
		this.name = name;
		this.age = age,
		this.sex = sex,
		this.height = height,
		this.weight = weight,
		console.log('Hello, I am ' + this.name + '. I am a ' + this.sex + '. I am ' + this.age + ' years old. My height is ' + this.height + ' , my weight is ' + this.weight);
	};

	Human.prototype.working = function(workPlace,salary){
		this.workPlace = workPlace;
		this.salary = salary;
		console.log('I work hard from dusk till down on the ' + workPlace + '. My salary is ' + salary);
	};	

	var Worker = new Human('Jack', 32, 'man', 180, 90);
	Worker.working('"ОАО Заборостроительный завод"', '10000$');


	var Worker = new Human('Lucie', 42, 'woman', 170, 70);
	

	Human.prototype.reviewSerials = function(educationPlace,grants){
		this.educationPlace = educationPlace;
		this.grants = grants;
		console.log('I am a student of the ' + educationPlace + '. My grants is ' + grants + '. I have a lot of time during my holidays, that is why I have already looked all serials.');
	};	

	var Student = new Human('Vasily', 19, 'man', 180, 90);
	Student.reviewSerials('KPI', '1000 UAH');

	var Student = new Human('Vasilyna', 16, 'woman', 190, 75);