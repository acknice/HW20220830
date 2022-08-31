
async function getRandomNumber()
{
    function executionFunction(resolve) 
    {
        function generate()
        {
            let number = parseInt(Math.random() * 11);
            resolve(number);
        }
        setTimeout(generate, 500);
    }
    return new Promise(executionFunction);   
}

async function printRandomNumber()
{
    let value = await getRandomNumber();
    console.log(value);
}

printRandomNumber();

async function getCityData(city)
{
    let cityData = await fetch(`https://geocode.xyz/${city}?json=1`);
    let parsedData = await  cityData.json();
    console.log(parsedData.longt);
    console.log(parsedData.latt);
}

getCityData("phoenix");