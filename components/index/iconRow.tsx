import React from "react";
import styles from "./iconRow.module.css";

import { faGithub, faGooglePlay, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGrip, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./icon";

export interface IconRowProps {
  title?: string;
}

export const IconRow = (IconRowData: IconRowProps) => {
  return (
    <div className="mb-5">
      <div className="row gx-0 px-3">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-3">
          <Icon title="Github" icon={faGithub} url="https://github.com/karstenabc" />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-3">
          <Icon title="LinkedIn" icon={faLinkedin} url="https://linkedin.com/in/karsten-lloyd" />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-3">
          <Icon title="Portfolio" icon={faGrip} url="/portfolio" />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-3">
          <Icon title="Play Store" icon={faGooglePlay} url="https://play.google.com/store/apps/developer?id=Karsten+Lloyd" />
        </div>
        {/* <div className="col-4">
          <Icon title="Email" icon={faEnvelope} />
        </div> */}
      </div>
    </div>
  );
};
