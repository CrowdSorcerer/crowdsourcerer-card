/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement, html, TemplateResult, css, PropertyValues, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import {
  HomeAssistant,
  hasConfigOrEntityChanged,
  hasAction,
  ActionHandlerEvent,
  handleAction,
  LovelaceCardEditor,
  getLovelace,
} from 'custom-card-helpers'; // This is a community maintained npm module with common helper functions/types. https://github.com/custom-cards/custom-card-helpers

import type { BoilerplateCardConfig } from './types';
import { actionHandler } from './action-handler-directive';
import { CARD_VERSION } from './const';
import { localize } from './localize/localize';
//import { HassEntity } from "home-assistant-js-websocket";


/* eslint no-console: 0 */
console.info(
  `%c  CROWDSOURCERER-CARD \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'crowdsourcerer-card',
  name: 'Crowdsourcerer Card',
  description: 'Custom card for Crowdsourcerer integration that enables finer control over data collection',
});

@customElement('crowdsourcerer-card')
export class CrowdsourcererCard extends LitElement {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    await import('./editor');
    return document.createElement('boilerplate-card-editor');
  }

  public static getStubConfig(): Record<string, unknown> {
    return {};
  }

  // TODO Add any properities that should cause your element to re-render here
  // https://lit.dev/docs/components/properties/
  @property({ attribute: false }) public hass!: HomeAssistant;

  //@property() public stateObj!: HassEntity;

  @property({ type: Boolean }) public inDialog = false;

  @property({ type: String }) public route = "main";

  @state() private config!: BoilerplateCardConfig;


  // https://lit.dev/docs/components/properties/#accessors-custom
  public setConfig(config: BoilerplateCardConfig): void {
    // TODO Check for required fields and that they are of the proper format
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }

    if (config.test_gui) {
      getLovelace().setEditMode(true);
    }

    this.config = {
      name: 'Crowdsourcerer Data Collector',
      //entity: 'sensor.home',
      ...config,
    };
  }

  // https://lit.dev/docs/components/lifecycle/#reactive-update-cycle-performing
  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.config) {
      return false;
    }

    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  // https://lit.dev/docs/components/rendering/
  protected render(): TemplateResult | void {
    // TODO Check for stateObj or other necessary things and render a warning if missing
    if (this.config.show_warning) {
      return this._showWarning(localize('common.show_warning'));
    }

    if (this.config.show_error) {
      return this._showError(localize('common.show_error'));
    }

    //return html`
    //  <ha-card
    //    .header=${this.config.name}
    //    @action=${this._handleAction}
    //    .actionHandler=${actionHandler({
    //      hasHold: hasAction(this.config.hold_action),
    //      hasDoubleClick: hasAction(this.config.double_tap_action),
    //    })}
    //    tabindex="0"
    //    .label=${`Boilerplate: ${this.config.entity || 'No Entity Defined'}`}
    //  >
    //  </ha-card>
    //`;

    return html`
      <ha-card
        .header=${this.config.name}
      >
        <div class="card-content">
          <p>${this.config.entity}</p>
          <div>${this.getPage()}</div>
        </div>
      </ha-card>
    `;
  }


  private getPage(): TemplateResult {

    switch (this.route) {
      case "main":
        return html`
          <div class="view-content">
            <h2>Main screen</h2>

              <h3>Data collection is [enabled/disabled]</h3>

              <div class="stat-list">
                <p class="stat-label">Size of last sent package:</p>
                <p class="stat-value">OOOO</p>

                <p class="stat-label">Total size of sent packages:</p>
                <p class="stat-value">OOOO</p>

                <br style="margin-bottom: 16px;"/>

                <p class="stat-label">Date of last sent package:</p>
                <p class="stat-value">YYYY/MM/DD</p>

                <p class="stat-label">Sending data since:</p>
                <p class="stat-value">YYYY/MM/DD</p>
              </div>

              <div class="nav-btn-list">
                <a class="nav-btn" @click=${() => this.setRoute("collection")}>Collection Settings</a>
                <a class="nav-btn" @click=${() => this.setRoute("data")}>Manage Data</a>
                <a class="nav-btn" @click=${() => this.setRoute("terms")}>Terms and Conditions</a>
              </div>
          </div>
        `
      case "data":
        return html`
          <div class="view-content">
            <h2>Manage Data</h2>

            <h3>Your unique ID is:</h3>
            <h2>OOOO-OOOO-OOOO-OOOO</h2>
            <h3>Keep this ID in a safe place, if the Crowdsourcerer integration is uninstalled it is the only way we can delete your data if requested</h3>

            <div class="nav-btn-list">
              <a class="nav-btn" @click=${() => this.setRoute("main")}>Back</a>
              <a class="nav-btn" @click=${() => this.setRoute("delete")}>Delete Data</a>
            </div>
          </div>
        `
      case "delete":
        return html`
          <div class="view-content">
            <h2>Delete Data</h2>

            <h3>You may request to have all previously sent data deleted from our storage.</h3>
            <h3>Proceed?</h3>

            <div class="nav-btn-list">
              <a class="nav-btn delete-data-btn" >Yes, delete my data</a>
              <a class="nav-btn" @click=${() => this.setRoute("data")}>Cancel</a>
            </div>
          </div>
        `
      case "terms":
        return html`
          <div class="view-content">
            <h2>Terms and Conditions</h2>

            <h3>By using the Crowdsourcerer integration and allowing data collection, you consent to the following terms and conditions:</h3>

            <p>...</p>

            <div class="nav-btn-list">
              <a class="nav-btn" @click=${() => this.setRoute("main")}>Back</a>
            </div>
          </div>
        `
      default:
        return html`
          <div>
            <h2>Something went wrong...</h2>
            <a class="nav-btn" @click=${() => this.setRoute("main")}>Return to main screen</a>
          </div>
        `
    }
  }


  private setRoute(route: string): void {
    this.route = route;
  }

  private _handleAction(ev: ActionHandlerEvent): void {
    if (this.hass && this.config && ev.detail.action) {
      handleAction(this, this.hass, this.config, ev.detail.action);
    }
  }

  private _showWarning(warning: string): TemplateResult {
    return html` <hui-warning>${warning}</hui-warning> `;
  }

  private _showError(error: string): TemplateResult {
    const errorCard = document.createElement('hui-error-card');
    errorCard.setConfig({
      type: 'error',
      error,
      origConfig: this.config,
    });

    return html` ${errorCard} `;
  }

  // https://lit.dev/docs/components/styles/
  static get styles(): CSSResultGroup {
    return css`
      .view-content {
        display: flex;
        align-content: center;
        flex-direction: column;
        text-align: center;
      }

      .stat-list {
        padding: 16px;
      }

      .stat-list > .stat-label {
        display: inline-block;
        width: 69%;
        text-align: left;
        margin: 0;
      }

      .stat-list > .stat-value {
        display: inline-block;
        width: 29%;
        text-align: right;
        margin: 0;
      }

      .nav-btn-list {
        width: 60%;
        margin: auto;
      }

      .nav-btn {
        padding: 8px 12px;
        border: 1px solid var(--primary-text-color);
        border-radius: 4px;
        cursor: pointer;
        text-align: center;
        display: inline-block;
      }

      .nav-btn-list > .nav-btn {
        width: 100%;
        margin-bottom: 8px;
      }

      .nav-btn:hover {
        background-color: var(--primary-color);
      }

      .nav-btn.delete-data-btn:hover {
        background-color: red;
      }
    `;
  }
}
