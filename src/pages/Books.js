import React from "react";
import { Layout } from "./Layout";
import CardComponent from "../layout/CardComponent";

export const Books = () => {
  return (
    <Layout>
      {
        <div className="flex gap-5 ml-5">
          <div className="container">
            <div className="row">
              {[...new Array(6)].map((ele, ind) => {
                return (
                  <div className="col-md-4 mb-3 mt-3" key={ind}>
                    <CardComponent />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      }
    </Layout>
  );
};
