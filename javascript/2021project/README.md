# Rotate, Translate, Scale Study

# 개요
webgl에서는 Rotate, Translate, Scale을 매트릭스로 계산한다.

이 방법은 매트릭스의 결합법칙을 이용한 효율적인 계산을 가능한다. 버텍스의 개수가 많을 경우 미리 결합된 매트릭스를 이용하여 빠른 계산이 가능하여 효율적이다.

하지만, 메트릭스는 교환법칙이 성립하지 않기때문에 매트릭스가 계산되는 순서에따라 결과가 달라진다. 따라서 계산순서에 유의해야 한다.

계산순서에 대한 Rotate, Translate, Scale의 결과를 3차원 좌표평면위에서 확인하며 Rotate, Translate, Scale의 개념을 이해하고,

특수한 케이스 살펴봄으로 심화학습을 한 후 freetool을 이용하여 직접 만든 메트릭스 조합의 결과를 예측하고 확인한다. 

# 기능

1. 3차원 좌표계를 이용한 정확한 회전 반경, 사이즈 확인
<img src = "/uploads/04f07cd8554a6b31be9b2d5507b4fdd3/스크린샷_2021-06-23_오후_8.12.01.png" width="400px">
<img src = "/uploads/688bbc17a3b2acba88141951dbb1f578/스크린샷_2021-06-23_오후_9.42.51.png" width="400px">

2. view기능으로 시점을 변경하며 그림이 어떻게 그려지는지 확인
<img src = "/uploads/41615b45f2656534ae439665906b59cb/스크린샷_2021-06-23_오후_8.24.11.png" width="400px">
<img src = "/uploads/93ed0a6c420f4b6201505037ab90891f/스크린샷_2021-06-23_오후_9.42.32.png" width="400px">

3. 이해를 돕기위해 추가되는 좌표평면의 구분직선
<img src = "/uploads/6d553ff7c85ee201cdc324e1b0cd60d0/스크린샷_2021-06-23_오후_8.12.52.png" width="400px">
<img src = "/uploads/47a07fa7b1f1bb52b21d94d4859d5d3f/스크린샷_2021-06-23_오후_8.12.15.png" width="400px">

4. 베이직 예제

<img src = "/uploads/75b35e0e77f83523cb5c10f2285589f1/스크린샷_2021-06-23_오후_8.36.43.png" width="200px">
<img src = "/uploads/9395789456b1f7379b3b026a655fa4df/스크린샷_2021-06-23_오후_8.36.56.png" width="200px">
<img src = "/uploads/2f2b7a9f00f8a936b565a4aedd7d56f0/스크린샷_2021-06-23_오후_8.37.03.png" width="200px">

5. 스페셜 예제
<img src = "/uploads/e3fda8d004374654056c75142a2ea764/스크린샷_2021-06-23_오후_8.39.11.png" width="200px">
<img src = "/uploads/9c1b9b04ca1ac4974a5d1b5c169e6dba/스크린샷_2021-06-23_오후_8.39.24.png" width="200px">
<img src = "/uploads/afc73002102c2e1658d4caf806d5add1/스크린샷_2021-06-23_오후_8.39.33.png" width="200px">

6. freetool
<img src = "/uploads/6ab52fd93391aef65b0afc73800ba70a/스크린샷_2021-06-23_오후_8.40.50.png" width="300px">


# 알고리즘


> 1. 3차원 좌표계를 이용한 정확한 회전 반경, 사이즈 확인
    
    // X-axis
    40.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
    -40.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
    
    
    // Y-axis
    0.0, 40.0, 0.0, 0.0, 1.0, 0.0, 1.0,
    0.0, -40.0, 0.0, 0.0, 1.0, 0.0, 1.0,
    
    
    // Z-axis
    0.0, 0.0, 40.0, 0.0, 0.0, 1.0, 1.0,
    0.0, 0.0, -40.0, 0.0, 0.0, 1.0, 1.0,`


    else if (viewmode == 1) {
        gl.drawArrays(1, 36, 66);
        //X,Y,Z axis

        mat4.rotateX(mMat, mMat, yRot);
        mat4.translate(mMat, mMat, [2, 0, 0]);
        
    }

    gl.drawArrays(draw_mode, 0, 36);
> 
 
html코드에서 수정해준 viewmode에 따라 화면에 보여줄 3차원 평면의 직선들을 표시한다. 

if문과 Rotate, Translate, Scale Study의 순서를 이용하여, 좌표평면은 움직이지않고 도형만 이동하도록 구현하였다.

이때 drawArrays함수를 좌표평면을 구현하는데 한 번, 직육면체를 구현하는데 한 번 총 두번 실행하는 것이 중요하다. 

직육면체를 해당 좌표평면에 표시함으로 도형의 Rotate, Translate, Scale Study에 대한 이해를 증진한다.




> 2. view기능으로 시점을 변경하며 그림이 어떻게 그려지는지 확인
    
    JScode------------------------------------------------------------------------------------------------


    mat4.ortho(pMat, -100 / fov_degree, 100 / fov_degree, -100 / fov_degree, 100 / fov_degree, -300, 300);
    mat4.lookAt(vMat, [vx, vy, vz], [0.0, 0.0, 0.0], [0, 1, 0]);
    

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

    
    HTML------------------------------------------------------------------------------------------------

    <p></p>
    X-VIEW :
    <input style="width:800px" id="VX" type="range" min="-100.0" max="100.0" value="-20.0"
        oninput="ChangeViewX(this.value)">
    <input type="text" id="changeVX" value="-20.0">
    <p></p>
    Y-VIEW :
    <input style="width:800px" id="VY" type="range" min="-100.0" max="100.0" value="20.0"
        oninput="ChangeViewY(this.value);">
    <input type="text" id="changeVY" value="20.0">
    <p></p>
    Z-VIEW :
    <input style="width:800px" id="VZ" type="range" min="-100.0" max="100.0" value="100.0"
        oninput="ChangeViewZ(this.value);">
    <input type="text" id="changeVZ" value="100.0">

> 
 
html코드에서 수정해준 vx,vy,vz에 따라 화면에 보여줄 3차원 평면의 시점을 변경한다.

view코드의 경우 반복하여 쓸 필요가 없기때문에, 코드의 간결성을 위하여 함수를 만들어 모든 좌표평면 if문 밖에 구현하였다. 

이를통해 직육면체를 해당 좌표평면에 표시하고, 시점변경을 통 도형의 Rotate, Translate, Scale Study에 대한 이해를 증진한다.








> 3. 이해를 돕기위해 추가되는 좌표평면의 구분직선
    
    JScode------------------------------------------------------------------------------------------------


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

    ...

    function mode(i){
    viewmode=i;
    }

    else if (viewmode == 8) {

        gl.drawArrays(1, 102, 64);
        //X,Y,Z axis

        mat4.translate(mMat, mMat, [2, 2, 0]);
        mat4.rotateX(mMat, mMat, yRot);

    }


    
    HTML------------------------------------------------------------------------------------------------

    <select id="X-axis Rotate" onchange="mode(this.value),commentFunction()">
    <option value='x'>------- SELECT -------</option>
    <option value=0>0. rotateX</option>
    ...

> 
 
html코드에서 수정해준 viewmode에 따라 화면에 보여줄 3차원 평면의 보조 직선들을 표시한다. 

linewidth함수를 사용하는데 실패하여 여러 선의 위치를 미세하게 변경하고 중첩하여 중심좌표계의 두깨와 색을 강조하였고,

보조선들의 경우 rgb값들을 조정하여 희미하게 만듦으로 도형의 위치를 파악하는데 방해가 되지 않도록 하였다.

직육면체를 해당 좌표평면에 표시함으로 도형의 Rotate, Translate, Scale Study에 대한 이해를 증진한다.



>  4. 베이직 예제
    
    JScode------------------------------------------------------------------------------------------------


    if (viewmode == 0) {
        gl.drawArrays(1, 36, 66);
        
        //X,Y,Z axis

        mat4.rotateX(mMat, mMat, xRot);
        
    }


    else if (viewmode == 1) {
        gl.drawArrays(1, 36, 66);
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


    
    HTML------------------------------------------------------------------------------------------------

    <option value=0>0. rotateX</option>
    <option value=''>------Translate + Rotate------</option>
    <option value=1>1. translate[2,0,0] -> rotateX</option>
    <option value=2>2. rotateX -> translate[2,0,0]</option>
    <option value=3>3. translate[0,2,0] -> rotateX</option>
    <option value=4>4. rotateX -> translate[0,2,0]</option>
    <option value=5>5. translate[0,0,2] -> rotateX</option>
    <option value=6>6. rotateX -> translate[0,0,2]</option>

> 
 
html코드에서 수정해준 viewmode에 따라 화면에 보여줄 베지직 예제를 표시한다.

순서에 조합을 통해 각 축에 35개씩 총 105개의 예제를 구현하였다.


>  5. 스페셜 예제
    
    JScode------------------------------------------------------------------------------------------------

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

> 
 
html코드에서 수정해준 viewmode에 따라 화면에 보여줄 스페셜 예제를 표시한다.

순서에 조합을 통해 점회전, 축회전, 임의의축 회전, 두축에 의한 회전 등을 구현하였다.


>  6. freetool
    
    JScode------------------------------------------------------------------------------------------------

    function Try() {
        viewmode = 200;
    }
    function rotateX1(i) {
        RX1 = i;
    }   
    function rotateY1(i) {
         RY1 = i;
    }
    ...

    HTML------------------------------------------------------------------------------------------------

    rotateX : 
    <select id="rotateX1" onchange="rotateX1(this.value)">
    <option value=''>--SELECT--</option>
    <option value=1>rotateX </option>
    <option value=0>off </option>
    </select>
    rotateY :
    <select id="rotateY1" onchange="rotateY1(this.value)">
    <option value=''>--SELECT--</option>
    <option value=1>rotateY </option>
    <option value=0>off </option>
    </select>
    ...
> 
 
html코드에서 수정해준 try 함수에 따라 사용자가 정의한 매트릭스의 순서에 따라 화면에 도형을 표시한다.

위의 예제를 활용하여 사용자가 정의한 매트릭스에 대한 결과를 예측해보고, 확인할 수 있는 기능을 구현하였다.

총 10개의 매트릭스를 순서대로 조합하여 사용자가 원하는 매트릭스의 효과를 화면에 표시할 수 있게 하였다. 



# reference


https://glmatrix.net/docs/module-mat4.html

https://www.w3schools.com/js/js_intro.asp

https://github.com/hwan-ajou/webgl-1.0/tree/main/T08_culling

https://git.ajou.ac.kr/hwan/webgl-tutorial/-/tree/master/student2020/better_project/201621161 - html 문법 참조

https://git.ajou.ac.kr/hwan/webgl-tutorial/-/tree/master/student2020/better_project/201520966 - html 문법 참조
