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

        <?php
            $projects = array();
            $query = "SELECT * FROM projects ORDER BY date_end = '', date_end DESC";
            if ($result = mysqli_query($db, $query)) {
                while ($row = mysqli_fetch_array($result)) {
                    array_push($projects, $row);
                }
            }
        ?>

        <div class="jumbotron">
            <h1>Karsten Lloyd</h1>
            <h2>Full Stack Developer</h2>
        </div>

        <div class="container">
            <h2>Recent Projects</h2>
            <div class="row">
                <?php
                    $query = "SELECT * FROM projects ORDER BY date_end = '', date_end DESC LIMIT 2";
                    if ($result = mysqli_query($db, $query)) {
                        while ($row = mysqli_fetch_array($result)) {
                            echo '<div class="col-6">';
                            echo '  <div class="card recent">';
                            echo '      <img class="card-img-top" src="media/'.$row['img_preview'].'" alt="'.$row['title'].'">';
                            echo '      <div class="card-body">';
                            echo '          <h5 class="card-title">'.$row['title'].'</h5>';
                            echo '          <p class="card-text">'.$row['description'].'</p>';
                            echo '      </div>';
                            echo '      <div class="card-body card-links">';
                            if ($row['link'] != '') {
                                echo '      <a href="'.$row['link'].'" target="_blank" class="card-link">Visit Project</a>';
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
