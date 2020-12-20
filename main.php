<?php
require_once ('rez.php');
if(isset($_POST['submit']))
    header('Location: redirect.php');

?>

<!DOCTYPE HTML>
<html>
 <head>
  <meta charset=UTF-8">
  <title>Yehor Samoilenko LB4</title>
 </head>
 <body>

<form action='' method='post' class="rez_form">
        <h3>Ваш любимый язык программирования?</h3>
        <p>
            <input type="radio" value="c++" name=mood>C++
        </p>
        <p>
            <input type="radio" value="php" name="mood">PHP
        </p>
        <p>
            <input type="radio" value="java" name="mood">Java
        </p>
        <p>
            <input class="submit_form" type="submit" name="submit" value="Vote">
        </p>
    </form>
     </body>
</html>
