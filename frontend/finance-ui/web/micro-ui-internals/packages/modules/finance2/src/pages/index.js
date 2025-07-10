import React, { useEffect } from "react";
import { Switch, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PrivateRoute, AppContainer, BreadCrumb } from "@egovernments/digit-ui-react-components";
import Inbox from "../components/inbox";
import ReceiptNewform from "./employee/FinanceReceiptForm"
import ReceiptPaymentReport from "./employee/receiptPaymentReport/receiptPaymentReport";
import CashFlowReport from "./employee/cashFlowReport-generateCashFlowReport/CashFlowReport";
import BankStatementSearch from "./employee/Bank-Reconciliation/viewBankUploadFileStatement";
import AutoBankReconciliation from "./employee/Bank-Reconciliation/AutoBankReconciliation";
import AutoBankReconciliationUpload from "./employee/Bank-Reconciliation/AutoBankReconciliationUpload";
import BankReconciliationSummary from "./employee/Bank-Reconciliation/BankReconciliationSummary.js";
import BankEntriesNotInBankBook from "./employee/Bank-Reconciliation/BankEntriesNotInBankBook.js";
import ReconcileWithBankManual from "./employee/Bank-Reconciliation/ReconcileWithBankManual.js";
import CreateWorkOrderMasterForm from "./employee/work-order/CreateWorkOrderMasterForm.js";
import PurchaseWorkOrderMaster from "./employee/purchase-order/PurchaseWorkOrderMaster.js";
import CreateMiscellaneousReceipt from "./employee/Revenue-accounting/MiscellaneousReceipt.js";
// import CashRemittanceForm from "./employee/Revenue-accounting/CashRemittanceForm.js";
import RemittanceForm from "./employee/hooks/RemittanceForm.js";
import SearchReceipts from "./employee/Revenue-accounting/SearchReceipts.js";

const FinanceBreadCrumb = ({ location, defaultPath }) => {
  const { t } = useTranslation();
  const search = useLocation().search;
  const fromScreen = new URLSearchParams(search).get("from") || null;
  const pathVar = location.pathname.replace(defaultPath + '/', "").split("?")?.[0];

  const crumbs = [
    {
      path: `/${window?.contextPath}/employee`,
      content: t("HOME"),
      show: true,
    },
    {
      path: `/${window.contextPath}/employee/finance`,
      content: t("FINANCE_HOME"),
      show: true,
    },
    {
      path: `/${window.contextPath}/employee/finance/sample`,
      content: t("SAMPLE_SCREEN"),
      show: pathVar.includes("sample"),
    }
  ];
  return <BreadCrumb className="finance-bredcrumb" crumbs={crumbs} spanStyle={{ maxWidth: "min-content" }} />;
};

const FinanceApp = ({ path }) => {
  const location = useLocation();
  const accountOptions = [
      { code: "acc1", name: "Cash Account 1" },
      { code: "acc2", name: "Cash Account 2" },
    ];

    const yearOptions = [
      { code: "2023-24", name: "2023–24" },
      { code: "2024-25", name: "2024–25" },
    ];

    const handleSearch = (formValues) => {
      console.log("Search Submitted:", formValues);
      // API Call or logic here
    };
  return (
    <React.Fragment>
      <FinanceBreadCrumb location={location} defaultPath={path} />
      <Switch>
        <AppContainer className="finance">
           <PrivateRoute path={`${path}/sample`} component={() => <div>Sample Screen loaded</div>} />
          <PrivateRoute exact path={`${path}/voucher/journalVoucher`} component={() => <ReceiptNewform />} />
          <PrivateRoute exact path={`${path}/inbox`} component={() => <Inbox />} />
          <PrivateRoute exact path={`${path}/report/receiptPaymentReport-newForm`} component={() => <ReceiptPaymentReport />} />
          <PrivateRoute exact path={`${path}/report/cashFlowReport-generateCashFlowReport`} component={() => <CashFlowReport />} />
          <PrivateRoute exact path={`${path}/bankstatement/search`} component={() => <BankStatementSearch />} />

          <PrivateRoute exact path={`${path}/brs/autoReconciliation-newForm`} component={() => <AutoBankReconciliation />} />
          <PrivateRoute exact path={`${path}/brs/bank-reconciliation-upload`} component={() => <AutoBankReconciliationUpload />} />
          <PrivateRoute exact path={`${path}/brs/bank-reconciliation-summary-report`} component={() => <BankReconciliationSummary />} />
          <PrivateRoute exact path={`${path}/brs/bank-entries-not-in-bank-book`} component={() => <BankEntriesNotInBankBook/>} />
          <PrivateRoute  exact path={`${path}/brs/manual-bank-reconciliation`} component={() => <ReconcileWithBankManual/>} />
          <PrivateRoute exact path={`${path}/brs/work-order/create-work-order-master-form`} component={() => <CreateWorkOrderMasterForm />} />
          <PrivateRoute exact path={`${path}/brs/purchase-order/create-work-order-master`} component={() => <PurchaseWorkOrderMaster />} />
          <PrivateRoute exact path={`${path}/brs/revenue-accounting/Create-Miscellaneous-Receipt`} component={() => <CreateMiscellaneousReceipt />} />
          <PrivateRoute exact path={`${path}/brs/revenue-accounting/cash-remittance-form`} component={() => 
          <RemittanceForm
            title="Cash Remittance1111"
            accountOptions={accountOptions}
            financialYearOptions={yearOptions}
            onSearch={handleSearch}
          />} />
          <PrivateRoute exact path={`${path}/brs/revenue-accounting/cheque-remittance-form`} component={() => 
          <RemittanceForm
            title="Cheque Remittance"
            accountOptions={accountOptions}
            financialYearOptions={yearOptions}
            onSearch={handleSearch}
          />} />
          <PrivateRoute exact path={`${path}/brs/revenue-accounting/search-receipts`} component={() => <SearchReceipts />} />


           {/* Add more finance routes here as needed */}
        </AppContainer>
      </Switch>
    </React.Fragment>
  );
};

export default FinanceApp;