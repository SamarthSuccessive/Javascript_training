// 1. Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

const firstFunction=()=>{
    console.log("Hello, I am the first function ");

}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '74d44d37aemsh787e379205ffa60p144bcdjsn11d0cc3e1d96',
		'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
	}
};

//We can also apply the async await instad of using then
const thirdFunction=(callback)=>{
    
    try{
        fetch('https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat',options
    ).then((resp)=>{
        return resp.json();
    }).then((resp)=>{
        console.log(resp);
        callback();
    }
    );
    }
    catch(err)
    {
        console.log(err);
    }
}

const secondFuntion=()=>{
   console.log("Hello i am 2");
}

firstFunction();
thirdFunction(secondFuntion);






