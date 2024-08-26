const averageTemp = []
averageTemp[0] = 31.9
averageTemp[1] = 35.3
averageTemp[2] = 42.4
averageTemp[3] = 52
averageTemp[4] = 60.8

function convertTemp(tc){
    tf = (tc*(9/5))+32
    return tf.toFixed(2)
}

averageTemp.forEach((item) => {
    console.log(item);
    console.log(convertTemp(item))
})