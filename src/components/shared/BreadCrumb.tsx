import React from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

function BreadCrumb({ pageName, title, secondPage }: { pageName: string; title?: string; to?: string, secondPage?: string }) {
  return (
    <div className="breadcrumb-component">
      <section className="breadcrumb-container container-fluid">
        <div className="breadcrumb-page-title-content-body flex-sb-mobile">
          <div className="container-title-page-head pb-3">
            <div className="content-title-page-head">
              <h3 className="title-page-head">{title}</h3>
              <div className="breadcrumb-container">
                <div className="breadcrumb-items">
                  <NavLink
                    to={`admin'/dashboard`}
                    className="breadcrumb-navlink"
                  >
                    Home
                  </NavLink>
                </div>
                <span>
                  <MdOutlineChevronRight />
                </span>
                <div className="breadcrumb-items">
                  <p className={`breadcrumb-current-page ${secondPage && "custom-bread-color" }`}> {pageName} </p>
                </div>
                {secondPage && (
                  <>
                    <span>
                      <MdOutlineChevronRight />
                    </span>
                    <div className="breadcrumb-items">
                      <p className="breadcrumb-current-page"> {secondPage} </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BreadCrumb;
