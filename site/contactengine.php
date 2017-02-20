<?php

$EmailFrom = Trim(stripslashes($_POST['Email']));
$EmailTo = "info@heroxx.com";
$Subject = Trim(stripslashes($_POST['Subject'])); 
$Name = Trim(stripslashes($_POST['Name'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$Message = Trim(stripslashes($_POST['Message'])); 

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
//$Body = "";
$Body .= "From: ";
$Body .= $Name;
$Body .= "\n";
//$Body .= "\n";
//$Body .= "Email: ";
///$Body .= $Email;
//$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=thank-you.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>