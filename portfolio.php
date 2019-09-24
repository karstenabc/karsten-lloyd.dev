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
                                <img class="" src="media/'.$establishment['img'].'" alt="'.$establishment['establishment'].'">
                                </div><div class="card-body">
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
