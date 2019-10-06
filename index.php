<!DOCTYPE html>
<html lang="en">
    <head>
    	<title>Karsten Lloyd</title>
        <?php
            $rootPath = "";
            $activePage = "home";
            include('head.php');
            include('database.php');
            include('navbar.php');
        ?>
    </head>
    <body>

        <div class="jumbotron">

        </div>
        <div class="container">
            <h1>Recent Projects</h1>
            <div class="row recent">
                <?php
                    $query = "SELECT * FROM projects ORDER BY date_end = '', date_end DESC LIMIT 3";
                    if ($result = mysqli_query($db, $query)) {
                        while ($row = mysqli_fetch_array($result)) {
                            echo '
                            <div class="col-sm-12 col-md-6 col-lg-4">
                                <div class="card" style="border-color:#'.$row['border'].'">
                                    <div class="card-img-container">
                                        <img src="media/'.$row['img'].'" alt="'.$row['title'].'">
                                    </div>
                                    <div class="card-body" style="background-color:#'.$row['border'].'; color:#FFF;">
                                        <h5 class="card-title">'.$row['title'].'</h5>
                                        <p class="card-text">'.$row['description'].'</p>
                                        <p class="card-text"><small class="text-muted">'.date("F Y", strtotime(date($row['date_start']))).' - ';
                                        echo ($row['date_end'] == '') ? 'Present' : date("F Y", strtotime(date($row['date_end'])));
                                        echo        '</small></p>
                                    </div>
                                    <a><div class="card-footer" style="background-color:#FFF">
                                        <a href="'.$row['link'].'" class="card-link card-link-home">More Information</a>
                                    </div></a>
                                </div>
                            </div>';
                        }
                    }
                ?>

            </div>
        </div>
        <?php include('footer.php'); ?>

    </body>
</html>
