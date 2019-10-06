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
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <h2>Recent Projects</h2>
                <ol class="carousel-indicators">
                    <?php
                        for ($i=0; $i < sizeof($projects); $i+=3) {
                            if ($i == 0) {
                                echo '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>';
                            } else {
                                echo '<li data-target="#carouselExampleIndicators" data-slide-to="'.$i.'"></li>';
                            }
                        }
                    ?>
                </ol>
                <div class="carousel-inner">
                    <?php
                        for ($i=0; $i<sizeof($projects); $i++) {
                            $project = $projects[$i];
                            if ($i % 3 == 0) {
                                if ($i == 0) {
                                    echo '<div class="carousel-item active">';
                                } else {
                                    echo '<div class="carousel-item">';
                                }
                                echo '<div class="row">';
                            }
                            echo '
                            <div class="col-sm-12 col-md-6 col-lg-4">
                                <div class="card" style="border-color:#'.$project['border'].'">
                                    <div class="card-img-container">
                                        <img src="media/'.$project['img'].'" alt="'.$project['title'].'">
                                    </div>
                                    <div class="card-body" style="background-color:#'.$project['border'].'; color:#FFF;">
                                        <h5 class="card-title">'.$project['title'].'</h5>

                                    </div>
                                    <a><div class="card-footer" style="background-color:#FFF">
                                        <a href="'.$project['link'].'" class="card-link card-link-home">More Information</a>
                                    </div></a>
                                </div>
                            </div>';

                            if ($i % 3 == 2 || $i == sizeof($projects)+1) {
                                echo '</div></div>';
                            }
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>




        </div>
        <?php include('../private/footer.php'); ?>

    </body>
</html>
