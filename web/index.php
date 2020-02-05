<!DOCTYPE html>
<html lang="en">
    <head>
    	<title>Karsten Lloyd</title>
        <?php
            $rootPath = "";
            $activePage = "home";
            include('../private/head.php');
            include('../private/database.php');
            include('../private/navbar.php');
        ?>
    </head>
    <body>
        <div class="jumbotron">
            <h1>Karsten Lloyd</h1>
            <h2>Full Stack Developer</h2>
            <div class="container">
                <div class="contact-icons">
                    <a href="https://github.com/karstenabc" target="_blank" rel="noopener">
                        <img src="media/icons/github.svg" alt="github profile"/>
                    </a>
                    <a href="https://www.linkedin.com/in/karsten-lloyd/" target="_blank" rel="noopener">
                        <img src="media/icons/linkedin.svg" alt="linkedin profile"/>
                    </a>
                    <a href="contact">
                        <img src="media/icons/email.svg" alt="contact page"/>
                    </a>
                </div>
            </div>
        </div>


        <div class="container">
            <h2>Recent Projects</h2>
            <div class="row">
                <?php
                    $query = "SELECT * FROM projects WHERE id > 3 ORDER BY date_end = '', date_end DESC LIMIT 2";
                    if ($result = mysqli_query($db, $query)) {
                        while ($row = mysqli_fetch_array($result)) {
                            echo '<div class="col-sm-12 col-md-6">';
                            echo '  <div class="card recent">';
                            echo '      <picture>';
                            // echo '          <source srcset="media/'.substr($row['img_preview'], 0, -3).'webp" type="image/webp">';
                            echo '          <img class="card-img-top" src="media/'.$row['img_preview'].'" alt="Image of '.$row['title'].'">';
                            echo '      </picture>';
                            echo '      <div class="card-body">';
                            echo '          <h5 class="card-title">'.$row['title'].'</h5>';
                            echo '          <p class="card-text">'.$row['description'].'</p>';
                            echo '      </div>';
                            echo '      <div class="card-body card-links">';
                            if ($row['link'] != '') {
                                echo '      <a href="'.$row['link'].'" target="_blank" rel="noopener" class="card-link">Visit Project</a>';
                            }
                            echo '          <a href="portfolio#project'.$row['id'].'" class="card-link">More Information</a>';
                            echo '      </div>';
                            echo '  </div>';
                            echo '</div>';
                        }
                    }
                ?>
            </div>

        </div>
        <?php include('../private/footer.php'); ?>

    </body>
</html>
