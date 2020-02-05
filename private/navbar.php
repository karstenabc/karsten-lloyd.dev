<nav class="navbar navbar-expand-sm navbar-light">
    <a class="navbar-brand" href="/">
        <img src="media/logo3/vector/isolated-monochrome-white.svg" width="30" height="30" class="d-inline-block align-top" alt="Website Logo">
        <?php echo ($activePage == "home") ? '' : 'Karsten Lloyd'; ?>
    </a>

    <!-- Toggler/collapsibe Button -->
    <button class="navbar-toggler menu-toggle" type="button" name="Navigation Menu Button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <img src="media/icons/menu.svg" alt="Navigation menu"/>
    </button>

    <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="nav navbar-nav">
            <li class="nav-item <?php echo ($activePage == "home") ? 'active' : ''; ?>">
                <a class="nav-link" href="/">home</a>
            </li>
            <li class="nav-item <?php echo ($activePage == "portfolio") ? 'active' : ''; ?>">
                <a class="nav-link" href="portfolio">portfolio</a>
            </li>
            <li class="nav-item <?php echo ($activePage == "contact") ? 'active' : ''; ?>">
                <a class="nav-link" href="contact">contact</a>
            </li>
        </ul>
    </div>
</nav>

<button onclick="topFunction()" id="toTop" title="Go to top" class="hidden">&#8673;</button>

<script>
    window.onscroll = function() {
        scrollFunction()
    };
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("toTop").classList.remove("hidden");
        } else {
            document.getElementById("toTop").classList.add("hidden");
        }
    }
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
</script>
