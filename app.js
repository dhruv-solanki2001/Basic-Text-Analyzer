let content_element = document.querySelector("#text-area");
let content = null;
let counter = 0;
let bgcolors = ["violet","indigo","blue","green","yellow","orange","red","brown","gray"];
let fontcolors = ["black","black","black","black","black","black","black","black","black"];
let data = {
    words: 0,
    sentences: 0,
    uppercase: 0,
    lowercase: 0,
    spaces: 0,
    symbols: 0,
    digits: 0,
    vowels: 0,
    consonants: 0,
};

const set_data = () => {
    content = content_element.value;
    if(content!=null){        
        data.uppercase  = getlength(content.match(/[A-Z]/g));                       //console.log("uppercase  => " + content.match(/[A-Z]/g));                   
        data.lowercase  = getlength(content.match(/[a-z]/g));                       //console.log("lowercase  => " + content.match(/[a-z]/g));                   
        data.spaces     = getlength(content.match(/[\s]/g));                        //console.log("spaces     => " + content.match(/\s/g));                      
        data.symbols    = getlength(content.match(/[^\w\s]/g));                     //console.log("symbols    => " + content.match(/[^\w\s]/g));                 
        data.digits     = getlength(content.match(/[\d]/g));                        //console.log("digits     => " + content.match(/[\d]/g));                    
        data.vowels     = getlength(content.match(/[aeiou]/gi));                    //console.log("vowels     => " + content.match(/[aeiou]/gi));                
        data.consonants = getlength(content.match(/[bcdfghjklmnpqrstvwxyz]/gi));    //console.log("consonants => " + content.match(/[bcdfghjklmnpqrstvwxyz]/gi));
        data.sentences  = getlength(content.match(/[\./g]/g));                      //console.log("sentences  => " + content.match(/\./gi));                     
        data.words      = getlength(content.match(/[a-zA-Z0-9]+/g));                //console.log("words      => " + content.match(/[a-zA-Z]+/g));      
        localStorage.setItem("data", JSON.stringify(data));
        window.location = "result.html";
    }
    if(content==""){
        alert("Please enter some data");
        window.location = "index.html";
    }
}
const getlength = (obj) => (obj == null ? 0 : obj.length);

const show_data = () => {
    let shown_data = JSON.parse(localStorage.getItem("data"));
    console.log(shown_data);
    let contentforhtml="";
    for(obj in shown_data){
        contentforhtml += `<div class="child-info" style="background-color: ${bgcolors[counter]}; color: ${fontcolors[counter]}; cursor"><h2 class="counter">${ shown_data[obj] }</h2>  <h3>${obj}</h3></div>`;
        counter++;
        console.log(shown_data[obj]);
        console.log(obj);
    }
    document.querySelector(".parent-info").innerHTML = contentforhtml;
}