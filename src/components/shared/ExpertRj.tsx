"use client";
import { ReactNode } from "react";

const ExpertRj = ({ children }: { children: ReactNode }) => {
  return (
    //
    //    <!-- rj section start -->
    <section className="pt-120 pb-120 section-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">RJ</span>
              <h2 className="section-title">Our Expert RJ</h2>
            </div>
          </div>
        </div>
        {children}
      </div>
    </section>
    // <!-- rj section end --> */}
  );
};

export default ExpertRj;
