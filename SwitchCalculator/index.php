
<?php
if (isset($_POST['submit'])){
    $num1=$_POST['num1'];
    $num2=$_POST['num2'];
    $submit=$_POST['submit'];
    $result="";

    switch($submit){
        case 'Add';
            $result=$num1 + $num2;
        break;
        case 'Subtract';
            $result=$num1 - $num2;
        break;
        case 'Multiply';
            $result=$num1 * $num2;
        break;
        case 'Divide';
            $result=$num1 / $num2;
        break;
        case 'Modulus';
            $result=$num1 % $num2;
        break;

        default:
            $result ="Error";
        break;
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Switch Calculator</title>
    <style type="text/css">
        *{
     margin:0;
     padding:0;
     box-sizing:border-box;
     font-family:Arial,"Helvetica Neue", "Helvetica", sans-serif;
        }
    body{
        background-color:beige;
    }
    .main{
        
        width:400px;
        margin:50px auto;
        background-color: #38bce7;
        box-shadow; 0 0 10px 1px #000;
    }
    h2{
        width:100%;
        padding:10px;
        background-color:#004ede;
        color:#fff
        text-align:center;
        text-shadow:1px 1px 1px #000;
    }
    #form-box{
        padding:15px;
    }
    .inp{
        width:100%;
        padding: 15px;
        font-size:20px;
        margin-bottom:10px;
        border:none;
        color:#c11;
        border-radius:20px;
    }
    .inp{
      outline:none;
      box-shadow: 1px 2px 5px #000;
    }
    ::-webkit-input-placeholder{
        color:#c66;
        }
        .btn{
            width: 100%;
            padding:8px;
            margin-bottom:5px;
            border:none;
            cursor:pointer;
            box-shadow:0 0 25px #000 inset, 1px 1px 1px #000;
            border-radius:20px;
            font-size:18px;
        }
        .result{
            width:100%;
            text-align: center;
            background-color:#1603ca;
            color:#fff;
            padding:8px;
        }
        </style>
</head>

<body>
    <div class="main">
        <h2>Simple Switch Statement Calculator</h2>
        <form action="" method="post" id="form-box">
            <input type="number" class="inp" name="num1" placeholder="Enter first digit..." required><br>
            <input type="number" class="inp" name="num2" placeholder="Enter second digit..." required><br>
            <input type="submit" name="submit" class="btn" value="Add">
            <input type="submit" name="submit" class="btn" value="Subtract">
            <input type="submit" name="submit" class="btn" value="Multiply">
            <input type="submit" name="submit" class="btn" value="Divide">
            <input type="submit" name="submit" class="btn" value="Modulus">
        </form>
        <h1 class="result">Total : <?php
                    if(isset($result)){echo $result;}
                    ?>
        </h1>
    </div>
</body>

</html>