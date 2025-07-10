/**
 * Created By : Umesh Kumar 
 * Created On : 13-05-2025
 * Purpose : Finance Card for micro-ui
 * Code status : open
 */
import { EmployeeModuleCard, FinanceChartIcon } from "@mcd89/finance-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";

const FinanceCard = () => {
  const { t } = useTranslation();

  const userRoles = Digit.UserService.getUser()?.info?.roles?.map(role => role.code) || [];
  const isFinanceUser = userRoles.includes("EMPLOYEE") || userRoles.includes("FINANCE");

  if (!isFinanceUser) return null;
  // if (!Digit.Utils.finance2Access()) {
  //   return null;
  // }

  // const FINANCE2_CEMP = Digit.UserService.hasAccess(["EGF_BILL_CREATOR","EGF_BILL_APPROVER"]) || false;
  const propsForModuleCard = {
    Icon: <FinanceChartIcon />,
    moduleName: t("ACTION_TEST_FINANCE-2.O").toUpperCase(),
    links: [
       {
        label: t("Sample"),
        link: `/${window?.contextPath}/employee/finance2/sample`,
        //   roles: ROLES.MDMS,
      },
      {
        label: t("ACTION_TEST_INBOX"),
        link: `/${window?.contextPath}/employee/finance2/inbox`,
        //   roles: ROLES.MDMS,
      },
      {
        label: t("TENANT_FINANCE_MODULE"),
        link: `/${window?.contextPath}/employee/finance2/voucher/journalVoucher`,
        //   roles: ROLES.LOCALISATION,
      },
      {
        label: t("ACTION_TEST_APPLY_TEST"),
        link: `/${window?.contextPath}/employee/finance2/test`,
        //   roles: ROLES.WORKFLOW,
      },
       {
        label: t("Receipt Payment Report"),
        link: `/${window?.contextPath}/employee/finance2/report/receiptPaymentReport-newForm`,
        //   roles: ROLES.MDMS,
      },
       {
        label: t("Cash Flow Report"),
        link: `/${window?.contextPath}/employee/finance2/report/cashFlowReport-generateCashFlowReport`,
        //   roles: ROLES.MDMS,
      },
       {
        label: t("View Bank Uploads Files"),
        link: `/${window?.contextPath}/employee/finance2/bankstatement/search`,
        //   roles: ROLES.MDMS,
      },
      {
        label: t("Reconcile Bank Statement"),
        link: `/${window?.contextPath}/employee/finance2/brs/autoReconciliation-newForm`,
        //   roles: ROLES.MDMS,
      },
      {
        label: t("Reconcile Bank Statement Upload"),
        link: `/${window?.contextPath}/employee/finance2/brs/bank-reconciliation-upload`,
        //   roles: ROLES.MDMS,
      },
      {
        label: t("Reconcile Summary Report"),
        link: `/${window?.contextPath}/employee/finance2/brs/bank-reconciliation-summary-report`,
        //   roles: ROLES.MDMS,
      }, 
      {
        label: t("Bank statement Entites Not in Bank Book"),
        link: `/${window?.contextPath}/employee/finance2/brs/bank-entries-not-in-bank-book`,
        //   roles: ROLES.MDMS,
      },
       {
        label: t("Reconcile with Bank Manual"),
        link: `/${window?.contextPath}/employee/finance2/brs/manual-bank-reconciliation`,
        //   roles: ROLES.MDMS,
      }
      ,
       {
        label: t("Create Work Order Master"),
        link: `/${window?.contextPath}/employee/finance2/brs/work-order/create-work-order-master-form`,
        //   roles: ROLES.MDMS,
      }
      ,
       {
        label: t("Create Purchase Order Master"),
        link: `/${window?.contextPath}/employee/finance2/brs/purchase-order/create-work-order-master`,
        //   roles: ROLES.MDMS,
      }
      // Add more links as needed
      ,
       {
        label: t("Create Miscellaneous Receipt"),
        link: `/${window?.contextPath}/employee/finance2/brs/revenue-accounting/Create-Miscellaneous-Receipt`,
        //   roles: ROLES.MDMS,
      }
      ,
       {
        label: t("Cash Remittance Form"),
        link: `/${window?.contextPath}/employee/finance2/brs/revenue-accounting/cash-remittance-form`,
        //   roles: ROLES.MDMS,
      }
      ,
       {
        label: t("Cheque Remittance Form"),
        link: `/${window?.contextPath}/employee/finance2/brs/revenue-accounting/cheque-remittance-form`,
        //   roles: ROLES.MDMS,
      },
      {
        label: t("Search Receipts"),
        link: `/${window?.contextPath}/employee/finance2/brs/revenue-accounting/search-receipts`,
        //   roles: ROLES.MDMS,
      }

    ],
  };

  return <EmployeeModuleCard {...propsForModuleCard} />;
};

export default FinanceCard;