export const NORMAL_TXN_TYPE = 'normal';
export const INSTALLMENTS_TXN_TYPE = 'installments';

export const SHEKEL_CURRENCY_SYMBOL = '₪';
export const SHEKEL_CURRENCY_KEYWORD = 'ש"ח';
export const ALT_SHEKEL_CURRENCY = 'NIS';
export const SHEKEL_CURRENCY = 'ILS';

export const DOLLAR_CURRENCY_SYMBOL = '$';
export const DOLLAR_CURRENCY = 'USD';

export const SCRAPE_PROGRESS_TYPES = {
  INITIALIZING: 'INITIALIZING',
  START_SCRAPING: 'START_SCRAPING',
  LOGGING_IN: 'LOGGING_IN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  END_SCRAPING: 'END_SCRAPING',
  TERMINATING: 'TERMINATING',
};

export const LOGIN_RESULT = {
  SUCCESS: 'SUCCESS',
  INVALID_PASSWORD: 'INVALID_PASSWORD',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
};

export const NAVIGATION_ERRORS = {
  TIMEOUT: 'TIMEOUT',
  GENERIC: 'GENERIC',
};

export const GENERAL_ERROR = 'GENERAL_ERROR';

export const TRANSACTION_STATUS = {
  COMPLETED: 'COMPLETED',
  PENDING: 'PENDING',
};
