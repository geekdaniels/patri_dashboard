import * as React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

interface QuickActionProps {}

const QuickAction: React.FunctionComponent<QuickActionProps> = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="deposit"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="deposit" title="Deposit">
          <div className="p-4">
            <p className="text-center font-weight-bold title">
              Select a method to Fund <br /> Naira wallet below
            </p>

            <Link to="/">
              <div className="quicklink__special my-4">
                <div className="quicklink p-4 my-3">
                  <div className="d-flex align-items-center">
                    <div>
                      <span>
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.33398 33.3333H36.6673V36.6666H3.33398V33.3333ZM6.66732 20H10.0007V31.6666H6.66732V20ZM15.0007 20H18.334V31.6666H15.0007V20ZM21.6673 20H25.0007V31.6666H21.6673V20ZM30.0007 20H33.334V31.6666H30.0007V20ZM3.33398 11.6666L20.0007 3.33331L36.6673 11.6666V18.3333H3.33398V11.6666ZM20.0007 13.3333C20.4427 13.3333 20.8666 13.1577 21.1792 12.8452C21.4917 12.5326 21.6673 12.1087 21.6673 11.6666C21.6673 11.2246 21.4917 10.8007 21.1792 10.4881C20.8666 10.1756 20.4427 9.99998 20.0007 9.99998C19.5586 9.99998 19.1347 10.1756 18.8221 10.4881C18.5096 10.8007 18.334 11.2246 18.334 11.6666C18.334 12.1087 18.5096 12.5326 18.8221 12.8452C19.1347 13.1577 19.5586 13.3333 20.0007 13.3333Z"
                            fill="#006156"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="col">
                      <p className="mb-0">Bank Deposit</p>
                    </div>
                    <div>
                      <span>
                        <svg
                          width="10"
                          height="16"
                          viewBox="0 0 10 16"
                          className="quicklink__icon"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.84201 0.547764L9.58471 7.03989C10.1384 7.50459 10.1384 8.53834 9.58471 9.00305L1.84201 15.4952C1.28786 15.9599 0.512265 16.3491 0.0668052 15.4952C-0.296709 13.9979 1.09188 12.1947 1.09188 7.78308C1.09188 3.92444 -0.31896 1.28623 0.0668052 0.547764C0.298307 -0.40838 1.28786 0.0835337 1.84201 0.547764Z"
                            fill="#C8E2DE"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="abstract_layer_1"></div>
                <div className="abstract_layer_0"></div>
              </div>
            </Link>

            <Link to="/">
              <div className="quicklink__special my-4">
                <div className="quicklink p-4 my-3">
                  <div className="d-flex align-items-center">
                    <div>
                      <span>
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M31.24 17.905L31.2509 17.5002L30.9776 7.33704C30.9738 7.19751 30.9641 7.05941 30.9487 6.92299L30.9357 6.79915C30.7985 5.43256 30.0407 4.24085 28.9374 3.52357C28.8521 3.46671 28.7648 3.41264 28.6755 3.36149C28.5909 3.31146 28.5045 3.26403 28.4164 3.21928C27.8728 2.93279 27.2662 2.74709 26.6206 2.68766C22.2165 2.28226 17.7844 2.28226 13.3803 2.68766C12.7337 2.74718 12.1262 2.93338 11.5819 3.22065C11.4938 3.26546 11.4074 3.31297 11.3228 3.36305C11.2363 3.41272 11.1516 3.46513 11.0688 3.52017C9.95962 4.23905 9.19849 5.43698 9.06414 6.81049L9.05921 6.85772L9.05299 6.91632C9.03712 7.05491 9.02716 7.19523 9.02334 7.33703L8.75 17.5002L8.76094 17.9068L8.7501 18.3336L8.76044 18.7407L8.75018 19.1669L8.75993 19.5722L8.75015 20.0002L9.02078 31.8386C9.085 34.6474 11.2213 36.9735 14.0145 37.276C17.9935 37.7069 22.0074 37.7069 25.9865 37.276C28.7797 36.9735 30.9159 34.6474 30.9802 31.8386L31.2508 20.0002L31.2411 19.5751L31.2509 19.1669L31.2406 18.739L31.2509 18.3336L31.24 17.905ZM28.5072 14.8629L28.4576 7.2014C28.457 7.17696 28.456 7.15263 28.4545 7.12841C28.3555 6.45762 27.9668 5.8786 27.4156 5.52707C27.207 5.41835 26.9755 5.34624 26.7293 5.31958C22.2565 4.83519 17.7445 4.83519 13.2717 5.31958C13.0253 5.34625 12.7938 5.4184 12.5851 5.5272C12.0341 5.87864 11.6456 6.45739 11.5465 7.12785C11.545 7.15225 11.544 7.17677 11.5434 7.20139L11.4937 14.8629C11.5414 16.6352 12.9066 18.0919 14.672 18.2544C18.2168 18.5807 21.7841 18.5808 25.3289 18.2544C27.0943 18.0919 28.4595 16.6352 28.5072 14.8629ZM12.5005 20C12.0403 20 11.6672 20.3731 11.6672 20.8333C11.6672 21.2936 12.0403 21.6666 12.5005 21.6666H14.1672C14.6274 21.6666 15.0005 21.2936 15.0005 20.8333C15.0005 20.3731 14.6274 20 14.1672 20H12.5005ZM11.6672 25.8333C11.6672 25.3731 12.0403 25 12.5005 25H14.1672C14.6274 25 15.0005 25.3731 15.0005 25.8333C15.0005 26.2936 14.6274 26.6666 14.1672 26.6666H12.5005C12.0403 26.6666 11.6672 26.2936 11.6672 25.8333ZM12.5005 30C12.0403 30 11.6672 30.3731 11.6672 30.8333C11.6672 31.2936 12.0403 31.6666 12.5005 31.6666H14.1672C14.6274 31.6666 15.0005 31.2936 15.0005 30.8333C15.0005 30.3731 14.6274 30 14.1672 30H12.5005ZM18.3338 20.8333C18.3338 20.3731 18.7069 20 19.1672 20H20.8338C21.2941 20 21.6672 20.3731 21.6672 20.8333C21.6672 21.2936 21.2941 21.6666 20.8338 21.6666H19.1672C18.7069 21.6666 18.3338 21.2936 18.3338 20.8333ZM19.1672 25C18.7069 25 18.3338 25.3731 18.3338 25.8333C18.3338 26.2936 18.7069 26.6666 19.1672 26.6666H20.8338C21.2941 26.6666 21.6672 26.2936 21.6672 25.8333C21.6672 25.3731 21.2941 25 20.8338 25H19.1672ZM18.3338 30.8333C18.3338 30.3731 18.7069 30 19.1672 30H20.8338C21.2941 30 21.6672 30.3731 21.6672 30.8333C21.6672 31.2936 21.2941 31.6666 20.8338 31.6666H19.1672C18.7069 31.6666 18.3338 31.2936 18.3338 30.8333ZM25.8338 20C25.3736 20 25.0005 20.3731 25.0005 20.8333C25.0005 21.2936 25.3736 21.6666 25.8338 21.6666H27.5005C27.9607 21.6666 28.3338 21.2936 28.3338 20.8333C28.3338 20.3731 27.9607 20 27.5005 20H25.8338ZM25.0005 25.8333C25.0005 25.3731 25.3736 25 25.8338 25H27.5005C27.9607 25 28.3338 25.3731 28.3338 25.8333C28.3338 26.2936 27.9607 26.6666 27.5005 26.6666H25.8338C25.3736 26.6666 25.0005 26.2936 25.0005 25.8333ZM25.8338 30C25.3736 30 25.0005 30.3731 25.0005 30.8333C25.0005 31.2936 25.3736 31.6666 25.8338 31.6666H27.5005C27.9607 31.6666 28.3338 31.2936 28.3338 30.8333C28.3338 30.3731 27.9607 30 27.5005 30H25.8338Z"
                            fill="#006156"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="col">
                      <p className="mb-0">USSD Deposit</p>
                    </div>
                    <div>
                      <span>
                        <svg
                          width="10"
                          height="16"
                          viewBox="0 0 10 16"
                          className="quicklink__icon"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.84201 0.547764L9.58471 7.03989C10.1384 7.50459 10.1384 8.53834 9.58471 9.00305L1.84201 15.4952C1.28786 15.9599 0.512265 16.3491 0.0668052 15.4952C-0.296709 13.9979 1.09188 12.1947 1.09188 7.78308C1.09188 3.92444 -0.31896 1.28623 0.0668052 0.547764C0.298307 -0.40838 1.28786 0.0835337 1.84201 0.547764Z"
                            fill="#C8E2DE"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="abstract_layer_1"></div>
                <div className="abstract_layer_0"></div>
              </div>
            </Link>

            <Link to="/">
              <div className="quicklink__special my-4">
                <div className="quicklink p-4 my-3">
                  <div className="d-flex align-items-center">
                    <div>
                      <span>
                        <svg
                          width="43"
                          height="43"
                          viewBox="0 0 43 43"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.0212 8.3466C18.6633 7.85615 24.3372 7.85615 29.9793 8.3466L32.6851 8.58181C35.2742 8.80688 37.3716 10.7771 37.7581 13.347C38.5709 18.752 38.5709 24.2481 37.7581 29.653C37.687 30.1258 37.558 30.5783 37.3786 31.0034C37.2597 31.2853 36.8928 31.3281 36.6871 31.1017L28.7653 22.3878C28.4074 21.9941 27.8509 21.8486 27.3461 22.0169L22.8117 23.5284L16.2337 16.1281C15.9878 15.8515 15.6388 15.6886 15.2689 15.6777C14.8989 15.6668 14.5409 15.809 14.2792 16.0707L5.47474 24.8752C5.20376 25.1461 4.74162 24.9737 4.72001 24.591C4.50818 20.8395 4.6823 17.0716 5.24239 13.347C5.62885 10.7771 7.7263 8.80688 10.3154 8.58181L13.0212 8.3466ZM25.0836 16.125C25.0836 14.6408 26.2868 13.4375 27.7711 13.4375C29.2553 13.4375 30.4586 14.6408 30.4586 16.125C30.4586 17.6093 29.2553 18.8125 27.7711 18.8125C26.2868 18.8125 25.0836 17.6093 25.0836 16.125Z"
                            fill="#EFC9C8"
                          />
                          <path
                            d="M5.30594 28.8446C5.20677 28.9438 5.15966 29.0837 5.17941 29.2226C5.19983 29.3661 5.22083 29.5096 5.24239 29.653C5.62885 32.223 7.7263 34.1932 10.3154 34.4182L13.0212 34.6534C18.6633 35.1439 24.3372 35.1439 29.9793 34.6534L32.6851 34.4182C33.4459 34.3521 34.1642 34.1353 34.8092 33.7968C35.0536 33.6686 35.0948 33.3454 34.9091 33.1412L27.5618 25.0592C27.4425 24.928 27.257 24.8795 27.0888 24.9356L22.821 26.3582C22.311 26.5281 21.7488 26.3779 21.3917 25.9761L15.4874 19.3338C15.3162 19.1412 15.0182 19.1324 14.8359 19.3146L5.30594 28.8446Z"
                            fill="#EFC9C8"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="col">
                      <p className="mb-0">Card Deposit</p>
                    </div>
                    <div>
                      <span>
                        <svg
                          width="10"
                          height="16"
                          viewBox="0 0 10 16"
                          className="quicklink__icon"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.84201 0.547764L9.58471 7.03989C10.1384 7.50459 10.1384 8.53834 9.58471 9.00305L1.84201 15.4952C1.28786 15.9599 0.512265 16.3491 0.0668052 15.4952C-0.296709 13.9979 1.09188 12.1947 1.09188 7.78308C1.09188 3.92444 -0.31896 1.28623 0.0668052 0.547764C0.298307 -0.40838 1.28786 0.0835337 1.84201 0.547764Z"
                            fill="#C8E2DE"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="abstract_layer_1"></div>
                <div className="abstract_layer_0"></div>
              </div>
            </Link>

            <Link to="/">
              <div className="quicklink quicklink--pastel p-4">
                <div className="d-flex align-items-center">
                  <div>
                    <span>
                      <svg
                        width="41"
                        className="mr-3"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="41" height="41" rx="10" fill="white" />
                        <path
                          d="M30.1661 27.1234C30.1605 27.1877 30.1531 27.2519 30.1419 27.3156C30.163 27.4516 30.1736 27.5889 30.1736 27.728C30.1736 30.5476 25.8236 32.8332 20.4576 32.8332C15.0922 32.8332 10.7422 30.5476 10.7422 27.728C10.7422 27.5889 10.7527 27.4516 10.7739 27.3156C10.7627 27.2519 10.7552 27.1877 10.7496 27.1234C10.7447 27.061 10.7422 26.9986 10.7422 26.9362V21.8979L14.2823 23.7872L19.1248 26.3722C19.9688 26.8227 20.9799 26.8239 21.8252 26.3759L26.6757 23.8059L30.1736 21.9528V26.9362C30.1736 26.9986 30.1711 27.061 30.1661 27.1234Z"
                          fill="#006156"
                        />
                        <path
                          d="M10.0285 26.3267C9.89376 26.6736 9.71489 27.0037 9.54658 27.3369C9.52733 27.3756 9.30312 27.9034 9.20748 28.1225C9.09879 28.3708 8.97395 28.6129 8.84788 28.8531C8.82117 28.9043 8.75409 28.9679 8.70751 28.966C8.64603 28.9642 8.55846 28.9174 8.53175 28.8643C8.1175 28.0357 7.70946 27.204 7.30328 26.371C7.13932 26.0366 7.47221 25.5056 7.46351 25.4969C7.59021 25.2105 7.70325 24.9166 7.84796 24.6396C7.97465 24.3975 8.04111 24.1573 8.03924 23.8796C8.02993 22.0646 8.03303 18.3777 8.03366 16.5626C8.03366 16.4821 8.04235 16.4022 8.04918 16.2812C8.44046 16.4734 8.80689 16.6437 9.15903 16.8377C9.21679 16.8696 9.23977 17.0075 9.23977 17.0967C9.24412 18.7539 9.23667 22.2829 9.25095 23.9395C9.25219 24.161 9.32734 24.3937 9.4174 24.5997C9.60434 25.0252 9.84034 25.4295 10.0236 25.8563C10.0807 25.9911 10.0819 26.1895 10.0285 26.3267Z"
                          fill="#006156"
                        />
                        <path
                          d="M34.4332 17.9427L21.5889 24.7481C20.8945 25.1162 20.0642 25.115 19.3711 24.745L6.56462 17.9096C5.88641 17.5477 5.89759 16.5681 6.58387 16.2218L19.3984 9.75339C20.0679 9.41583 20.8567 9.41521 21.5262 9.75276L34.4165 16.2524C35.1034 16.6 35.1133 17.582 34.4332 17.9427Z"
                          fill="#006156"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="col">
                    <p className="mb-0">Learn More about Funding your wallet</p>
                  </div>
                  <div>
                    <span>
                      <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        className="quicklink__icon"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.84201 0.547764L9.58471 7.03989C10.1384 7.50459 10.1384 8.53834 9.58471 9.00305L1.84201 15.4952C1.28786 15.9599 0.512265 16.3491 0.0668052 15.4952C-0.296709 13.9979 1.09188 12.1947 1.09188 7.78308C1.09188 3.92444 -0.31896 1.28623 0.0668052 0.547764C0.298307 -0.40838 1.28786 0.0835337 1.84201 0.547764Z"
                          fill="#C8E2DE"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </Tab>

        <Tab eventKey="transfer" title="Transfer">
          <div className="p-4 h-100">
            <p>Select a method to Fund Naira wallet below</p>
          </div>
        </Tab>
      </Tabs>
    </>
  );
};

export default QuickAction;
