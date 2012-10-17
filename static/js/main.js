window.addEvent('domready', function() {
  console.log("We are go");

  var maxLength = 45;
  var counter = 0;

  var wall = new Wall("wall", {
    autoposition: true,
    width: 600,
    height: 440,
    inertia: true,
    callOnChange: function(id) {
      console.log(id);
    },
    callOnUpdate: function(items) {
      items.each(function(e, i) {
        var a = new Element('img', {
          src: '/static/img/' + counter + '.png'
        });
        a.inject(e.node).fade("hide").fade("in");
        counter++;

        if (counter > maxLength) counter = 0;
      });
    }
  });

  wall.initWall();

  console.log("Wall created?");

  var intv = setInterval(function() {
    var direction = Math.floor(Math.random()*2);
    var velocity = Math.floor(Math.random())+1;

    var current = wall.getCoordinatesFromId(wall.getActiveItem());
    var new_pos = current;

    if (!current) {
      new_pos.c = 0;
      new_pos.r = 0;
    } else {
      if (direction == 1) {
        new_pos.c = current.c + velocity;
      } else {
        new_pos.r = current.r + velocity;
      }
    }

    wall.moveToActive(new_pos.c, new_pos.r);

  }, 2500);
});
