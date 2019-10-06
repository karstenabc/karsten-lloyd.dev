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
        <div class="title">
            <div class="container">
                <h1>Portfolio</h1>
            </div>
        </div>
        <div class="d">
            <div class="container">
                <h2>Development</h2>
                <div class="row">
                    <?php
                        $categories = array();
                        $query = "SELECT * FROM knowledge";
                        if ($result = mysqli_query($db, $query)) {
                            while ($row = mysqli_fetch_array($result)) {
                                array_push($categories, $row);
                            }
                        }
                        for ($i=0; $i<sizeof($categories); $i++) {
                            $category = $categories[$i];
                            echo '<div class="col-12">';

                            $query = "SELECT * FROM knowledge_items WHERE categoryID = $category[0] ORDER BY importance";
                            if ($result = mysqli_query($db, $query)) {
                                while ($item = mysqli_fetch_array($result)) {
                                    echo '<span class="pill">'.$item['item'].'</span>';
                                }
                            }
                            echo '</div>';
                        }
                    ?>
                </div>
                <br />
            </div>
        </div>

        <div class="container">
            <h2>Projects</h2>
            <div class="row recent">
                <div class="card-group">
                <?php
                    $query = "SELECT * FROM projects ORDER BY date_end = '', date_end DESC";
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
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Client: '.$row['client'].'</li>
                                        <li class="list-group-item">Frontend: '.$row['frontend'].'</li>
                                        <li class="list-group-item">Backend: '.$row['backend'].'</li>
                                        <li class="list-group-item">Libraries: '.$row['libraries'].'</li>
                                    </ul>';
                                    if ($row['link'] != '' || $row['link_client'] != '') {
                                        echo '<div class="card-footer" style="background-color:#'.$row['border'].'">';
                                        if ($row['link'] != '') {
                                            echo '<a href="'.$row['link'].'" class="card-link">View Project</a>';
                                        }
                                        if ($row['link_client'] != '') {
                                            echo '<a href="'.$row['link_client'].'" class="card-link">Visit Client</a>';
                                        }
                                        echo '</div>';
                                    }
                                    echo '
                                </div>
                            </div>';
                        }
                    }
                ?>
            </div>
            </div>
        </div>

        <div class="d">
            <div class="container">
                <h2>Experience</h2>
                <div class="row recent">
                    <?php
                        $query = "SELECT * FROM experience ORDER BY date_end = '', date_end DESC";
                        if ($result = mysqli_query($db, $query)) {
                            while ($row = mysqli_fetch_array($result)) {
                                echo '
                                <div class="col-sm-12 col-lg-4">
                                    <div class="card" style="border-color:#'.$row['colour'].'">
                                        <div class="card-img-container">
                                            <img src="media/'.$row['img'].'" alt="'.$row['company'].'">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">'.$row['job'].'</h5>
                                            <p class="card-text">'.$row['description'].'</p>
                                            <p class="card-text"><small class="text-muted">'.date("F Y", strtotime(date($row['date_start']))).' - ';
                                            echo ($row['date_end'] == '') ? 'Present' : date("F Y", strtotime(date($row['date_end'])));
                                echo        '</small></p>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Company: '.$row['company'].'</li>
                                            <li class="list-group-item">Role: '.$row['role'].'</li>
                                        </ul>';
                                        if ($row['link'] != '') {
                                            echo '
                                            <div class="card-footer" style="background-color:#'.$row['colour'].'">
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
            </div>
        </div>


        <div class="container">
            <h2>Education</h2>
            <div class="row recent">
                <?php
                    $establishments = array();
                    $query = "SELECT * FROM education ORDER BY date_end = '', date_end DESC, date_start DESC";
                    if ($result = mysqli_query($db, $query)) {
                        while ($row = mysqli_fetch_array($result)) {
                            array_push($establishments, $row);
                        }
                    }
                    for ($i=0; $i<sizeof($establishments); $i++) {
                        $establishment = $establishments[$i];
                        echo '
                        <div class="col-sm-12 col-md-6 col-lg-4">
                            <div class="card" style="border-color:#'.$establishment['colour'].'">
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
                                    <div class="card-footer" style="background-color:#'.$establishment['colour'].'">
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

        <?php include('footer.php'); ?>

    </body>
</html>
