import React from "react";
import styled from "styled-components";

const Contacts = () => {

  return (
    <ContactsStyles
      className="tab-pane"
      id="pills-contacts"
      role="tabpanel"
      aria-labelledby="pills-contacts-tab"
    >
      <div>
        <div className="p-4">
          <div className="user-chat-nav float-right">
            <div
              data-toggle="tooltip"
              data-placement="bottom"
              title="Add Contact"
            >
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                className="btn btn-link text-decoration-none text-muted font-size-18 py-0"
                data-toggle="modal"
                data-target="#addContact-exampleModal"
              >
                <i className="ri-user-add-line"></i>
              </button>
            </div>
          </div>
          <h4 className="mb-4">Contacts</h4>

          {/* <!-- Start Add contact Modal --> */}
          <div
            className="modal fade"
            id="addContact-exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="addContact-exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h5
                    className="modal-title font-size-16"
                    id="addContact-exampleModalLabel"
                  >
                    Add Contact
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body p-4">
                  <form>
                    <div className="form-group mb-4">
                      <label htmlFor="addcontactemail-input">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="addcontactemail-input"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="addcontact-invitemessage-input">
                        Invatation Message
                      </label>
                      <textarea
                        className="form-control"
                        id="addcontact-invitemessage-input"
                        rows={3}
                        placeholder="Enter Message"
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-link"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Invite Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Add contact Modal --> */}

          <div className="search-box chat-search-box">
            <div className="input-group bg-light  input-group-lg rounded-lg">
              <div className="input-group-prepend">
                <button
                  className="btn btn-link text-decoration-none text-muted pr-1"
                  type="button"
                >
                  <i className="ri-search-line search-icon font-size-18"></i>
                </button>
              </div>
              <input
                type="text"
                className="form-control bg-light "
                placeholder="Search users.."
              />
            </div>
          </div>
          {/* <!-- End search-box --> */}
        </div>

        {/*  */}

        {/* <!-- Start contact lists --> */}
        <div className="p-4 chat-message-list chat-group-list" data-simplebar>
          <div>
            <div className="p-3 font-weight-bold text-primary">A</div>

            <ul className="list-unstyled contact-list">
              <li>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h5 className="font-size-14 m-0">Albert Rodarte</h5>
                  </div>

                  <div className="dropdown">
                    <a
                      href="#"
                      className="text-muted dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Share{" "}
                        <i className="ri-share-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Block{" "}
                        <i className="ri-forbid-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Remove{" "}
                        <i className="ri-delete-bin-line float-right text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h5 className="font-size-14 m-0">Allison Etter</h5>
                  </div>

                  <div className="dropdown">
                    <a
                      href="#"
                      className="text-muted dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Share{" "}
                        <i className="ri-share-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Block{" "}
                        <i className="ri-forbid-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Remove{" "}
                        <i className="ri-delete-bin-line float-right text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- end contact list A --> */}

          <div className="mt-3">
            <div className="p-3 font-weight-bold text-primary">C</div>

            <ul className="list-unstyled contact-list">
              <li>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h5 className="font-size-14 m-0">Craig Smiley</h5>
                  </div>

                  <div className="dropdown">
                    <a
                      href="#"
                      className="text-muted dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Share{" "}
                        <i className="ri-share-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Block{" "}
                        <i className="ri-forbid-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Remove{" "}
                        <i className="ri-delete-bin-line float-right text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- end contact list C --> */}

          <div className="mt-3">
            <div className="p-3 font-weight-bold text-primary">D</div>

            <ul className="list-unstyled contact-list">
              <li>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h5 className="font-size-14 m-0">Daniel Clay</h5>
                  </div>

                  <div className="dropdown">
                    <a
                      href="#"
                      className="text-muted dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Share{" "}
                        <i className="ri-share-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Block{" "}
                        <i className="ri-forbid-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Remove{" "}
                        <i className="ri-delete-bin-line float-right text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h5 className="font-size-14 m-0">Doris Brown</h5>
                  </div>

                  <div className="dropdown">
                    <a
                      href="#"
                      className="text-muted dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Share{" "}
                        <i className="ri-share-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Block{" "}
                        <i className="ri-forbid-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Remove{" "}
                        <i className="ri-delete-bin-line float-right text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- end contact list D --> */}

          <div className="mt-3">
            <div className="p-3 font-weight-bold text-primary">I</div>

            <ul className="list-unstyled contact-list">
              <li>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h5 className="font-size-14 m-0">Iris Wells</h5>
                  </div>

                  <div className="dropdown">
                    <a
                      href="#"
                      className="text-muted dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Share{" "}
                        <i className="ri-share-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Block{" "}
                        <i className="ri-forbid-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Remove{" "}
                        <i className="ri-delete-bin-line float-right text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- end contact list I --> */}

          <div className="mt-3">
            <div className="p-3 font-weight-bold text-primary">J</div>

            <ul className="list-unstyled contact-list">
              <li>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h5 className="font-size-14 m-0">Juan Flakes</h5>
                  </div>

                  <div className="dropdown">
                    <a
                      href="#"
                      className="text-muted dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Share{" "}
                        <i className="ri-share-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Block{" "}
                        <i className="ri-forbid-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Remove{" "}
                        <i className="ri-delete-bin-line float-right text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h5 className="font-size-14 m-0">John Hall</h5>
                  </div>

                  <div className="dropdown">
                    <a
                      href="#"
                      className="text-muted dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Share{" "}
                        <i className="ri-share-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Block{" "}
                        <i className="ri-forbid-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Remove{" "}
                        <i className="ri-delete-bin-line float-right text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h5 className="font-size-14 m-0">Joy Southern</h5>
                  </div>

                  <div className="dropdown">
                    <a
                      href="#"
                      className="text-muted dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Share{" "}
                        <i className="ri-share-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Block{" "}
                        <i className="ri-forbid-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Remove{" "}
                        <i className="ri-delete-bin-line float-right text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- end contact list J --> */}

          <div className="mt-3">
            <div className="p-3 font-weight-bold text-primary">M</div>

            <ul className="list-unstyled contact-list">
              <li>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h5 className="font-size-14 m-0">Mary Farmer</h5>
                  </div>

                  <div className="dropdown">
                    <a
                      href="#"
                      className="text-muted dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Share{" "}
                        <i className="ri-share-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Block{" "}
                        <i className="ri-forbid-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Remove{" "}
                        <i className="ri-delete-bin-line float-right text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h5 className="font-size-14 m-0">Mark Messer</h5>
                  </div>

                  <div className="dropdown">
                    <a
                      href="#"
                      className="text-muted dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Share{" "}
                        <i className="ri-share-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Block{" "}
                        <i className="ri-forbid-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Remove{" "}
                        <i className="ri-delete-bin-line float-right text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h5 className="font-size-14 m-0">Michael Hinton</h5>
                  </div>

                  <div className="dropdown">
                    <a
                      href="#"
                      className="text-muted dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Share{" "}
                        <i className="ri-share-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Block{" "}
                        <i className="ri-forbid-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Remove{" "}
                        <i className="ri-delete-bin-line float-right text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- end contact list M --> */}

          <div className="mt-3">
            <div className="p-3 font-weight-bold text-primary">O</div>

            <ul className="list-unstyled contact-list">
              <li>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h5 className="font-size-14 m-0">Ossie Wilson</h5>
                  </div>

                  <div className="dropdown">
                    <a
                      href="#"
                      className="text-muted dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Share{" "}
                        <i className="ri-share-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Block{" "}
                        <i className="ri-forbid-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Remove{" "}
                        <i className="ri-delete-bin-line float-right text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- end contact list O --> */}

          <div className="mt-3">
            <div className="p-3 font-weight-bold text-primary">P</div>

            <ul className="list-unstyled contact-list">
              <li>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h5 className="font-size-14 m-0">Phillis Griffin</h5>
                  </div>

                  <div className="dropdown">
                    <a
                      href="#"
                      className="text-muted dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Share{" "}
                        <i className="ri-share-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Block{" "}
                        <i className="ri-forbid-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Remove{" "}
                        <i className="ri-delete-bin-line float-right text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h5 className="font-size-14 m-0">Paul Haynes</h5>
                  </div>

                  <div className="dropdown">
                    <a
                      href="#"
                      className="text-muted dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Share{" "}
                        <i className="ri-share-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Block{" "}
                        <i className="ri-forbid-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Remove{" "}
                        <i className="ri-delete-bin-line float-right text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- end contact list P --> */}

          <div className="mt-3">
            <div className="p-3 font-weight-bold text-primary">R</div>

            <ul className="list-unstyled contact-list">
              <li>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h5 className="font-size-14 m-0">Rocky Jackson</h5>
                  </div>

                  <div className="dropdown">
                    <a
                      href="#"
                      className="text-muted dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Share{" "}
                        <i className="ri-share-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Block{" "}
                        <i className="ri-forbid-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Remove{" "}
                        <i className="ri-delete-bin-line float-right text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- end contact list R --> */}

          <div className="mt-3">
            <div className="p-3 font-weight-bold text-primary">S</div>

            <ul className="list-unstyled contact-list">
              <li>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h5 className="font-size-14 m-0">Sara Muller</h5>
                  </div>

                  <div className="dropdown">
                    <a
                      href="#"
                      className="text-muted dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Share{" "}
                        <i className="ri-share-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Block{" "}
                        <i className="ri-forbid-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Remove{" "}
                        <i className="ri-delete-bin-line float-right text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h5 className="font-size-14 m-0">Simon Velez</h5>
                  </div>

                  <div className="dropdown">
                    <a
                      href="#"
                      className="text-muted dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Share{" "}
                        <i className="ri-share-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Block{" "}
                        <i className="ri-forbid-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Remove{" "}
                        <i className="ri-delete-bin-line float-right text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h5 className="font-size-14 m-0">Steve Walker</h5>
                  </div>

                  <div className="dropdown">
                    <a
                      href="#"
                      className="text-muted dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Share{" "}
                        <i className="ri-share-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Block{" "}
                        <i className="ri-forbid-line float-right text-muted"></i>
                      </a>
                      <a className="dropdown-item" href="#">
                        Remove{" "}
                        <i className="ri-delete-bin-line float-right text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- end contact list S --> */}
        </div>
        {/* <!-- end contact lists --> */}
        {/*  */}
      </div>
    </ContactsStyles>
  );
};

const ContactsStyles = styled.div`
  height: 900px;
  overflow: auto;

  /* Scroll bar */
  ::-webkit-scrollbar {
    width: 0.4em;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

export default Contacts;
