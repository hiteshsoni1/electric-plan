import { GREEN, SOLAR, API_URL } from '../constant';

const transformTags = ({energy_type, solar_compatible, green_options}) => {
  const tags = [];
  tags.push(energy_type);

  if (solar_compatible) {
    tags.push(SOLAR);
  }

  if (green_options) {
    tags.push(GREEN);
  }

  return tags;
}

const transformPlan = ({
  id,
  plan_name,
  energy_type,
  contract_length,
  provider,
  features,
  solar_compatible,
  green_options,
  terms_condition,
  plan_document,
  view_benefit,
  view_exit_fee,
  dmo_percentage,
  dmo_content,
  plan_name_below_data,
  payment_options,
  expected_monthly_bill_amount,
  expected_annually_bill_amount
}) => {
  return {
    id,
    planName: plan_name || '',
    contractLength: contract_length || '',
    provider : {
      name: provider?.name || '',
      logo: provider?.logo || '',
      phone: provider?.phone || '',
      whyUs: provider?.why_us || '',
    },
    planTC: provider.eic || '',
    tags: transformTags({energy_type, solar_compatible, green_options}) || [],
    features: features || '',
    termCondition: terms_condition || '',
    planDocument: plan_document || '',
    benefit: view_benefit || '',
    exitFee: view_exit_fee || '',
    dmoContent: dmo_content?.Ausgrid || '',
    dmoPercentage: dmo_percentage?.Ausgrid || '',
    planReference: plan_name_below_data || '',
    paymentOptions: payment_options || '',
    monthlyBillAmount: expected_monthly_bill_amount || '',
    yearlyBillAmount: expected_annually_bill_amount || ''
  }
}

export const transforAPIData = (url, data) => {
  if (url === API_URL.ELECTRIC_PLAN) {
    return data.map((plan) => transformPlan(plan));
  }
  return data;
}
