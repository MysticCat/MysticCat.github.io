<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
  <title>Phi Mu Alpha Sinfonia :: Xi Mu Chapter</title>

<script type="text/javascript" src="menuh.js">
</script>
<link rel="stylesheet" href="menu.css" type="text/css" media="screen" />
<style type="text/css">
<!--
.style2 {
	font-size: 10px;
	font-family: Arial, Helvetica, sans-serif;
}
.style4 {font-family: Arial;
	font-weight: bold;
}
-->
</style>

<SCRIPT LANGUAGE="JavaScript">

<!-- Image Randomizer -->

<?
//This function gets the file names of all images in the current directory
//and ouputs them as a JavaScript array
function returnimages($dirname="img/side/") {
$pattern="(\.jpg$)|(\.png$)|(\.jpeg$)|(\.gif$)"; //valid image extensions
$files = array();
$curimage=0;
if($handle = opendir($dirname)) {
while(false !== ($file = readdir($handle))){
if(eregi($pattern, $file)){ //if this file is a valid image
//Output it as a JavaScript array element
echo 'theImages['.$curimage.']="'.$dirname.'/'.$file.'";';
$curimage++;
}
}

closedir($handle);
}
return($files);
}

echo 'var theImages=new Array();'; //Define array in JavaScript
returnimages() //Output the array elements containing the image file names
?> 
// do not edit anything below this line

var j = 0
var p = theImages.length;
var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages[i]
}
function showImage(){
var whichImage = Math.round(Math.random()*(p-1));
document.write('<img src="'+theImages[whichImage]+'">');
p--;
for (k = whichImage; k < p; k++){
  theImages[k]=theImages[k+1]
}
}
</script>
</head>


<body style="color: rgb(255, 255, 255); background-color: rgb(26, 23, 23);" alink="#ffcc33" link="#ffcc33" vlink="#ff0000">
<br>
<center style="font-family: Arial Narrow;">
<span style="font-family: Arial Narrow; font-weight: bold;"><img src="banner.gif" width="650" height="160"><br>
</span>
<table width="330" border="0">
  <tbody>
    <tr>
      <td width="330"><script type="text/javascript" src="menuh.js">
      </script>
          <center>
            <script type="text/javascript" src="menub.js"></script>
            <noscript>
            <div id="mB"><a class="mO"
href="index.php" >Your Browser Does Not Support This
              Script</a></div>
              </noscript>
        </center></td>
    </tr>
  </tbody>
</table>
<span style="font-family: Arial Narrow; font-weight: bold;"><br>
</span>
<table width="100%" border="0">
  <tr>
    <td width="250" valign="top"><table width="250" border="4" align="left" cellpadding="0" cellspacing="0" bordercolor="#A98743">
      <tr>
        <td align="right" valign="top"><div align="left">
          <SCRIPT LANGUAGE="JavaScript">

<!-- Begin
showImage();
//  End -->
      </script>
        </div></td>
      </tr>
      <tr>
        <td align="right" valign="top"><SCRIPT LANGUAGE="JavaScript">

<!-- Begin
showImage();
//  End -->
  </script>
          </td>
      </tr>
      <tr>
        <td align="right" valign="top"><SCRIPT LANGUAGE="JavaScript">

<!-- Begin
showImage();
//  End -->
  </script>
         </td>
      </tr>
      <tr>
        <td align="right" valign="top"><SCRIPT LANGUAGE="JavaScript">

<!-- Begin
showImage();
//  End -->
  </script>
          </td>
      </tr>
    </table></td>
    <td width="33" rowspan="2" valign="top"></td>
    <td rowspan="2" valign="top"><p class="style4">
      <?php
if ($_GET['page'])
{
$page = $_GET['page'].'.html';
include $page;
}
else
{
include 'home.html';
}
?>
    </p></td>
  </tr>
  <tr>
    <td width="250" valign="bottom"><span class="style2"> Except where noted, this web site and everything contained within the web site  was written by and is the exclusive property of the <em>Xi Mu Chapter of</em> <em>Phi Mu Alpha Fraternity of America, Inc.</em> <br>
      Any person or organization using this material without consent will be  prosecuted. <br>
      Webmaster contact: cmnunn@udel.edu.<br>
      This site &copy; Copyright 2014, Xi Mu chapter, Phi Mu Alpha  Fraternity of America, Inc.</span>
      <!-- Start of StatCounter Code -->
      <script type="text/javascript">
var sc_project=4269428; 
var sc_invisible=1; 
var sc_partition=46; 
var sc_click_stat=1; 
var sc_security="2e4ab0be"; 
</script>

<script type="text/javascript"
src="http://www.statcounter.com/counter/counter.js"></script><noscript><div
class="statcounter"><a title="joomla statistics"
href="http://www.statcounter.com/joomla/"
target="_blank"><img class="statcounter"
src="http://c.statcounter.com/4269428/0/2e4ab0be/1/"
alt="joomla statistics" ></a></div></noscript>
<!-- End of StatCounter Code --></td>
  </tr>
</table>
<br>
</center>

</body>
</html>
