import React from "react";

const Group = () => {
  return (
    // <!-- Start groups tab-pane -->
    <div
      className="tab-pane"
      id="pills-groups"
      role="tabpanel"
      aria-labelledby="pills-groups-tab"
    >
      {/* <!-- Start Groups content --> */}
      <div>
        <div className="p-4">
          <div className="user-chat-nav float-right">
            <div
              data-toggle="tooltip"
              data-placement="bottom"
              title="Create group"
            >
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                className="btn btn-link text-decoration-none text-muted font-size-18 py-0"
                data-toggle="modal"
                data-target="#addgroup-exampleModal"
              >
                <i className="ri-group-line mr-1"></i>
              </button>
            </div>
          </div>
        </div>
        <h4 className="mb-4">Groups</h4>

        {/*  */}
        {/* <!-- Start add group Modal --> */}
        <div
          className="modal fade"
          id="addgroup-exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="addgroup-exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title font-size-16"
                  id="addgroup-exampleModalLabel"
                >
                  Create New Group
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

              {/*  */}
              <div className="modal-body p-4">
                <form action="Post">
                  <div className="form-group mb-4">
                    <label htmlFor="addgroupname-input">Group Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="addgroupname-input"
                      placeholder="Enter Group Name"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label>Group Members</label>
                    <div className="mb-3">
                      <button
                        className="btn btn-light btn-sm"
                        type="button"
                        data-toggle="collapse"
                        data-target="#groupmembercollapse"
                        aria-expanded="false"
                        aria-controls="groupmembercollapse"
                      >
                        Select Members
                      </button>
                    </div>

                    <div className="collapse" id="groupmembercollapse">
                      <div className="card border">
                        <div className="card-header">
                          <h5 className="font-size-15 mb-0">Contacts</h5>
                        </div>
                        <div className="card-body p-2">
                          <div data-simplebar style={{ maxHeight: "150px" }}>
                            <div>
                              <div className="p-3 font-weight-bold text-primary">
                                A
                              </div>

                              <ul className="list-unstyled contact-list">
                                <li>
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="memberCheck1"
                                      checked
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="memberCheck1"
                                    >
                                      Albert Rodarte
                                    </label>
                                  </div>
                                </li>

                                <li>
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="memberCheck2"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="memberCheck2"
                                    >
                                      Allison Etter
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <div className="p-3 font-weight-bold text-primary">
                                C
                              </div>

                              <ul className="list-unstyled contact-list">
                                <li>
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="memberCheck3"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="memberCheck3"
                                    >
                                      Craig Smiley
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <div className="p-3 font-weight-bold text-primary">
                                D
                              </div>

                              <ul className="list-unstyled contact-list">
                                <li>
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="memberCheck4"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="memberCheck4"
                                    >
                                      Daniel Clay
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <div className="p-3 font-weight-bold text-primary">
                                I
                              </div>

                              <ul className="list-unstyled contact-list">
                                <li>
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="memberCheck5"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="memberCheck5"
                                    >
                                      Iris Wells
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <div className="p-3 font-weight-bold text-primary">
                                J
                              </div>

                              <ul className="list-unstyled contact-list">
                                <li>
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="memberCheck6"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="memberCheck6"
                                    >
                                      Juan Flakes
                                    </label>
                                  </div>
                                </li>

                                <li>
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="memberCheck7"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="memberCheck7"
                                    >
                                      John Hall
                                    </label>
                                  </div>
                                </li>

                                <li>
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="memberCheck8"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="memberCheck8"
                                    >
                                      Joy Southern
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <div className="p-3 font-weight-bold text-primary">
                                M
                              </div>

                              <ul className="list-unstyled contact-list">
                                <li>
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="memberCheck9"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="memberCheck9"
                                    >
                                      Michael Hinton
                                    </label>
                                  </div>
                                </li>

                                <li>
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="memberCheck10"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="memberCheck10"
                                    >
                                      Mary Farmer
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <div className="p-3 font-weight-bold text-primary">
                                P
                              </div>

                              <ul className="list-unstyled contact-list">
                                <li>
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="memberCheck11"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="memberCheck11"
                                    >
                                      Phillis Griffin
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <div className="p-3 font-weight-bold text-primary">
                                R
                              </div>

                              <ul className="list-unstyled contact-list">
                                <li>
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="memberCheck12"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="memberCheck12"
                                    >
                                      Rocky Jackson
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <div className="p-3 font-weight-bold text-primary">
                                S
                              </div>

                              <ul className="list-unstyled contact-list">
                                <li>
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="memberCheck13"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="memberCheck13"
                                    >
                                      Simon Velez
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="addgroupdescription-input">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="addgroupdescription-input"
                      rows={3}
                      placeholder="Enter Description"
                    ></textarea>
                  </div>
                </form>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Group;
