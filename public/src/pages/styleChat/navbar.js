// Import your local CSS files
import React from "react";
import './style.css';
import './style1.css';

function Navbar() {
    return (
        <>
            <div className="body">
                <div id="navbar">
                    <title>KEA | Home</title>
                    <nav className="navbar navbar-expand-xl bg-white">
                        <div className="d-flex align-items-center">
                            <a className="navbar-brand">
                                <img alt="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHlBXHyrLKapQ8T7eqtAqkQfnEmK9pA-Vog&usqp=CAU" className="logo" />
                            </a>
                            <span className="title">Tuition App</span>
                        </div>

                        <div className="navbar-collapse">
                            <ul className="navbar-nav ml-auto mr-auto">
                                <li className="nav-item active">
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
                </div>
            </div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<section className="Latest-text">
    <div className="container">
        <div className="row">
            <div className="late-text col-md-6">
                <div className="card h-100">
                    <div className="card-body pt-6">
                        <div className="icon-text text-center position-absolute">
                            <div className="icon-box">
                                <div className="icon-box-inner">
                                    <i className="icon-body fas fa-bell fa-5x text-white"></i>
                                </div>
                            </div>
                        </div>
                        <div className="card-text text-center mt-5">
                            <h2 className="announ-text py-2 font-weight-bolder">
                                <span id="ContentPlaceHolder1_keaid1274">Latest Announcements</span>
                            </h2>
                        </div>
                        <div style={{ height: '300px' }} className="overflow-auto">
                            <table cellSpacing="0" id="ContentPlaceHolder1_Gridlatestannoc" style={{ borderCollapse: 'collapse' }}>
                                <tr>
                                    <td>
                                        <a id="ContentPlaceHolder1_Gridlatestannoc_hypertext_0" className="icon-color" href="">
                                            Notifcation/ Announcement Number 1
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a id="ContentPlaceHolder1_Gridlatestannoc_hypertext_1" className="icon-color" href="">
                                            Notifcation/ Announcement Number 2
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a id="ContentPlaceHolder1_Gridlatestannoc_hypertext_106" className="icon-color">
                                            Notifcation/ Announcement Number 3
                                        </a>
                                        <span className="pr-3"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a id="ContentPlaceHolder1_Gridlatestannoc_hypertext_107" className="icon-color" href="">
                                            Notifcation/ Announcement Number 4
                                        </a>
                                        <span className="pr-3"></span>
                                    </td>
                                </tr>
                                {/* Add more rows as needed */}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="late-text col-md-6">
                <div className="card h-100">
                    <div className="card-body pt-5">
                        <div className="icon-text text-center position-absolute">
                            <div className="icon-box">
                                <div className="icon-box-inner">
                                    <i className="icon-body fas fa-book fa-5x text-white"></i>
                                </div>
                            </div>
                        </div>
                        <div className="card-text text-center mt-5">
                            <h2 className="announ-text py-2 font-weight-bolder">
                                <span id="ContentPlaceHolder1_keaid2103">About Tuition</span>
                            </h2>
                        </div>
                        <p>
                            <span id="ContentPlaceHolder1_keaid2104">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aut dolores animi, dicta quo repellendus voluptate quisquam.
                            </span>
                        </p>
                        <p>
                            <a id="ContentPlaceHolder1_keaid2105" href="" style={{ color: 'black' }}>
                                Lorem ipsum dolor sit amet.
                            </a>
                        </p>
                        <p className="icon-color">
                            <a id="ContentPlaceHolder1_keaid2106" href="" style={{ color: 'black' }}>
                                Lorem ipsum dolor sit amet consectetur.
                            </a>
                        </p>
                        <p className="icon-color">
                            <a id="ContentPlaceHolder1_keaid2107" href="" style={{ color: 'black' }}>
                                Lorem ipsum dolor sit.
                            </a>
                        </p>
                        <p className="icon-color">
                            <a id="ContentPlaceHolder1_keaid2108" href="" style={{ color: 'black' }}>
                                Lorem ipsum dolor sit amet.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>;
<section className="about-text my-5 position-relative">
                <div className="cet-text container">
                    <div className="cet-body">
                        <h2 className="text-white text-center font-weight-bolder pt-3 pb-4"><span id="ContentPlaceHolder1_keaid1275">About the Courses</span> </h2>
                        <p className="text-white text-left py-3"><span id="ContentPlaceHolder1_keaid1276">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dolores voluptatem? Non recusandae voluptatum similique, assumenda modi sapiente explicabo inventore harum porro est quaerat dignissimos. Atque quis optio recusandae, cum placeat et omnis. Porro fuga ut dicta ullam sint ex.</span> </p>
                    </div>
                </div>
                <div className="about-box-out position-absolute w-100">
                    <div className="container">
                        <div className="row py-3">
                            <div className="col-md-4">
                                <div className="card h-100">
                                    <div className="card-body pt-5">
                                        <div className="box-out bg-white p-4 shadow mb-2 h-100">
                                            <div className="icon-group text-center py-3">
                                                <i className="icon-pic font-weight-bolder fas fa-arrow-down fa-2x"></i>
                                            </div>
                                            <p className="font-text font-weight-bold text-center"> <span id="ContentPlaceHolder1_keaid1277">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos reprehenderit facere, itaque molestias, corrupti dignissimos tempora inventore consequatur laborum sequi voluptas minus ipsa illum adipisci officiis assumenda. Eveniet, quod eum iste alias nulla culpa.</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card h-100">
                                    <div className="card-body pt-5">
                                        <div className="box-out bg-white p-4 shadow mb-2 h-100">
                                            <div className="icon-group text-center py-3">
                                                <i className="icon-pic font-weight-bolder fas fa-arrow-down fa-2x "></i>
                                            </div>
                                            <p className="font-text font-weight-bold text-center"><span id="ContentPlaceHolder1_keaid1278">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quas dicta voluptatum? Voluptatum sapiente adipisci tempora doloremque neque sed corrupti. Deleniti eveniet nihil deserunt totam sed asperiores blanditiis adipisci fugit distinctio eos?</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="card h-100">
                                    <div className="card-body pt-5">
                                        <div className="box-out bg-white p-4 shadow mb-2 h-100">
                                            <div className="icon-group text-center py-3">
                                                <i className="icon-pic font-weight-bolder fas fa-arrow-down fa-2x "></i>
                                            </div>
                                            <p className="font-text font-weight-bold text-center"><span id="ContentPlaceHolder1_keaid1279">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, asperiores magni. Earum commodi distinctio ratione sed dolor incidunt ducimus enim, eum minima repellendus mollitia quo? Soluta iure totam, voluptates quo error voluptatibus reprehenderit asperiores fugit.</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</section>
        </>
    );
}

export default Navbar;
