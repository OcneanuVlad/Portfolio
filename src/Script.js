if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.querySelector('mobileLock').style.display = "flex";
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Main pages navigation


class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activePage: 1,
            leftButton: 'ABOUT',
            rightButton: 'WORK',
        }

        this.handleLeft = this.handleLeft.bind(this);
        this.handleRight = this.handleRight.bind(this);
        this.handleFirst = this.handleFirst.bind(this);
        this.handleLast = this.handleLast.bind(this);
        this.handleText = this.handleText.bind(this);
        this.activateButtons = this.activateButtons.bind(this);
        this.disableButtons = this.disableButtons.bind(this);
        this.handleColors = this.handleColors.bind(this);
        this.handleSlide = this.handleSlide.bind(this);
        this.handleBars = this.handleBars.bind(this);
    }

    handleLeft() {
        document.getElementById("slide0").style.transition = "margin-left 2s";

        document.querySelector('#about').style.opacity = "0";
        document.querySelector('#home').style.opacity = "0";
        document.querySelector('#projects').style.opacity = "0";

        setTimeout(() => {
            document.querySelector('#spawn11').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";
            document.querySelector('#spawn12').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";
            document.querySelector('#spawn21').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";
            document.querySelector('#spawn22').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";

            document.querySelector('#spawn11').style.width = "100vw";
            document.querySelector('#spawn12').style.width = "100vw";
            document.querySelector('#spawn11').style.opacity = "1";
            document.querySelector('#spawn12').style.opacity = "1";
            document.querySelector('#spawn11').addEventListener('transitionend', this.handleSlide);

            this.setState({
                activePage: this.state.activePage - 1,
            });

            const slider = document.getElementById("slide0");
            setTimeout(() => {
                switch (this.state.activePage % 3) {
                    case -1:
                        slider.style.marginLeft = "1.3vw"
                        slider.addEventListener('transitionend', this.handleFirst);
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
                        slider.addEventListener('transitionend', this.handleLast);
                        break;
                }
            }, 10);
        }, 300);

    }

    handleRight() {
        document.getElementById("slide0").style.transition = "margin-left 2s";

        document.querySelector('#about').style.opacity = "0";
        document.querySelector('#home').style.opacity = "0";
        document.querySelector('#projects').style.opacity = "0";

        document.querySelector('#spawn11').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";
        document.querySelector('#spawn12').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";
        document.querySelector('#spawn21').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";
        document.querySelector('#spawn22').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";

        setTimeout(() => {
            document.querySelector('#spawn21').style.width = "100vw";
            document.querySelector('#spawn22').style.width = "100vw";
            document.querySelector('#spawn21').style.opacity = "1";
            document.querySelector('#spawn22').style.opacity = "1";
            document.querySelector('#spawn21').addEventListener('transitionend', this.handleSlide);
    
            this.setState({
                activePage: this.state.activePage + 1,
            });
    
            setTimeout(() => {
                if (this.state.activePage == 3){
                    this.setState({
                    activePage: -2, 
                    });
                } 
            }, 10);
            const slider = document.getElementById("slide0");
            setTimeout(() => {
                switch (this.state.activePage % 3) {
                    case -1:
                        slider.style.marginLeft = "1.3vw"
                        slider.addEventListener('transitionend', this.handleFirst);
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
                        slider.addEventListener('transitionend', this.handleLast);
                        break;
                }
            }, 10);
        }, 300);

    }

    handleSlide() {
        if (this.state.activePage == 3){
            this.setState({
               activePage: -2, 
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
                    activePage: 2,
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
                    activePage: 0,
                });
                break;
        }
        setTimeout(() => {
            document.querySelector('#home').style.transition = "background-color 1.4s, color 1.4s, height 1s, opacity 0.6s";
            document.querySelector('#about').style.transition = "background-color 1.4s, color 1.4s, height 1s, opacity 0.6s";
            document.querySelector('#projects').style.transition = "background-color 1.4s, color 1.4s, height 1s, opacity 0.6s";
        }, 1000);

    }

    handleBars() {
        document.querySelector('#spawn11').removeEventListener('transitionend', this.handleBars);
        document.querySelector('#spawn21').removeEventListener('transitionend', this.handleBars);
        document.querySelector('#spawn11').style.opacity = "0";
        document.querySelector('#spawn12').style.opacity = "0";
        document.querySelector('#spawn21').style.opacity = "0";
        document.querySelector('#spawn22').style.opacity = "0";
        setTimeout(() => {
            this.activateButtons();
            document.querySelector('#spawn11').style.transition = "0s"
            document.querySelector('#spawn12').style.transition = "0s"
            document.querySelector('#spawn21').style.transition = "0s"
            document.querySelector('#spawn22').style.transition = "0s"
            document.querySelector('#spawn11').style.width = "7vw"
            document.querySelector('#spawn12').style.width = "7vw"
            document.querySelector('#spawn21').style.width = "7vw"
            document.querySelector('#spawn22').style.width = "7vw"
            document.querySelector('#spawn11').style.top = "50vh"
            document.querySelector('#spawn12').style.bottom = "50vh"
            document.querySelector('#spawn21').style.top = "50vh"
            document.querySelector('#spawn22').style.bottom = "50vh"
        }, 1100);
    }

    handleText() {
        switch (this.state.activePage % 3){
            case -1:
                this.setState({
                    leftButton: 'HOME',
                    rightButton: 'ABOUT',
                });
                break;
            case 0:
                this.setState({
                    leftButton: 'WORK',
                    rightButton: 'HOME',
                });
                break;
            case 1:
                this.setState({
                    leftButton: 'ABOUT',
                    rightButton: 'WORK',
                });
                break;
            case 2:
                this.setState({
                    leftButton: 'HOME',
                    rightButton: 'ABOUT',
                });
                break;
            case -2:
                this.setState({
                    leftButton: 'WORK',
                    rightButton: 'HOME',
                });
                break;
        }
    }

    handleFirst() {
        document.getElementById("slide0").removeEventListener('transitionend', this.handleFirst);

        document.getElementById("slide0").style.transition = "margin-left 0s";
        document.getElementById("slide0").style.marginLeft = "-13.3vw";
    }

    handleLast() {
        document.getElementById("slide0").removeEventListener('transitionend', this.handleLast);

        document.getElementById("slide0").style.transition = "margin-left 0s";
        document.getElementById("slide0").style.marginLeft = "-3.6vw";
    }

    handleColors() {
        store.style.setProperty('--colorBack', pallete[colorPallete][1]);
        store.style.setProperty('--colorBody', pallete[colorPallete][0]);
        store.style.setProperty('--colorFront', pallete[colorPallete][2]);
        if (colorPallete >= pallete.length - 1) {
            colorPallete = 0;
        } else {
            colorPallete++;
        }
    }

    disableButtons() {
        document.getElementById("leftButton").classList.add('disable');
        document.getElementById("rightButton").classList.add('disable');

        document.getElementById("work1").classList.add('disable');
        document.getElementById("work2").classList.add('disable');
        document.getElementById("work3").classList.add('disable');

        document.getElementById("buttonText1").style.opacity = "0";
        document.getElementById("buttonText2").style.opacity = "0";
        this.handleColors();
    }

    activateButtons() {
        document.getElementById("leftButton").classList.remove('disable');
        document.getElementById("rightButton").classList.remove('disable');

        document.getElementById("work1").classList.remove('disable');
        document.getElementById("work2").classList.remove('disable');
        document.getElementById("work3").classList.remove('disable');
    }

    render() {
        return (
            <div>
                <button onClick={() => {this.handleLeft(); this.disableButtons()}} id="leftButton"><p id="buttonText1">{this.state.leftButton}</p>
                    <section onClick={() => {this.handleLeft(); this.disableButtons()}} id="points1">
                        <span onClick={() => {this.handleLeft(); this.disableButtons()}} id="pointLine1"></span>
                        <span id="point11" class="point"></span>
                        <span id="point12" class="point"></span>
                        <span id="point13" class="point"></span>
                        <span id="point14" class="point"></span>
                    </section>
                </button>

                <button onClick={() => {this.handleRight(); this.disableButtons()}} id="rightButton"><p id="buttonText2">{this.state.rightButton}</p>
                    <section onClick={() => {this.handleLeft(); this.disableButtons()}} id="points2"> 
                        <span onClick={() => {this.handleLeft(); this.disableButtons()}} id="pointLine2"></span>
                        <span id="point21" class="point"></span>
                        <span id="point22" class="point"></span>
                        <span id="point23" class="point"></span>
                        <span id="point24" class="point"></span>
                    </section>
                </button>
            </div>
        );
    }
}

let colorPallete = 0;
const pallete = [
    ['rgb(0,161,154)','rgb(0,161,154)','rgb(235,237,237)'],
    ['rgb(40,43,41)','rgb(40,43,41)','rgb(166,209,201)'],
    ['rgb(166,209,201)','rgb(166,209,201)','rgb(232,60,56)'],
    ['rgb(244,196,196)','rgb(244,196,196)','rgb(40,43,41)'],
    ['rgb(235,237,237)','rgb(235,237,237)','rgb(232,69,65)'],
    ['rgb(246, 247, 245)','rgb(168, 173, 165)','rgb(36, 62, 54)'],
    ['rgb(1, 87, 83)','rgb(0, 70, 67)','rgb(250, 244, 211)'],
    ['rgb(143, 126, 247)','rgb(93, 82, 163)','rgb(248, 247, 255)'],
    ['rgb(215, 250, 241)','rgb(173, 201, 195)','black'],
    ['rgb(72, 78, 82)','rgb(57, 62, 65)','rgb(246, 247, 235)']
]
const store = document.querySelector(':root');

let container = document.querySelector('#buttonContainer');
ReactDOM.render(<Button />, container);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Work pages 


let page = 0;
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#video').playbackRate = 1;
});

function Work(index) {

        store.style.setProperty('--colorBack', pallete[colorPallete][1]);
        store.style.setProperty('--colorBody', pallete[colorPallete][0]);
        store.style.setProperty('--colorFront', pallete[colorPallete][2]);
        if (colorPallete >= pallete.length - 1) {
            colorPallete = 0;
        } else {
            colorPallete++;
        }

    const transition1 = document.querySelector('#transition1');
    const transition2 = document.querySelector('#transition2');
    const transition3 = document.querySelector('#transition3');

    document.getElementById("work1").classList.add('disable');
    document.getElementById("work2").classList.add('disable');
    document.getElementById("work3").classList.add('disable');

    document.getElementById("leftButton").classList.add('disable');
    document.getElementById("rightButton").classList.add('disable');

    document.getElementById("previous").classList.add('disable');
    document.getElementById("next").classList.add('disable');
    document.getElementById("close").classList.add('disable');

    transition1.style.left = "0vw";
    setTimeout(() => {
        transition2.style.left = "0vw";
    }, 300);
    setTimeout(() => {
        transition3.style.left = "0vw";
    }, 600);

    function secondSwipe() {
        document.querySelector('#projects').style.height = "0vh";

        transition3.removeEventListener('transitionend', secondSwipe);

        if (index == -10){
            document.querySelector('#projects').style.height = "95vh";
            document.querySelector('#projectsContainer').style.display = "none";
        } else{
            document.querySelector('#projectsContainer').style.display = "flex";
        }
        if (index == -1){
            index = page + 1;
            if (index == 4){
                index = 1;
            }
        } else {
            if (index == -2){
                index = page - 1;
                if (index == 0){
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
        setTimeout(() => {
            transition2.style.left = "100vw";
        }, 300);
        setTimeout(() => {
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
        setTimeout(() => {
            transition3.addEventListener('transitionend', t);
        }, 600);
    }
    transition3.addEventListener('transitionend', secondSwipe);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Cursor


gsap.set('#cursorCont',{xPercent:-50, yPercent:-50});

let cursorCont = document.querySelector('#cursorCont')
let cursor = document.querySelector('#cursor')
let mouseX;
let mouseY;

window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursorCont, 0.01, {x: mouseX, y: mouseY});
});
window.addEventListener('mouseup', () => {
    cursor.style.width = "12px";
    cursor.style.height = "12px";
    cursor.style.borderRadius = "50%";
});

let buttons = [document.querySelector('#leftButton'), document.querySelector('#rightButton'), document.querySelector('#close'), document.querySelector('#next'), document.querySelector('#previous'), document.querySelector('#work1'), document.querySelector('#work2'), document.querySelector('#work3')];

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        cursor.style.width = "30px";
        cursor.style.height = "30px";
        cursor.style.borderRadius = "15%";
    });
    button.addEventListener('mouseleave', () => {
        cursor.style.width = "12px";
        cursor.style.height = "12px";
        cursor.style.borderRadius = "50%";
    });
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Page Rotation

let constrainX = 125;
let constrainY = 300;
let mouseOverContainer = document.querySelector('body')
let ex1Layer = document.getElementById("pageContainer");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrainX;
  let calcY = (x - box.x - (box.width / 2)) / constrainY;
  
  return "perspective(100vw) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);

  window.requestAnimationFrame(function(){
    transformElement(ex1Layer, position);
  });
};