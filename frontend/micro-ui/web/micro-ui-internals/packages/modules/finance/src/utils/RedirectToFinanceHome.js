import React, { useEffect, useState } from "react";
import { Loader } from "@nudmcdgnpm/digit-ui-react-components";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

const RedirectToFinanceHome = () => {
  const [loading, setLoading] = useState(true);
  const { path, url } = useRouteMatch();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const baseUrl = process.env.REACT_APP_PROXY_API;
      const redirectPath = "/employee/services/EGF/voucher/journalVoucher-newForm.action";
      if (baseUrl && typeof window !== "undefined" && window?.location) {
        window.location.href = `${baseUrl}${redirectPath}`;
      }
    }, 200);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="loader-container">
      {loading && <Loader />}
    </div>
  );
};

export default RedirectToFinanceHome;
