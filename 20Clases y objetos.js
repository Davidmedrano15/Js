/*clases y objetos 

   Objeto  {
      PRopiedades (variables)
      -cabeza
      -patas
      .cola

      Metodos (fuhciones)
      -maullar
      -caminar
      -saltar
   }

      */    

            /* CLASE  */


/* PROPIEDADES */

function Gato (nombre, edad, peso){
    this.uno = nombre;
    this.dos = edad;
    this.tres = peso;
 
 /* METODO  */   
 
    this.correr = function(){
       document.write("el gato corre");
    }
 
    
    this.correr = function(){
       document.write("el gato", nombre, "corre");
    }
 
 
 
 };
 
 
 /* CREANDO OBJWTOS DE LA CLASE */
 
 var gato1 = new Gato("Peludo", 4, 32);
 var gato2 = new Gato("Manchas", 7, 5);
 
 document.write(gato1.uno);
 document.write(gato2.uno);
 
 gato1.correr();
 
 //-------------------------
 
 class Gato{
    constructor(nombre, edad, peso){
       this.nombre = nombre;
       this.edad = edad;
       this.peso = peso;
 }
    correr(){
       document.write("el gato ", nombre, "corre")
    }
 };
  
 var gato1 = new Gato("Peludo", 4, 32);
 var gato2 = new Gato("Manchas", 7, 5);
 
 
 
 document.write(gato1.nombre);
 gato1.correr();
 
 
 //-----------
 
 class Animal {
    constructor(tipo, raza){
       this.cero = tipo;
       this.raza = raza;
    };
 };
 
 class Domesticos extends Animal {
    constructor(cero, nombre, edad, peso) {
       super(cero)
          this.uno = nombre;
          this.dos = edad;
          this.tres = peso;
 
    };
 };
 
 
 
 var animal1 = new Domesticos("Hogar", "Budy", 8, 6 );
 var animal2 = new Domesticos("caza", "yogi", 5, 2);
 var unico = new Animal("salvaje", "pura" )
 document.write( animal1.cero);
 
 document.write( unico.cero)


 class animal {
   constructor(especie,edad,color) {
      this.especie = especie;
      this.edad = edad;
      this.color = color;
      this.info = `soy ${this.especie}, tengo ${edad} años y soy de color ${this.color}`;
   }
   verInfo(){
      document.write(this.info + "<br>");
   }
 };

 let perro = new animal("perro",5,"cafe");
 let gato = new animal("gato",2,"negro");
 let pajaro = new animal("pajaro",4,"verde");

 perro.info();
 gato.info();
 pajaro.info();



 class animal {
   constructor(especie,edad,color) {
      this.especie = especie;
      this.edad = edad;
      this.color = color;
      this.info = `soy ${this.especie}, tengo ${edad} años y soy de color ${this.color}`;
   }
   verInfo(){
      document.write(this.info + "<br>");
   }
   ladrar(){
       if (this.especie == "perro"){
           document.write("waw " + "<br>");
       }else {
           document.write("no puede ladrar, ya que es un " + this.especie +  "<br>");
       }
   }
 };

 let perro = new animal("perro",5,"cafe");
 let gato = new animal("gato",2,"negro");
 let pajaro = new animal("pajaro",4,"verde");

 perro.verInfo();
 gato.verInfo();
 pajaro.verInfo();

 perro.ladrar();
 gato.ladrar();
 pajaro.ladrar(); 




class Animal {
   constructor(especie,edad,color) {
      this.especie = especie;
      this.edad = edad;
      this.color = color;
      this.info = `soy ${this.especie}, tengo ${edad} años y soy de color ${this.color}`;
   }
   verInfo(){
      document.write(this.info + "<br>");
   }

 };

 class Perro extends Animal {
    constructor(especie,edad,color,raza){
       super(especie,edad,color);
       this.raza = raza;
    }
    ladrar() {
       alert("wuaw");
    }
 }

 const perro = new Perro("perro",5,"cafe","doberman");
 const gato = new Animal("gato",2,"negro");
 const pajaro = new Animal("pajaro",4,"verde");

 perro.verInfo();
 gato.verInfo();
 pajaro.verInfo();

 perro.ladrar();
 gato.ladrar();
 pajaro.ladrar();
 