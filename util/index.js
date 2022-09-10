const csv = require('csv-parser')
const fs = require('fs')
const results = [];

let parsedJSON=[]
fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    // console.log(results);
    let previousFeature=""
    let tempJSON={}
    // console.log(results)
    results.forEach(csvContent => {
        
        Object.keys(csvContent).forEach(key => {
            if(key==="Feature"){
                if(previousFeature !== csvContent[key] ){
                    tempJSON={};
                }
                tempJSON[key]=csvContent[key];
               
            }
            if(key==="Areas"){
                //check the value "areas" : "Prospect"
                if(tempJSON[csvContent[key]] && typeof tempJSON[csvContent[key]]==="object"){
                    if(csvContent["Referece"] !== ''){
                        tempJSON[csvContent[key]].push({[csvContent["flow"]]:csvContent["Referece"]})
                    }else{
                        tempJSON[csvContent[key]].push(csvContent["flow"])
                    }
                }else{
                   
                    if(csvContent["Referece"] !== ''){
                        tempJSON[csvContent[key]]=[{[csvContent["flow"]]:csvContent["Referece"]}]
                    }else{
                        tempJSON[csvContent[key]]=[csvContent["flow"]]
                    }
                }
            }
        });
        if(previousFeature !== tempJSON['Feature']) {
            parsedJSON.push(tempJSON);
            previousFeature=tempJSON['Feature'];
        }
    });
    if(parsedJSON.length === 0){
        parsedJSON.push(tempJSON);
    }
    console.log(JSON.stringify(parsedJSON));
  });


  