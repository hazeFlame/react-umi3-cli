export const PATTERN = {
  mobile: /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,
  password: /^[0-9a-zA-Z]{6,18}$/,
  least5Mobile: /^[0-9]{4,11}$/,
  telephone: /^[0-9]{11}$/,
  managementFeeCompany: /^([0-9]|[1][0])$/,
  fixedPrice: /^\d+(\.\d{0,2})?$/,
  fixedRatio: /^([0-9]{1}|[0-9]{1}[.][0-9]{1,2}|[1][0]|[1][0][.][0]{1,2})$/,
  sourceNo: /^(CF)(19[0-9]{2}|20([012][0-9]))((0[469]|11)([012][0-9]|30)|(0[13578]|1[02])([012][0-9]|3[01])|(02([01][0-9]|2[0-9])))\d{5}$/,
  orderNumber:/^(TD)(19[0-9]{2}|20([012][0-9]))((0[469]|11)([012][0-9]|30)|(0[13578]|1[02])([012][0-9]|3[01])|(02([01][0-9]|2[0-9])))\d{5}$/,
  waybillNumber:/^(TY)(19[0-9]{2}|20([012][0-9]))((0[469]|11)([012][0-9]|30)|(0[13578]|1[02])([012][0-9]|3[01])|(02([01][0-9]|2[0-9])))\d{5}$/,
  invoiceNumber:/^(SP)(19[0-9]{2}|20([012][0-9]))((0[469]|11)([012][0-9]|30)|(0[13578]|1[02])([012][0-9]|3[01])|(02([01][0-9]|2[0-9])))\d{5}$/,
  applyWithdrawalNumber:/^(WD)(19[0-9]{2}|20([012][0-9]))((0[469]|11)([012][0-9]|30)|(0[13578]|1[02])([012][0-9]|3[01])|(02([01][0-9]|2[0-9])))\d{5}$/,
  applyRemittanceNumber:/^(S)(19[0-9]{2}|20([012][0-9]))((0[469]|11)([012][0-9]|30)|(0[13578]|1[02])([012][0-9]|3[01])|(02([01][0-9]|2[0-9])))\d{5}$/,
  remitNumber:/^(WD)(19[0-9]{2}|20([012][0-9]))((0[469]|11)([012][0-9]|30)|(0[13578]|1[02])([012][0-9]|3[01])|(02([01][0-9]|2[0-9])))\d{5}$/,
  oilGasTradeNumber:/^(OD)(19[0-9]{2}|20([012][0-9]))((0[469]|11)([012][0-9]|30)|(0[13578]|1[02])([012][0-9]|3[01])|(02([01][0-9]|2[0-9])))\d{5}$/,
  creditCode:/^([0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}|[1-9]\d{14})$/,
  vinNo:/^[\u4e00-\u9fa5_a-zA-Z0-9_]{12,30}$/,
  transCertificateCode:/^([\u0100-\uFFFFA-Z0-9]{5})([\u0100-\uFFFFA-Z0-9]+)$/,
  vehicleNo:/^([\u0100-\uFFFF]{1,2}[A-Z]{1}|[0-9]{1,2})([A-Z0-9]{5,6}|[A-Z0-9]{4}[\u0100-\uFFFF]{1})$/,
  name:/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,
  idCard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
}

export const INIT_PARAMS = {
  page: 1,
  pageSize: 10
}

export const FORM_SELECT_LAYOUT = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 }
}

export const FORM_LAYOUT = {
  labelCol: { span: 6 },
  wrapperCol: { span: 15 }
}

export const COL_LAYOUT = {
  xl: 8, lg: 8, md: 8, sm: 8
}

export const ROW_GUTTER = {
  xl: 8, md: 8, sm: 8
}

