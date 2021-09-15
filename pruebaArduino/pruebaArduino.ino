#include <Process.h>
int input;


void setup() {
  pinMode(2, OUTPUT);
  Serial.begin(115200);
}

void loop() {
  //Para conocer si existen datos pendientes en 
  //el bus de comunicación serial
  if (Serial.available()>0){

    input= Serial.read(); //Lee datos desde el puerto serial

    if (input=='1'){
        digitalWrite(2,HIGH); //Si mandamos un 1 a través de la consola
        //el LED se enciende
        delay(3000);
      }
    else
      {
        digitalWrite(2,LOW); //Si mandamos un valor diferente el LED
        //se apaga
      }
      
    Serial.println(input); //Muestra el dato con salto de línea
    }

}
