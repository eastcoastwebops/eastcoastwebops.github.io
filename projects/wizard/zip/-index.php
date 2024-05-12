<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">


<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<link href="tax.css" rel="stylesheet" type="text/css" title="normal" media="screen">



<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
</head>
<body onload="document.getElementById('taxform').reset();">

			<table class="ds_box" cellpadding="0" cellspacing="0" id="ds_conclass" style="display: none;">
			<tr><td id="ds_calclass">
			</td></tr>
			</table>

		<script type="text/javascript" src="date.js"></script>
		<script type="text/javascript" src="taxwizard.js"></script>

<link href="calendar.css" rel="stylesheet" type="text/css">







<form name="tax" id="taxform" action="submit.php" method="POST" >


<div id="status" >Compass Tax Workflow Wizard<br/></div>
<div id="q0"  style="display:block;" class="questionbox" >
<div class="progressbar"><div class="percent" style="width:2%;"></div>Basic Information</div>
	<p class="question">
	Please fill out Our Individual Client Questionnaire to determine nature, extent and magnitude of IRS problem.
	</p>
	<table>
      <tr>
        <td nowrap>Name</td>
        <td nowrap><input type="text" size="12" id="name" name="name" class="smallfont"></td>
      </tr>
      <tr>
        <td nowrap>Spouse's Name:</td>
        <td nowrap><input type="text" size="12" id="spousename" name="spousename" class="smallfont"></td>
      </tr>

	   <tr>
        <td nowrap>Street Address:</td>
        <td nowrap><input type="text" size="12" id="streetaddress" name="streetaddress" class="smallfont"></td>
      </tr>

      <tr>
        <td nowrap>City, State, Zip</td>
        <td nowrap><input type="text" size="5" id="city" name="city" class="smallfont">
          <select name="state" class="smallfont">
<option value="">None
<option value="AL">Alabama
<option value="AK">Alaska
<option value="AZ">Arizona
<option value="AR">Arkansas
<option value="CA">California
<option value="CO">Colorado
<option value="CT">Connecticut
<option value="DE">Delaware
<option value="FL">Florida
<option value="GA">Georgia
<option value="HI">Hawaii
<option value="ID">Idaho
<option value="IL">Illinois
<option value="IN">Indiana
<option value="IA">Iowa
<option value="KS">Kansas
<option value="KY">Kentucky
<option value="LA">Louisiana
<option value="ME">Maine
<option value="MD">Maryland
<option value="MA">Massachusetts
<option value="MI">Michigan
<option value="MN">Minnesota
<option value="MS">Mississippi
<option value="MO">Missouri
<option value="MT">Montana
<option value="NE">Nebraska
<option value="NV">Nevada
<option value="NH">New Hampshire
<option value="NJ">New Jersey
<option value="NM">New Mexico
<option value="NY" Selected>New York
<option value="NC">North Carolina
<option value="ND">North Dakota
<option value="OH">Ohio
<option value="OK">Oklahoma
<option value="OR">Oregon
<option value="PA">Pennsylvania
<option value="RI">Rhode Island
<option value="SC">South Carolina
<option value="SD">South Dakota
<option value="TN">Tennessee
<option value="TX">Texas
<option value="UT">Utah
<option value="VT">Vermont
<option value="VA">Virginia
<option value="WA">Washington
<option value="DC">Washington D.C.
<option value="WV">West Virginia
<option value="WI">Wisconsin
<option value="WY">Wyoming
</SELECT>
          <input type="text"  id="zip" name="zip" class="smallfont">
</td>
      </tr>
      <tr>
        <td nowrap>Telephone Number</td>
        <td nowrap>(<input type="text" size="3" id="areacode" name="areacode" class="smallfont">)<input type="text" size="3" id="prefix" name="prefix" class="smallfont">-<input type="text" size="4" id="phone" name="phone" class="smallfont"></td>
      </tr>
      <tr>
        <td nowrap>Email Address</td>
        <td nowrap><input type="text" size="8" id="email" name="email" class="smallfont" ></td>
      </tr>
    </table>



	<div class="navbox" id="nav1"><a href="#" onClick="hide('q0');show('q1');" onBlur="validate();">Next</a>
	<!-- <a href="#" onClick="hide('q0');show('summary');" onBlur="validate();">(cheat mode - Jump To End)</a> --></div>
</div>
<!-- q0 -->


<div id="q1"  style="display:none;" class="questionbox">
 <div class="progressbar"><div class="percent" style="width:8.33%;"></div>Step 1/11</div>
<p class="question"><span class="qnumber">1</span> What Type and amount of IRS taxes do you owe? (Assessed)</p>

	<div class="item">Income Tax:</div>
	<div class="answers">
		<input type="radio" name="incometaxowe" value="yes" onclick="show('incometax');show('incometaxjoint');" >Yes |
		<input type="radio" name="incometaxowe" value="no" onclick="hide('incometax');hide('incometaxjoint');">No</div>


  	<div id="incometax" style="display:none;">
		 <p>Year Amount<br/>
		  1. <select  id="q1incomeyear1" name="q1incomeyear1" onFocus="populateYearSelect(id);" class="datedrop" value="nodate"/></select>
		  $ <input type="text" name="q1incomeamount1"   value="0.0"  size="8"   onblur="calculate(this.form);checkNumeric(this);" /><br>
		  2. <select name="q1incomeyear2"  id="q1incomeyear2" onFocus="populateYearSelect(id);" class="datedrop" value="nodate"/></select>
		  $ <input type="text" name="q1incomeamount2" value="0.0"   size="8" onblur="calculate(this.form);checkNumeric(this);" /><br>
		  3. <select  id="q1incomeyear3" name="q1incomeyear3" onFocus="populateYearSelect(id);"   class="datedrop" value="nodate"/></select>
		  $ <input type="text" name="q1incomeamount3"   value="0.0"  size="8"   onblur="calculate(this.form);checkNumeric(this);" /><br>
		  4. <select name="q1incomeyear4"  id="q1incomeyear4" onFocus="populateYearSelect(id);" class="datedrop" value="nodate"/></select>
		  $ <input type="text" name="q1incomeamount4" id="q1incomeamount4" value="0.0"   size="8" onblur="calculate(this.form);checkNumeric(this);" /><br>
		  5. <select  id="q1incomeyear5" name="q1incomeyear5" onFocus="populateYearSelect(id);"   class="datedrop" value="nodate"/></select>
		  $ <input type="text" name="q1incomeamount5"   id="q1incomeamount5" value="0.0"  size="8"   onblur="calculate(this.form);checkNumeric(this);" />

		</p>
	</div><!-- incometax amount -->


	<div id="incometaxjoint" class="subquestion" style="display:none;">Concerning this income tax liability, was a joint return filed for any of the years listed?
		<p class="choices subanswer">
			<input type="radio" name="incometaxQ9" value="yes" onclick="show('incometaxq9ayes');">Yes
			<input type="radio" name="incometaxQ9"  value="no" onclick="hide('incometaxq9ayes');">No </p>

		<div id="incometaxq9ayes" style="DISPLAY: none">Was there an understatement of tax on the return(s) attributable to an erroneous item of just one spouse?
			<p class="choices subanswer">
			<input type="radio" name="incometaxQ9a" value="yes" onclick="show('incometaxq9byes');">Yes
			<input type="radio" name="incometaxQ9a"  value="no" onclick="hide('incometaxq9byes');">No </p>

			<div id="incometaxq9byes" style="DISPLAY: none">Did the other spouse know, or have reason to know of the understatement?
			<p class="choices subanswer">
			<input type="radio" name="incometaxQ9b" value="yes">Yes
			<input type="radio" name="incometaxQ9b" value="no">No </p>
			</div>




		</div>
		<!-- incometax9qayes -->

	</div>
	<!-- incometaxjoint -->




	<div class="item">Employment Tax:</div>
	<div class="answers">
		<input type="radio" name="employmenttaxowe" onclick="show('employmenttax');" value="yes">Yes |
		<input type="radio" name="employmenttaxowe" onclick="hide('employmenttax')" value="no">No
	</div>


	<div id="employmenttax" style="display:none;">
		<p>Year Amount<br/>
		1. <select name="q1employmentyear1" id="q1employmentyear1" value=""  onFocus="populateYearSelect(id);" class="datedrop"/></select>
		$ <input type="text" name="q1employmentamount1" value="0.0"  size="8"  onblur="calculate(this.form);checkNumeric(this);"/><br/>
		2. <select name="q1employmentyear2"  id="q1employmentyear2" value="" onFocus="populateYearSelect(id);" class="datedrop"/></select>
		$ <input type="text" name="q1employmentamount2" value="0.0"  size="8"  onblur="calculate(this.form);checkNumeric(this);" /><br/>
		3. <select name="q1employmentyear3" id="q1employmentyear3" value=""  onFocus="populateYearSelect(id);" class="datedrop"/></select>
		$ <input type="text" name="q1employmentamount3" value="0.0"  size="8"  onblur="calculate(this.form);checkNumeric(this);"/><br/>
		4. <select name="q1employmentyear4"  id="q1employmentyear4" value="" onFocus="populateYearSelect(id);" class="datedrop"/></select>
		$ <input type="text" name="q1employmentamount4" value="0.0"  size="8"  onblur="calculate(this.form);checkNumeric(this);" /><br/>
		5. <select name="q1employmentyear5" id="q1employmentyear5" value=""  onFocus="populateYearSelect(id);" class="datedrop"/></select>
		$ <input type="text" name="q1employmentamount5" value="0.0"  size="8"  onblur="calculate(this.form);checkNumeric(this);"/>
		</p>
	</div> <!-- employment amount -->




	<div class="item">Civil Penalty:</div>
	<div class="answers">
		<input type="radio" name="civilpenaltyowe" onclick="show('civilpenalty');" value="yes">Yes |
		<input type="radio" name="civilpenaltyowe" onclick="hide('civilpenalty');" value="no">No </div>

  	<div id="civilpenalty" style="display:none;">
		 <p>Year Amount<br/>
		  1.<select name="q1civilpenaltyyear1" id="q1civilpenaltyyear1" value=""   onFocus="populateYearSelect(id);" class="datedrop"/></select>
		  $<input type="text" name="q1civilpenaltyamount1" value="0.0"  size="8"  onblur="calculate(this.form);checkNumeric(this);"/><br>
		  2.<select name="q1civilpenaltyyear2" id="q1civilpenaltyyear2" value=""   onFocus="populateYearSelect(id);" class="datedrop"/></select>
		  $<input type="text" name="q1civilpenaltyamount2" value="0.0"  size="8"  onblur="calculate(this.form);checkNumeric(this);"/><br/>
		  3.<select name="q1civilpenaltyyear3" id="q1civilpenaltyyear3" value=""   onFocus="populateYearSelect(id);" class="datedrop"/></select>
		  $<input type="text" name="q1civilpenaltyamount3" value="0.0"  size="8"  onblur="calculate(this.form);checkNumeric(this);"/><br>
		  4.<select name="q1civilpenaltyyear4" id="q1civilpenaltyyear4" value=""   onFocus="populateYearSelect(id);" class="datedrop"/></select>
		  $<input type="text" name="q1civilpenaltyamount4" value="0.0"  size="8"  onblur="calculate(this.form);checkNumeric(this);"/><br/>
		  5.<select name="q1civilpenaltyyear5" id="q1civilpenaltyyear5" value=""   onFocus="populateYearSelect(id);" class="datedrop"/></select>
		  $<input type="text" name="q1civilpenaltyamount5" value="0.0"  size="8"  onblur="calculate(this.form);checkNumeric(this);"/><br>
		</p>
	</div>

	<p>Total Assessed IRS Liability<input type="text" name="q1totalirsliability" value="0.0"  size="8" onblur="calculate(this.form);checkNumeric(this);" class="total"/></p>

	<div class="navbox"><a href="#" onClick="show('q0');hide('q1');hide('q2');hide('q3');hide('q4');hide('q5');">Previous</a> | <a href="#" onClick="hide('q0');hide('q1');show('q2');hide('q3');hide('q4');hide('q5');">Next</a></div>
</div>
<!-- End Question Box -->



 <!-- Start Question Two -->
 <div id="q2"  style="display:none;" class="questionbox" >
 <div class="progressbar"><div class="percent" style="width:16.66%;"></div>Step 2/11</div>
			<p class="question"><span class="qnumber">2</span> Are there any tax returns that are due but have not been filed? (Estimated)</p>

			<p class="choices">
			<input type="radio" name="question2" onClick="hide('question2no');show('question2yes');" value="yes">Yes
        	<input type="radio" name="question2"  onClick="hide('question2yes');show('question2no');return true;" class="choices" value="no">No</p>



  <div id="question2yes" style="DISPLAY: none">
	<div class="item">Income Tax</div>
	<div class="answers">
		<input type="radio" name="showquestion2incometax" onclick="show('question2incometax');" value="yes">Yes |
		<input type="radio" name="showquestion2incometax" onclick="hide('question2incometax');" value="no">No </div>

	  <div id="question2incometax" style="display:none;">
			<p>Year Amount<br/>
			  1. <select name="q2incomeyear1" id="q2incomeyear1" value=""  onFocus="populateYearSelect(id);" class="datedrop"/></select>
			  $ <input type="text" name="q2incomeamount1"  id="q2incomeamount1" value="0.0"  size="8"   onblur="calculate(this.form);checkNumeric(this);"/><br>
			  2. <select name="q2incomeyear2" id="q2incomeyear2"  value=""  onFocus="populateYearSelect(id);" class="datedrop"/></select>
			  $ <input type="text" name="q2incomeamount2" id="q2incomeamount2" value="0.0"  size="8"   onblur="calculate(this.form);checkNumeric(this);"/><br/>
			  3. <select name="q2incomeyear3" id="q2incomeyear3" value=""  onFocus="populateYearSelect(id);" class="datedrop"/></select>
			  $ <input type="text" name="q2incomeamount3"  id="q2incomeamount3" value="0.0"  size="8"   onblur="calculate(this.form);checkNumeric(this);"/><br>
			  4. <select name="q2incomeyear4" id="q2incomeyear4"  value=""  onFocus="populateYearSelect(id);" class="datedrop"/></select>
			  $ <input type="text" name="q2incomeamount4" id="q2incomeamount4" value="0.0"  size="8"   onblur="calculate(this.form);checkNumeric(this);"/><br/>
			  5. <select name="q2incomeyear5" id="q2incomeyear5" value=""  onFocus="populateYearSelect(id);" class="datedrop"/></select>
			  $ <input type="text" name="q2incomeamount5"  id="q2incomeamount5" value="0.0"  size="8"   onblur="calculate(this.form);checkNumeric(this);"/><br>

			</p>
		</div><!-- question2incometax amount -->




	<div class="item">Employment Tax</div>
	<div class="answers">
		<input type="radio" name="showquestion2employmenttax" onclick="show('question2employmenttax');" value="yes">Yes |
		<input type="radio" name="showquestion2employmenttax" onclick="hide('question2employmenttax');" value="no">No </div>


	<div id="question2employmenttax" style="display:none;">
	<p>Year Amount<br/>
		1. <select name="q2employmentyear1" value=""  id="q2employmentyear1" onFocus="populateYearSelect(id);" class="datedrop"></select>$ <input type="text" name="q2employmentamount1" id="q2employmentamount1" value="0.0"  size="8" onblur="calculate(this.form);checkNumeric(this);"><br/>
		2. <select name="q2employmentyear2" value=""  id="q2employmentyear2" onFocus="populateYearSelect(id);" class="datedrop"></select>$ <input type="text" name="q2employmentamount2" name="q2employmentamount2" value="0.0"  size="8"  onblur="calculate(this.form);checkNumeric(this);"><br/>
		3. <select name="q2employmentyear3" value=""  id="q2employmentyear3" onFocus="populateYearSelect(id);" class="datedrop"></select>
		$ <input type="text" name="q2employmentamount3" id="q2employmentamount3" value="0.0"  size="8" onblur="calculate(this.form);checkNumeric(this);"><br/>
		4. <select name="q2employmentyear4" value=""  id="q2employmentyear4" onFocus="populateYearSelect(id);" class="datedrop"></select>
		$ <input type="text" name="q2employmentamount4" name="q2employmentamount4" value="0.0"  size="8"  onblur="calculate(this.form);checkNumeric(this);"><br/>
		5. <select name="q2employmentyear5" value=""  id="q2employmentyear5" onFocus="populateYearSelect(id);" class="datedrop"></select>
		$ <input type="text" name="q2employmentamount5" id="q2employmentamount5" value="0.0"  size="8" onblur="calculate(this.form);checkNumeric(this);"><br/>

</p>
</div>


 <!-- incometax amount -->



   </div><!-- question2yes end -->

  <div id="question2no" style="DISPLAY: none">
 <p class="callus">  (text text text) We Will Help You </p>


  </div>


	<!-- Question Two Amount -->
	<p><b>Total Estimated IRS Liabilty for Un-Filed Returns:</b><br/><input type="text" name="q2totalirsliability" value="0.0"  size="8" onblur="calculate(this.form);checkNumeric(this);" class="total"/>(Estimated)</p>

	<p>Total Assessed IRS Liability (from previous page) <input type="text" name="q1totalirsliabilitydup" value="0.0"  size="8" onblur="calculate(this.form);checkNumeric(this);" class="total"/></p>

	<!-- question 2 PLUS Question One (q1totalirsliability + q2totalirsliability) -->
	<p class="realtotal"><b>Total Assessed and Estimated IRS Liability:</b><br/><input type="text" name="totalassesedliability1plus2" value="0.0"  size="8" onblur="calculate(this.form);checkNumeric(this);" class="total realtotal"/>(Assessed + Estimated)</p>

	<div class="navbox"><a href="#" onClick="hide('q0');show('q1');hide('q2');hide('q3');hide('q4');hide('q5');">Previous</a> | <a href="#" onClick="hide('q0');hide('q1');hide('q2');show('q3');hide('q4');hide('q5');">Next</a></div>

 </div>
 <!-- end question Two -->




<div id="q3" style="display:none;" class="questionbox" ><!-- question three -->
<div class="progressbar"><div class="percent" style="width:25%;"></div>Step 3/11</div>
 <p class="question"><span class="qnumber">3</span> Are you current with this year’s withholding and/or estimated payment requirements?</p>
       <p class="choices"> <input type="radio" name="question3" onclick="hide('question3no');show('question3yes');" value="yes">Yes
        <input type="radio" name="question3"  onclick="hide('question3yes');show('question3no');return true;" value="no">No </p>

	<div id="question3yes" style="DISPLAY: none">
	<p class="callus">Excellent!</p></div>

	<div id="question3no" style="DISPLAY: none">
	<p class="callus">Since client is not in compliance with current year’s liability, the IRS will generally not enter into a collection resolution unless:</p></div>

		<div class="navbox"><a href="#" onClick="hide('q0');hide('q1');show('q2');hide('q3');hide('q4');hide('q5');">Previous</a> | <a href="#" onClick="hide('q0');hide('q1');hide('q2');hide('q3');show('q4');hide('q5');">Next</a></div>
</div>
<!-- end question three -->


<div id="q4"  style="display:none;" class="questionbox" ><!-- question four -->
<div class="progressbar"><div class="percent" style="width:33.33%;"></div>Step 4/11</div>
	<p class="question"><span class="qnumber">4</span>Have wages been levied (garnished) or have you been notified of an imminent wage levy?</p>
	<p class="choices"> <input type="radio" name="question4" onclick="hide('question4no');show('question4yes');" value="yes">Yes
        <input type="radio" name="question4"  onclick="hide('question4yes');show('question4no');return true;" value="no">No </p>

		<div id="question4no" style="DISPLAY: none"><p class="callus">No: No Wages Have Been Garnished</p></div>

	<div id="question4yes" style="display:none;">

			<div class="subquestion">How Often Do You Get Paid?<br/>
			<select name="getpaid">
			<option value="select one">Select One</option>
			<option value="Bi-Weekly">Bi-Weekly (every 2 weeks)</option>
			<option value="Semi-Monthly">Semi-Monthly (Twice A Month)</option>
			<option value="Weekly">Weekly</option>
			</select></div>
			<!-- question4yes subquestion-->

		<div class="subquestion">How much is being (or will be) levied per paycheck?<br/>&nbsp; <strong>$</strong><input type="text" size="8" name="levied" id="levied" value="0.0" onblur="calculate(this.form);checkNumeric(this);"></div>

		<div class="subquestion">Is the wage levy causing (or will cause) economic hardship which is not enabling you to pay for necessities such as rent, mortgage, groceries, etc.?<br/><!-- wage causing hardship -->
		<p class="choices subanswer"> <input type="radio" name="question4hardship" onclick="hide('hardshipno');show('hardshipyes');" value="yes">Yes
        <input type="radio" name="question4hardship"  onclick="hide('hardshipyes');show('hardshipno');return true;" value="no">No </p>

		<div id="hardshipyes" style="DISPLAY: none" class="callus">Yes: Garnishing wages is causing hardship</div>
		<div id="hardshipno" style="DISPLAY: none" class="callus">No: No Hardship</div>
		</div>
		<!-- wage causing hardship -->






	</div>
	<!-- question 4 yes -->

	<div id="question4no" style="display:none;">No, no wages garnished</div>


	<div name="banklevied?"> <!-- bank levied -->
		<p class="question"><span class="qnumber">4a</span>Have Any Bank Account Been Levied?</p>
		<p class="choices subanswer">
		<input type="radio" name="question4banklevy" onclick="hide('banklevyno');show('banklevyyes');" value="yes">Yes
        <input type="radio" name="question4banklevy"  onclick="hide('banklevyyes');show('banklevyno');return true;" value="no">No </p>




		<div id="banklevyyes" style="display:none;" class="subquestion"> <!-- start bank levy yes -->

				<table cellpadding="0" cellspacing="0"><tr><td>Name of Bank</td><td>Amount Levied</td></tr>
				<tr align="right">
				<td>1.<input type="text" name="q4bankname1" value=""  size="8" /></td>
				<td>$<input type="text" name="q4banklevy1" value="0.0"  size="8" onblur="calculate(this.form);checkNumeric(this);"/></td>
				</tr>
				<tr align="right">
				<td>2.<input type="text" name="q4bankname2" value=""  size="8" /></td>
				<td>$ <input type="text" name="q4banklevy2" value="0.0"  size="8"  onblur="calculate(this.form);checkNumeric(this);"/></td>
				</tr>
				
				<tr align="right">
				<td>3.<input type="text" name="q4bankname3" value=""  size="8" /></td>
				<td>$ <input type="text" name="q4banklevy3" value="0.0"  size="8"  onblur="calculate(this.form);checkNumeric(this);"/></td>
				</tr>
				
				</table>




			<div>Was the levy issued to the bank within the past 21 days?<br/> <!-- start 21days -->
				<p class="choices subanswer">
				<input type="radio" name="question4banklevy21" onclick="hide('banklevy21no');show('banklevy21yes');" value="yes">Yes
				<input type="radio" name="question4banklevy21"  onclick="hide('banklevy21yes');show('banklevy21no');return true;" value="no">No </p>

				<div id="banklevy21yes" style="display:none;">
					<div>Is the bank levy causing economic hardship which is not enabling you to pay for necessities such as rent, mortgage, groceries, etc.?
						<p class="choices subanswer">
						<input type="radio" name="question4banklevyhardship" onclick="hide('banklevyhardshipno');show('banklevyhardshipyes');" value="yes">Yes
						<input type="radio" name="question4banklevyhardship"  onclick="hide('banklevyhardshipyes');show('banklevyhardshipno');return true;" value="no">No </p>
					</div>


				<div id="banklevyhardshipyes" style="display:none;" class="callus">Since a bank account(s) has been levied within the past 21 days and this is causing economic hardship, immediate Taxpayer Advocate assistance is required to release funds.</div>
				<div id="banklevyhardshipno" style="display:none;" class="callus">No: Bank Levy in last 21 days but not causing hardship</div>


				</div>
				<!-- banklevy21 yes -->

				<div id="banklevy21no" style="display:none;" class="callus">No: No Bank Levy in last 21 days</div><!-- bank 21 no -->


			</div>
			<!-- end 21days -->


	</div>
	<!-- end bank levy yes -->

	<div id="banklevyno" style="DISPLAY: none"><p class="callus">No: No Bank Levy</p></div>


	</div>
	<!-- bank levied  -->

		<div class="navbox"><a href="#" onClick=";show('q3');hide('q4');">Previous</a> | <a href="#" onClick="hide('q4');show('q5');">Next</a></div>

</div>
<!-- end question four -->



<div id="q5"  style="display:none;" class="questionbox" ><!-- question five -->
<div class="progressbar"><div class="percent" style="width:40%;"></div>Step 5/11</div>
	<p class="question"><span class="qnumber">5</span>Have you been contacted by, or presently dealing with, a Revenue Officer?</p>
		<p class="choices">
		<input type="radio" name="question5" onclick="hide('question5no');show('question5yes');" value="yes">Yes
        <input type="radio" name="question5" onclick="hide('question5yes');show('question5no');return true;" value="no">No
		</p>

			<div id="question5no" style="DISPLAY: none"><p class="callus">No: I have not been contacted by a Revenue Officer</p></div>

			<div id="question5yes" style="DISPLAY: none" class="subquestion">
				<p>Has the Revenue Officer taken or proposed any of the following collection actions? Select all that apply:<br/>



					<input type="checkbox" name="revaction1" value="Federal Tax Lien" onclick="CheckRev()">Federal Tax Lien<br/>
					<input type="checkbox" name="revaction2" value="Levy or Notice of Levy" onclick="CheckRev()">Levy or Notice of Levy<br/>
					<input type="checkbox" name="revaction3" value="Seizure" onclick="CheckRev()">Seizure<br/>
					<input type="checkbox" name="revaction4" value="Denial of Installment Agreement" onclick="CheckRev()">Denial of Installment Agreement<br/>
					<input type="checkbox" name="revaction5" value="Termination of Installment Agreement" onclick="CheckRev()">Termination of Installment Agreement<br/></p>

					<!-- if any checked, show revproposed -->

					<div id="revproposed" style="display:none;">
						<p>Have you met with the Revenue Officer’s Manager (Group Manager) within the last 2 days concerning the collection action(s)?<br/>
							<input type="radio" name="metwithrev" onclick="hide('metwithrevno');show('metwithrevyes');show('associated');" value="yes">Yes
							<input type="radio" name="metwithrev" onclick="hide('metwithrevyes');show('metwithrevno');hide('associated');;return true;" value="no">No </p>


					<div id="metwithrevno" class="callus" style="display:none;">No, have not met with Revenue Officer (Group Manager) in last 2 days... Since imminent collection actions will be taken by a Revenue Officer, immediate Taxpayer Advocate assistance/intervention is required.</div>

					<div id="metwithrevyes"  class="subquestion" style="display:none;">
						Did the Group Manager sustain the Revenue Officer’s collection action(s)?
							<p class="choices">
								<input type="radio" name="sustain" onclick="hide('sustainno');show('sustainyes');" value="yes">Yes
								<input type="radio" name="sustain" onclick="hide('sustainyes');show('sustainno');return true;" value="no">No
							</p>

							<div id="sustainyes" style="display:none;" class="callus">Since imminent collection actions will be taken by a Revenue Officer, immediate Appeals relief needs to be sought. Alternatively, immediate Taxpayer Advocate assistance is required.
							</div>
							<div id="sustainno" style="display:none;" class="callus">No, the Group Manager Did not sustain the revenue officer's collection actions.</div>


							<div id="associated" style="display:none;">Are you, or were you associated (in a financial or decision making capacity) with a company that has unpaid federal employment taxes?
								<p class="choices">
								<input type="radio" name="assoc" onclick="hide('assocno');show('assocyes');" value="yes">Yes
								<input type="radio" name="assoc" onclick="hide('assocyes');show('assocno');return true;" value="no">No
								</p>
									<div id="assocno" style="display:none;" class="callus">No, Not Associated with a company that has unpaid federal employment taxes</div>
									<div id="assocyes" style="display:none;">Is a Revenue Officer attempting to assess the Trust Fund Recovery Penalty against you for unpaid employee withholding taxes for the company you are or were associated with?
											<p class="choices">
											<input type="radio" name="assess" onclick="hide('assessno');show('assessyes');" value="yes">Yes
											<input type="radio" name="assess" onclick="hide('assessyes');show('assessno');return true;" value="no">No
											</p>
											<div id="assessno" style="display:none;" class="callus">No, a Revenue Officer is not attempting to assess the Trust Fund Recover Penalty</div>
											<div id="assessyes" style="display:none;" class="callus">Since a Revenue Officer is attempting to assess the Trust Fund Recovery Penalty, immediate intervention in preparation in and/or participation in the “Report of Interview with Individual Relative to Trust Fund Recovery Penalty or Personal Liability for Excise Tax” is necessary.</div>
									</div>
								<!-- assocyes -->
							</div><!-- associated -->


					</div>
					<!-- metwithrevyes -->
					</div>
					<!-- end revproposed -->

			</div>
		<!-- question5yes -->

		<div class="navbox"><a href="#" onClick="hide('q5');show('q4');">Previous</a> | <a href="#" onClick="hide('q5');show('q6');">Next</a></div>
</div>
<!-- end question 5 -->


<div id="q6"  style="display:none;" class="questionbox" ><!-- question six -->
<div class="progressbar"><div class="percent" style="width:48%;"></div>Step 6/11</div>
	<p class="question"><span class="qnumber">6</span>Have you received an IRS notice <u>dated within the past 30 days</u> that had any of the following specific headings? Select all that apply:</p>
			<input type="checkbox" name="irsnotice1" value="Notice of Intent to Levy and Notice of Your Right to a Hearing" onclick="Checknotice()">Notice of Intent to Levy and Notice of Your Right to a Hearing<br/>
			<input type="checkbox" name="irsnotice2" value="Notice of Jeopardy Levy and Right of Appeal" onclick="Checknotice()">Notice of Jeopardy Levy and Right of Appeal<br/>
			<input type="checkbox" name="irsnotice3" value="Notice of Levy on Your State Tax Refund - Notice of Your Right to a Hearing" onclick="Checknotice()">Notice of Levy on Your State Tax Refund - Notice of Your Right to a Hearing<br/>

			<div id="irsnoticeyes" class="subquestion" style="display:none;">
				<p>Date(s) of IRS Notice(s)<br/>
				<input onclick="ds_sh(this);" size="9" name="irsnoticedate1" style="cursor: text" /> | <input onclick="ds_sh(this);" name="irsnoticedate2" style="cursor: text" size="9"/> | <input onclick="ds_sh(this);" name="irsnoticedate3" style="cursor: text" size="9"/>
				</p>
			</div>

<div class="navbox"><a href="#" onClick="hide('q6');show('q5');">Previous</a> | <a href="#" onClick="hide('q6');show('q7');">Next</a></div>
</div>
<!-- end question 6 -->




<div id="q7"  style="display:none;" class="questionbox" ><!-- question seven -->
<div class="progressbar"><div class="percent" style="width:56%;"></div>Step 7/11</div>
	<p class="question"><span class="qnumber">7</span>Have you received an IRS notice dated <u>MORE than 31 days ago</u>... <u>but LESS than one year ago</u> that had any of the following specific headings? Select all that apply:</p>
			<input type="checkbox" name="irsnotice1B" value="Notice of Intent to Levy and Notice of Your Right to a Hearing" onclick="ChecknoticeB()">Notice of Intent to Levy and Notice of Your Right to a Hearing<br/>
			<input type="checkbox" name="irsnotice2B" value="Notice of Jeopardy Levy and Right of Appeal" onclick="ChecknoticeB()">Notice of Jeopardy Levy and Right of Appeal<br/>
			<input type="checkbox" name="irsnotice3B" value="Notice of Levy on Your State Tax Refund - Notice of Your Right to a Hearing" onclick="ChecknoticeB()">Notice of Levy on Your State Tax Refund - Notice of Your Right to a Hearing<br/>

			<div id="irsnoticeyesB" class="subquestion" style="display:none;">
				<p>Date(s) of IRS Notice(s)<br/>
				<input onclick="ds_sh(this);" size="9" name="irsnoticedate1B" style="cursor: text" /> | <input onclick="ds_sh(this);" name="irsnoticedate2B" style="cursor: text" size="9"/> | <input onclick="ds_sh(this);" name="irsnoticedate3B" style="cursor: text" size="9"/>
				</p>
			</div>

<div class="navbox"><a href="#" onClick="hide('q7');show('q6');">Previous</a> | <a href="#" onClick="hide('q7');show('q8');">Next</a></div>
</div>
<!-- end question 7 -->




<div id="q8"  style="display:none;" class="questionbox" ><!-- question eight -->
	<div class="progressbar"><div class="percent" style="width:64%;"></div>Step 8/11</div>
		<p class="question"><span class="qnumber">8</span>Have you received an IRS notice(s) with the specific heading “Notice of Federal Tax Lien Filing and Your Right to a Hearing under IRC 6320” and the “You must request your hearing by” date has not yet lapsed?</p>

			<p class="choices">
			<input type="radio" name="irs6320" value="yes" onclick=";show('irs6320yes');">Yes
			<input type="radio" name="irs6320" value="no" onclick="hide('irs6320yes');return true;">No
			</p>

			<div id="irs6320yes" class="subquestion" style="display:none;">
				<p>Request by Date(s):<br/>
				<input onclick="ds_sh(this);" size="9" name="i6320A" style="cursor: text" /> | <input onclick="ds_sh(this);" name="i6320B" style="cursor: text" size="9"/> | <input onclick="ds_sh(this);" name="i6320C" style="cursor: text" size="9"/>
				</p>
			</div>

	<div class="navbox"><a href="#" onClick="hide('q8');show('q7');">Previous</a> | <a href="#" onClick="hide('q8');show('q9');ShowNine();">Next</a></div>
</div>
<!-- end question 8 -->

<!-- question 9 (see 1a) -->

<div id="q9"  style="display:none;" class="questionbox">
	<div class="progressbar"><div class="percent" style="width:73%;"></div>Step 9/11</div>




		<div id="q9no" style="display:none;"><!-- question q9a (only applies if any income is assessed -->
		<p class="notrelevant"><span class="qnumber">9</span>Question Does Not Apply To Because You didn't enter any assessed taxes owed on question one</p>
		</div>

		<div id="q9a" style="display:none"><!-- question q9a (only applies if any income is assessed -->
		<p class="question"><span class="qnumber">9</span>Regarding any of the taxes owed, do you believe some or all of the taxes may have been assessed by the IRS in error? In other words, is there a legitimate doubt as to the liability?</p>

			<p class="choices">
			<input type="radio" name="q9aanswer" value="yes" onclick=";show('9aansweryes');">Yes
			<input type="radio" name="q9aanswer" value="no" onclick="hide('9aansweryes');return true;">No
			</p>


			<div id="9aansweryes" class="subquestion" style="display:none;">
				<div class="subquestion">Is this doubt as to liability the result of either an assessment the IRS made because of an audit or because the IRS created a return for you because you did not file a return?<br/>
					<p class="choices">
					<input type="radio" name="q9banswer" value="yes" onclick=";show('9banswerbox');">Yes
					<input type="radio" name="q9banswer" value="no" onclick="show('9banswerbox');return true;">No
					</p>
						<div id="9banswerbox" style="display:none;">Please Explain:<br><textarea class="textbox" name="q9bexplanation" id="q9bexplanation"></textarea></div>
				</div>
			</div>
		</div>



	<div class="navbox"><a href="#" onClick="hide('q9');show('q8');">Previous</a> | <a href="#" onClick="hide('q9');show('q10');">Next</a></div>
</div>


<div id="q10"  style="display:none;" class="questionbox">
	<div class="progressbar"><div class="percent" style="width:82%;"></div>Step 10/11</div>
	<p class="question"><span class="qnumber">10</span>If you agree that some or all of the unpaid liability is correct and you have the ability to partially pay it, do you feel there are exceptional circumstances that the IRS should consider to compromise this liability for less than you can actually pay? (Examples of exceptional circumstances would be health, disability, age, inability to meet basic living expenses, inability to borrow, collection would cause severe economic hardship, etc.)</p>
					<p class="choices">
					<input type="radio" name="q10banswer" value="yes" onclick=";show('10answerbox');">Yes
					<input type="radio" name="q10banswer" value="no" onclick="hide('10answerbox');return true;">No
					</p>
						<div id="10answerbox" style="display:none;">Please Explain:<br><textarea class="textbox" name="q10explanation" id="q10explanation"></textarea></div>
	<div class="navbox"><a href="#" onClick="hide('q10');show('q9');">Previous</a> | <a href="#" onClick="hide('q10');show('q11');">Next</a></div>
</div>
<!-- end question 10 -->



<div id="q11"  style="display:none;" class="questionbox">
	<div class="progressbar"><div class="percent" style="width:95%;"></div>Step 11/11</div>
	<p class="question"><span class="qnumber">11</span>If you agree that some or all of the unpaid liability is correct and you have the ability to full pay it, do you feel there are exceptional circumstances that the IRS should consider to compromise this liability? (Examples of exceptional circumstances would be health, disability, age, inability to meet basic living expenses, inability to borrow, collection would cause severe economic hardship, etc.)</p>
					<p class="choices">
					<input type="radio" name="q11banswer" value="yes" onclick=";show('11answerbox');">Yes
					<input type="radio" name="q11banswer" value="no" onclick="hide('11answerbox');return true;">No
					</p>
						<div id="11answerbox" style="display:none;">Please Explain:<br><textarea class="textbox" name="q11explanation" id="q11explanation"></textarea></div>
	<div class="navbox"><a href="#" onClick="hide('q11');show('q10');">Previous</a> | <a href="#" onClick="hide('q11');show('summary');" class="go">Finish!</a></div>
</div>
<!-- end question 11 -->


<div id="summary"  style="display:none;" class="questionbox">
	<div class="progressbar"><div class="percent" style="width:100%;"></div>Review</div>
	<div class="navbox"><a href="#" onClick="hide('summary');show('q0');" class="review">Click Here To Review All Answers</a></div>
	<div id="showsummary">
      <div> 
        <h3 align="center">&nbsp;- or -<br>
          If you are satisfied with your answers, <br>
          you may now:</h3>
        <div align="center"> 
          <h3> 
            <input name="submit" type="submit" value="Send Wizard">
            <br>
            to our tax professionals for review. </h3>
        </div>
      </div>
    </div>
	
</div>

<div id="send"  style="display:none;" class="questionbox">
	<div class="progressbar"><div class="percent" style="width:100%;"></div>Submit</div>
	<div><h2>If you are ready satisfied with your answers, you may now:</h2>
      <div align="center"> 
        <h2>
          <input type="submit" value="Send Wizard">
          <br>
          to our tax professionals for review.</h2>
      </div>
    </div>

</div>

<!-- end question send -->



 </form>

<!-- calculator -->





</body>
<!--
<input onclick="ds_sh(this);" style="cursor: text" />
<input onclick="ds_sh(this);" name="this4" style="cursor: text" />
-->