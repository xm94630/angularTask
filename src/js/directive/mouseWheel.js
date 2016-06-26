appDirectives.directive('mouseWheel', function() {
    return function(scope, elm, attr) {
        var raw = elm[0];
        elm.bind('mousewheel', function(e) {
            var _div = angular.element(this),
                _children = _div.children();

            var _Height = _children[0].offsetHeight - _div[0].offsetHeight;

            var _timer, speed;

            var _cTop = _div[0].scrollTop;

            if (e.wheelDelta < 0) {
                speed = 5;
            } else if(e.wheelDelta > 0) {
                speed = -5;
            }else{
            	speed = 0;
            }

            _cTop = _cTop + speed;

            if (_cTop < 0) {
                _cTop = 0;
            } else if (_cTop > _Height) {
                _cTop = _Height;
            } else {
                e.preventDefault();
            }

            _div[0].scrollTop = _cTop;
        });
    };
});
