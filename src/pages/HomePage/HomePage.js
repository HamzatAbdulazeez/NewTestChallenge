import React, { useEffect } from 'react';
import "./HomePage.css";
import Header from "../../components/Slider/Header";
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories } from '../../store/categorySlice';
import ProductList from "../../components/ProductList/ProductList";
import { fetchAsyncProducts, getAllProducts, getAllProductsStatus } from '../../store/productSlice';
import Loader from "../../components/Loader/Loader";
import { STATUS } from '../../utils/status';

const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncProducts(50));
  }, []);

  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getAllProductsStatus);

  // randomizing the products in the list
  const tempProducts = [];
  if (products.length > 0) {
    for (let i in products) {
      let randomIndex = Math.floor(Math.random() * products.length);

      while (tempProducts.includes(products[randomIndex])) {
        randomIndex = Math.floor(Math.random() * products.length);
      }
      tempProducts[i] = products[randomIndex];
    }
  }

  let catProductsOne = products.filter(product => product.category === categories[0]);
  let catProductsTwo = products.filter(product => product.category === categories[1]);
  let catProductsThree = products.filter(product => product.category === categories[2]);
  let catProductsFour = products.filter(product => product.category === categories[3]);

  return (
    <main>
      <div>
        <Header />
      </div>
      <div className="ProductGoes">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 "></div>
            <div className="col-lg-6 text-center">
              <h5>
                Featured Products
              </h5>
              <h2>
                BESTSELLER PRODUCTS
              </h2>
              <p>
                Problems trying to resolve the conflict between
              </p>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </div>
      {/* Product Listed */}
      <div className='main-content bg-whitesmoke'>
        <div className='container'>
          <div className='categories py-5'>
            <div className='categories-item'>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={tempProducts} />}
            </div>
          </div>
        </div>
      </div>
      {/* Product Listed Ends */}
      {/* Features */}
      <div className="Features">
        <div className="container">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6 text-center mb-5">
              <h5>
                Featured Products
              </h5>
              <h2>
                THE BEST SERVICES
              </h2>
              <p>
                Problems trying to resolve the conflict between
              </p>
            </div>
            <div className="col-lg-3"></div>
            <div className="col-lg-4 text-center mb-4">
              <div className="calling-feature">
                <img src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1705216489/icon_cool-icon-1153_tbsmvx.png"
                  draggable="false" alt=""></img>
                <h6>
                  Easy Wins
                </h6>
                <p>
                  Get your best looking smile now!
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-center mb-4">
              <div className="calling-feature">
                <img src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1705216489/icon_cool-icon-153_u5edm3.png"
                  draggable="false" alt=""></img>
                <h6>
                  Concrete
                </h6>
                <p>
                  Defalcate is most focused in helping you discover your most beautiful smile
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-center mb-4">
              <div className="calling-feature">
                <img src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1705216489/icon_cool-icon-125_umapxi.png"
                  draggable="false" alt=""></img>
                <h6>
                  Hack Growth
                </h6>
                <p>
                  Overcame any hurdle or any other problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features Ends */}
      {/* Post */}
      <section className="Post">
        <div className="container">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6 text-center mb-5">
              <h5>
                Practice Advice
              </h5>
              <h2>
                Featured Posts
              </h2>
            </div>
            <div className="col-lg-3"></div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <img src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1705217994/unsplash_hHdHCfAifHU_1_mjvaag.png"
                  draggable="false" className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Loudest à la Madison #1
                    (L'integral)</h5>
                  <p className="card-text">We focus on ergonomics and meeting
                    you where you work. It's only a
                    keystroke away.</p>
                  <div className="span mb-3 ">
                    <i className="bi bi-clock"></i> 22 April 2024 <i className="bi bi-chat-dots"></i> 10 comments
                  </div>
                  <a href="#" className="btn">Learn More <i className="bi bi-chevron-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <img src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1705218010/fixed-height_1_glsurb.png"
                  draggable="false" className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Loudest à la Madison #1
                    (L'integral)</h5>
                  <p className="card-text">We focus on ergonomics and meeting
                    you where you work. It's only a
                    keystroke away.</p>
                  <div className="span mb-3 ">
                    <i className="bi bi-clock"></i> 22 April 2024 <i className="bi bi-chat-dots"></i> 10 comments
                  </div>
                  <a href="#" className="btn">Learn More <i className="bi bi-chevron-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <img src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1705217998/unsplash_tVEqStC2uz82_1_w2zcdb.png"
                  draggable="false" className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Loudest à la Madison #1
                    (L'integral)</h5>
                  <p className="card-text">We focus on ergonomics and meeting
                    you where you work. It's only a
                    keystroke away.</p>
                  <div className="span mb-3 ">
                    <i className="bi bi-clock"></i> 22 April 2024 <i className="bi bi-chat-dots"></i> 10 comments
                  </div>
                  <a href="#" className="btn">Learn More <i className="bi bi-chevron-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Post Ends */}
      {/* Testimonaia */}
      <section className="Testimonaia">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center">
              <h4 className="mb-4">
                What they say about us
              </h4>
              <img src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1705219438/media_circle-box_xs-circle_elpv1g.png"
                draggable="false" alt=""></img>
              <img src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1705219437/stars_ovhmqx.png"
                draggable="false" alt=""></img>
              <p>
                Slate helps you see how many more days you need to work to
                reach your financial goal.
              </p>
              <h5>
                Hamzat Abdulazeez Adeleke
              </h5>
              <p className="mb-5">
                Frontend Software Engineer
              </p>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <div className="row alldkd">
                <div className="col-sm-4">
                  <img src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1705220006/unsplash_0y8p69vwIYM_xrcjx3.png"
                    draggable="false" alt=""></img>
                </div>
                <div className="col-sm-4">
                  <img src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1705220006/unsplash_6_dx4H4yi1Y_bi1nkv.png"
                    draggable="false" alt=""></img>
                </div>
                <div className="col-sm-4">
                  <img src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1705220006/unsplash_ah7yIXWrtKs_cxchwv.png"
                    draggable="false" alt=""></img>
                </div>
                <div className="col-sm-4">
                  <img src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1705220006/unsplash_0y8p69vwIYM_xrcjx3.png"
                    draggable="false" alt=""></img>

                </div>
                <div className="col-sm-4">
                  <img src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1705220006/unsplash_6_dx4H4yi1Y_bi1nkv.png"
                    draggable="false" alt=""></img>
                </div>
                <div className="col-sm-4">
                  <img src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1705220006/unsplash_ah7yIXWrtKs_cxchwv.png"
                    draggable="false" alt=""></img>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonaia Ends */}
      {/* LastPhase */}
      <section className="LastPhase">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
            </div>
            <div className="col-lg-6 text-center">
              <h5>
                Designing Better Experience
              </h5>
              <h1>
                Problems trying to resolve
                the conflict between
              </h1>
              <p>
                Problems trying to resolve the conflict between the two major realms of ClassNameical physics:
              </p>
              <h4>
                $16.48
              </h4>
              <button>
                ADD YOUR CALL TO ACTION
              </button>
            </div>
            <div className="col-lg-3">
            </div>
          </div>
        </div>
      </section>
      {/* LastPhase Ends */}
    </main>
  )
}
export default HomePage