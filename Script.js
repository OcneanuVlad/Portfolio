var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (/Android|iPhone/i.test(navigator.userAgent)) {
    location.replace("https://ocneanuvlad.com/mobile/");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Main pages navigation


var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.state = {
            activePage: 1,
            leftButton: 'ABOUT',
            rightButton: 'WORK'
        };

        _this.handleLeft = _this.handleLeft.bind(_this);
        _this.handleRight = _this.handleRight.bind(_this);
        _this.handleFirst = _this.handleFirst.bind(_this);
        _this.handleLast = _this.handleLast.bind(_this);
        _this.handleText = _this.handleText.bind(_this);
        _this.activateButtons = _this.activateButtons.bind(_this);
        _this.disableButtons = _this.disableButtons.bind(_this);
        _this.handleColors = _this.handleColors.bind(_this);
        _this.handleSlide = _this.handleSlide.bind(_this);
        _this.handleBars = _this.handleBars.bind(_this);
        return _this;
    }

    _createClass(Button, [{
        key: 'handleLeft',
        value: function handleLeft() {
            var _this2 = this;

            document.querySelectorAll('.ocn').forEach(function (e) {
                e.style.width = "12px";
            });
            document.querySelectorAll('.vld').forEach(function (e) {
                e.style.width = "11px";
            });

            document.getElementById("slide0").style.transition = "margin-left 2s";

            document.querySelector('#about').style.opacity = "0";
            document.querySelector('#home').style.opacity = "0";
            document.querySelector('#projects').style.opacity = "0";

            setTimeout(function () {
                document.querySelector('#spawn11').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";
                document.querySelector('#spawn12').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";
                document.querySelector('#spawn21').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";
                document.querySelector('#spawn22').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";

                document.querySelector('#spawn11').style.width = "100vw";
                document.querySelector('#spawn12').style.width = "100vw";
                document.querySelector('#spawn11').style.opacity = "1";
                document.querySelector('#spawn12').style.opacity = "1";
                document.querySelector('#spawn11').addEventListener('transitionend', _this2.handleSlide);

                _this2.setState({
                    activePage: _this2.state.activePage - 1
                });

                var slider = document.getElementById("slide0");
                setTimeout(function () {
                    switch (_this2.state.activePage % 3) {
                        case -1:
                            slider.style.marginLeft = "1.3vw";
                            slider.addEventListener('transitionend', _this2.handleFirst);
                            break;
                        case 0:
                            slider.style.marginLeft = "-3.6vw";
                            break;
                        case 1:
                            slider.style.marginLeft = "-8.55vw";
                            break;
                        case 2:
                            slider.style.marginLeft = "-13.3vw";
                            break;
                        case -2:
                            slider.style.marginLeft = "-18.2vw";
                            slider.addEventListener('transitionend', _this2.handleLast);
                            break;
                    }
                }, 10);
            }, 300);
        }
    }, {
        key: 'handleRight',
        value: function handleRight() {
            var _this3 = this;

            document.querySelectorAll('.ocn').forEach(function (e) {
                e.style.width = "12px";
            });
            document.querySelectorAll('.vld').forEach(function (e) {
                e.style.width = "11px";
            });

            document.getElementById("slide0").style.transition = "margin-left 2s";

            document.querySelector('#about').style.opacity = "0";
            document.querySelector('#home').style.opacity = "0";
            document.querySelector('#projects').style.opacity = "0";

            document.querySelector('#spawn11').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";
            document.querySelector('#spawn12').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";
            document.querySelector('#spawn21').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";
            document.querySelector('#spawn22').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";

            setTimeout(function () {
                document.querySelector('#spawn21').style.width = "100vw";
                document.querySelector('#spawn22').style.width = "100vw";
                document.querySelector('#spawn21').style.opacity = "1";
                document.querySelector('#spawn22').style.opacity = "1";
                document.querySelector('#spawn21').addEventListener('transitionend', _this3.handleSlide);

                _this3.setState({
                    activePage: _this3.state.activePage + 1
                });

                setTimeout(function () {
                    if (_this3.state.activePage == 3) {
                        _this3.setState({
                            activePage: -2
                        });
                    }
                }, 10);
                var slider = document.getElementById("slide0");
                setTimeout(function () {
                    switch (_this3.state.activePage % 3) {
                        case -1:
                            slider.style.marginLeft = "1.3vw";
                            slider.addEventListener('transitionend', _this3.handleFirst);
                            break;
                        case 0:
                            slider.style.marginLeft = "-3.6vw";
                            break;
                        case 1:
                            slider.style.marginLeft = "-8.55vw";
                            break;
                        case 2:
                            slider.style.marginLeft = "-13.3vw";
                            break;
                        case -2:
                            slider.style.marginLeft = "-18.2vw";
                            slider.addEventListener('transitionend', _this3.handleLast);
                            break;
                    }
                }, 10);
            }, 300);
        }
    }, {
        key: 'handleSlide',
        value: function handleSlide() {
            if (this.state.activePage == 3) {
                this.setState({
                    activePage: -2
                });
            }
            this.handleText();
            document.getElementById("buttonText1").style.opacity = "1";
            document.getElementById("buttonText2").style.opacity = "1";

            document.querySelector('#spawn21').removeEventListener('transitionend', this.handleSlide);
            document.querySelector('#spawn11').removeEventListener('transitionend', this.handleSlide);

            document.querySelector('#spawn11').style.top = "2.5vh";
            document.querySelector('#spawn12').style.bottom = "2.5vh";
            document.querySelector('#spawn21').style.top = "2.5vh";
            document.querySelector('#spawn22').style.bottom = "2.5vh";
            document.querySelector('#spawn11').addEventListener('transitionend', this.handleBars);
            document.querySelector('#spawn21').addEventListener('transitionend', this.handleBars);

            document.querySelector('#home').style.transition = "background-color 1.4s, color 1.4s";
            document.querySelector('#about').style.transition = "background-color 1.4s, color 1.4s";
            document.querySelector('#projects').style.transition = "background-color 1.4s, color 1.4s";
            document.querySelector('#about').style.opacity = "1";
            document.querySelector('#home').style.opacity = "1";
            document.querySelector('#projects').style.opacity = "1";
            document.querySelector('#projects').style.height = "0vh";
            document.querySelector('#about').style.height = "0vh";
            document.querySelector('#home').style.height = "0vh";

            switch (this.state.activePage % 3) {
                case -1:
                    document.querySelector('#projects').style.transition = "background-color 1.4s, color 1.4s, height 1s";
                    document.querySelector('#projects').style.height = "95vh";
                    this.setState({
                        activePage: 2
                    });
                    break;
                case 0:
                    document.querySelector('#about').style.transition = "background-color 1.4s, color 1.4s, height 1s";
                    document.querySelector('#about').style.height = "95vh";
                    break;
                case 1:
                    document.querySelector('#home').style.transition = "background-color 1.4s, color 1.4s, height 1s";
                    document.querySelector('#home').style.height = "95vh";
                    break;
                case 2:
                    document.querySelector('#projects').style.transition = "background-color 1.4s, color 1.4s, height 1s";
                    document.querySelector('#projects').style.height = "95vh";
                    break;
                case -2:
                    document.querySelector('#about').style.transition = "background-color 1.4s, color 1.4s, height 1s";
                    document.querySelector('#about').style.height = "95vh";
                    this.setState({
                        activePage: 0
                    });
                    break;
            }
            setTimeout(function () {
                document.querySelector('#home').style.transition = "background-color 1.4s, color 1.4s, height 1s, opacity 0.6s";
                document.querySelector('#about').style.transition = "background-color 1.4s, color 1.4s, height 1s, opacity 0.6s";
                document.querySelector('#projects').style.transition = "background-color 1.4s, color 1.4s, height 1s, opacity 0.6s";
            }, 1000);
        }
    }, {
        key: 'handleBars',
        value: function handleBars() {
            var _this4 = this;

            document.querySelector('#spawn11').removeEventListener('transitionend', this.handleBars);
            document.querySelector('#spawn21').removeEventListener('transitionend', this.handleBars);
            document.querySelector('#spawn11').style.opacity = "0";
            document.querySelector('#spawn12').style.opacity = "0";
            document.querySelector('#spawn21').style.opacity = "0";
            document.querySelector('#spawn22').style.opacity = "0";
            setTimeout(function () {
                _this4.activateButtons();
                document.querySelector('#spawn11').style.transition = "0s";
                document.querySelector('#spawn12').style.transition = "0s";
                document.querySelector('#spawn21').style.transition = "0s";
                document.querySelector('#spawn22').style.transition = "0s";
                document.querySelector('#spawn11').style.width = "7vw";
                document.querySelector('#spawn12').style.width = "7vw";
                document.querySelector('#spawn21').style.width = "7vw";
                document.querySelector('#spawn22').style.width = "7vw";
                document.querySelector('#spawn11').style.top = "50vh";
                document.querySelector('#spawn12').style.bottom = "50vh";
                document.querySelector('#spawn21').style.top = "50vh";
                document.querySelector('#spawn22').style.bottom = "50vh";
            }, 1100);
        }
    }, {
        key: 'handleText',
        value: function handleText() {
            switch (this.state.activePage % 3) {
                case -1:
                    this.setState({
                        leftButton: 'HOME',
                        rightButton: 'ABOUT'
                    });
                    break;
                case 0:
                    this.setState({
                        leftButton: 'WORK',
                        rightButton: 'HOME'
                    });
                    break;
                case 1:
                    this.setState({
                        leftButton: 'ABOUT',
                        rightButton: 'WORK'
                    });
                    break;
                case 2:
                    this.setState({
                        leftButton: 'HOME',
                        rightButton: 'ABOUT'
                    });
                    break;
                case -2:
                    this.setState({
                        leftButton: 'WORK',
                        rightButton: 'HOME'
                    });
                    break;
            }
        }
    }, {
        key: 'handleFirst',
        value: function handleFirst() {
            document.getElementById("slide0").removeEventListener('transitionend', this.handleFirst);

            document.getElementById("slide0").style.transition = "margin-left 0s";
            document.getElementById("slide0").style.marginLeft = "-13.3vw";
        }
    }, {
        key: 'handleLast',
        value: function handleLast() {
            document.getElementById("slide0").removeEventListener('transitionend', this.handleLast);

            document.getElementById("slide0").style.transition = "margin-left 0s";
            document.getElementById("slide0").style.marginLeft = "-3.6vw";
        }
    }, {
        key: 'handleColors',
        value: function handleColors() {
            store.style.setProperty('--colorBack', pallete[colorPallete][1]);
            store.style.setProperty('--colorBody', pallete[colorPallete][0]);
            store.style.setProperty('--colorFront', pallete[colorPallete][2]);
            document.querySelector('#denimBack').style.filter = pallete[colorPallete][3];
            document.querySelectorAll('.contactImg').forEach(function (e) {
                e.style.filter = pallete[colorPallete][3];
            });

            if (colorPallete >= pallete.length - 1) {
                colorPallete = 0;
            } else {
                colorPallete++;
            }
        }
    }, {
        key: 'disableButtons',
        value: function disableButtons() {
            document.getElementById("leftButton").classList.add('disable');
            document.getElementById("rightButton").classList.add('disable');

            document.getElementById("work1").classList.add('disable');
            document.getElementById("work2").classList.add('disable');
            document.getElementById("work3").classList.add('disable');

            document.getElementById("buttonText1").style.opacity = "0";
            document.getElementById("buttonText2").style.opacity = "0";
            this.handleColors();
        }
    }, {
        key: 'activateButtons',
        value: function activateButtons() {
            document.getElementById("leftButton").classList.remove('disable');
            document.getElementById("rightButton").classList.remove('disable');

            document.getElementById("work1").classList.remove('disable');
            document.getElementById("work2").classList.remove('disable');
            document.getElementById("work3").classList.remove('disable');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: function onClick() {
                            _this5.handleLeft();_this5.disableButtons();
                        }, id: 'leftButton' },
                    React.createElement(
                        'p',
                        { id: 'buttonText1' },
                        this.state.leftButton
                    ),
                    React.createElement(
                        'section',
                        { onClick: function onClick() {
                                _this5.handleLeft();_this5.disableButtons();
                            }, id: 'points1' },
                        React.createElement('span', { onClick: function onClick() {
                                _this5.handleLeft();_this5.disableButtons();
                            }, id: 'pointLine1' }),
                        React.createElement('span', { id: 'point11', 'class': 'point' }),
                        React.createElement('span', { id: 'point12', 'class': 'point' }),
                        React.createElement('span', { id: 'point13', 'class': 'point' }),
                        React.createElement('span', { id: 'point14', 'class': 'point' })
                    )
                ),
                React.createElement(
                    'button',
                    { onClick: function onClick() {
                            _this5.handleRight();_this5.disableButtons();
                        }, id: 'rightButton' },
                    React.createElement(
                        'p',
                        { id: 'buttonText2' },
                        this.state.rightButton
                    ),
                    React.createElement(
                        'section',
                        { onClick: function onClick() {
                                _this5.handleLeft();_this5.disableButtons();
                            }, id: 'points2' },
                        React.createElement('span', { onClick: function onClick() {
                                _this5.handleLeft();_this5.disableButtons();
                            }, id: 'pointLine2' }),
                        React.createElement('span', { id: 'point21', 'class': 'point' }),
                        React.createElement('span', { id: 'point22', 'class': 'point' }),
                        React.createElement('span', { id: 'point23', 'class': 'point' }),
                        React.createElement('span', { id: 'point24', 'class': 'point' })
                    )
                )
            );
        }
    }]);

    return Button;
}(React.Component);

var colorPallete = 0;
var pallete = [['rgb(0,161,154)', 'rgb(0,161,154)', 'rgb(235,237,237)', 'invert(100%) sepia(5%) saturate(100%) hue-rotate(119deg) brightness(93%) contrast(100%)'], ['rgb(40,43,41)', 'rgb(40,43,41)', 'rgb(166,209,201)', 'invert(88%) sepia(26%) saturate(261%) hue-rotate(116deg) brightness(91%) contrast(81%)'], ['rgb(166,209,201)', 'rgb(166,209,201)', 'rgb(232,60,56)', 'invert(69%) sepia(87%) saturate(6938%) hue-rotate(341deg) brightness(95%) contrast(91%)'], ['rgb(244,196,196)', 'rgb(244,196,196)', 'rgb(40,43,41)', 'invert(16%) sepia(5%) saturate(452%) hue-rotate(87deg) brightness(94%) contrast(96%)'], ['rgb(235,237,237)', 'rgb(235,237,237)', 'rgb(232,69,65)', 'invert(45%) sepia(18%) saturate(2671%) hue-rotate(320deg) brightness(90%) contrast(105%)'], ['rgb(246, 247, 245)', 'rgb(168, 173, 165)', 'rgb(36, 62, 54)', 'invert(18%) sepia(33%) saturate(515%) hue-rotate(110deg) brightness(97%) contrast(88%)'], ['rgb(1, 87, 83)', 'rgb(0, 70, 67)', 'rgb(250, 244, 211)', 'invert(94%) sepia(2%) saturate(2444%) hue-rotate(5deg) brightness(103%) contrast(96%)'], ['rgb(143, 126, 247)', 'rgb(93, 82, 163)', 'rgb(248, 247, 255)', 'invert(99%) sepia(93%) saturate(1496%) hue-rotate(180deg) brightness(104%) contrast(116%)'], ['rgb(215, 250, 241)', 'rgb(173, 201, 195)', 'black', 'invert(0%) sepia(96%) saturate(7435%) hue-rotate(131deg) brightness(89%) contrast(92%)'], ['rgb(72, 78, 82)', 'rgb(57, 62, 65)', 'rgb(246, 247, 235)', 'invert(99%) sepia(81%) saturate(179%) hue-rotate(23deg) brightness(105%) contrast(93%)']];
var store = document.querySelector(':root');

var container = document.querySelector('#buttonContainer');
ReactDOM.render(React.createElement(Button, null), container);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Work pages 


var page = 0;
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#video').playbackRate = 1;
});

function ColorChange() {
    store.style.setProperty('--colorBack', pallete[colorPallete][1]);
    store.style.setProperty('--colorBody', pallete[colorPallete][0]);
    store.style.setProperty('--colorFront', pallete[colorPallete][2]);
    document.querySelector('#denimBack').style.filter = pallete[colorPallete][3];

    document.querySelectorAll('.contactImg').forEach(function (e) {
        e.style.filter = pallete[colorPallete][3];
    });

    if (colorPallete >= pallete.length - 1) {
        colorPallete = 0;
    } else {
        colorPallete++;
    }
}

function Work(index) {

    ColorChange();

    var transition1 = document.querySelector('#transition1');
    var transition2 = document.querySelector('#transition2');
    var transition3 = document.querySelector('#transition3');

    document.getElementById("work1").classList.add('disable');
    document.getElementById("work2").classList.add('disable');
    document.getElementById("work3").classList.add('disable');

    document.getElementById("leftButton").classList.add('disable');
    document.getElementById("rightButton").classList.add('disable');

    document.getElementById("previous").classList.add('disable');
    document.getElementById("next").classList.add('disable');
    document.getElementById("close").classList.add('disable');

    transition1.style.left = "0vw";
    setTimeout(function () {
        transition2.style.left = "0vw";
    }, 300);
    setTimeout(function () {
        transition3.style.left = "0vw";
    }, 600);

    function secondSwipe() {
        document.querySelector('#projects').style.height = "0vh";

        infoElements.forEach(function (e) {
            e.style.width = "0px";
            e.lastElementChild.firstElementChild.style.width = "0px";
        });
        lines.forEach(function (e) {
            e.style.width = "0vw";
        });
        descriptions.forEach(function (e) {
            e.firstElementChild.style.marginLeft = "-10vw";
        });

        document.querySelector('#projectsContainer').scrollTop = 0;

        transition3.removeEventListener('transitionend', secondSwipe);

        if (index == -10) {
            document.querySelector('#projects').style.height = "95vh";
            document.querySelector('#projectsContainer').style.display = "none";
        } else {
            document.querySelector('#projectsContainer').style.display = "flex";
        }
        if (index == -1) {
            index = page + 1;
            if (index == 4) {
                index = 1;
            }
        } else {
            if (index == -2) {
                index = page - 1;
                if (index == 0) {
                    index = 3;
                }
            }
        }
        page = index;

        switch (index) {
            case 1:
                document.querySelector('#project1').style.display = "flex";
                document.querySelector('#project2').style.display = "none";
                document.querySelector('#project3').style.display = "none";
                break;
            case 2:
                document.querySelector('#project1').style.display = "none";
                document.querySelector('#project2').style.display = "flex";
                document.querySelector('#project3').style.display = "none";
                break;
            case 3:
                document.querySelector('#project1').style.display = "none";
                document.querySelector('#project2').style.display = "none";
                document.querySelector('#project3').style.display = "flex";
                break;
            default:
                document.querySelector('#project1').style.display = "none";
                document.querySelector('#project2').style.display = "none";
                document.querySelector('#project3').style.display = "none";
                break;
        }

        transition1.style.left = "100vw";
        setTimeout(function () {
            transition2.style.left = "100vw";
        }, 300);
        setTimeout(function () {
            transition3.style.left = "100vw";
        }, 600);

        function t() {
            document.getElementById("work1").classList.remove('disable');
            document.getElementById("work2").classList.remove('disable');
            document.getElementById("work3").classList.remove('disable');

            document.getElementById("leftButton").classList.remove('disable');
            document.getElementById("rightButton").classList.remove('disable');

            document.getElementById("previous").classList.remove('disable');
            document.getElementById("next").classList.remove('disable');
            document.getElementById("close").classList.remove('disable');

            transition3.removeEventListener('transitionend', t);
        }
        setTimeout(function () {
            transition3.addEventListener('transitionend', t);
        }, 600);
    }
    transition3.addEventListener('transitionend', secondSwipe);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Cursor


gsap.set('#cursorCont', { xPercent: -50, yPercent: -50 });

var cursorCont = document.querySelector('#cursorCont');
var cursor = document.querySelector('#cursor');
var mouseX = void 0;
var mouseY = void 0;

window.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursorCont, 0.01, { x: mouseX, y: mouseY });
});

var videos = document.querySelectorAll('.trailer');

videos.forEach(function (video) {
    video.addEventListener('mouseenter', function () {
        cursor.style.display = "none";
    });
});

videos.forEach(function (video) {
    video.addEventListener('mouseleave', function () {
        cursor.style.display = "block";
    });
});

var buttons1 = [document.querySelector('#cvLink'), document.querySelector('#linkedinLink'), document.querySelector('#secondLink'), document.querySelector('#firstLink'), document.querySelector('#gmailLink'), document.querySelector('#instagramLink'), document.querySelector('#facebookLink'), document.querySelector('#color'), document.querySelector('#name1'), document.querySelector('#name2'), document.querySelector('#name3'), document.querySelector('#leftButton'), document.querySelector('#rightButton'), document.querySelector('#close'), document.querySelector('#next'), document.querySelector('#previous'), document.querySelector('#work1'), document.querySelector('#work2'), document.querySelector('#work3')];
var buttons2 = [document.querySelector('#cvLink'), document.querySelector('#linkedinLink'), document.querySelector('#secondLink'), document.querySelector('#firstLink'), document.querySelector('#gmailLink'), document.querySelector('#instagramLink'), document.querySelector('#facebookLink'), document.querySelector('#name1'), document.querySelector('#name2'), document.querySelector('#name3'), document.querySelector('#leftButton'), document.querySelector('#rightButton'), document.querySelector('#close'), document.querySelector('#next'), document.querySelector('#previous'), document.querySelector('#work1'), document.querySelector('#work2'), document.querySelector('#work3')];

buttons1.forEach(function (button) {
    button.addEventListener('mouseenter', function () {
        cursor.style.width = "30px";
        cursor.style.height = "30px";
        cursor.style.borderRadius = "15%";
    });
    button.addEventListener('mouseleave', function () {
        cursor.style.width = "12px";
        cursor.style.height = "12px";
        cursor.style.borderRadius = "50%";
    });
});
buttons2.forEach(function (button) {
    button.addEventListener('mouseup', function () {
        cursor.style.width = "12px";
        cursor.style.height = "12px";
        cursor.style.borderRadius = "50%";
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Page Rotation

if (navigator.userAgent.match(/safari/i)) {
    var transforms = function transforms(x, y, el) {
        var box = el.getBoundingClientRect();
        var calcX = -(y - box.y - box.height / 2) / constrainX;
        var calcY = (x - box.x - box.width / 2) / constrainY;

        return "perspective(100vw) " + "   rotateX(" + calcX + "deg) " + "   rotateY(" + calcY + "deg) ";
    };

    var transformElement = function transformElement(el, xyEl) {
        el.style.transform = transforms.apply(null, xyEl);
    };

    var constrainX = 125;
    var constrainY = 300;
    var mouseOverContainer = document.querySelector('body');
    var ex1Layer = document.getElementById("pageContainer");

    ;

    mouseOverContainer.onmousemove = function (e) {
        var xy = [e.clientX, e.clientY];
        var position = xy.concat([ex1Layer]);

        window.requestAnimationFrame(function () {
            transformElement(ex1Layer, position);
        });
    };
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//projectPage Parallax


document.querySelector('#projectsContainer').addEventListener('scroll', function () {
    if (document.querySelector('#verticalTop1').getBoundingClientRect().top < document.querySelector('#detector1').getBoundingClientRect().top) {
        document.querySelector('#section11').classList.add('sticky');
        document.querySelector('#section11').style.marginTop = "-79vh";
        document.querySelector('#section11').style.pointerEvents = "none";
        document.querySelector('#section12').style.marginTop = "238.5vh";
    } else {
        document.querySelector('#section11').classList.remove('sticky');
        document.querySelector('#section11').style.marginTop = "90vh";
        document.querySelector('#section11').style.pointerEvents = "auto";
        document.querySelector('#section12').style.marginTop = "0px";
    }

    if (document.querySelector('#verticalTop2').getBoundingClientRect().top < document.querySelector('#detector2').getBoundingClientRect().top) {
        document.querySelector('#section21').classList.add('sticky');
        document.querySelector('#section21').style.marginTop = "-79vh";
        document.querySelector('#section21').style.pointerEvents = "none";
        document.querySelector('#section22').style.marginTop = "238.5vh";
    } else {
        document.querySelector('#section21').classList.remove('sticky');
        document.querySelector('#section21').style.marginTop = "90vh";
        document.querySelector('#section21').style.pointerEvents = "auto";
        document.querySelector('#section22').style.marginTop = "0px";
    }

    if (document.querySelector('#verticalTop3').getBoundingClientRect().top < document.querySelector('#detector3').getBoundingClientRect().top) {
        document.querySelector('#section31').classList.add('sticky');
        document.querySelector('#section31').style.marginTop = "-79vh";
        document.querySelector('#section31').style.pointerEvents = "none";
        document.querySelector('#section32').style.marginTop = "238.5vh";
    } else {
        document.querySelector('#section31').classList.remove('sticky');
        document.querySelector('#section31').style.marginTop = "90vh";
        document.querySelector('#section31').style.pointerEvents = "auto";
        document.querySelector('#section32').style.marginTop = "0px";
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//project scroll text animation


var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.style.width = "50vw";
            setTimeout(function () {
                entry.target.lastElementChild.firstElementChild.style.width = "100%";
            }, 1000);
        }
    });
});

var infoElements = document.querySelectorAll('.info');
infoElements.forEach(function (el) {
    return observer.observe(el);
});

//project scroll line animation


var observer2 = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.style.width = "60vw";
        }
    });
});

var lines = document.querySelectorAll('.vertical');
lines.forEach(function (el) {
    return observer2.observe(el);
});

//project leftDesc scroll animation


var descObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.firstElementChild.style.marginLeft = "2vw";
        }
    });
});

var descriptions = document.querySelectorAll('.descCont');
descriptions.forEach(function (el) {
    return descObserver.observe(el);
});

//project change color animation


document.querySelector('#color').addEventListener('mouseenter', function () {
    document.querySelector('#right').style.height = "10vh";
    document.querySelector('#left').style.height = "10vh";
    document.querySelector('#topCont').style.width = "43vw";
    document.querySelector('#top').style.boxShadow = "0 0px 70px 15px var(--colorFront)";
    document.querySelector('#bottom').style.boxShadow = "0 0px 70px 15px var(--colorFront)";
});
document.querySelector('#color').addEventListener('mouseleave', function () {
    document.querySelector('#top').style.boxShadow = "0 0px 0px 0px var(--colorFront)";
    document.querySelector('#bottom').style.boxShadow = "0 0px 0px 0px var(--colorFront)";
    document.querySelector('#topCont').style.width = "0vw";
    document.querySelector('#right').style.height = "0vh";
    document.querySelector('#left').style.height = "0vh";
});