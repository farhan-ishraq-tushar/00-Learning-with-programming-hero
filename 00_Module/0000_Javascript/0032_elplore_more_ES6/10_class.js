const products = [
    {id: 1, name: 'Lenovo', price: 65000},
    {id: 2, name: 'dell', price: 55000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 140000},
]

class Product{
    country = 'Bangladesh';
    // constructor(){
    //     this.name = name; 
    // }

    speak(talk){
        console.log(`talking about ${talk}`);
    }
}

const lenovo = new Product();
console.log(lenovo);
// Output: Product { country: 'Bangladesh' }

lenovo.speak("Speak the truth");
// output: talking about Speak the truth