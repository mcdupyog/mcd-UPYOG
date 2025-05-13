import React, { useEffect, useState } from "react";
import { Loader } from "@nudmcdgnpm/digit-ui-react-components"; 

const RedirectToFinanceInbox = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const baseUrl = process.env.REACT_APP_PROXY_API;
      const redirectPath = "/employee/services/EGF/inbox";
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

export default RedirectToFinanceInbox;
