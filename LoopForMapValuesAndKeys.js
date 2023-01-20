let mymap=new Map();

mymap.set('key1','Bangladesh');
mymap.set('key2','China');
mymap.set('key3','Australia');
mymap.set('key4','Canada');
mymap.set('key5','London');

for(let mapValue of mymap.values()){
    console.log(mapValue);
}
for(let myKeys of mymap.keys()){
    console.log(myKeys);
}
