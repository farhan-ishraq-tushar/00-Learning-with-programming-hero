const price = 5000;

if (price >=5000){
    // 10% discount
    const discount = price * 10 / 100;
    console.log(discount);
    const payment = price - discount;
    console.log(payment);
}
else if(price > 2500){
    // 5% discount
    const discount = price * 5 / 100;
    const payment = price - discount;
    console.log(payment)
}
else {
    console.log(price);
}

