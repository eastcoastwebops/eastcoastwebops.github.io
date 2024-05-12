<?
foreach ($_POST as $key => $val)
{
$field[] = $key;
$value[] = $val;
$x++;
// echo $x."FIELD: ".$key." | Value: ".$val."<br/>";

 ${$key} = $val;
 if (${$key} == '') {
 ${$key} = "X";
}

}
$summary = "<html><body><div class=\"emailformat\"><style type=\"text/css\">body {color:#ff0000;font-family:arial;font-size:10px;}b{color:#999999;};</style> (Testing Note: This display is for demo purposes only. Below is how the email sent to client will appear)";
$summary .= "<b>Name:</b>".$name."<br/>";
$summary .= "<b>Spouse Name: </b>".$spousename."<br/>";
$summary .= "<b>Street Address: </b>".$streetaddress."<br/>";
$summary .= "<b>City: </b>".$city."<br/>";
$summary .= "<b>State: </b>".$state."<br/>";
$summary .= "<b>Zip: </b>".$zip."<br/>";
$summary .= "<b>Phone: </b>".$areacode."-".$prefix."-".$phone."<br/><br/>";
$summary .= "<b>Email: </b>".$email."<br/><br/>";

$summary .= "<hr width=100% height=1>";

$summary .="<b>Type of Assessed IRS Taxes:</b><br/>";

$summary .= "<b>Owe Income Tax?: </b>".$incometaxowe."<br/>";
$summary .= "<b>Income Tax Assessed:</b><br/>";
$summary .= "<b>Year:</b>".$q1incomeyear1." | <b>Amount:</b> ".$q1incomeamount1."<br/>";
$summary .= "<b>Year:</b>".$q1incomeyear2." | <b>Amount:</b> ".$q1incomeamount2."<br/>";
$summary .= "<b>Year:</b>".$q1incomeyear3." | <b>Amount:</b> ".$q1incomeamount3."<br/>";
$summary .= "<b>Year:</b>".$q1incomeyear4." | <b>Amount:</b> ".$q1incomeamount4."<br/>";
$summary .= "<b>Year:</b>".$q1incomeyear5." | <b>Amount:</b> ".$q1incomeamount5."<br/><br/>";

$summary .= "<b>Owe Employment Tax?: </b>".$employmenttaxowe."<br/>";
$summary .= "<b>Employment Tax Assessed:</b><br/>";
$summary .= "<b>Year:</b>".$q1employmentyear1." | <b>Amount:</b> ".$q1employmentamount1."<br/>";
$summary .= "<b>Year:</b>".$q1employmentyear2." | <b>Amount:</b> ".$q1employmentamount2."<br/>";
$summary .= "<b>Year:</b>".$q1employmentyear3." | <b>Amount:</b> ".$q1employmentamount3."<br/>";
$summary .= "<b>Year:</b>".$q1employmentyear4." | <b>Amount:</b> ".$q1employmentamount4."<br/>";
$summary .= "<b>Year:</b>".$q1employmentyear5." | <b>Amount:</b> ".$q1employmentamount5."<br/><br/>";

$summary .= "<b>Owe Civil Penalty?: </b>".$civilpenaltyowe."<br/>";
$summary .= "<b>Civil Penalty Assessed:</b><br/>";
$summary .= "<b>Year:</b>".$q1civilpenaltyyear1." | <b>Amount:</b> ".$q1civilpenaltyamount1."<br/>";
$summary .= "<b>Year:</b>".$q1civilpenaltyyear2." | <b>Amount:</b> ".$q1civilpenaltyamount2."<br/>";
$summary .= "<b>Year:</b>".$q1civilpenaltyyear3." | <b>Amount:</b> ".$q1civilpenaltyamount3."<br/>";
$summary .= "<b>Year:</b>".$q1civilpenaltyyear4." | <b>Amount:</b> ".$q1civilpenaltyamount4."<br/>";
$summary .= "<b>Year:</b>".$q1civilpenaltyyear5." | <b>Amount:</b> ".$q1civilpenaltyamount5."<br/><br/>";
$summary .= "<b>Was a joint return filed for income tax years listed: </b>".$incometaxQ9."<br/><br/>";
$summary .= "<b>Was there an understatement of tax on the return(s) attributable to an erroneous item of just one spouse? </b>".$incometaxQ9a."<br/><br/>";
$summary .= "<b>Did the other spouse know, or have reason to know of the understatement? </b>".$incometaxQ9b."<br/><br/>";
$summary .= "<h3><b>Total Assessed IRS Liabilty: </b>".$q1totalirsliability ."</h3>";


//// Estimated tax Due
$summary .= "<hr width=100% height=1>";
$summary .="<b>Are there any tax returns that are due but have not been filed? (Estimated): </b>".$question2."<br/>";

$summary .= "<b>Owe unfiled Income Tax?: </b>".$showquestion2incometax."<br/>";
$summary .= "Income Tax Estimated:<br/>";
$summary .= "<b>Year:</b>".$q2incomeyear1." | <b>Amount:</b> ".$q2incomeamount1."<br/>";
$summary .= "<b>Year:</b>".$q2incomeyear2." | <b>Amount:</b> ".$q2incomeamount2."<br/>";
$summary .= "<b>Year:</b>".$q2incomeyear3." | <b>Amount:</b> ".$q2incomeamount3."<br/>";
$summary .= "<b>Year:</b>".$q2incomeyear4." | <b>Amount:</b> ".$q2incomeamount4."<br/>";
$summary .= "<b>Year:</b>".$q2incomeyear5." | <b>Amount:</b> ".$q2incomeamount5."<br/><br/>";

$summary .= "<b>Owe Unfiled Employment Tax?: </b>".$showquestion2employmenttax."<br/>";
$summary .="<b>Employment Tax Estimated:</b><br/>";
$summary .= "<b>Year:</b>".$q2employmentyear1." | <b>Amount:</b> ".$q2employmentamount1."<br/>";
$summary .= "<b>Year:</b>".$q2employmentyear2." | <b>Amount:</b> ".$q2employmentamount2."<br/>";
$summary .= "<b>Year:</b>".$q2employmentyear3." | <b>Amount:</b> ".$q2employmentamount3."<br/>";
$summary .= "<b>Year:</b>".$q2employmentyear4." | <b>Amount:</b> ".$q2employmentamount4."<br/>";
$summary .= "<b>Year:</b>".$q2employmentyear5." | <b>Amount:</b> ".$q2employmentamount5."<br/><br/>";

$summary .= "<h3><b>Total Estimated IRS Liabilty: </b>".$q2totalirsliability ."</h3>";
$summary .= "<h2><b>Total Assessed PLUS Estimated IRS Liabilty: </b>".$totalassesedliability1plus2 ."</h2>";

/// 
$summary .= "<hr width=100% height=1>";

$summary .= "<b>Current with this year’s withholding and/or estimated payment requirements? </b>".$question3."<br/>";
$summary .= "<b>Wages been levied (garnished): </b>".$question4."<br/>";
$summary .= "<b>How Often Get Paid: </b>".$getpaid."<br/>";
$summary .= "<b>Amount Garnished </b>".$levied."<br/>";
$summary .= "<b>Garnishing Causing Hardship? </b>".$question4hardship."<br/>";

$summary .= "<b>Bank Levy?: </b>".$question4banklevy."<br/>";
$summary .= "<b>Bank Name | Amount Levied </b><br/>";
$summary .= $q4bankname1." | ".$q4banklevy1."<br/>";
$summary .= $q4bankname2." | ".$q4banklevy2."<br/>";
$summary .= $q4bankname3." | ".$q4banklevy3."<br/>";

$summary .= "<b>levy issued to the bank within the past 21 days? </b>".$question4banklevy21."<br/>";
$summary .= "<b>Bank Levy Causing Hardship? </b>".$question4banklevyhardship."<br/>";

///
$summary .= "<hr width=100% height=1>";

$summary .= "<b>Have you been contacted by, or presently dealing with, a Revenue Officer? </b>".$question5."<br/>";
$summary .= "<b>Proposed Type Of Action:</b><br/>";
$summary .= "<b>Action:</b> ".$revaction1."<br/>";
$summary .= "<b>Action:</b> ".$revaction2."<br/>";
$summary .= "<b>Action:</b> ".$revaction3."<br/>";
$summary .= "<b>Action:</b> ".$revaction4."<br/>";
$summary .= "<b>Action:</b> ".$revaction5."<br/>";

$summary .= "<b>Have you met with the Revenue Officer’s Manager (Group Manager) within the last 2 days concerning the collection action(s)? </b>".$metwithrev."<br/>";
$summary .= "<b>Did the Group Manager sustain the Revenue Officer’s collection action(s)? </b>".$sustain."<br/>";
$summary .= "<b>Are you, or were you associated (in a financial or decision making capacity) with a company that has unpaid federal employment taxes? </b>".$assoc."<br/>";
$summary .= "<b>Is a Revenue Officer attempting to assess the Trust Fund Recovery Penalty against you for unpaid employee withholding taxes for the company you are or were associated with? </b>".$assess."<br/>";

$summary .= "<b>Have you received an IRS notice <u>dated within the past 30 days</u> that had any of the following specific headings? Select all that apply:</b><br/><br/>";

$summary .= "<b>Notice Type: </b>".$irsnotice1."<br/>";
$summary .= "<b>Notice Type: </b>".$irsnotice2."<br/>";
$summary .= "<b>Notice Type: </b>".$irsnotice3."<br/><br/>";

$summary .= "<b>Notice Date: </b>".$irsnoticedate1."<br/>";
$summary .= "<b>Notice Date: </b>".$irsnoticedate2."<br/>";
$summary .= "<b>Notice Date: </b>".$irsnoticedate3."<br/><br/>";


$summary .= "<b>Have you received an IRS notice dated <u>MORE than 31 days ago</u>... <u>but LESS than one year ago</u> that had any of the following specific headings? Select all that apply:</b><br/><br/>";

$summary .= "<b>Notice Type: </b>".$irsnotice1B."<br/>";
$summary .= "<b>Notice Type: </b>".$irsnotice2B."<br/>";
$summary .= "<b>Notice Type: </b>".$irsnotice3B."<br/><br/>";

$summary .= "<b>Notice Date: </b>".$irsnoticedate1B."<br/>";
$summary .= "<b>Notice Date: </b>".$irsnoticedate2B."<br/>";
$summary .= "<b>Notice Date: </b>".$irsnoticedate3B."<br/><br/>";

$summary .= "<b>Have you received an IRS notice(s) with the specific heading “Notice of Federal Tax Lien Filing and Your Right to a Hearing under IRC 6320 and the \"You must request your hearing by\" date has not yet lapsed? </b>". $irs6320."<br/><br/>";

$summary .= "<b>Notice Date: </b>".$i6320A."<br/>";
$summary .= "<b>Notice Date: </b>".$i6320B."<br/>";
$summary .= "<b>Notice Date: </b>".$i6320C."<br/><br/>";

$summary .= "<hr width=100% height=1>";

$summary .= "<b>Regarding any of the taxes owed, do you believe some or all of the taxes may have been assessed by the IRS in error? In other words, is there a legitimate doubt as to the liability? </b>". $q9aanswer."<br/><br/>";

$summary .= "<b>Is this doubt as to liability the result of either an assessment the IRS made because of an audit or because the IRS created a return for you because you did not file a return? </b>". $q9banswer."<br/><br/>";

$summary .= "<b>Explanation: </b>".$q9bexplanation."<br/>";

///
$summary .= "<hr width=100% height=1>";
///

$summary .= "<b>If you agree that some or all of the unpaid liability is correct and you have the ability to partially pay it, do you feel there are exceptional circumstances that the IRS should consider to compromise this liability for less than you can actually pay? (Examples of exceptional circumstances would be health, disability, age, inability to meet basic living expenses, inability to borrow, collection would cause severe economic hardship, etc.): </b>". $q10banswer."<br/><br/>";

$summary .= "<b>Explanation: </b>".$q10explanation."<br/>";

///
$summary .= "<hr width=100% height=1>";
///

$summary .= "<b>If you agree that some or all of the unpaid liability is correct and you have the ability to full pay it, do you feel there are exceptional circumstances that the IRS should consider to compromise this liability? (Examples of exceptional circumstances would be health, disability, age, inability to meet basic living expenses, inability to borrow, collection would cause severe economic hardship, etc.) </b>". $q11banswer."<br/><br/>";

$summary .= "<b>Explanation: </b>".$q11explanation."<br/>";

///
$summary .= "<hr width=100% height=1>";
///
$summary .= "End Data...</div></body></html>";

echo $summary;

?>



<?

$refer = $_POST['refer'];



// if ($refer !=1) {
//   echo "<h4>Please Fill Out The Form To Receive Your White Paper</h4>";
//   echo "<a href='index.php?'>Back</a>";
//  exit;
//}

$ip = $_SERVER[REMOTE_ADDR]; 
$date=date("m/d/y,H:i:s", time());
$headers = "From: taxinfo@thecodefromlastnight.com\r\n";
//$headers .= "BCC: eric@skmmediagroup.com\r\n";
//$headers .= "CC: susan@example.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$sendto = "ekholbrook@gmail.com";
$subject = 'Tax-Form';

//echo $date;
//$fp = fopen("data/notes.txt", "a");
//$savestring = $name . "|" . $email . "|" . $phone  . "|" . $zip . "|" . $country . "" . $date . "\n";

$message = $summary;


//echo $message;
	
//fwrite($fp, $savestring);
//fclose($fp);

if (!preg_match("/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/", $email)) {

  echo "<div id=\"formbox\"><h4>Invalid email address</h4>";
  echo "<a href='javascript:history.back(1);'>Back</a></div>";
  exit;
} 

elseif (mail($sendto,$subject,$message,$headers)) 
{
} else {
  echo "<h4>Can't send email to $email</h4>";
}

?>

<Style type="text/css">
#formbox {display:none;}
a{color:#ff6600;}
</Style>
<div id="thanks">
  <h2>Thank you, <? echo $name; ?>.<br/>We will contact you shortly!</h2>
  <!-- <p><a href="dl/infokit.pdf" target="_blank" style="color:#ff6600;">Click 
    Here</a> To Download Our Information Kit (pdf)<a href="dl/infokit.pdf" target="_blank"><img src="icons/pdf.gif" width="50" height="50" border="0" align="absmiddle"></a></p> -->
</div>


