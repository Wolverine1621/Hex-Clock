var main = function() {
    $("#hidingbuttons").toggle(); // Hide buttons at beginning

    $("#main").click(function() { // Get a different animation
        $("#hexcolor").fadeToggle();
    });

    $("#hidebtn").click(function() {
        $("#hidingbuttons").fadeToggle();

        var $this = $(this);
        $this.toggleClass('h');
            if($this.hasClass('h')){
        $this.text('Hide');
        } else {
            $this.text('Info');
        }
    });

    $("#utcbtn").click(function() {
        $("#timetype").fadeToggle();

        var $this = $(this);
        $this.toggleClass('utc');
            if($this.hasClass('utc')){
        $this.text('Local');
        } else {
            $this.text('UTC');
        }
    });
};

$(document).ready(main);
