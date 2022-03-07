<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <style>
        body{
		    top: 0px;
            background-image:url(../img/2nd-section.jpg);
            background-size: cover;
            font-family: 'Roboto', 'sans-serif';
			padding: 0 0 0 0;
			margin: 0 0 0 0;
        }
        main{
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: white;
			padding : auto auto auto auto;
        }
        .header404{
            font-family: 'Chango', cursive;
            font-size: 48px;
            color: orange;
			padding-top: 30vh;
        }
        .content404{
        text-align: center;
		width: 100%;
		padding-top: 50vh;
		}

    </style>
</head>
<body>
<?php include("headermenu.php"); ?>

    <main>
        <h4 class="header404" style="text-align: center;">Maintenance</h4>
        <div class="content-404" style="text-align: center;">
            <p style="color:white;">Situs Dalam Perawatan<br>
            <a href="/">Kembali Ke Halaman Utama</a>
        </p>
        </div>
    </main>
<?php include("footer.php"); ?>    
</body>
</html>