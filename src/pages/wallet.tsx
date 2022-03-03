import * as React from "react";
import { Link } from "react-router-dom";
import OverviewChart from "../components/overview-chart";
import Layout from "../components/layout";
import QuickAction from "../components/quick-action";
import Avatar from "../images/avatar.png";

interface WalletProps {}

const Wallet: React.FunctionComponent<WalletProps> = () => {
  return (
    <>
      <Layout>
        <div className="container-fluid px-lg-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="overview border-left h-100 p-4">
                <h1 className="current_page mb-4">Wallet</h1>

                <div className="d-flex align-items-center my-4">
                  <div>
                    <div className="currency currency--primary">
                      <span>
                        <svg
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.11719 15.26H4.67614V3.56422L11.4859 15.26H14.4044V0H11.8454V11.0342L5.47978 0H2.11719V15.26Z"
                            fill="white"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 6.36816C0 5.7788 0.473422 5.30103 1.05742 5.30103H15.1563C15.7403 5.30103 16.2137 5.7788 16.2137 6.36816C16.2137 6.95752 15.7403 7.43529 15.1563 7.43529H1.05742C0.473422 7.43529 0 6.95752 0 6.36816Z"
                            fill="white"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 9.92516C0 9.3358 0.473422 8.85803 1.05742 8.85803H15.1563C15.7403 8.85803 16.2137 9.3358 16.2137 9.92516C16.2137 10.5145 15.7403 10.9923 15.1563 10.9923H1.05742C0.473422 10.9923 0 10.5145 0 9.92516Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="col">
                    <p className="wallet__name mb-0">
                      Naira Wallet{" "}
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.9996 10.7312L4.234 6.96558L5.3652 5.83438L7.9996 8.46878L10.634 5.83438L11.7652 6.96558L7.9996 10.7312ZM7.99961 1.59998C4.46521 1.59998 1.59961 4.46478 1.59961 7.99998C1.59961 11.5344 4.46521 14.4 7.99961 14.4C11.534 14.4 14.3996 11.5344 14.3996 7.99998C14.3996 4.46478 11.534 1.59998 7.99961 1.59998Z"
                            fill="#C0CCDA"
                          />
                          <mask
                            id="mask0_0_187"
                            maskUnits="userSpaceOnUse"
                            x="1"
                            y="1"
                            width="14"
                            height="14"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.9996 10.7312L4.234 6.96558L5.3652 5.83438L7.9996 8.46878L10.634 5.83438L11.7652 6.96558L7.9996 10.7312ZM7.99961 1.59998C4.46521 1.59998 1.59961 4.46478 1.59961 7.99998C1.59961 11.5344 4.46521 14.4 7.99961 14.4C11.534 14.4 14.3996 11.5344 14.3996 7.99998C14.3996 4.46478 11.534 1.59998 7.99961 1.59998Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask0_0_187)"></g>
                        </svg>
                      </span>{" "}
                    </p>
                    <p className="wallet__desc mb-0">
                      Lorem Ipsum dolor sit amet
                    </p>
                  </div>
                </div>

                <div className="data_overview p-5 ">
                  <div className="row align-items-center">
                    <div className="col-lg-5 border-right">
                      <p className="title mb-2">Total Balance</p>
                      <h4 className="balance mb-0">₦89,153,001.73</h4>
                      <p className="book_balance  mb-0">
                        Book Balance: ₦450,000.093
                      </p>
                    </div>

                    <div className="col-lg-7">
                      <div className="d-flex mb-2">
                        <button className="btn px-3 mr-2">Today</button>
                        <button className="btn px-3 mx-2">Week</button>
                        <button className="btn px-3 mx-2">Month</button>
                        <button className="active btn px-3 mx-2">Year</button>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-lg-9">
                          <OverviewChart />
                        </div>

                        <div className="col-lg-3 text-right">
                          <div className="chart_info">
                            <p className="title  mb-1">Outflow</p>
                            <p className="value">₦20,000</p>
                          </div>

                          <div className="chart_info">
                            <p className="title  mb-1">Outflow</p>
                            <p className="value">₦20,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row my-3">
                  <div className="col-lg-6 my-3">
                    <Link to="/">
                      <div className="quicklink p-4 h-100">
                        <div className="d-flex align-items-center">
                          <div className="col">
                            <p className="mb-0">
                              <span>
                                <svg
                                  width="34"
                                  height="34"
                                  viewBox="0 0 34 34"
                                  className="mr-3"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_0_985)">
                                    <path
                                      d="M6.7828 33.5612C2.51685 32.8635 0.127834 30.8338 0.334673 26.886C0.865549 26.2079 1.37843 25.5388 1.90706 24.881C3.05316 23.4568 4.29713 22.1288 5.73342 20.9944C6.80754 20.1453 7.96377 19.4433 9.27634 19.029C11.329 18.3802 13.3007 18.6384 15.2206 19.5486C15.3735 19.6211 15.5569 19.6652 15.7256 19.6652C17.4476 19.6731 19.1707 19.6664 20.8926 19.6777C21.0434 19.6788 21.2233 19.7456 21.338 19.843C21.5933 20.0615 21.8363 20.3026 22.0466 20.5641C22.8036 21.5027 22.8373 22.4627 22.2018 23.4862C21.8532 24.0466 21.455 24.3568 20.7194 24.324C19.1403 24.2527 17.5567 24.3025 15.9753 24.3025C15.8729 24.3025 15.7706 24.3025 15.6345 24.3025C15.7087 24.6919 15.9179 24.9738 16.1856 25.2071C16.6175 25.5841 17.0854 25.8218 17.7029 25.8014C19.0121 25.7584 20.3235 25.7935 21.6338 25.7811C21.7868 25.7799 21.969 25.7199 22.0871 25.6237C23.8428 24.1847 25.5783 22.7197 27.3441 21.2932C28.3159 20.5087 29.3495 19.8033 30.5519 19.4105C31.635 19.0561 32.6383 19.1716 33.4897 20.0083C33.7304 20.2449 33.7281 20.529 33.4785 20.7543C30.0323 23.8711 26.5861 26.9879 23.1342 30.0979C23.0375 30.1851 22.8688 30.2293 22.7338 30.2293C18.4565 30.2361 14.1791 30.2372 9.9017 30.2281C9.63851 30.2281 9.47767 30.313 9.31571 30.5123C8.54076 31.469 7.7512 32.412 6.96613 33.3596C6.91102 33.4242 6.85253 33.4842 6.7828 33.5612Z"
                                      fill="#006156"
                                    />
                                    <path
                                      d="M17 7.83091C17.0021 3.69267 20.3647 0.331713 24.5019 0.333314C28.639 0.334914 31.9995 3.69694 32 7.83518C32.0005 11.9692 28.6305 15.337 24.4976 15.3333C20.3583 15.3296 16.9979 11.9676 17 7.83091ZM26.8711 5.18376C26.4715 4.83219 26.0895 4.68228 24.9084 4.40274C24.8993 4.25123 24.8902 4.09545 24.8806 3.93327C24.672 3.93327 24.4843 3.93327 24.2895 3.93327C24.281 4.08478 24.2741 4.21548 24.2666 4.34619C24.2533 4.32538 24.2394 4.30511 24.2261 4.2843C23.7987 4.46249 23.3367 4.58572 22.9516 4.83006C21.9379 5.47344 21.9337 7.39345 23.2114 7.87839C23.5091 7.99149 23.8147 8.08378 24.1114 8.19848C24.177 8.22409 24.2687 8.30145 24.2703 8.35693C24.2821 8.90535 24.2773 9.45431 24.2773 10.0385C23.6216 9.92324 23.1068 9.59515 22.6192 9.2041C22.385 9.49699 22.17 9.7664 21.9475 10.0443C22.6277 10.6248 23.4146 10.9385 24.2847 11.0804C24.2847 11.3178 24.2847 11.52 24.2847 11.7339C24.4939 11.7339 24.6822 11.7339 24.9009 11.7339C24.9009 11.505 24.9009 11.2964 24.9009 11.0793C25.0332 11.0585 25.1372 11.0414 25.2413 11.0254C26.5392 10.8211 27.2002 9.92004 26.9522 8.69943C26.8028 7.96535 26.2464 7.65646 25.6227 7.41799C25.3864 7.3273 25.0428 7.31396 24.934 7.14538C24.8118 6.956 24.8977 6.6311 24.8961 6.36543C24.894 6.06934 24.8956 5.77273 24.8956 5.39715C25.4019 5.60415 25.8388 5.78286 26.2938 5.96905C26.4742 5.72365 26.6673 5.46064 26.8711 5.18376Z"
                                      fill="#006156"
                                    />
                                    <path
                                      d="M24.9179 8.3702C25.6296 8.52331 25.9529 8.80392 25.9204 9.22484C25.8868 9.6607 25.4882 9.98186 24.9179 10.0144C24.9179 9.47238 24.9179 8.93089 24.9179 8.3702Z"
                                      fill="#006156"
                                    />
                                    <path
                                      d="M24.266 5.4025C24.266 5.94506 24.266 6.47267 24.266 7.00029C23.6707 6.94267 23.3522 6.64712 23.3692 6.17179C23.3858 5.70926 23.7 5.42971 24.266 5.4025Z"
                                      fill="#006156"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_0_985">
                                      <rect
                                        width="33.3333"
                                        height="33.3333"
                                        fill="white"
                                        transform="translate(0.333984 0.333313)"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>
                              Request Money
                            </p>
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

                  <div className="col-lg-6 my-3">
                    <Link to="/">
                      <div className="quicklink p-4 h-100">
                        <div className="d-flex align-items-center">
                          <div className="col">
                            <p className="mb-0">
                              <span>
                                <svg
                                  width="38"
                                  height="16"
                                  viewBox="0 0 38 16"
                                  className="mr-3"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.9961 15.6985C14.128 15.6985 9.28154 15.6985 4.41337 15.6985C4.21778 15.6985 4.02218 15.6985 3.82659 15.6768C3.1746 15.5681 2.91381 15.1552 3.08767 14.525C3.82659 11.917 4.58724 9.28735 5.32615 6.67941C5.52175 6.00569 5.71735 5.33197 5.89121 4.65825C6.04334 4.11493 6.3476 3.8324 6.93439 3.85413C14.9973 3.85413 23.0384 3.85413 31.1013 3.85413C31.6664 3.85413 31.9489 4.11493 32.1011 4.63652C33.0356 7.89645 33.9701 11.1564 34.8829 14.3946C35.1437 15.2856 34.7742 15.7203 33.7745 15.7203C28.8629 15.6985 23.9295 15.6985 18.9961 15.6985ZM19.0179 10.8087C19.0396 10.8521 19.0396 10.8956 19.0613 10.939C19.7785 10.7 20.5392 10.5696 21.1694 10.2219C22.8211 9.33081 22.9732 7.57045 21.5823 6.35341C20.2349 5.17984 17.5618 5.24504 16.2795 6.48381C15.1711 7.54872 15.1711 8.76576 16.2795 9.83067C17.0619 10.5479 17.9964 10.7869 19.0179 10.8087Z"
                                    fill="#006156"
                                  />
                                  <path
                                    d="M19.0604 0.333313C24.1677 0.333313 29.2749 0.333313 34.4038 0.333313C35.4905 0.333313 36.3815 0.637573 36.9683 1.61555C37.968 3.26725 36.7945 5.4188 34.8602 5.484C34.3169 5.50574 33.9474 5.22321 33.8822 4.76682C33.8388 4.33216 34.143 3.9627 34.6646 3.85404C35.3601 3.72364 35.6643 3.37591 35.5991 2.83259C35.5557 2.311 35.1862 2.05021 34.5125 2.00674C34.3821 2.00674 34.2517 2.00674 34.143 2.00674C24.0373 2.00674 13.9532 2.00674 3.84742 2.00674C3.58663 2.00674 3.3041 2.02848 3.04331 2.07194C2.60865 2.15887 2.39132 2.4414 2.36959 2.87606C2.34785 3.33245 2.54345 3.63671 2.99984 3.76711C3.13024 3.81057 3.28237 3.83231 3.41277 3.85404C3.86916 3.9627 4.08648 4.26696 4.08648 4.70162C4.08648 5.13628 3.73876 5.44054 3.28237 5.484C2.04359 5.57093 0.804821 4.50602 0.674423 3.28898C0.565759 1.83288 1.52201 0.528909 2.86944 0.376779C3.19544 0.355046 3.52143 0.333313 3.84742 0.333313C8.91118 0.333313 13.9967 0.333313 19.0604 0.333313Z"
                                    fill="#006156"
                                  />
                                </svg>
                              </span>
                              Cardless Withdrawal
                            </p>
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
                </div>

                <div className="activities p-4">
                  <p>Recent Activity</p>
                  <div className="table-responsive ">
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <th scope="row">
                            {" "}
                            <div className="currency currency--secondary">
                              <span>
                                <svg
                                  width="17"
                                  height="16"
                                  viewBox="0 0 17 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.11719 15.26H4.67614V3.56422L11.4859 15.26H14.4044V0H11.8454V11.0342L5.47978 0H2.11719V15.26Z"
                                    fill="#006156"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0 6.36834C0 5.77898 0.473422 5.30121 1.05742 5.30121H15.1563C15.7403 5.30121 16.2137 5.77898 16.2137 6.36834C16.2137 6.9577 15.7403 7.43547 15.1563 7.43547H1.05742C0.473422 7.43547 0 6.9577 0 6.36834Z"
                                    fill="#006156"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0 9.92492C0 9.33556 0.473422 8.85779 1.05742 8.85779H15.1563C15.7403 8.85779 16.2137 9.33556 16.2137 9.92492C16.2137 10.5143 15.7403 10.9921 15.1563 10.9921H1.05742C0.473422 10.9921 0 10.5143 0 9.92492Z"
                                    fill="#006156"
                                  />
                                </svg>
                              </span>
                            </div>
                          </th>
                          <td className="action">Self Withdrawal</td>
                          <td className="amount">0.003 BTC</td>
                          <td>Just now</td>
                          <td className="success">Success</td>
                        </tr>

                        <tr>
                          <th scope="row">
                            {" "}
                            <div className="currency currency--secondary">
                              <span>
                                <svg
                                  width="17"
                                  height="16"
                                  viewBox="0 0 17 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.11719 15.26H4.67614V3.56422L11.4859 15.26H14.4044V0H11.8454V11.0342L5.47978 0H2.11719V15.26Z"
                                    fill="#006156"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0 6.36834C0 5.77898 0.473422 5.30121 1.05742 5.30121H15.1563C15.7403 5.30121 16.2137 5.77898 16.2137 6.36834C16.2137 6.9577 15.7403 7.43547 15.1563 7.43547H1.05742C0.473422 7.43547 0 6.9577 0 6.36834Z"
                                    fill="#006156"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0 9.92492C0 9.33556 0.473422 8.85779 1.05742 8.85779H15.1563C15.7403 8.85779 16.2137 9.33556 16.2137 9.92492C16.2137 10.5143 15.7403 10.9921 15.1563 10.9921H1.05742C0.473422 10.9921 0 10.5143 0 9.92492Z"
                                    fill="#006156"
                                  />
                                </svg>
                              </span>
                            </div>
                          </th>
                          <td className="action">Deposit</td>
                          <td className="amount">0.003 BTC</td>
                          <td>Today</td>
                          <td className="failed">Failed</td>
                        </tr>

                        <tr>
                          <th scope="row">
                            {" "}
                            <div className="currency currency--secondary">
                              <span>
                                <svg
                                  width="17"
                                  height="16"
                                  viewBox="0 0 17 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.11719 15.26H4.67614V3.56422L11.4859 15.26H14.4044V0H11.8454V11.0342L5.47978 0H2.11719V15.26Z"
                                    fill="#006156"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0 6.36834C0 5.77898 0.473422 5.30121 1.05742 5.30121H15.1563C15.7403 5.30121 16.2137 5.77898 16.2137 6.36834C16.2137 6.9577 15.7403 7.43547 15.1563 7.43547H1.05742C0.473422 7.43547 0 6.9577 0 6.36834Z"
                                    fill="#006156"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0 9.92492C0 9.33556 0.473422 8.85779 1.05742 8.85779H15.1563C15.7403 8.85779 16.2137 9.33556 16.2137 9.92492C16.2137 10.5143 15.7403 10.9921 15.1563 10.9921H1.05742C0.473422 10.9921 0 10.5143 0 9.92492Z"
                                    fill="#006156"
                                  />
                                </svg>
                              </span>
                            </div>
                          </th>
                          <td className="action">Transfer</td>
                          <td className="amount">0.003 BTC</td>
                          <td>7:23AM</td>
                          <td className="_pending">Pending</td>
                        </tr>

                        <tr>
                          <th scope="row">
                            {" "}
                            <div className="currency currency--secondary">
                              <span>
                                <svg
                                  width="17"
                                  height="16"
                                  viewBox="0 0 17 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.11719 15.26H4.67614V3.56422L11.4859 15.26H14.4044V0H11.8454V11.0342L5.47978 0H2.11719V15.26Z"
                                    fill="#006156"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0 6.36834C0 5.77898 0.473422 5.30121 1.05742 5.30121H15.1563C15.7403 5.30121 16.2137 5.77898 16.2137 6.36834C16.2137 6.9577 15.7403 7.43547 15.1563 7.43547H1.05742C0.473422 7.43547 0 6.9577 0 6.36834Z"
                                    fill="#006156"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0 9.92492C0 9.33556 0.473422 8.85779 1.05742 8.85779H15.1563C15.7403 8.85779 16.2137 9.33556 16.2137 9.92492C16.2137 10.5143 15.7403 10.9921 15.1563 10.9921H1.05742C0.473422 10.9921 0 10.5143 0 9.92492Z"
                                    fill="#006156"
                                  />
                                </svg>
                              </span>
                            </div>
                          </th>
                          <td className="action">Deposit</td>
                          <td className="amount">0.003 BTC</td>
                          <td>Yesterday</td>
                          <td className="success">Success</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="user-area p-2  mt-5">
                <ul className="list-inline mb-0 ml-auto">
                  <li className="list-inline-item">
                    <div className="avatar h-100">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 17 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.77898 16.5278C9.77898 17.327 8.96464 18.0027 8.00094 18.0027C7.03724 18.0027 6.22289 17.327 6.22289 16.5278V16.2246H9.77898V16.5278ZM15.5768 13.7409L13.9757 12.138V8.16583C13.9757 5.07115 11.7514 2.4432 8.80072 2.05203C7.09291 1.82533 5.36821 2.3463 4.07468 3.48069C2.77315 4.62041 2.02727 6.26066 2.02727 7.98002L2.02638 12.138L0.426139 13.7418C0.00918832 14.1587 -0.114386 14.781 0.111426 15.326C0.338126 15.871 0.865315 16.2239 1.45563 16.2239H4.4454V16.5271C4.4454 18.3211 6.04031 19.78 8.00149 19.78C9.96267 19.78 11.5576 18.3211 11.5576 16.5271V16.2239H14.5465C15.1368 16.2239 15.664 15.8719 15.8898 15.326C16.1165 14.781 15.9929 14.1587 15.5768 13.7409Z"
                          fill="#444854"
                        />
                        <circle cx="12.5" cy="4.5" r="4.5" fill="white" />
                        <circle cx="12.5" cy="4.5" r="2.5" fill="#EA2222" />
                      </svg>
                    </div>
                  </li>

                  <li className="list-inline-item">
                    <div className="avatar">
                      <img src={Avatar} alt="" />
                    </div>
                  </li>

                  <li className="list-inline-item">
                    <span>
                      <svg
                        width="4"
                        height="18"
                        viewBox="0 0 4 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2 4C3.104 4 4 3.104 4 2C4 0.896 3.104 0 2 0C0.896 0 0 0.896 0 2C0 3.104 0.896 4 2 4ZM2 7C0.896 7 0 7.896 0 9C0 10.104 0.896 11 2 11C3.104 11 4 10.104 4 9C4 7.896 3.104 7 2 7ZM0 16C0 14.896 0.896 14 2 14C3.104 14 4 14.896 4 16C4 17.104 3.104 18 2 18C0.896 18 0 17.104 0 16Z"
                          fill="#9DA8B6"
                        />
                      </svg>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="quickaction mt-5">
                <QuickAction />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Wallet;
