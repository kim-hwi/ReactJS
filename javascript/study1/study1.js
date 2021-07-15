//import "./styles.css";


document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;

// function start(){
//   alert('aa');
// }
function changeCity() {
  let city = document.getElementById("city").value;

  document.getElementById("region_02").style.display = "none";
  document.getElementById("region_064").style.display = "none";

  document.getElementById("region_" + city).style.display = "";

  //	    let city = $('#city').val();
  //	    $('#region_02').hide();
  //	    $('#region_064').hide();
  //	    $('#region_'+city).show();
}



function say() {
  alert('asd');
}
//<script type="text/javascript" src="study1.js"> </script>






// import "./styles.css";


// function regist() {
//   alert(document.getElementById("name").value);
//   alert(document.getElementById("city").value);
//   //alert($("#name").val());

// }

// function changeCity() {
//   let city = document.getElementById("city").value;

//   document.getElementById("region_02").style.display = "none";
//   document.getElementById("region_064").style.display = "none";

//   document.getElementById("region_" + city).style.display = "";

//   //	    let city = $('#city').val();
//   //	    $('#region_02').hide();
//   //	    $('#region_064').hide();
//   //	    $('#region_'+city).show();
// }

// var name = "km";
// const ma = " aaa ${name} ";
// //alert(ma)
// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel 
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
