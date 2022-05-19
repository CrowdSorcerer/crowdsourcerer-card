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
          <div>
            <h2>Main screen</h2>
            <a class="nav-btn" @click=${() => this.setRoute("info")}>Info</a>
          </div>
        `
      case "info":
        return html`
          <div>
            <h2>Info screen</h2>
            <a class="nav-btn" @click=${() => this.setRoute("main")}>Back</a>
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
      .nav-btn {
        padding: 8px 12px;
        border: 1px solid var(--primary-text-color);
        border-radius: 4px;
        cursor: pointer;
      }
      .nav-btn:hover {
        background-color: var(--primary-color);
      }
    `;
  }
}
