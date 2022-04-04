const fs = require("fs");

const stringTo2dArray = (string, d1, d2) => string.split(d1).map(x => x.split(d2));

const readPlain = () => {
  fs.readFile("MOCK_DATA.csv", (err, data) => {
    if (err) throw err;
    const myArray = stringTo2dArray(data.toString(), /\r?\n/, ",");

    const allEmployees = myArray.map(item =>
        ({
            id: item[0],
            firstName: item[1],
            lastName: item[2],
            email: item[3],
            gender: item[4],
            ipAdress: item[5],
            color: item[6],
            ipParent: item[7],
        })
    );
    saveToFile(allEmployees);
  });
};
const saveToFile = (allEmployees) => {
  fs.writeFile("output.json", JSON.stringify(allEmployees), (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });
};

readPlain();
