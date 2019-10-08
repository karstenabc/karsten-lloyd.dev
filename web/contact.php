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

        <?php
            function addRow($field, $data) {
                $row = '<tr bgcolor="#EAF2FA">';
                $row .= '<td colspan="2"><span style="font-family: sans-serif; font-size: 12px;"><strong>'.$field.'</strong></span></td>';
                $row .= '</tr>';

                $row .= '<tr bgcolor="#FFFFFF">';
                $row .= '<td width="20">&nbsp;</td>';
                if ($field == "Email") {
                    $row .= '<td><span style="font-family: sans-serif; font-size: 12px;"><a href="mailto:'.$data.'" rel="noreferrer">'.$data.'</a></span></td>';
                } else {
                    $row .= '<td><span style="font-family: sans-serif; font-size: 12px;">'.$data.'</span></td>';
                }
                $row .= '</tr>';
                return $row;
            }

            if (isset($_POST['send'])) {
                $name = $_POST['name'];
                $email = $_POST['email'];
                $body = $_POST['message'];
                $time = date("d/m/Y H:i:s");

                $message = '<table border="0" width="100%" cellspacing="0" cellpadding="5" bgcolor="#FFFFFF">';
                $message .= '	<tbody>';
                $message .= addRow('Name', $name);
                $message .= addRow('Email', $email);
                $message .= addRow('Message', $body);
                $message .= addRow('Date', $time);
                $message .= '	</tbody>';
                $message .= '</table>';

                $subject = "Contact Form: ".$name;
                $to = "contact@karsten-lloyd.co.uk";

                $header = "From: contact-form@karsten-lloyd.co.uk \r\n";
                $header .= "Reply-To: ".$name."<".$email."> \r\n";
                $header .= "MIME-Version: 1.0\r\n";
                $header .= "Content-type: text/html\r\n";

                $retval = mail ($to,$subject,$message,$header);

                if( $retval == true ) {
                    echo '<div class="alert alert-success alert-dismissible fade show" role="alert">';
                    echo '    <button type="button" class="close" data-dismiss="alert" aria-label="Close">';
                    echo '        <span aria-hidden="true">&times;</span>';
                    echo '    </button>';
                    echo '    <strong>Email sent</strong> I&apos;ll get back to you shortly.';
                    echo '</div>';
                } else {
                    echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">';
                    echo '    <button type="button" class="close" data-dismiss="alert" aria-label="Close">';
                    echo '        <span aria-hidden="true">&times;</span>';
                    echo '    </button>';
                    echo '    <strong>Email failed to send</strong> If the error persists, please email me <a href="mailto:contact@karsten-lloyd.co.uk">here</a>.';
                    echo '</div>';
                }
            }
        ?>
        <div class="d" style="border-top: none">
            <div class="container">
                <h2>Email Form</h2>
                <div class="form">
                    <form action="" method="POST">
                        <input type="text" name="name" class="contact-input input-center" placeholder="Name">
                        <br />
                        <input type="email" name="email" class="contact-input input-center" placeholder="Email">
                        <br />
                        <textarea class="contact-input" name="message" rows="3" placeholder="Message"></textarea>
                        <br />
                        <button type="submit" name="send">Send</button>
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
