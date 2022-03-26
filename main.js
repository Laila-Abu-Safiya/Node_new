const fs = require('fs')

const All_employee = {

};
const All_user={
    ID:"",
    First_name:"",
    Last_name:"",
    email:"",
    gender:"",
    IP_adress:"",
    color:"",
    IP_parent:""
}
function stringTo2dArray(string, d1, d2) {
    return string.split(d1).map(function(x){return x.split(d2)});
}
readPlain = () =>  {
fs.readFile('MOCK_DATA.csv', (err, data) => {
    if (err) throw err;
    let k=0;
    let text = data.toString();
    const myArray = stringTo2dArray(text, /\r?\n/ , ",");

     for( let i=1;i<myArray.length-1;i++){
         All_user.ID=myArray[i][0];
         All_user.First_name=myArray[i][1];
         All_user.Last_name=myArray[i][2];
         All_user.email=myArray[i][3];
         All_user.gender=myArray[i][4];
         All_user.IP_adress=myArray[i][5];
         All_user.color=myArray[i][6];
         All_user.IP_parent=myArray[i][7];
         All_employee[i]=Object.assign({},All_user);

     }
    saveToFile();
});
}
saveToFile = () =>{
    fs.writeFile('output.json', JSON.stringify(All_employee), err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    });
}

readPlain();
