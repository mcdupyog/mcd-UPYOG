/**
 * Created By : Umesh Kumar
 * Created On : 13-05-2025
 * Purpose : FinanceApp component for routing
 */
import { PrivateRoute } from "@nudmcdgnpm/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, Switch, useLocation } from "react-router-dom";
import RedirectToFinanceInbox from "../utils/RedirectToFinanceInbox";
import RedirectToFinanceHome from "../utils/RedirectToFinanceHome";

const FinanceApp = ({ path, url, userType }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const mobileView = innerWidth <= 640;
  const tenantId = Digit.ULBService.getCurrentTenantId();

  const inboxInitialState = {
    searchParams: {
      tenantId: tenantId,
    },
  };

  const FinanceInbox = Digit.ComponentRegistryService.getComponent("FinanceInbox");

  return (
    <Switch>
      <React.Fragment>
        <div className="ground-container">
          <p className="breadcrumb" style={{ marginLeft: mobileView ? "1vw" : "15px" }}>
            <Link to="/digit-ui/employee" style={{ cursor: "pointer", color: "#666" }}>
              {t("Home")}
            </Link>{" "}
            / <span>{location.pathname === "/digit-ui/employee/finance/inbox" ? t("inbox") : t("inbox")}</span>
          </p>
          <PrivateRoute
            path={`${path}/inbox`}
            component={() => (
              <FinanceInbox
                parentRoute={path}
                businessService="finance"
                filterComponent="FINANCE_INBOX_FILTER"
                initialStates={inboxInitialState}
                isInbox={true}
              />
            )}
          />
          <PrivateRoute path={`${path}/redirect-inbox`} component={RedirectToFinanceInbox} />
          <PrivateRoute path={`${path}/redirect-home`} component={RedirectToFinanceHome} />
        </div>
      </React.Fragment>
    </Switch>
  );
};

export default FinanceApp;
