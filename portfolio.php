<!DOCTYPE html>
<html lang="en">
    <head>
    	<title>Karsten Lloyd</title>
        <?php
            $rootPath = "";
            $activePage = "portfolio";
            include('head.php');
            include('database.php');
            include('navbar.php');
        ?>
    </head>
    <body>
        <div class="container">
            <h1>Portfolio</h1>
            <h2>Projects</h2>
            <div class="row recent">
                <?php
                    $query = "SELECT * FROM projects ORDER BY date_end DESC";
                    if ($result = mysqli_query($db, $query)) {
                        while ($row = mysqli_fetch_array($result)) {
                            echo '
                            <div class="col-4">
                                <div class="card">
                                    <div class="card-img-container">
                                        <img src="media/'.$row['img'].'" alt="'.$row['title'].'">
                                    </div>
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


            <h2>Experience</h2>
            <div class="row recent">
                <?php
                    $query = "SELECT * FROM experience ORDER BY date_end DESC";
                    if ($result = mysqli_query($db, $query)) {
                        while ($row = mysqli_fetch_array($result)) {
                            echo '
                            <div class="col-4">
                                <div class="card">
                                    <div class="card-img-container">
                                        <img src="media/'.$row['img'].'" alt="'.$row['company'].'">
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">'.$row['job'].'</h5>
                                        <p class="card-text">'.$row['description'].'</p>
                                        <p class="card-text">Company: '.$row['company'].'</p>
                                        <p class="card-text"><small class="text-muted">'.date("F Y", strtotime(date($row['date_start']))).' - ';
                                        echo ($row['date_end'] == '') ? 'Present' : date("F Y", strtotime(date($row['date_end'])));
                            echo        '</small></p>
                                    </div>';
                                    if ($row['link'] != '') {
                                        echo '
                                        <div class="card-footer bg-transparent">
                                            <a href="'.$row['link'].'" class="card-link">View Site</a>
                                        </div>';
                                    }
                                    echo '
                                </div>
                            </div>';
                        }
                    }
                ?>
            </div>


            <h2>Education</h2>
            <div class="row recent">
                <?php
                    $establishments = array();
                    $query = "SELECT * FROM education ORDER BY date_start DESC";
                    if ($result = mysqli_query($db, $query)) {
                        while ($row = mysqli_fetch_array($result)) {
                            array_push($establishments, $row);
                        }
                    }
                    for ($i=0; $i<sizeof($establishments); $i++) {
                        $establishment = $establishments[$i];
                        echo '
                        <div class="col-sm-12 col-md-6 col-lg-4">
                            <div class="card">
                                <div class="card-img-container">
                                    <img src="media/'.$establishment['img'].'" alt="'.$establishment['establishment'].'">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">'.$establishment['establishment'].'</h5>
                                    <p class="card-text">'.$establishment['level'].'</p>
                                    <p class="card-text"><small class="text-muted">'.date("F Y", strtotime(date($establishment['date_start']))).' - ';
                                    echo ($establishment['date_end'] == '') ? 'Present' : date("F Y", strtotime(date($establishment['date_end'])));
                        echo        '</small></p>
                                </div>';
                                $query = "SELECT * FROM grades WHERE studied_at = $establishment[0]";
                                if ($result = mysqli_query($db, $query)) {
                                    echo '<ul class="list-group list-group-flush">';
                                    while ($grade = mysqli_fetch_array($result)) {
                                        echo '<li class="list-group-item">
                                                <table style="width: 100%">
                                                    <tr>
                                                        <td>'.$grade['subject'].'</td>
                                                        <td style="width:50px">'.$grade['grade'].'</td>
                                                    </tr>
                                                </table>
                                            </li>';
                                    }
                                    echo '</ul>';
                                }
                                if ($establishment['link'] != '') {
                                    echo '
                                    <div class="card-footer bg-transparent">
                                        <a href="'.$establishment['link'].'" class="card-link">Visit Site</a>
                                    </div>';
                                }
                                echo '
                            </div>
                        </div>';
                    }

                ?>
            </div>
        </div>


        <p>test</p>

    </body>
</html>
