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
                    $projects = array();
                    $query = "SELECT * FROM projects ORDER BY date_end = '', date_end DESC";
                    if ($result = mysqli_query($db, $query)) {
                        while ($row = mysqli_fetch_array($result)) {
                            array_push($projects, $row);
                        }
                    }
                    for ($i=0; $i<sizeof($projects); $i++) {
                        if ($i < 3) {
                            echo '<div class="col-sm-12 col-md-6 col-lg-4">';
                        } else {
                            echo '<div class="col-sm-12 col-md-6 col-lg-4 hidden" id=project'.$i.'>';
                        }
                        echo '
                            <div class="card" style="border-color:#'.$projects[$i]['border'].'">
                                <div class="card-img-container">
                                    <img src="media/'.$projects[$i]['img'].'" alt="'.$projects[$i]['title'].'">
                                </div>
                                <div class="card-body" style="background-color:#'.$projects[$i]['border'].'; color:#FFF;">
                                    <h5 class="card-title">'.$projects[$i]['title'].'</h5>
                                    <p class="card-text">'.$projects[$i]['description'].'</p>
                                    <p class="card-text"><small class="text-muted">'.date("F Y", strtotime(date($projects[$i]['date_start']))).' - ';
                                    echo ($projects[$i]['date_end'] == '') ? 'Present' : date("F Y", strtotime(date($projects[$i]['date_end'])));
                        echo        '</small></p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Client: '.$projects[$i]['client'].'</li>
                                    <li class="list-group-item">Frontend: '.$projects[$i]['frontend'].'</li>
                                    <li class="list-group-item">Backend: '.$projects[$i]['backend'].'</li>
                                    <li class="list-group-item">Libraries: '.$projects[$i]['libraries'].'</li>
                                </ul>';
                                if ($projects[$i]['link'] != '' || $projects[$i]['link_client'] != '') {
                                    echo '<div class="card-footer" style="background-color:#'.$projects[$i]['border'].'">';
                                    if ($projects[$i]['link'] != '') {
                                        echo '<a href="'.$projects[$i]['link'].'" class="card-link">View Project</a>';
                                    }
                                    if ($projects[$i]['link_client'] != '') {
                                        echo '<a href="'.$projects[$i]['link_client'].'" class="card-link">Visit Client</a>';
                                    }
                                    echo '</div>';
                                }
                                echo '
                            </div>
                        </div>';
                    }
                    echo '</div>';
                    if (sizeof($projects) > 3) {
                        echo '<div class="show"><button id="show_projects" onclick="showProjects(\'3\',\''.sizeof($projects).'\')" class="btn">Show All ('.sizeof($projects).')</button></div>';
                    }
                ?>
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
                                            <p class="card-text"><small class="text-muted text-black">'.date("F Y", strtotime(date($row['date_start']))).' - ';
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
                                    <p class="card-text"><small class="text-muted text-black">'.date("F Y", strtotime(date($establishment['date_start']))).' - ';
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

    <script>
        function showProjects(from, to) {
            for (var i=from; i<to; i++) {
                var project = document.getElementById("project"+i);
                project.classList.remove("hidden");
            }
            var show = document.getElementById("show_projects");
            show.classList.add("hidden");
        }

    </script>
</html>
