import { Account } from ".";

import { core } from "api";

export const accountService = {
  create: (body: Account) => core.post<null>("account/register", body)
};
