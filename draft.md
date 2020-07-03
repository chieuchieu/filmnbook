<!DOCTYPE html>
<html lang="vi"> 
    <head>
        <meta charset="utf-8"> 
        <title>Film n Book</title>
        
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        
        <link rel="stylesheet" type="text/css" href="style.css">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,300&display=swap" rel="stylesheet">
        
    </head>
    <body>
        <header>
           <!-- <h1 style="color:purple;">Lương Linh Hương</h1> -->
           <nav class="navbar nav-expand-lg navbar-light bg-light">
               <div class></div>
               

           </nav>
           <!-- <nav> 
               <ul class="primary-nav"> 
                   <li class="primary-link"> <a href="Home.html">Home</a></li>
                   <li class="primary-link"> <a href="Phim.html">Phim</a></li>
                   <li class="primary-link"> <a href="Sach.html">Sách</a></li>
               </ul>
               <ul class="ulti-class"> 
                   <li>
                       <label>
                    <input type="Text" placeholder="Tìm kiếm" style="height:40px ; width: 80%;">
                       </label>
                    </li> 
               </ul>
            </nav> -->
        </header>
    <div class=background>
        <main>
            <article class="Review"> 
                <section class="Review-movies"> 
                    <h2>REVIEW PHIM</h2>
                    <div class=flexbox>
                        <div>
                           <a href="TEOTFW.HTML"><img src="./img/the end.jpg" alt="the end of the fxxcking world 1 image" style="width: 300px; height: 400px;"></a>
                        </div>
                        <div>
                           <a href="TEOTFW2.html"><img src="./img/the end2.jpg" alt="the end of the fxxcking world 2 image" style="width: 300px; height: 400px;"></a>
                        </div>
                        <div>
                           <a href="se.html"><img src="./img/se.jpg" alt="sex education 1 image" style="width: 300px; height: 400px;"></a>
                        </div>
                    </div>
                    <div class="Button">
                        <a href="reviewmovies.html">Tìm hiểu thêm</a>
                    </div>
                </section>
                <section class="Review-books"> 
                    <h2>REVIEW SÁCH</h2>
                    <div class=flexbox>
                        <div>
                          <a href="NEQVCOTDD.html"><img src="./img/noi_em_quay_ve_co_toi_dung_doi.jpg" alt="Nơi em quay về có tôi đứng đợi image" style="width: 300px; height: 400px;"></a>
                        </div>
                        <div>
                          <a href="EM SẼ ĐẾN.html"><img src="./img/em sẽ đến.jpg" alt="Em sẽ đến cùng cơn mưa image" style="width: 300px; height: 400px;" ></a>
                        </div>
                        <div>
                          <a href="TVNTETG.html"><img src="./img/tôi vẫn nghe tiếng em thầm gọi.jpg" alt="Tôi vẫn nghe tiếng em thầm gọi image" style="width: 300px; height: 400px;"></a>
                        </div>
                    </div>
                    <div class="Button">
                        <a href="reviewbooks.html.html">Tìm hiểu thêm</a>
                    </div>
                </section>
            </article> 
            <article>
                <section class="Form"> 
                    <form style='padding-bottom: 20px;'>
                        <h2 style="color: crimson;">WHAT DO YOU THINK</h2>
                          <h3>Bình luận</h3>
                          <label>
                            <input type="text" style="width: 50%; height: 40px">
                          </label>
                          <h3>Tên</h3>
                        <div class="flexbox2">
                          <label>
                            <input type="Text" style="width: 50%; height: 40px;">
                          </label>
                          <button class="feedback">Phản hồi</button>
                        </div>
                    </form>
                </section>
            </article>       
        </main>
    </div>
    
        <footer>
               <h2 style="color: orangered">Lối nhỏ</h2>
            <div class="lastest-post">
               <h2 style="color: orangered;">Mới nhất</h2>
            </div>
            <div class="welcome">
               <h2 style="color: orangered">Vài lời</h2>
            </div>
​
            <div>
                <ul>
                  <li><a href="trang chu.html">Home</a></li>
                  <li><a href="https://www.facebook.com/hlinh0102/">Liên hệ</a></li>
                </ul>
            </div>
​
            <div class="Latest-review">
                <a href="itaewon.html"> <img src="itaewon.jpg" alt="Bài viết mới nhất" style="width: 300px; height: 400px;"></a>
            </div>
            <div class="hello">
                <p>Welcome mọi người đến với chuyên mục review của Linh Hương =))</p>
            </div>
        </footer>
    </body>
</html>


html {
    font-family: 'Times New Roman', Times, serif;
    font-size: 22px;
}

header {
    text-align: right;
    background-color: rgba(106, 124, 170, 1);
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.primary-link {
    display: inline; 
    text-transform: uppercase;
}

.primary-link {
    background-color: rgba(207, 148, 148, 1);
    padding: 10px;
    margin: 10px;
}

.ulti-class {
    list-style-type: none;
}

.background {
    position: relative;
    z-index: 1;
}
.background:after {
    content: " ";
    background: url(blending\ colors.jpg);
    position: absolute;
    z-index: -1;
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%;  
    opacity: 0.5; 
    background-repeat: no-repeat;
    background-size: cover;
}

.Review {
    text-align: center;
}

.Form {
    text-align: center;
}

.flexbox2 {
    display: flex;
    flex-direction: column;
}

footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    background-color: lightgoldenrodyellow;
}

.latest-review {
    align-self: center;
}


.flexbox {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}


.feedback {
    margin-top: 50px;
    width: 10%;
    align-self: center;
    font-size: 100%;
}

.welcome {
    text-align: center;
}

.hello {
    padding-left: 60px;
}

.lastest-post {
    padding-left: 60px;
}


<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css2?family=Charmonman:wght@700&family=Montserrat:ital@0;1&display=swap" rel="stylesheet">
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"  -->
    <!-- crossorigin="anonymous"> -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">

    <title>Film n Book</title>
    <link rel="icon" href="https://thuthuattienich.com/wp-content/uploads/2017/06/anh-dai-dien-facebook-cho-meo-de-thuong-14.jpg" type="image/icon type">
</head>


<nav class="navbar navbar-dark navbar-expand-md py-0 fixed-top">
        <a class="navbar-brand" href="#">Film n Book</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="#" class="nav-link">HOME</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">PHIM</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">SÁCH</a>
                </li>
            </ul>
        </div>
    </nav>