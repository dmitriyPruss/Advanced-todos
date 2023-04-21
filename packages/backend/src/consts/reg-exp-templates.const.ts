export const titleTodoRegexpTemplate: RegExp = /^[A-Z][a-z0-9\s-]{0,18}[a-z0-9]$/;

export const descriptionTodoRegexpTemplate: RegExp = /^[A-Z][a-z0-9\s-]{0,53}[a-z0-9]$/;

export const passwordRegexpTemplate: RegExp =
  /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&_*].*)/;

export const emailRegexpTemplate: RegExp =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
