function response(){
    var n = document.getElementById("in").value;
    fetch('https://restcountries.eu/rest/v2/all').then(resp=>{
        return resp.json();
    }).then(data=>{
        var k = true;
        for(var i in data)
        {
            if(n.toLowerCase()===data[i].name.toLowerCase())
            {
                document.getElementById("out").innerHTML="Capital of "+ data[i].name + " is "+data[i].capital;
                k=false;
                break;
            }
        }
        if(k)
            document.getElementById("out").innerHTML="Country "+n+" not found!";

    }).catch(reason=>{
        console.log(reason);
    });
}
