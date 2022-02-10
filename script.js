function Auto(brand, year, color, fuelLeft) {
  this.brand = brand;
  this.year = year;
  this.color = color;
  this.fuelLeft = fuelLeft; 
}
//пишем первый метод наследованием прототипа (лучше метод писать прототипом);

Auto.prototype.snowInfo = function () {
  console.log(`Brand: ${this.brand}, Year: ${this.year}, Color: ${this.color}, Fuel left: ${this.fuelLeft}`
  );
}

//пишем второй метод наслдеованием прототипа где пишем при каждом вызове drive чтобы топливо уменьшалось на 10 единиц

Auto.prototype.drive = function() {
// если у нас в баке больше 0 единиц ты берем и уменьшаем по 10 единиц топлива бензина  
  if(this.fuelLeft > 0){
    this.fuelLeft -= 10;
  }
  else{
    console.log('А всё, приехали!');
  }
}

//создаем экземпляры 
const myAuto = new Auto('BMW', '2012', 'black', 20);

myAuto.snowInfo();
myAuto.drive();
myAuto.snowInfo();
myAuto.drive();
myAuto.snowInfo();
myAuto.drive();
myAuto.snowInfo();