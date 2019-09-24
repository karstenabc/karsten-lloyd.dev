<!DOCTYPE html>
<html lang="en">
    <head>
    	<title>Karsten Lloyd</title>
        <?php
            $rootPath = "";
            $activePage = "index";
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
                    $query = "SELECT * FROM projects ORDER BY date_end DESC";
                    if ($result = mysqli_query($db, $query)) {
                        while ($row = mysqli_fetch_array($result)) {
                            echo '
                            <div class="col-4">
                                <div class="card">
                                    <img class="card-img-top" src="'.$row['img'].'" alt="'.$row['title'].'">
                                    <div class="card-body">
                                        <h5 class="card-title">'.$row['title'].'</h5>
                                        <p class="card-text">'.$row['description'].'</p>
                                        <p class="card-text">Client: '.$row['client'].'</p>
                                        <p class="card-text"><small class="text-muted">'.date("F Y", strtotime(date($row['date_start']))).' - ';
                                        echo ($row['date_end'] == '') ? 'Present' : date("F Y", strtotime(date($row['date_end'])));
                            echo        '</small></p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Frontend: '.$row['frontend'].'</li>
                                        <li class="list-group-item">Backend: '.$row['backend'].'</li>
                                        <li class="list-group-item">Libraries: '.$row['libraries'].'</li>
                                    </ul>';
                                    if ($row['link'] != '') {
                                        echo '
                                        <div class="card-footer bg-transparent">
                                            <a href="'.$row['link'].'" class="card-link">View Project</a>
                                        </div>';
                                    }
                                    echo '
                                </div>
                            </div>';
                        }
                    }

                ?>




            </div>
        </div>


        <p>test</p>

    </body>
</html>
