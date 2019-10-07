<!DOCTYPE html>
<html lang="en">
    <head>
    	<title>Karsten Lloyd</title>
        <?php
            $activePage = "contact";
            $rootPath = "";
            include('../private/head.php');
            include('../private/database.php');
            include('../private/navbar.php');
        ?>
    </head>
    <body>
        <div class="title">
            <div class="container">
                <h1>Contact</h1>
            </div>
        </div>
        <div class="d">
            <div class="container">
                <h2>Email Form</h2>
                <div class="form">
                    <form>
                        <input type="text" class="contact-input input-center" placeholder="Name">
                        <br />
                        <input type="email" class="contact-input input-center" placeholder="Email">
                        <br />
                        <textarea class="contact-input" rows="3" placeholder="Message"></textarea>
                        <br />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <br />
            </div>
        </div>

        <?php include('../private/footer.php'); ?>
    </body>

    <script>

    </script>
</html>
