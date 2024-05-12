function DisplayFormValues()
    {
        var str = '';
        var elem = document.getElementById('taxform').elements;
        for(var i = 0; i < elem.length; i++)
        {
            str += "<b>Type:</b>" + elem[i].type + "&nbsp&nbsp";
            str += "<b>Name:</b>" + elem[i].name + "&nbsp;&nbsp;";
            str += "<b>Value:</b><i>" + elem[i].value + "</i>&nbsp;&nbsp;";
			str += "<b>Checked:</b><i>" + elem[i].checked + "</i>&nbsp;&nbsp;";
            str += "<BR>";
        } 
        document.getElementById('lblValues').innerHTML = str;
    }


///////////////////
	
function uncheckAll(field)
{
for (i = 0; i < field.length; i++)
	field[i].checked = false ;
}


//////////////////////


 function populateYearSelect(id)

 {
     d = new Date();
     curr_year = d.getFullYear();
  document.getElementById(id).options[0] = new Option('none','none');
     for(i = 1; i < 30; i++)
     {
         document.getElementById(id).options[i] = new Option(curr_year-i,curr_year-i);
     }

 }


//////////////////


function show(id)
{
     if (document.getElementById(id).style.display == 'none')
     {
          document.getElementById(id).style.display = 'block';
      }
 }
 
/////////////////////
 
function showall()
{	

		document.getElementById('q4').style.display = 'block';


 } 

//////////////////////////
 
function hide(id)
 {
           document.getElementById(id).style.display = 'none';

 }

/////////////////////

function CheckRev()
{
		if (document.taxform.revaction1.checked == true || document.taxform.revaction2.checked == true || document.taxform.revaction3.checked == true || document.taxform.revaction4.checked == true || document.taxform.revaction5.checked == true )

		{ document.getElementById('revproposed').style.display = 'block' }

		else
		{ document.getElementById('revproposed').style.display = 'none' }
}


/////////////////


function Checknotice()
{
		if (document.taxform.irsnotice1.checked == true || document.taxform.irsnotice2.checked == true || document.taxform.irsnotice3.checked == true  )

		{ document.getElementById('irsnoticeyes').style.display = 'block' }

		else
		{ document.getElementById('irsnoticeyes').style.display = 'none' }
}

///////////////////////////

function ChecknoticeB()
{
		if (document.taxform.irsnotice1B.checked == true || document.taxform.irsnotice2B.checked == true || document.taxform.irsnotice3B.checked == true  )

		{ document.getElementById('irsnoticeyesB').style.display = 'block' }

		else
		{ document.getElementById('irsnoticeyesB').style.display = 'none' }
}

/////////////////////////////

function ShowNine()
{
if (document.taxform.q1totalirsliability.value =="0" || document.taxform.q1totalirsliability.value =="0.0")
{ document.getElementById('q9a').style.display = 'none';
  document.getElementById('q9no').style.display = 'block';
 }
else { document.getElementById('q9a').style.display = 'block';
document.getElementById('q9no').style.display = 'none'; }

}

////////////////////////////

  function checkNumeric(taxform)
  {
    var lstLetters = objName;
  var lstReplace = lstLetters.replace(/\,/g,'');
 
  
  }


//////////////////////

function roundNumber(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}


/////////////////////


 function validate() 
{

/*
 if (document.taxform.name.value == "") {
 { document.getElementById('q1').style.display = 'none';
 document.getElementById('q0').style.display = 'block';
alert( "Please enter your name ." );

 }}
 
 if (document.taxform.areacode.value == "" || document.taxform.prefix.value == "" || document.taxform.phone.value == "") {
 { document.getElementById('q1').style.display = 'none';
 document.getElementById('q0').style.display = 'block';
alert( "Please enter your full phone number so we can contact you." );

 }}
 
 if (document.taxform.email.value == "") {
 { document.getElementById('q1').style.display = 'none';
 document.getElementById('q0').style.display = 'block';
alert( "Please enter your email address." );

}}

*/
    
	

}

///////////////////////////////


function calculate(taxform)
{


var q1incomeamount1 = taxform.q1incomeamount1.value;
var q1incomeamount2 = taxform.q1incomeamount2.value;
var q1incomeamount3 = taxform.q1incomeamount3.value;
var q1incomeamount4 = taxform.q1incomeamount4.value;
var q1incomeamount5 = taxform.q1incomeamount5.value;

var q1employmentamount1 = taxform.q1employmentamount1.value;
var q1employmentamount2 = taxform.q1employmentamount2.value;
var q1employmentamount3 = taxform.q1employmentamount3.value;
var q1employmentamount4 = taxform.q1employmentamount4.value;
var q1employmentamount5 = taxform.q1employmentamount5.value;

var q1civilpenaltyamount1 = taxform.q1civilpenaltyamount1.value;
var q1civilpenaltyamount2 = taxform.q1civilpenaltyamount2.value;
var q1civilpenaltyamount3 = taxform.q1civilpenaltyamount3.value;
var q1civilpenaltyamount4 = taxform.q1civilpenaltyamount4.value;
var q1civilpenaltyamount5 = taxform.q1civilpenaltyamount5.value;


var q1totalirsliability = taxform.q1totalirsliability.value;
var q1totalirsliabilitydup = taxform.q1totalirsliabilitydup.value;

// question 2
var q2totalirsliability = taxform.q2totalirsliability.value;

var totalassesedliability1plus2 = taxform.totalassesedliability1plus2.value;

// question 2
var q2incomeamount1 = taxform.q2incomeamount1.value;
var q2incomeamount2 = taxform.q2incomeamount2.value;
var q2incomeamount3 = taxform.q2incomeamount3.value;
var q2incomeamount4 = taxform.q2incomeamount4.value;
var q2incomeamount5 = taxform.q2incomeamount5.value;


var q2employmentamount1 = taxform.q2employmentamount1.value;
var q2employmentamount2 = taxform.q2employmentamount2.value;
var q2employmentamount3 = taxform.q2employmentamount3.value;
var q2employmentamount4 = taxform.q2employmentamount4.value;
var q2employmentamount5 = taxform.q2employmentamount5.value;

/////////// zero out items if deleted 

if (taxform.q1incomeamount1.value =="") {taxform.q1incomeamount1.value="0.0";}
if (taxform.q1incomeamount2.value =="") {taxform.q1incomeamount2.value="0.0";}
if (taxform.q1incomeamount3.value =="") {taxform.q1incomeamount4.value="0.0";}
if (taxform.q1incomeamount4.value =="") {taxform.q1incomeamount4.value="0.0";}
if (taxform.q1incomeamount5.value =="") {taxform.q1incomeamount5.value="0.0";}

if (taxform.q1employmentamount1.value =="") {taxform.q1employmentamount1.value="0.0";}
if (taxform.q1employmentamount2.value =="") {taxform.q1employmentamount2.value="0.0";}
if (taxform.q1employmentamount3.value =="") {taxform.q1employmentamount3.value="0.0";}
if (taxform.q1employmentamount4.value =="") {taxform.q1employmentamount4.value="0.0";}
if (taxform.q1employmentamount5.value =="") {taxform.q1employmentamount5.value="0.0";}

if (taxform.q1civilpenaltyamount1.value =="") {taxform.q1civilpenaltyamount1.value="0.0";}
if (taxform.q1civilpenaltyamount2.value =="") {taxform.q1civilpenaltyamount2.value="0.0";}
if (taxform.q1civilpenaltyamount3.value =="") {taxform.q1civilpenaltyamount3.value="0.0";}
if (taxform.q1civilpenaltyamount4.value =="") {taxform.q1civilpenaltyamount4.value="0.0";}
if (taxform.q1civilpenaltyamount5.value =="") {taxform.q1civilpenaltyamount5.value="0.0";}

// question2
if (taxform.q2incomeamount1.value =="") {taxform.q2incomeamount1.value="0.0";}
if (taxform.q2incomeamount2.value =="") {taxform.q2incomeamount2.value="0.0";}
if (taxform.q2incomeamount3.value =="") {taxform.q2incomeamount3.value="0.0";}
if (taxform.q2incomeamount4.value =="") {taxform.q2incomeamount4.value="0.0";}
if (taxform.q2incomeamount5.value =="") {taxform.q2incomeamount5.value="0.0";}

if (taxform.q2employmentamount1.value =="") {taxform.q2employmentamount1.value="0.0";}
if (taxform.q2employmentamount2.value =="") {taxform.q2employmentamount2.value="0.0";}
if (taxform.q2employmentamount3.value =="") {taxform.q2employmentamount3.value="0.0";}
if (taxform.q2employmentamount4.value =="") {taxform.q2employmentamount4.value="0.0";}
if (taxform.q2employmentamount5.value =="") {taxform.q2employmentamount5.value="0.0";}

// question 4

if (taxform.levied.value =="") {taxform.levied.value="0.0";}
if (taxform.q4banklevy1.value =="") {taxform.q4banklevy1.value="0.0";}
if (taxform.q4banklevy2.value =="") {taxform.q4banklevy2.value="0.0";}
if (taxform.q4banklevy3.value =="") {taxform.q4banklevy3.value="0.0";}



//////////////


taxform.q1totalirsliability.value = ( 
  parseFloat(taxform.q1incomeamount1.value.replace(",",""))
+ parseFloat(taxform.q1incomeamount2.value.replace(",",""))
+ parseFloat(taxform.q1incomeamount3.value.replace(",",""))
+ parseFloat(taxform.q1incomeamount4.value.replace(",",""))
+ parseFloat(taxform.q1incomeamount5.value.replace(",",""))
+ parseFloat(taxform.q1employmentamount1.value.replace(",",""))
+ parseFloat(taxform.q1employmentamount2.value.replace(",",""))
+ parseFloat(taxform.q1employmentamount3.value.replace(",",""))
+ parseFloat(taxform.q1employmentamount4.value.replace(",",""))
+ parseFloat(taxform.q1employmentamount5.value.replace(",",""))
+ parseFloat(taxform.q1civilpenaltyamount1.value.replace(",",""))
+ parseFloat(taxform.q1civilpenaltyamount2.value.replace(",",""))
+ parseFloat(taxform.q1civilpenaltyamount3.value.replace(",",""))
+ parseFloat(taxform.q1civilpenaltyamount4.value.replace(",",""))
+ parseFloat(taxform.q1civilpenaltyamount5.value.replace(",",""))

);

taxform.q2totalirsliability.value = ( 
  parseFloat(taxform.q2incomeamount1.value.replace(",",""))
+ parseFloat(taxform.q2incomeamount2.value.replace(",",""))
+ parseFloat(taxform.q2incomeamount3.value.replace(",",""))
+ parseFloat(taxform.q2incomeamount4.value.replace(",",""))
+ parseFloat(taxform.q2incomeamount5.value.replace(",",""))
+ parseFloat(taxform.q2employmentamount1.value.replace(",",""))
+ parseFloat(taxform.q2employmentamount2.value.replace(",",""))
+ parseFloat(taxform.q2employmentamount3.value.replace(",",""))
+ parseFloat(taxform.q2employmentamount4.value.replace(",",""))
+ parseFloat(taxform.q2employmentamount5.value.replace(",",""))
);

taxform.totalassesedliability1plus2.value = ( parseFloat(taxform.q1totalirsliability.value) + parseFloat(taxform.q2totalirsliability.value) );

taxform.q1totalirsliabilitydup.value = ( parseFloat(taxform.q1totalirsliability.value));



}////////////// end calculate taxform


function clearChildren(element) {
   for (var i = 0; i < element.childNodes.length; i++) {
      var e = element.childNodes[i];
      if (e.tagName) switch (e.tagName.toLowerCase()) {
         case 'input':
            switch (e.type) {
               case "radio":
               case "checkbox": e.checked = false; break;
               case "button":
               case "submit":
               case "image": break;
               default: e.value = '0.0'; break;
            }
            break;
         case 'select': e.selectedIndex = 0; break;
         case 'textarea': e.innerHTML = '0.0'; break;
         default: clearChildren(e);
      }
   }  
   
}

