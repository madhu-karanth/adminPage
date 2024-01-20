import React, { useState } from "react";
import './style.css'; // Import your local CSS file
import './style1.css'; 



function Navbar(){

    return(
        <><div className="body" >
            <title>KEA | Home</title>
            <nav className="navbar navbar-expand-xl bg-white">
                <div className="d-flex align-items-center">
                    <a className="navbar-brand">
                        <img alt="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHlBXHyrLKapQ8T7eqtAqkQfnEmK9pA-Vog&usqp=CAU" className="logo" />
                    </a>
                    <span className="title">Tution App</span>
                </div>

                <div className="navbar-collapse">
                    <ul className="navbar-nav ml-auto mr-auto">
                        <li className=" nav-item active">
                            <a id="keaid1261" className="home-text nav-link" href="index.html">HOME</a>
                        </li>
                        <li className="home-text nav-item dropdown">
                            <a href="#" className="home-text nav-link dropdown-toggle" id="navbarDropdownMenuLinkpu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span id="keaid6023">FEES REFUND</span></a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkpu3">
                                <li> <a id="keaid6024" className="dropdown-item" href="http://kea.kar.nic.in/pget2021/pget_cancellation.pdf">FEES REFUND types</a></li>
                                <li> <a id="keaid6025" className="dropdown-item">FEES REFUND type1</a></li>
                                <li> <a id="keaid6026" className="dropdown-item">FEES REFUND type2</a></li>
                                <li> <a id="keaid6027" className="dropdown-item">FEES REFUND type3</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a id="keaid8" className="home-text nav-link" href="">COURSES</a>
                        </li>


                        <li className="nav-item">
                            <a id="keaid1273" className="home-text nav-link" href="">CONTACT US</a>
                        </li>



                    </ul>
                    <form method="post" action="./" id="headform">
                        <div className="dropdown">
                            <select name="ctl00$ddlLanguage" id="ddlLanguage" style={{ height: '30px' }} defaultValue="E">
                                <option value="K">ಕನ್ನಡ Kannada</option>
                                <option value="E">English</option>
                            </select>

                        </div>
                    </form>


                </div>
            </nav>
            {/* <section className="background-section">
                <div className="image-gallery">
                </div>
            </section> */}
        </div>
        <section class="about-text my-5 position-relative">
                {/* <div class="cet-text container">
                    <div class="cet-body">
                        <h2 class="text-white text-center font-weight-bolder pt-3 pb-4"><span id="ContentPlaceHolder1_keaid1275">About the Courses</span> </h2>
                        <p class="text-white text-left py-3"><span id="ContentPlaceHolder1_keaid1276">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dolores voluptatem? Non recusandae voluptatum similique, assumenda modi sapiente explicabo inventore harum porro est quaerat dignissimos. Atque quis optio recusandae, cum placeat et omnis. Porro fuga ut dicta ullam sint ex.</span> </p>
                    </div>
                </div> */}
                <div class="about-box-out position-absolute w-100">
                    <div class="container">
                        <div class="row py-3">
                            <div class="col-md-4">
                                <div class="card h-100">
                                    <div class="card-body pt-5">
                                        <div class="box-out bg-white p-4 shadow mb-2 h-100">
                                            <div class="icon-group text-center py-3">
                                                <i class="icon-pic font-weight-bolder fas fa-arrow-down fa-2x"></i>
                                            </div>
                                            <p class="font-text font-weight-bold text-center"> <span id="ContentPlaceHolder1_keaid1277">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos reprehenderit facere, itaque molestias, corrupti dignissimos tempora inventore consequatur laborum sequi voluptas minus ipsa illum adipisci officiis assumenda. Eveniet, quod eum iste alias nulla culpa.</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card h-100">
                                    <div class="card-body pt-5">
                                        <div class="box-out bg-white p-4 shadow mb-2 h-100">
                                            <div class="icon-group text-center py-3">
                                                <i class="icon-pic font-weight-bolder fas fa-arrow-down fa-2x "></i>
                                            </div>
                                            <p class="font-text font-weight-bold text-center"><span id="ContentPlaceHolder1_keaid1278">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quas dicta voluptatum? Voluptatum sapiente adipisci tempora doloremque neque sed corrupti. Deleniti eveniet nihil deserunt totam sed asperiores blanditiis adipisci fugit distinctio eos?</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 ">
                                <div class="card h-100">
                                    <div class="card-body pt-5">
                                        <div class="box-out bg-white p-4 shadow mb-2 h-100">
                                            <div class="icon-group text-center py-3">
                                                <i class="icon-pic font-weight-bolder fas fa-arrow-down fa-2x "></i>
                                            </div>
                                            <p class="font-text font-weight-bold text-center"><span id="ContentPlaceHolder1_keaid1279">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, asperiores magni. Earum commodi distinctio ratione sed dolor incidunt ducimus enim, eum minima repellendus mollitia quo? Soluta iure totam, voluptates quo error voluptatibus reprehenderit asperiores fugit.</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

            <div classname="cet-text container">
                    <div class="cet-body">
                        <h2 class="text-white text-center font-weight-bolder pt-3 pb-4"><span id="ContentPlaceHolder1_keaid1275">About the Courses</span> </h2>
                        <p class="text-white text-left py-3"><span id="ContentPlaceHolder1_keaid1276">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dolores voluptatem? Non recusandae voluptatum similique, assumenda modi sapiente explicabo inventore harum porro est quaerat dignissimos. Atque quis optio recusandae, cum placeat et omnis. Porro fuga ut dicta ullam sint ex.</span> </p>
                    </div>
                </div>
                        </div>
                    </div>
                </div>


            </section></>

    )
}

export default Navbar;