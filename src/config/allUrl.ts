const dev = process.env.NODE_ENV !== "production";

const apiUrl: string | any = process.env.REACT_APP_API_URL;
const utilityUrl: string | any = process.env.REACT_APP_UTILITY_URL;

export const baseUrl: string = `${apiUrl}/v1`;
export const adjutorBaseUrl: string = `https://1u0bzafu09.execute-api.us-east-2.amazonaws.com`;
export const baseUrlV2: string = `${apiUrl}/v2`;
export const utilitybaseUrl: string = `${utilityUrl}/v1`;
export const utilitybaseUrlV2: string = `${utilityUrl}/v2/util`;

/*********** ALL APIS ************/

//AUTH APIS
export const loginUrl: string = `${baseUrlV2}/auth/admin/login`;
export const resetPasswordUrl = (token: string) =>
  `${baseUrl}auth/reset/admin/password?token=${token}`;
export const sendResetPasswordUrl: string = `${baseUrl}/auth/reset/admin/password/email`;

//Onboarding APIS
export const signupUrl: string = `${baseUrlV2}/onboard`;
export const updateOrganizationDetailsUrl = (orgId: string) =>
  `${baseUrlV2}/onboard/${orgId}/organization-details`;
export const updateBusinessDetailsUrl = (userId: string) =>
  `${baseUrlV2}/onboard/${userId}/business-details`;
export const updateBusinessAddressUrl = (userId: string) =>
  `${baseUrlV2}/onboard/${userId}/address-details`;
export const businessKYCUrl = (userId: string) =>
  `${baseUrlV2}/onboard/${userId}/kyc-details`;
export const updateBuinessBankUrl = (userId: string) =>
  `${baseUrlV2}/onboard/${userId}/complete`;
export const resendOnboardingMailUrl = (userId: number) =>
  `${baseUrlV2}/onboard/${userId}/resend`;
export const getOnboardingInfoUrl = (token: string) =>
  `${baseUrlV2}/onboard/${token}`;

//Banks APIS
export const getAllBanks = utilitybaseUrl + "/util/codes/fetch/bank";
export const postVerifyBankAccount = utilitybaseUrl + "/util/verify/bank";

//Organizations APIS
export const organizationEndUrl = `${baseUrl}/admin/organization/settings`;
export const organizationUrl = `${baseUrl}/admin/organization`;
export const organizationUrlV2 = `${baseUrlV2}/admin/organization`;

//Audits
export const eventLogUrl = `${baseUrl}/admin/audit`;
export const adjutorLogUrl = `${baseUrl}/admin/adjutor`;
export const auditLogAnalyticsUrl = `${baseUrl}/admin/adjutor/analytics`;

//Wallet
export const allTransactionsUrl = `${baseUrl}/admin/organization/wallet/transactions`;
export const organizationWalletUrl = `${baseUrl}/admin/organization/wallet`;

//Apps
export const organizationAppsUrl = `${baseUrl}/admin/adjutor/apps`;
export const adjutorAppTokenUrl = `${baseUrl}/admin/adjutor/token`;

//Decision Models
export const decisionModelUrl = `${baseUrl}/admin/adjutor/model`;
export const oraculiUrl = `${baseUrl}/admin/oraculi`;

//Settings
export const allApiPricingUrl = `${baseUrlV2}/admin/fees`;
export const searchAllUrl = `${baseUrl}/admin/search`;
export const teamMembersUrl = `${baseUrlV2}/admin/team`;
export const allPermissionsUrl = `${baseUrlV2}/admin/permissions`;
export const allRolesUrl = `${baseUrl}/admin/roles`;
export const accountUrl = `${baseUrl}/admin/account`;

//Utility
export const postUploadFileUrl = `${utilitybaseUrlV2}/upload/file`;
export const postUploadPhotoUrl = `${utilitybaseUrl}/util/upload/photo`; //Temporary from Web APP

// META
export const getMetaDataUrl = (code: string | number) =>
  baseUrl + `/meta/codes?code_description=${code}`;
export const getMetaDataSubUrl = (
  code: string | number,
  ref: string | number
) => baseUrl + `/meta/codes/link?code_description=${code}&ref_code=${ref}`;
