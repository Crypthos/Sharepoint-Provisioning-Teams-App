import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/spProvisioningTab/index.html")
@PreventIframe("/public/spProvisioningTab/personal.html")
export class SpProvisioningTab {}
  