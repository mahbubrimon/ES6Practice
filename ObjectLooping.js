let ObjectLooping={
    name: 'Mahbub Rimon',
    age: 30,
    marride: true,
    job: 'BD Navy',
    city: 'Shariatpur',
}

for(profile in ObjectLooping){
    // console.log(profile);
    let value=ObjectLooping[profile];
    console.log(profile,value);
}




