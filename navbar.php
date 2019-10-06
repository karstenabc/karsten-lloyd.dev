<!-- Image and text -->
<nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="index.php">
        <img src="media/logo3/vector/isolated-monochrome-white.svg" width="30" height="30" class="d-inline-block align-top" alt="">
        <?php echo ($activePage == "home") ? '' : 'Karsten Lloyd'; ?>
    </a>

    <ul class="nav justify-content-center">
        <li class="nav-item <?php echo ($activePage == "home") ? 'active' : ''; ?>">
            <a class="nav-link" href="index">home</a>
        </li>
        <li class="nav-item <?php echo ($activePage == "portfolio") ? 'active' : ''; ?>">
            <a class="nav-link" href="portfolio.php">portfolio</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">contact</a>
        </li>
    </ul>
</nav>
