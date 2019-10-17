const URL = "http://data.fixer.io/api/latest?access_key=341899558d3cbc3f8b6fa51ad89314a5"  /// URL provaider

//AJAX
function getData(){
   
  //1) create connection object
  var xhr = new XMLHttpRequest(); // AJAX
  //2) configure a url
  xhr.open("Get",URL);
  //3) send request
  xhr.send();
  //4)waiting for data
  xhr.onload = function(){
      var data = JSON.parse(xhr.responseText)
      var currencies = {
          USD: data.rates.USD,
          MDL: data.rates.MDL,
          RON: data.rates.RON,
         
      }
      showCurriencies(currencies)
      showData(data)
    //   console.log(currencies)
  }

}

function showCurriencies(currencies){
      for(var code in currencies){
         var table = document.getElementById("rates")
         var tr = document.createElement('tr')
         var td = document.createElement('td')
         var td2 = document.createElement('td')
          td.innerText = `${code}`
          td2.innerText = `${currencies[code]}`
          table.appendChild(tr)
          tr.appendChild(td)
          tr.appendChild(td2)        
        //   console.log(code,currencies[code])
      }
     
    }
    function showData(data){
        var div = document.createElement("div")
        div.style.marginLeft = '18px'
        var h3 = document.createElement('h3')
        h3.innerText = `${data.date}`
        div.appendChild(h3)
        document.body.appendChild(div)
        
        
    

        
    }
    // de facut fix asa dar prin fetch API 