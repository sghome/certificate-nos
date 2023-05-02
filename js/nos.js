let fname = document.getElementById("fname");
let lname = document.getElementById("lname");

let length = document.getElementById("length");

let form = document.getElementById("form");
let container = document.querySelector(".container");

let generate = document.getElementById("Generate");
generate.addEventListener("click", (e) => {
  let first_name = fname.value;
  let last_name = lname.value;

  let c_length = length.value;

  e.preventDefault();
  fname.value = "";
  lname.value = "";

  length.value = "";

  form.style.display = "none";
  container.style.backgroundColor = "white";

  //Random Digits
  a = 1; //Min value
  b = 9; //Max Value
  let rand = a + (b - 1) * Math.random(); //Main Formula
  let rand2 = Math.round(rand);
  c = 1; //Min value
  d = 9; //Max Value
  let rand3 = c + (d - 1) * Math.random(); //Main Formula
  let rand4 = Math.round(rand3);
  
  
  
  
  

  let certificate = document.getElementById("certificate");
  certificate.style.display = "block";
  certificate.innerHTML = `<div class="outer">
  
  <div class="outer" style="background-image: url('https://cdn.glitch.global/2bc9552a-c9df-4a0a-bdf1-af20de3c372e/nos-cert.png')">
      
  <div class="light-br">
      <div class="dark-br">
          <div class="main-content">
             
              <div class="right-content">
                  
                  <div class="congrats">
                      
                      <h3>${first_name} ${last_name}</h3>
                  </div>
                  
                 
                  <div class="authority">
                      <div class="part-1">
                          <img id="sign" src="img/Sign2.JPG" alt="">
                          <h3>President, Neotropical Ornithological Society</h3>
                      </div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div
                          class="vl"></div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div
                          class="part-2">
                          <h3>Sociedad de Ornitología Neotropical</h3>
                          <h3>ornitologianeotropical.org</h3>
                          <h3>@ornitologianeot</h3>
                      </div>
                  </div>
                  <div class="certificate-id">Certificate Id: AU${rand4}IZ${rand2}a${rand2}rPeUmO_IE${rand4}R${rand4}0L${rand4}ac${rand2}sN</div>
              </div>
          </div>
      </div>
  </div>
  </div>`;
  document.getElementById("download").style.display = "block";
});

//Download PDF

let download = document.getElementById("download");
download.addEventListener("click", () => {
  var opt = {
    margin: 1,
    filename: "Life-Membership-NOS-certificate.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "px", format: "a2", orientation: "landscape" },
  };

  html2pdf().set(opt).from(certificate).save();
});
