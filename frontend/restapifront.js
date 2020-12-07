

var updateView = async (button) => {
  if(button.dataset.querytype=="by_coursecode"){
    let queryValue= document.querySelector('#codeQuery').value;
    Access-Control-Allow-Origin: "https://brianso217.netlify.app/frontend/restapifront.html"
    api= `https://cus1172finalprojectso.herokuapp.com/api/by_coursecode/${queryValue}`;
  }
  if(button.dataset.querytype=="by_undergrad"){
    Access-Control-Allow-Origin: "https://brianso217.netlify.app/frontend/restapifront.html"
    api=`https://cus1172finalprojectso.herokuapp.com/api/by_courselevel/undergraduate`;
  }
  if(button.dataset.querytype=="by_graduate"){
    Access-Control-Allow-Origin: "https://brianso217.netlify.app/frontend/restapifront.html"
    api=`https://cus1172finalprojectso.herokuapp.com/api/by_courselevel/graduate`;
  }
  if(button.dataset.querytype=="by_coursetitle"){
    let queryValue= document.querySelector('#titleQuery').value;
    Access-Control-Allow-Origin: "https://brianso217.netlify.app/frontend/restapifront.html"
    api= `https://cus1172finalprojectso.herokuapp.com/api/by_coursetitle/${queryValue}`;
  }
  if(button.dataset.querytype=="by_courseprofessor"){
    let queryValue= document.querySelector('#professorQuery').value;
    Access-Control-Allow-Origin: "https://brianso217.netlify.app/frontend/restapifront.html"
    api= `https://cus1172finalprojectso.herokuapp.com/api/by_courseprofessor/${queryValue}`;
  }
  const data= await fetch(api);
  const model= await data.json();
  render_view(model);

}


var render_view= (model) => {
  var source= document.querySelector("#show_results_view").innerHTML;
  var template= Handlebars.compile(source);
  var html= template(model);

  document.querySelector("#results").innerHTML= html;

}
