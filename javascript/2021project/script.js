var gl;
var viewmode = 0;
var Pramode=0

var RX1 = 0
var RY1 = 0
var RZ1 = 0
var RX2 = 0
var RY2 = 0
var RZ2 = 0
var SX1 = 1
var SY1 = 1
var SZ1 = 1
var SX2 = 1
var SY2 = 1
var SZ2 = 1
var SX3 = 1
var SY3 = 1
var SZ3 = 1
var SX4 = 1
var SY4 = 1
var SZ4 = 1
var TX1 = 0
var TY1 = 0
var TZ1 = 0
var TX2 = 0
var TY2 = 0
var TZ2 = 0
var FX1 = 0
var FY1 = 0
var FZ1 = 0
var FX2 = 0
var FY2 = 0
var FZ2 = 0

const { mat2, mat3, mat4, vec2, vec3, vec4 } = glMatrix;  // Now we can use function without glMatrix.~~~

function mode(i){
    viewmode=i;
}
function Try() {
    viewmode = 200;
}
function rotateX1(i) {
    RX1 = i;
}
function rotateY1(i) {
    RY1 = i;
}
function rotateZ1(i) {
    RZ1 = i;
}

function rotateX2(i) {
    RX2 = i;
}
function rotateY2(i) {
    RY2 = i;
}
function rotateZ2(i) {
    RZ2 = i;
}




function PscaleX1() {
    SX1 = (document.getElementById('ScaleX1').value)/5;
    
}
function PscaleY1() {
    SY1 = (document.getElementById('ScaleY1').value) / 5;

}
function PscaleZ1() {
    SZ1 = (document.getElementById('ScaleZ1').value) / 5;

}
function PscaleX2() {
    SX2 = (document.getElementById('ScaleX2').value) / 5;

}
function PscaleY2() {
    SY2 = (document.getElementById('ScaleY2').value) / 5;

}
function PscaleZ2() {
    SZ2 = (document.getElementById('ScaleZ2').value) / 5;

}
function PscaleX3() {
    SX3 = (document.getElementById('ScaleX3').value) / 5;

}
function PscaleY3() {
    SY3 = (document.getElementById('ScaleY3').value) / 5;

}
function PscaleZ3() {
    SZ3 = (document.getElementById('ScaleZ3').value) / 5;

}
function PscaleX4() {
    SX4 = (document.getElementById('ScaleX4').value) / 5;

}
function PscaleY4() {
    SY4 = (document.getElementById('ScaleY4').value) / 5;

}
function PscaleZ() {
    SZ4 = (document.getElementById('ScaleZ4').value) / 5;

}

function PTranslateX1() {
    TX1 = (document.getElementById('TranslateX1').value);

}
function PTranslateY1() {
    TY1 = (document.getElementById('TranslateY1').value);

}
function PTranslateZ1() {
    TZ1 = (document.getElementById('TranslateZ1').value);

}

function PTranslateX2() {
    TX2 = (document.getElementById('TranslateX2').value);

}
function PTranslateY2() {
    TY2 = (document.getElementById('TranslateY2').value);

}
function PTranslateZ2() {
    TZ2 = (document.getElementById('TranslateZ2').value);

}



function fromRotationX1() {
    FX1 = (document.getElementById('fromRotationX1').value)/20;
}
function fromRotationY1() {
    FY1 = (document.getElementById('fromRotationY1').value)/20;
}
function fromRotationZ1() {
    FZ1 = (document.getElementById('fromRotationZ1').value)/20;
}

function fromRotationX2() {
    FX2 = (document.getElementById('fromRotationX2').value)/20;
}
function fromRotationY2() {
    FY2 = (document.getElementById('fromRotationY2').value)/20;
}
function fromRotationZ2() {
    FZ2 = (document.getElementById('fromRotationZ2').value)/20;
}




var vx =-0.2;

var vy = 0.2;

var vz = 1;
function explain()  {
    string = `<br><br>Hello! Rotate, transrate, and scale are very important factors in graphics.
        < br > So, we will practice basic Rotate, Translator, and Scale, and study special cases.
        < br > Before we get started, let's take a look at the features of handling tools.
        < br >
        <br>First, you can zoom in and out the screen by using the FOV function.
        <br>Second, X,Y,Z-VIEW is a function to change the viewpoint using viewmetrics. Use it when observing movement of a
        <br>Finally, there are function such as toggle animation, rotate speed up and down, and drawarray mode select.
        <br>
        <br>The length of the side of the figure on the screen is 1. and The length of each cell of the figure on the screen is 1.
        <br>Select the desired function, and observe the movement of the figure with functions such as fov, view, and toggleanimation.
        <br>Coordinate display may vary depending on the function you select. First, let's study the basic functions such as x-axisrotation, y-axis rotation, and k-axis rotation.`
    document.getElementById("comm").innerHTML = string;
}
function commentFunction() {

    if (Pramode != 0) {
        string = "---------------------------------------------------------------------------------------------------------------\
        <<br>!!!!!!you should be able to predict the position of a shape based on a sequence of functions.\
        <br><br>---------------------------------------------------------------------------------------------------------------";
        document.getElementById("comment").innerHTML = string;
    }

    if ((viewmode >= 17 && viewmode <= 28) || (viewmode >= 52 && viewmode <= 63) || (viewmode >= 87 && viewmode <= 98)) {
        string = "---------------------------------------------------------------------------------------------------------------\
        <br><br> this is Rotate and Scale\
        <br><br> You can see that the results change according to the order of the functions. \
        <br> This is really important. If you want to be proficient with graphics,\
        <br>you should be able to predict the position of a shape based on a sequence of functions.\
        <br><br>---------------------------------------------------------------------------------------------------------------";
    document.getElementById("comment").innerHTML = string;}
    else if ((viewmode >= 1 && viewmode <= 16 && viewmode % 2 == 1) || (viewmode >= 36 && viewmode <= 51 && viewmode % 2 == 0) || (viewmode >= 71 && viewmode <= 86 && viewmode % 2 == 1)) {
        string = "---------------------------------------------------------------------------------------------------------------\
        <br><br> the order is translate -> rotate \
        <br><br> As a result, you can see the rotation at one point.\
        <br> This is really important. If you want to be proficient with graphics,\
        <br>you should be able to predict the position of a shape based on a sequence of functions.\
        <br><br>---------------------------------------------------------------------------------------------------------------";
    document.getElementById("comment").innerHTML = string;
    }
    else if ((viewmode >= 1 && viewmode <= 16 && viewmode % 2 == 0) || (viewmode >= 36 && viewmode <= 51 && viewmode % 2 == 1) || (viewmode >= 71 && viewmode <= 86 && viewmode % 2 == 0)) {
        string = "---------------------------------------------------------------------------------------------------------------\
        <br><br> the order is rotate -> translate \
        <br><br> As a result, you can see the rotation\
        <br> This is really important. If you want to be proficient with graphics,\
        <br>you should be able to predict the position of a shape based on a sequence of functions.\
        <br><br>---------------------------------------------------------------------------------------------------------------";
        document.getElementById("comment").innerHTML = string;
    }
    else if ((viewmode >= 29 && viewmode <= 34 && viewmode % 2 == 1) || (viewmode >= 64 && viewmode <= 69 && viewmode % 2 == 0) || (viewmode >= 99 && viewmode <= 104 && viewmode % 2 == 1)) {
        string = "---------------------------------------------------------------------------------------------------------------\
        <br><br> the order is rotate -> scale \
        <br><br> As a result, You can check the difference in the distance traveled according to the order.\
        <br> This is really important. If you want to be proficient with graphics,\
        <br>you should be able to predict the position of a shape based on a sequence of functions.\
        <br><br>---------------------------------------------------------------------------------------------------------------";
        document.getElementById("comment").innerHTML = string;
    }
    else if ((viewmode >= 29 && viewmode <= 34 && viewmode % 2 == 0) || (viewmode >= 64 && viewmode <= 69 && viewmode % 2 == 1) || (viewmode >= 99 && viewmode <= 104 && viewmode % 2 == 0)) {
        string = "---------------------------------------------------------------------------------------------------------------\
        <br><br> the order is scale rotate \
        <br><br> As a result, You can check the difference in the distance traveled according to the order.\
        <br> This is really important. If you want to be proficient with graphics,\
        <br>you should be able to predict the position of a shape based on a sequence of functions.\
        <br><br>---------------------------------------------------------------------------------------------------------------";
        document.getElementById("comment").innerHTML = string;
    }
    else if (viewmode >= 105 && viewmode <= 118) {
        string = "---------------------------------------------------------------------------------------------------------------\
        <br><br> this is Special Case1 \
        <br><br> Combination of x-axis rotation, y-axis rotation and z-axis rotation. \
        <br>As in the previous example, depending on the order of the rotate and translate, the result may be different. \
        <br>Use the view to see the movement of shapes.\
        <br>This is really important. If you want to be proficient with graphics,\
        <br>you should be able to predict the position of a shape based on a sequence of functions.\
        <br><br>---------------------------------------------------------------------------------------------------------------";
        document.getElementById("comment").innerHTML = string;
    }
    else if (viewmode >= 119 && viewmode <= 134) {
        string = "---------------------------------------------------------------------------------------------------------------\
        <br><br> this is Special Case2 \
        <br><br> Results for any axis. \
        <br>As in the previous example, depending on the order of the rotate and translate, the result may be different. \
        <br>Use the view to see the movement of shapes.\
        <br>This is really important. If you want to be proficient with graphics,\
        <br>you should be able to predict the position of a shape based on a sequence of functions.\
        <br><br>---------------------------------------------------------------------------------------------------------------";
        document.getElementById("comment").innerHTML = string;
    }
    else if (viewmode >= 135 && viewmode <= 141) {
        string = "---------------------------------------------------------------------------------------------------------------\
        <br><br> this is Special Case3 \
        <br><br> It is a combination of transrate for point rotation and shaft rotation. \
        <br>As in the previous example, depending on the order of the rotate and translate, the result may be different. \
        <br>Use the view to see the movement of shapes.\
        <br>This is really important. If you want to be proficient with graphics,\
        <br>you should be able to predict the position of a shape based on a sequence of functions.\
        <br><br>---------------------------------------------------------------------------------------------------------------";
        document.getElementById("comment").innerHTML = string;
    }
    else {
        string = "---------------------------------------------------------------------------------------------------------------\
        <br><br> comment here\
        <br><br>---------------------------------------------------------------------------------------------------------------";
        document.getElementById("comment").innerHTML = string;
    }

    if (viewmode == 200) {
        string = "---------------------------------------------------------------------------------------------------------------\
        <br><br> This is practice mode. \
        <br>Are your predictions correct? \
        <br>If not, pay attention to the order of the commands and try again!\
        <br>The order of the commands is from top to bottom.<br><br>---------------------------------------------------------------------------------------------------------------";
        document.getElementById("comment").innerHTML = string;
    }
    
    
    
    
}


function ChangeViewX(x) {
    document.getElementById('changeVX').value = x;
    vx = x/100;
}


function ChangeViewY(y) {
    document.getElementById('changeVY').value = y;
    vy = y/100;
}


function ChangeViewZ(z) {
    document.getElementById('changeVZ').value = z;
    vz = z/100;
}


function testGLError(functionLastCalled) {
    /* gl.getError returns the last error that occurred using WebGL for debugging */
    var lastError = gl.getError();

    if (lastError != gl.NO_ERROR) {
        alert(functionLastCalled + " failed (" + lastError + ")");
        return false;
    }
    return true;
}

function initialiseGL(canvas) {
    try {
        // Try to grab the standard context. If it fails, fallback to experimental
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        gl.viewport(0, 0, canvas.width, canvas.height);
    }
    catch (e) {
    }

    if (!gl) {
        alert("Unable to initialise WebGL. Your browser may not support it");
        return false;
    }
    return true;
}

var shaderProgram;

var vertexData = [
    // Backface (RED/WHITE) -> z = 0.5
    -0.5, -0.5, -0.5, 0.8, 0.8, 0.8, 1.0,
    0.5, 0.5, -0.5, 0.8, 0.8, 0.8, 1.0,
    0.5, -0.5, -0.5, 0.8, 0.8, 0.8, 1.0,
    -0.5, -0.5, -0.5, 0.8, 0.8, 0.8, 1.0,
    -0.5, 0.5, -0.5, 0.8, 0.8, 0.8, 1.0,
    0.5, 0.5, -0.5, 0.8, 0.8, 0.8, 1.0,
    // Front (BLUE/WHITE) -> z = 0.5
    -0.5, -0.5, 0.5, 0.0, 0.5 ,0.5, 1.0,
    0.5, 0.5, 0.5, 0.0, 0.5, 0.5, 1.0,
    0.5, -0.5, 0.5, 0.0, 0.5, 0.5, 1.0,
    -0.5, -0.5, 0.5, 0.0, 0.5, 0.5, 1.0,
    -0.5, 0.5, 0.5, 0.0, 0.5, 0.5, 1.0,
    0.5, 0.5, 0.5, 0.0, 0.5, 0.5, 1.0,
    // LEFT (GREEN/WHITE) -> z = 0.5
    -0.5, -0.5, -0.5, 0.5, 0.5, 0.0, 1.0,
    -0.5, 0.5, 0.5, 0.5, 0.5, 0.0, 1.0,
    -0.5, 0.5, -0.5, 0.5, 0.5, 0.0, 1.0,
    -0.5, -0.5, -0.5, 0.5, 0.5, 0.0, 1.0,
    -0.5, -0.5, 0.5, 0.5, 0.5, 0.0, 1.0,
    -0.5, 0.5, 0.5, 0.5, 0.5, 0.0, 1.0,
    // RIGHT (YELLOW/WHITE) -> z = 0.5
    0.5, -0.5, -0.5, 1.0, 1.0, 0.0, 1.0,
    0.5, 0.5, 0.5, 1.0, 1.0, 0.0, 1.0,
    0.5, 0.5, -0.5, 1.0, 1.0, 0.0, 1.0,
    0.5, -0.5, -0.5, 1.0, 1.0, 0.0, 1.0,
    0.5, -0.5, 0.5, 1.0, 1.0, 0.0, 1.0,
    0.5, 0.5, 0.5, 1.0, 1.0, 0.0, 1.0,
    // BOTTON (MAGENTA/WHITE) -> z = 0.5
    -0.5, -0.5, -0.5, 1.0, 0.0, 1.0, 1.0,
    0.5, -0.5, 0.5, 1.0, 0.0, 1.0, 1.0,
    0.5, -0.5, -0.5, 1.0, 0.0, 1.0, 1.0,
    -0.5, -0.5, -0.5, 1.0, 0.0, 1.0, 1.0,
    -0.5, -0.5, 0.5, 1.0, 0.0, 1.0, 1.0,
    0.5, -0.5, 0.5, 1.0, 0.0, 1.0, 1.0,
    // TOP (CYAN/WHITE) -> z = 0.5
    -0.5, 0.5, -0.5, 0.0, 1.0, 1.0, 1.0,
    0.5, 0.5, 0.5, 0.0, 1.0, 1.0, 1.0,
    0.5, 0.5, -0.5, 0.0, 1.0, 1.0, 1.0,
    -0.5, 0.5, -0.5, 0.0, 1.0, 1.0, 1.0,
    -0.5, 0.5, 0.5, 0.0, 1.0, 1.0, 1.0,
    0.5, 0.5, 0.5, 0.0, 1.0, 1.0, 1.0,
    // X-axis
    40.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
    -40.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
    
    
    // Y-axis
    0.0, 40.0, 0.0, 0.0, 1.0, 0.0, 1.0,
    0.0, -40.0, 0.0, 0.0, 1.0, 0.0, 1.0,
    
    
    
    // Z-axis
    0.0, 0.0, 40.0, 0.0, 0.0, 1.0, 1.0,
    0.0, 0.0, -40.0, 0.0, 0.0, 1.0, 1.0,
    

    // Z --
    0.3, 0.0, 1.0, 0.0, 0.0, 1.0, 1,
    -0.3, 0.0, 1.0, 0.0, 0.0, 1.0, 1,
    0.3, 0.0, 2.0, 0.0, 0.0, 1.0, 1,
    -0.3, 0.0, 2.0, 0.0, 0.0, 1.0, 1,
    0.3, 0.0, 3.0, 0.0, 0.0, 1.0, 1,
    -0.3, 0.0, 3.0, 0.0, 0.0, 1.0, 1,
    0.3, 0.0, 4.0, 0.0, 0.0, 1.0, 1,
    -0.3, 0.0, 4.0, 0.0, 0.0, 1.0, 1,
    0.3, 0.0, 5.0, 0.0, 0.0, 1.0, 1,
    -0.3, 0.0, 5.0, 0.0, 0.0, 1.0, 1,
    // Z --
    0.3, 0.0, -1.0, 0.0, 0.0, 1.0, 1,
    -0.3, 0.0, -1.0, 0.0, 0.0, 1.0, 1,
    0.3, 0.0, -2.0, 0.0, 0.0, 1.0, 1,
    -0.3, 0.0, -2.0, 0.0, 0.0, 1.0, 1,
    0.3, 0.0, -3.0, 0.0, 0.0, 1.0, 1,
    -0.3, 0.0, -3.0, 0.0, 0.0, 1.0, 1,
    0.3, 0.0, -4.0, 0.0, 0.0, 1.0, 1,
    -0.3, 0.0, -4.0, 0.0, 0.0, 1.0, 1,
    0.3, 0.0, -5.0, 0.0, 0.0, 1.0, 1,
    -0.3, 0.0, -5.0, 0.0, 0.0, 1.0, 1,

    // X--
    1.0, 0.0, 0.3, 1.0, 0.0, 0.0, 1.0,
    1.0, 0.0, -0.3, 1.0, 0.0, 0.0, 1.0,
    2.0, 0.0, 0.3, 1.0, 0.0, 0.0, 1.0,
    2.0, 0.0, -0.3, 1.0, 0.0, 0.0, 1.0,
    3.0, 0.0, 0.3, 1.0, 0.0, 0.0, 1.0,
    3.0, 0.0, -0.3, 1.0, 0.0, 0.0, 1.0,
    4.0, 0.0, 0.3, 1.0, 0.0, 0.0, 1.0,
    4.0, 0.0, -0.3, 1.0, 0.0, 0.0, 1.0,
    5.0, 0.0, 0.3, 1.0, 0.0, 0.0, 1.0,
    5.0, 0.0, -0.3, 1.0, 0.0, 0.0, 1.0,
    
    // X--
    -1.0, 0.0, 0.3, 1.0, 0.0, 0.0, 1.0,
    -1.0, 0.0, -0.3, 1.0, 0.0, 0.0, 1.0,
    -2.0, 0.0, 0.3, 1.0, 0.0, 0.0, 1.0,
    -2.0, 0.0, -0.3, 1.0, 0.0, 0.0, 1.0,
    -3.0, 0.0, 0.3, 1.0, 0.0, 0.0, 1.0,
    -3.0, 0.0, -0.3, 1.0, 0.0, 0.0, 1.0,
    -4.0, 0.0, 0.3, 1.0, 0.0, 0.0, 1.0,
    -4.0, 0.0, -0.3, 1.0, 0.0, 0.0, 1.0,
    -5.0, 0.0, 0.3, 1.0, 0.0, 0.0, 1.0,
    -5.0, 0.0, -0.3, 1.0, 0.0, 0.0, 1.0,

    // Y --
    0.3, 1.0, 0.0, 0.0, 1.0, 0.0, 1,
    -0.3, 1.0, 0.0, 0.0, 1.0, 0.0, 1,
    0.3, 2.0, 0.0, 0.0, 1.0, 0.0, 1,
    -0.3, 2.0, 0.0, 0.0, 1.0, 0.0, 1,
    0.3, 3.0, 0.0, 0.0, 1.0, 0.0, 1,
    -0.3, 3.0, 0.0, 0.0, 1.0, 0.0, 1,
    0.3, 4.0, 0.0, 0.0, 1.0, 0.0, 1,
    -0.3, 4.0, 0.0, 0.0, 1.0, 0.0, 1,
    0.3, 5.0, 0.0, 0.0, 1.0, 0.0, 1,
    -0.3, 5.0, 0.0, 0.0, 1.0, 0.0, 1,
    // Y --
    0.3, -1.0, 0.0, 0.0, 1.0, 0.0, 1,
    -0.3, -1.0, 0.0, 0.0, 1.0, 0.0, 1,
    0.3, -2.0, 0.0, 0.0, 1.0, 0.0, 1,
    -0.3, -2.0, 0.0, 0.0, 1.0, 0.0, 1,
    0.3, -3.0, 0.0, 0.0, 1.0, 0.0, 1,
    -0.3, -3.0, 0.0, 0.0, 1.0, 0.0, 1,
    0.3, -4.0, 0.0, 0.0, 1.0, 0.0, 1,
    -0.3, -4.0, 0.0, 0.0, 1.0, 0.0, 1,
    0.3, -5.0, 0.0, 0.0, 1.0, 0.0, 1,
    -0.3, -5.0, 0.0, 0.0, 1.0, 0.0, 1,
    
    
    // X+
    40.0, 0.02, 0.0, 1.0, .0, 0.0, 1.0,
    -40.0, 0.02, 0.0, 1.0, 0.0, 0.0, 1.0,
    40.0, -0.02, 0.0, 1.0, 0.0, 0.0, 1.0,
    -40.0, -0.02, 0.0, 1.0, 0.0, 0.0, 1.0,
    40.0, 0.0, 0.02, 1.0, 0.0, 0.0, 1.0,
    -40.0, 0.0, 0.02, 1.0, 0.0, 0.0, 1.0,
    40.0, 0.0, -0.02, 1.0, 0.0, 0.0, 1.0,
    -40.0, 0.0, -0.02, 1.0, 0.0, 0.0, 1.0,
    // Y+
    0.02, 40.0, 0.0, 0.0, 1.0, 0.0, 1.0,
    0.02, -40.0, 0.0, 0.0, 1.0, 0.0, 1.0,
    -0.02, 40.0, 0.0, 0.0, 1.0, 0.0, 1.0,
    -0.02, -40.0, 0.0, 0.0, 1.0, 0.0, 1.0,
    0.0, 40.0, 0.02, 0.0, 1.0, 0.0, 1.0,
    0.0, -40.0, 0.02, 0.0, 1.0, 0.0, 1.0,
    0.0, 40.0, -0.02, 0.0, 1.0, 0.0, 1.0,
    0.0, -40.0, -0.02, 0.0, 1.0, 0.0, 1.0,
    // Z+
    0.02, 0.0, 40.0, 0.0, 0.0, 1.0, 1.0,
    0.02, 0.0, -40.0, 0.0, 0.0, 1.0, 1.0,
    -0.02, 0.0, 40.0, 0.0, 0.0, 1.0, 1.0,
    -0.02, 0.0, -40.0, 0.0, 0.0, 1.0, 1.0,
    0.0, 0.02, 40.0, 0.0, 0.0, 1.0, 1.0,
    0.0, 0.02, -40.0, 0.0, 0.0, 1.0, 1.0,
    0.0, -0.02, 40.0, 0.0, 0.0, 1.0, 1.0,
    0.0, -0.02, -40.0, 0.0, 0.0, 1.0, 1.0,


    //X
    8.0, 0.0, 1.0, 0.5, 0.0, 0.0, 1,
    -8.0, 0.0, 1.0, 0.5, 0.0, 0.0, 1,
    8.0, 0.0, 2.0, 0.5, 0.0, 0.0, 1,
    -8.0, 0.0, 2.0, 0.5, 0.0, 0.0, 1,
    8.0, 0.0, 3.0, 0.5, 0.0, 0.0, 1,
    -8.0, 0.0, 3.0, 0.5, 0.0, 0.0, 1,
    8.0, 0.0, 4.0, 0.5, 0.0, 0.0, 1,
    -8.0, 0.0, 4.0, 0.5, 0.0, 0.0, 1,
    8.0, 0.0, 5.0, 0.5, 0.0, 0.0, 1,
    -8.0, 0.0, 5.0, 0.5, 0.0, 0.0, 1,
    // -X
    8.0, 0.0, -1.0, 0.5, 0.0, 0.0, 1,
    -8.0, 0.0, -1.0, 0.5, 0.0, 0.0, 1,
    8.0, 0.0, -2.0, 0.5, 0.0, 0.0, 1,
    -8.0, 0.0, -2.0, 0.5, 0.0, 0.0, 1,
    8.0, 0.0, -3.0, 0.5, 0.0, 0.0, 1,
    -8.0, 0.0, -3.0, 0.5, 0.0, 0.0, 1,
    8.0, 0.0, -4.0, 0.5, 0.0, 0.0, 1,
    -8.0, 0.0, -4.0, 0.5, 0.0, 0.0, 1,
    8.0, 0.0, -5.0, 0.5, 0.0, 0.0, 1,
    -8.0, 0.0, -5.0, 0.5, 0.0, 0.0, 1,
    
    
    // Z
    1.0, 0.0, 8.0, 0.0, 0.0, 0.9, 1.0,
    1.0, 0.0, -8.0, 0.0, 0.0, 0.9, 1.0,
    2.0, 0.0, 8.0, 0.0, 0.0, 0.9, 1.0,
    2.0, 0.0, -8.0, 0.0, 0.0, 0.9, 1.0,
    3.0, 0.0, 8.0, 0.0, 0.0, 0.9, 1.0,
    3.0, 0.0, -8.0, 0.0, 0.0, 0.9, 1.0,
    4.0, 0.0, 8.0, 0.0, 0.0, 0.9, 1.0,
    4.0, 0.0, -8.0, 0.0, 0.0, 0.9, 1.0,
    5.0, 0.0, 8.0, 0.0, 0.0, 0.9, 1.0,
    5.0, 0.0, -8.0, 0.0, 0.0, 0.9, 1.0,
    // -Z
    -1.0, 0.0, 8.0, 0.0, 0.0, 0.9, 1.0,
    -1.0, 0.0, -8.0, 0.0, 0.0, 0.9, 1.0,
    -2.0, 0.0, 8.0, 0.0, 0.0, 0.9, 1.0,
    -2.0, 0.0, -8.0, 0.0, 0.0, 0.9, 1.0,
    -3.0, 0.0, 8.0, 0.0, 0.0, 0.9, 1.0,
    -3.0, 0.0, -8.0, 0.0, 0.0, 0.9, 1.0,
    -4.0, 0.0, 8.0, 0.0, 0.0, 0.9, 1.0,
    -4.0, 0.0, -8.0, 0.0, 0.0, 0.9, 1.0,
    -5.0, 0.0, 8.0, 0.0, 0.0, 0.9, 1.0,
    -5.0, 0.0, -8.0, 0.0, 0.0, 0.9, 1.0,
    
    
    // Y
    0.0, 8.0, 1.0, 0.0, 0.5, 0.0, 1.0,
    0.0, -8.0, 1.0, 0.0, 0.5, 0.0, 1.0,
    0.0, 8.0, 2.0, 0.0, 0.5, 0.0, 1.0,
    0.0, -8.0, 2.0, 0.0, 0.5, 0.0, 1.0,
    0.0, 8.0, 3.0, 0.0, 0.5, 0.0, 1.0,
    0.0, -8.0, 3.0, 0.0, 0.5, 0.0, 1.0,
    0.0, 8.0, 4.0, 0.0, 0.5, 0.0, 1.0,
    0.0, -8.0, 4.0, 0.0, 0.5, 0.0, 1.0,
    0.0, 8.0, 5.0, 0.0, 0.5, 0.0, 1.0,
    0.0, -8.0, 5.0, 0.0, 0.5, 0.0, 1.0,
    // -Y
    0.0, 8.0, -1.0, 0.0, 0.5, 0.0, 1.0,
    0.0, -8.0, -1.0, 0.0, 0.5, 0.0, 1.0,
    0.0, 8.0, -2.0, 0.0, 0.5, 0.0, 1.0,
    0.0, -8.0, -2.0, 0.0, 0.5, 0.0, 1.0,
    0.0, 8.0, -3.0, 0.0, 0.5, 0.0, 1.0,
    0.0, -8.0, -3.0, 0.0, 0.5, 0.0, 1.0,
    0.0, 8.0, -4.0, 0.0, 0.5, 0.0, 1.0,
    0.0, -8.0, -4.0, 0.0, 0.5, 0.0, 1.0,
    0.0, 8.0, -5.0, 0.0, 0.5, 0.0, 1.0,
    0.0, -8.0, -5.0, 0.0, 0.5, 0.0, 1.0,
    
    
    
    

    
    

    

    
    // X=y-axis 
    40.0, 40.0, 40.0, 1.0, 1.0, 1.0, 1.0,
    -40.0, -40.0, -40.0, 1.0, 1.0, 1.0, 1.0,



];

function initialiseBuffer() {

    gl.vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);

    return testGLError("initialiseBuffers");
}

function initialiseShaders() {

    var fragmentShaderSource = `
			varying highp vec4 col; 
			void main(void) 
			{ 
				gl_FragColor = col;
			}`;

    gl.fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(gl.fragShader, fragmentShaderSource);
    gl.compileShader(gl.fragShader);
    // Check if compilation succeeded
    if (!gl.getShaderParameter(gl.fragShader, gl.COMPILE_STATUS)) {
        alert("Failed to compile the fragment shader.\n" + gl.getShaderInfoLog(gl.fragShader));
        return false;
    }

    // Vertex shader code
    var vertexShaderSource = `
			attribute highp vec4 myVertex; 
			attribute highp vec4 myColor; 
			uniform mediump mat4 mMat; 
			uniform mediump mat4 vMat; 
			uniform mediump mat4 pMat; 
			varying  highp vec4 col;
			void main(void)  
			{ 
				gl_Position = pMat * vMat * mMat * myVertex; 
				gl_PointSize = 8.0;
				col = myColor; 
			}`;

    gl.vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(gl.vertexShader, vertexShaderSource);
    gl.compileShader(gl.vertexShader);
    // Check if compilation succeeded
    if (!gl.getShaderParameter(gl.vertexShader, gl.COMPILE_STATUS)) {
        alert("Failed to compile the vertex shader.\n" + gl.getShaderInfoLog(gl.vertexShader));
        return false;
    }

    // Create the shader program
    gl.programObject = gl.createProgram();
    // Attach the fragment and vertex shaders to it
    gl.attachShader(gl.programObject, gl.fragShader);
    gl.attachShader(gl.programObject, gl.vertexShader);
    // Bind the custom vertex attribute "myVertex" to location 0
    gl.bindAttribLocation(gl.programObject, 0, "myVertex");
    gl.bindAttribLocation(gl.programObject, 1, "myColor");
    // Link the program
    gl.linkProgram(gl.programObject);
    // Check if linking succeeded in a similar way we checked for compilation errors
    if (!gl.getProgramParameter(gl.programObject, gl.LINK_STATUS)) {
        alert("Failed to link the program.\n" + gl.getProgramInfoLog(gl.programObject));
        return false;
    }

    gl.useProgram(gl.programObject);

    return testGLError("initialiseShaders");
}

var xRot = 0.0;
var yRot = 0.0;
var zRot = 0.0;
var speedRot = 0.01;

flag_animation = 0;
function toggleAnimation() {
    flag_animation ^= 1;
    console.log("flag_animation=", flag_animation);
}

function speed_scale(a) {
    speedRot *= a;
}

var draw_mode = 4; // 4 Triangles, 3 line_strip 0-Points

function fn_draw_mode(a) {
    draw_mode = a;
}

var fov_degree = 10.0;
function fn_update_fov(val) {
    document.getElementById('textFOV').value = val;
    fov_degree = val;
}

var mMat, vMat, pMat;

function renderScene1() {

    

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clearDepth(1);										// Added for depth Test 
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);	// Added for depth Test 
    gl.enable(gl.DEPTH_TEST);								// Added for depth Test 

    var mMatLocation = gl.getUniformLocation(gl.programObject, "mMat");
    var vMatLocation = gl.getUniformLocation(gl.programObject, "vMat");
    var pMatLocation = gl.getUniformLocation(gl.programObject, "pMat");
    pMat = mat4.create();
    vMat = mat4.create();
    mMat = mat4.create();
    
    mat4.ortho(pMat, -100 / fov_degree, 100 / fov_degree, -100 / fov_degree, 100 / fov_degree, -300, 300);
    mat4.lookAt(vMat, [vx, vy, vz], [0.0, 0.0, 0.0], [0, 1, 0]);
    
    gl.uniformMatrix4fv(mMatLocation, gl.FALSE, mMat);
    gl.uniformMatrix4fv(vMatLocation, gl.FALSE, vMat);
    gl.uniformMatrix4fv(pMatLocation, gl.FALSE, pMat);

    if (!testGLError("gl.uniformMatrix4fv")) {
        return false;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.vertexBuffer);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, gl.FALSE, 28, 0);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 4, gl.FLOAT, gl.FALSE, 28, 12);

    if (!testGLError("gl.vertexAttribPointer")) {
        return false;
    }
    







    if (viewmode == 0) {
        gl.drawArrays(1, 36, 66);
        
        //X,Y,Z axis

        mat4.rotateX(mMat, mMat, xRot);
        
    }


    else if (viewmode == 1) {
        gl.drawArrays(1, 36, 66);
        //gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.rotateX(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [2, 0, 0]);
        
    }

    else if (viewmode == 2) {
        gl.drawArrays(1, 36, 66);
        //gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [2, 0, 0]);
        mat4.rotateX(mMat, mMat, yRot);
        
    
    }

    else if (viewmode == 3) {

        gl.drawArrays(1, 36, 66);
        //X,Y,Z axis

        mat4.rotateX(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [0, 2, 0]);
        
    }

    else if (viewmode == 4) {

        gl.drawArrays(1, 36, 66);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [0, 2, 0]);
        mat4.rotateX(mMat, mMat, yRot);


    }

    else if (viewmode == 5) {

        gl.drawArrays(1, 36, 66);
        //X,Y,Z axis

        mat4.rotateX(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [0, 0, 2]);

    }

    else if (viewmode == 6) {

        gl.drawArrays(1, 36, 66);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [0, 0, 2]);
        mat4.rotateX(mMat, mMat, yRot);


    }

    else if (viewmode == 7) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.rotateX(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [2, 2, 0]);

    }

    else if (viewmode == 8) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [2, 2, 0]);
        mat4.rotateX(mMat, mMat, yRot);

    }

    else if (viewmode == 9) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.rotateX(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [2, 0, 2]);
        
    }

    else if (viewmode == 10) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [2, 0, 2]);
        mat4.rotateX(mMat, mMat, yRot);
       
    }

    else if (viewmode == 11) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.rotateX(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [0, 2, 2]);

    }

    else if (viewmode == 12) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [0, 2, 2]);
        mat4.rotateX(mMat, mMat, yRot);

    }
    else if (viewmode == 13) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.rotateX(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [2, 2, 2]);
        
    }
    else if (viewmode == 14) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [2, 2, 2]);
        mat4.rotateX(mMat, mMat, yRot);
        
    }

    else if (viewmode == 15) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.rotateX(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [2, 1, 5]);
       
    }

    else if (viewmode == 16) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [2, 1, 5]);
        mat4.rotateX(mMat, mMat, yRot);
       
    }






//rotate + translate

    else if (viewmode == 17) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [2, 2, 2]);
        mat4.scale(mMat, mMat, [1.5, 1.5, 1]);

    }

    else if (viewmode == 18) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1.5, 1.5, 1]);
        mat4.translate(mMat, mMat, [2, 2, 2]);
       
    }

    else if (viewmode == 19) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [2, 2, 2]);
        mat4.scale(mMat, mMat, [1.5, 1, 1]);

    }

    else if (viewmode == 20) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1.5, 1, 1]);
        mat4.translate(mMat, mMat, [2, 2, 2]);

    }


    else if (viewmode == 21) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [2, 2, 0]);
        mat4.scale(mMat, mMat, [1.5, 1.5, 1]);

    }

    else if (viewmode == 22) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1.5, 1.5, 1]);
        mat4.translate(mMat, mMat, [2, 2, 0]);

    }

    else if (viewmode == 23) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [2, 2, 0]);
        mat4.scale(mMat, mMat, [1.5, 1, 1]);

    }

    else if (viewmode == 24) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1.5, 1, 1]);
        mat4.translate(mMat, mMat, [2, 2, 0]);

    }

    else if (viewmode == 25) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [2, 0, 0]);
        mat4.scale(mMat, mMat, [1.5, 1.5, 1]);

    }

    else if (viewmode == 26) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1.5, 1.5, 1]);
        mat4.translate(mMat, mMat, [2, 0, 0]);

    }

    else if (viewmode == 27) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [2, 0, 0]);
        mat4.scale(mMat, mMat, [1.5, 1, 1]);

    }


    else if (viewmode == 28) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1.5, 1, 1]);
        mat4.translate(mMat, mMat, [2, 0, 0]);

    }





// Rotate + Scale

    else if (viewmode == 29) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1.5, 1, 1]);
        mat4.rotateX(mMat, mMat, yRot);
    }

    else if (viewmode == 30) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.rotateX(mMat, mMat, yRot);
        mat4.scale(mMat, mMat, [1.5, 1, 1]);
       
    }

    else if (viewmode == 31) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1, 1.5, 1]);
        mat4.rotateX(mMat, mMat, yRot);
    }

    else if (viewmode == 32) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.rotateX(mMat, mMat, yRot);
        mat4.scale(mMat, mMat, [1, 1.5, 1]);

    }

    else if (viewmode == 33) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1, 1, 1.5]);
        mat4.rotateX(mMat, mMat, yRot);
    }

    else if (viewmode == 34) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.rotateX(mMat, mMat, yRot);
        mat4.scale(mMat, mMat, [1, 1, 1.5]);

    }










    if (viewmode == 35) {
        gl.drawArrays(1, 36, 66);

        //X,Y,Z axis

        mat4.rotateY(mMat, mMat, xRot);

    }




    else if (viewmode == 36) {
        gl.drawArrays(1, 36, 66);
        //gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.rotateY(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [2, 0, 0]);

    }

    else if (viewmode == 37) {
        gl.drawArrays(1, 36, 66);
        //gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [2, 0, 0]);
        mat4.rotateY(mMat, mMat, yRot);


    }

    else if (viewmode == 38) {

        gl.drawArrays(1, 36, 66);
        //X,Y,Z axis

        mat4.rotateY(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [0, 2, 0]);

    }

    else if (viewmode == 39) {

        gl.drawArrays(1, 36, 66);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [0, 2, 0]);
        mat4.rotateY(mMat, mMat, yRot);


    }

    else if (viewmode == 40) {

        gl.drawArrays(1, 36, 66);
        //X,Y,Z axis

        mat4.rotateY(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [0, 0, 2]);

    }

    else if (viewmode == 41) {

        gl.drawArrays(1, 36, 66);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [0, 0, 2]);
        mat4.rotateY(mMat, mMat, yRot);


    }


    else if (viewmode == 42) {
        
        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.rotateY(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [2, 2, 0]);

    }

    else if (viewmode == 43) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [2, 2, 0]);
        mat4.rotateY(mMat, mMat, yRot);

    }

    else if (viewmode == 44) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.rotateY(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [2, 0, 2]);

    }

    else if (viewmode == 45) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [2, 0, 2]);
        mat4.rotateY(mMat, mMat, yRot);

    }

    else if (viewmode == 46) {
        gl.drawArrays(1, 36, 66);
        gl.drawArrays(1, 166, 20);
        //X,Y,Z axis

        mat4.rotateY(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [0, 2, 2]);

    }

    else if (viewmode == 47) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [0, 2, 2]);
        mat4.rotateY(mMat, mMat, yRot);

    }
    
    else if (viewmode == 48) {

        gl.drawArrays(1, 102, 84);

        mat4.rotateY(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [2, 2, 2]);

    }
    else if (viewmode == 49) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [2, 2, 2]);
        mat4.rotateY(mMat, mMat, yRot);

    }

    else if (viewmode == 50) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.rotateY(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [2, 1, 5]);

    }

    else if (viewmode == 51) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [2, 1, 5]);
        mat4.rotateY(mMat, mMat, yRot);

    }






    //rotate + translate

    else if (viewmode == 52) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [2, 2, 2]);
        mat4.scale(mMat, mMat, [1.5, 1.5, 1]);

    }

    else if (viewmode == 53) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1.5, 1.5, 1]);
        mat4.translate(mMat, mMat, [2, 2, 2]);

    }

    else if (viewmode == 54) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [2, 2, 2]);
        mat4.scale(mMat, mMat, [1.5, 1, 1]);

    }

    else if (viewmode == 55) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1.5, 1, 1]);
        mat4.translate(mMat, mMat, [2, 2, 2]);

    }


    else if (viewmode == 56) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [2, 2, 0]);
        mat4.scale(mMat, mMat, [1.5, 1.5, 1]);

    }

    else if (viewmode == 57) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1.5, 1.5, 1]);
        mat4.translate(mMat, mMat, [2, 2, 0]);

    }

    else if (viewmode == 58) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [2, 2, 0]);
        mat4.scale(mMat, mMat, [1.5, 1, 1]);

    }

    else if (viewmode == 59) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1.5, 1, 1]);
        mat4.translate(mMat, mMat, [2, 2, 0]);

    }

    else if (viewmode == 60) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [2, 0, 0]);
        mat4.scale(mMat, mMat, [1.5, 1.5, 1]);

    }

    else if (viewmode == 61) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1.5, 1.5, 1]);
        mat4.translate(mMat, mMat, [2, 0, 0]);

    }

    else if (viewmode == 62) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [2, 0, 0]);
        mat4.scale(mMat, mMat, [1.5, 1, 1]);

    }


    else if (viewmode == 63) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1.5, 1, 1]);
        mat4.translate(mMat, mMat, [2, 0, 0]);

    }





    // Rotate + Scale

    else if (viewmode == 64) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1.5, 1, 1]);
        mat4.rotateY(mMat, mMat, yRot);
    }

    else if (viewmode == 65) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.rotateY(mMat, mMat, yRot);
        mat4.scale(mMat, mMat, [1.5, 1, 1]);

    }

    else if (viewmode == 66) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1, 1.5, 1]);
        mat4.rotateY(mMat, mMat, yRot);
    }

    else if (viewmode == 67) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.rotateY(mMat, mMat, yRot);
        mat4.scale(mMat, mMat, [1, 1.5, 1]);

    }

    else if (viewmode == 68) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1, 1, 1.5]);
        mat4.rotateY(mMat, mMat, yRot);
    }

    else if (viewmode == 69) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.rotateY(mMat, mMat, yRot);
        mat4.scale(mMat, mMat, [1, 1, 1.5]);

    }




    







    if (viewmode == 70) {
        gl.drawArrays(1, 36, 66);

        //X,Y,Z axis

        mat4.rotateZ(mMat, mMat, xRot);

    }




    else if (viewmode == 71) {
        gl.drawArrays(1, 36, 66);
        //gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.rotateZ(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [2, 0, 0]);

    }

    else if (viewmode == 72) {
        gl.drawArrays(1, 36, 66);
        //gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [2, 0, 0]);
        mat4.rotateZ(mMat, mMat, yRot);


    }

    else if (viewmode == 73) {

        gl.drawArrays(1, 36, 66);
        //X,Y,Z axis

        mat4.rotateZ(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [0, 2, 0]);

    }

    else if (viewmode == 74) {

        gl.drawArrays(1, 36, 66);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [0, 2, 0]);
        mat4.rotateZ(mMat, mMat, yRot);


    }

    else if (viewmode == 75) {

        gl.drawArrays(1, 36, 66);
        //X,Y,Z axis

        mat4.rotateZ(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [0, 0, 2]);

    }

    else if (viewmode == 76) {

        gl.drawArrays(1, 36, 66);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [0, 0, 2]);
        mat4.rotateZ(mMat, mMat, yRot);


    }


    else if (viewmode == 77) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.rotateZ(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [2, 2, 0]);

    }

    else if (viewmode == 78) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [2, 2, 0]);
        mat4.rotateZ(mMat, mMat, yRot);

    }

    else if (viewmode == 79) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.rotateZ(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [2, 0, 2]);

    }

    else if (viewmode == 80) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [2, 0, 2]);
        mat4.rotateZ(mMat, mMat, yRot);

    }

    else if (viewmode == 81) {
        gl.drawArrays(1, 36, 66);
        gl.drawArrays(1, 166, 20);
        //X,Y,Z axis

        mat4.rotateZ(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [0, 2, 2]);

    }

    else if (viewmode == 82) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [0, 2, 2]);
        mat4.rotateZ(mMat, mMat, yRot);

    }

    else if (viewmode == 83) {

        gl.drawArrays(1, 102, 84);

        mat4.rotateZ(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [2, 2, 2]);

    }
    else if (viewmode == 84) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [2, 2, 2]);
        mat4.rotateZ(mMat, mMat, yRot);

    }

    else if (viewmode == 85) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.rotateZ(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [2, 1, 5]);

    }

    else if (viewmode == 86) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [2, 1, 5]);
        mat4.rotateZ(mMat, mMat, yRot);

    }






    //rotate + translate

    else if (viewmode == 87) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [2, 2, 2]);
        mat4.scale(mMat, mMat, [1.5, 1.5, 1]);

    }

    else if (viewmode == 88) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1.5, 1.5, 1]);
        mat4.translate(mMat, mMat, [2, 2, 2]);

    }

    else if (viewmode == 89) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [2, 2, 2]);
        mat4.scale(mMat, mMat, [1.5, 1, 1]);

    }

    else if (viewmode == 90) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1.5, 1, 1]);
        mat4.translate(mMat, mMat, [2, 2, 2]);

    }


    else if (viewmode == 91) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [2, 2, 0]);
        mat4.scale(mMat, mMat, [1.5, 1.5, 1]);

    }

    else if (viewmode == 92) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1.5, 1.5, 1]);
        mat4.translate(mMat, mMat, [2, 2, 0]);

    }

    else if (viewmode == 93) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [2, 2, 0]);
        mat4.scale(mMat, mMat, [1.5, 1, 1]);

    }

    else if (viewmode == 94) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1.5, 1, 1]);
        mat4.translate(mMat, mMat, [2, 2, 0]);

    }

    else if (viewmode == 95) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [2, 0, 0]);
        mat4.scale(mMat, mMat, [1.5, 1.5, 1]);

    }

    else if (viewmode == 96) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1.5, 1.5, 1]);
        mat4.translate(mMat, mMat, [2, 0, 0]);

    }

    else if (viewmode == 97) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [2, 0, 0]);
        mat4.scale(mMat, mMat, [1.5, 1, 1]);

    }


    else if (viewmode == 98) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1.5, 1, 1]);
        mat4.translate(mMat, mMat, [2, 0, 0]);

    }





    // Rotate + Scale

    else if (viewmode == 99) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1.5, 1, 1]);
        mat4.rotateZ(mMat, mMat, yRot);
    }

    else if (viewmode == 100) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.rotateZ(mMat, mMat, yRot);
        mat4.scale(mMat, mMat, [1.5, 1, 1]);

    }

    else if (viewmode == 101) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1, 1.5, 1]);
        mat4.rotateZ(mMat, mMat, yRot);
    }

    else if (viewmode == 102) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.rotateZ(mMat, mMat, yRot);
        mat4.scale(mMat, mMat, [1, 1.5, 1]);

    }

    else if (viewmode == 103) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.scale(mMat, mMat, [1, 1, 1.5]);
        mat4.rotateZ(mMat, mMat, yRot);
    }

    else if (viewmode == 104) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.rotate(mMat, mMat, yRot);
        mat4.scale(mMat, mMat, [1, 1, 1.5]);

    }











    if (viewmode == 105) {
        gl.drawArrays(1, 36, 66);

        mat4.translate(mMat, mMat, [2, 2, 2]);

        mat4.rotateX(mMat, mMat, xRot);
        mat4.rotateY(mMat, mMat, xRot);
        mat4.rotateZ(mMat, mMat, xRot);

    }


    else if (viewmode == 106) {
        gl.drawArrays(1, 102, 84);
        
        mat4.rotateX(mMat, mMat, xRot);
        mat4.rotateY(mMat, mMat, xRot);
        mat4.rotateZ(mMat, mMat, xRot);

        mat4.translate(mMat, mMat, [2, 2, 2]);

    }

    if (viewmode == 107) {
        gl.drawArrays(1, 36, 66);

        mat4.translate(mMat, mMat, [2, 2, 2]);

        mat4.rotateX(mMat, mMat, xRot);
        mat4.rotateY(mMat, mMat, xRot);

    }


    else if (viewmode == 108) {
        gl.drawArrays(1, 102, 84);

        mat4.rotateX(mMat, mMat, xRot);
        mat4.rotateY(mMat, mMat, xRot);

        mat4.translate(mMat, mMat, [2, 2, 2]);

    }

    if (viewmode == 109) {
        gl.drawArrays(1, 36, 66);

        mat4.translate(mMat, mMat, [2, 2, 2]);

        mat4.rotateX(mMat, mMat, xRot);
        mat4.rotateZ(mMat, mMat, xRot);

    }


    else if (viewmode == 110) {
        gl.drawArrays(1, 102, 84);

        mat4.rotateX(mMat, mMat, xRot);
        mat4.rotateZ(mMat, mMat, xRot);

        mat4.translate(mMat, mMat, [2, 2, 2]);

    }

    if (viewmode == 111) {
        gl.drawArrays(1, 36, 66);

        mat4.translate(mMat, mMat, [2, 2, 2]);

        mat4.rotateY(mMat, mMat, xRot);
        mat4.rotateZ(mMat, mMat, xRot);

    }


    else if (viewmode == 112) {
        gl.drawArrays(1, 102, 84);

        mat4.rotateY(mMat, mMat, xRot);
        mat4.rotateZ(mMat, mMat, xRot);

        mat4.translate(mMat, mMat, [2, 2, 2]);

    }

    if (viewmode == 113) {
        gl.drawArrays(1, 36, 66);

        mat4.translate(mMat, mMat, [2, 0, 0]);

        mat4.rotateX(mMat, mMat, xRot);
        mat4.rotateY(mMat, mMat, xRot);
        mat4.rotateZ(mMat, mMat, xRot);

    }


    else if (viewmode == 114) {
        gl.drawArrays(1, 102, 84);

        mat4.translate(mMat, mMat, [0, 2, 0]);

        mat4.rotateX(mMat, mMat, xRot);
        mat4.rotateY(mMat, mMat, xRot);
        mat4.rotateZ(mMat, mMat, xRot);

    }

    else if (viewmode == 115) {
        gl.drawArrays(1, 102, 84);

        mat4.translate(mMat, mMat, [0, 0, 2]);

        mat4.rotateX(mMat, mMat, xRot);
        mat4.rotateY(mMat, mMat, xRot);
        mat4.rotateZ(mMat, mMat, xRot);

    }

    if (viewmode == 116) {
        gl.drawArrays(1, 36, 66);

        mat4.translate(mMat, mMat, [0, 0, 2]);

        mat4.rotateX(mMat, mMat, xRot);
        mat4.rotateY(mMat, mMat, xRot);
        

    }


    else if (viewmode == 117) {
        gl.drawArrays(1, 102, 84);

        mat4.translate(mMat, mMat, [0, 2, 0]);

        mat4.rotateX(mMat, mMat, xRot);
        mat4.rotateZ(mMat, mMat, xRot);

    }

    else if (viewmode == 118) {
        gl.drawArrays(1, 102, 84);

        mat4.translate(mMat, mMat, [2, 0, 0]);


        mat4.rotateY(mMat, mMat, xRot);
        mat4.rotateZ(mMat, mMat, xRot);

    }















    else if (viewmode == 119) {
        gl.drawArrays(1, 36, 66);
        gl.drawArrays(1, 186, 2);
        //gl.drawArrays(1, 102, 84);
        //X,Y,Z axis
        mat4.fromRotation(mMat, xRot, [0.2, 0.2, 0.2])
    }

    else if (viewmode == 120) {
        gl.drawArrays(1, 36, 66);
        gl.drawArrays(1, 186, 2);
        //X,Y,Z axis

        mat4.fromRotation(mMat, xRot, [0.2, 0.2, 0.2])
        mat4.translate(mMat, mMat, [2, 0, 0]);

    }

    else if (viewmode == 121) {
        gl.drawArrays(1, 36, 66);
        gl.drawArrays(1, 186, 2);
        //X,Y,Z axis
        
        mat4.fromRotation(mMat, xRot, [0.2, 0.2, 0.2])
        mat4.translate(mMat, mMat, [0, 2, 0]);

    }

    else if (viewmode == 122) {
        gl.drawArrays(1, 36, 66);
        gl.drawArrays(1, 186, 2);
        //X,Y,Z axis

        mat4.fromRotation(mMat, xRot, [0.2, 0.2, 0.2])
        mat4.translate(mMat, mMat, [0, 0, 2]);

    }

    else if (viewmode == 123) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.fromRotation(mMat, xRot, [0.2, 0.2, 0])

    }

    else if (viewmode == 124) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.fromRotation(mMat, xRot, [0.2, 0.2, 0])
        mat4.translate(mMat, mMat, [2, 0, 0]);

    }

    else if (viewmode == 125) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.fromRotation(mMat, xRot, [0.2, 0.2, 0])
        mat4.translate(mMat, mMat, [0, 2, 0]);

    }

    else if (viewmode == 126) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.fromRotation(mMat, xRot, [0.2, 0.2, 0])
        mat4.translate(mMat, mMat, [0, 0, 2]);

    }

    else if (viewmode == 127) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.fromRotation(mMat, xRot, [0.2, 0, 0.2])
        
    }

    else if (viewmode == 128) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.fromRotation(mMat, xRot, [0.2, 0, 0.2])
        mat4.translate(mMat, mMat, [2, 0, 0]);

    }

    else if (viewmode == 129) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.fromRotation(mMat, xRot, [0.2, 0, 0.2])
        mat4.translate(mMat, mMat, [0, 2, 0]);

    }

    else if (viewmode == 130) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.fromRotation(mMat, xRot, [0.2, 0, 0.2])
        mat4.translate(mMat, mMat, [0, 0, 2]);

    }

    else if (viewmode == 131) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.fromRotation(mMat, xRot, [0, 0.2, 0.2])
    }

    else if (viewmode == 132) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.fromRotation(mMat, xRot, [0, 0.2, 0.2])
        mat4.translate(mMat, mMat, [2, 0, 0]);

    }

    else if (viewmode == 133) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.fromRotation(mMat, xRot, [0, 0.2, 0.2])
        mat4.translate(mMat, mMat, [0, 2, 0]);

    }

    else if (viewmode == 134) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.fromRotation(mMat, xRot, [0, 0.2, 0.2])
        mat4.translate(mMat, mMat, [0, 0, 2]);

    }















    else if (viewmode == 135) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [0.5, 0.5, 0.5]);
        mat4.rotateX(mMat, mMat, yRot);
        mat4.rotateY(mMat, mMat, yRot);
        mat4.rotateZ(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [-0.5, -0.5, -0.5]);


    }

    else if (viewmode == 136) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [0.5, 0.5, 0.5]);
        mat4.rotateX(mMat, mMat, yRot);
        mat4.rotateY(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [-0.5, -0.5, -0.5]);

    }

    else if (viewmode == 137) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis
        mat4.translate(mMat, mMat, [0.5, 0.5, 0.5]);
        mat4.rotateX(mMat, mMat, yRot);
        mat4.rotateZ(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [-0.5, -0.5, -0.5]);

    }

    else if (viewmode == 138) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [0.5, 0.5, 0.5]);
        mat4.rotateY(mMat, mMat, yRot);
        mat4.rotateZ(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [-0.5, -0.5, -0.5]);


    }


    else if (viewmode == 139) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [0.5, 0, 0]);
        mat4.rotateX(mMat, mMat, yRot);
        mat4.rotateY(mMat, mMat, yRot);
        mat4.rotateZ(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [-0.5, 0, 0]);


    }


    else if (viewmode == 140) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [0, 0.5, 0]);
        mat4.rotateX(mMat, mMat, yRot);
        mat4.rotateY(mMat, mMat, yRot);
        mat4.rotateZ(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [0, 0.5, 0]);


    }


    else if (viewmode == 141) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [0,0,0.5]);
        mat4.rotateX(mMat, mMat, yRot);
        mat4.rotateY(mMat, mMat, yRot);
        mat4.rotateZ(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [0,0,0.5]);


    }

    else if (viewmode == 200) {

        gl.drawArrays(1, 102, 84);
        //X,Y,Z axis
        mat4.scale(mMat, mMat, [SX4, SY4, SZ4]);
        mat4.translate(mMat, mMat, [TX2, TY2, TZ2]);
        mat4.scale(mMat, mMat, [SX3, SY3, SZ3]);
        
        mat4.fromRotation(mMat, xRot, [FX2,FY2,FZ2])

        if (RZ2 == 1) {
            mat4.rotateZ(mMat, mMat, yRot);
        }
        if (RX2 == 1) {
            mat4.rotateX(mMat, mMat, yRot);
        }
        if (RY2 == 1) {
            mat4.rotateY(mMat, mMat, yRot);
        }
        mat4.fromRotation(mMat, xRot, [FX1,FY1,FZ1])
        mat4.scale(mMat, mMat, [SX2, SY2, SZ2]);
        mat4.translate(mMat, mMat, [TX1, TY1, TZ1]);
        mat4.scale(mMat, mMat, [SX1, SY1, SZ1]);

        if (RZ1 == 1) {
            mat4.rotateZ(mMat, mMat, yRot);
        } 
        if (RX1 == 1) {
            mat4.rotateX(mMat, mMat, yRot);
        }
        if (RY1 == 1) { 
            mat4.rotateY(mMat, mMat, yRot);
        }
            
            
       
    }

    if (flag_animation == 1) {
        xRot = xRot + speedRot;
        yRot = yRot + speedRot;
        zRot = zRot + speedRot;
    }

    
    
    gl.uniformMatrix4fv(mMatLocation, gl.FALSE, mMat);
    gl.uniformMatrix4fv(vMatLocation, gl.FALSE, vMat);
    gl.uniformMatrix4fv(pMatLocation, gl.FALSE, pMat);

    if (!testGLError("gl.uniformMatrix4fv")) {
        return false;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.vertexBuffer);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, gl.FALSE, 28, 0);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 4, gl.FLOAT, gl.FALSE, 28, 12);

    if (!testGLError("gl.vertexAttribPointer")) {
        return false;
    }

    gl.drawArrays(draw_mode, 0, 36);

  

    if (!testGLError("gl.drawArrays")) {
        return false;
    }

    return true;
}




function main() {
    var canvas = document.getElementById("canvas");
    


    if (!initialiseGL(canvas)) {
        return;
    }

    if (!initialiseBuffer()) {
        return;
    }

    if (!initialiseShaders()) {
        return;
    }

    requestAnimFrame = (function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000, 60);
            };
    })();
        (function renderLoop() {
            if (renderScene1()) {
            
                requestAnimFrame(renderLoop);
            
            }
        })();
}


